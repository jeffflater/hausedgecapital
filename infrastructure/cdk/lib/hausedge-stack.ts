import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as events from 'aws-cdk-lib/aws-events';
import * as eventsTargets from 'aws-cdk-lib/aws-events-targets';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

interface HausEdgeStackProps extends cdk.StackProps {
  domainName: string;
}

export class HausEdgeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: HausEdgeStackProps) {
    super(scope, id, props);

    const { domainName } = props;

    // ============================================
    // S3 Bucket for Static Website
    // ============================================
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: domainName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // ============================================
    // Route 53 Hosted Zone (for custom nameservers on Namecheap)
    // ============================================
    const hostedZone = new route53.HostedZone(this, 'HostedZone', {
      zoneName: domainName,
    });

    // Output the nameservers for Namecheap configuration
    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', hostedZone.hostedZoneNameServers || []),
      description: 'Configure these nameservers in Namecheap',
    });

    // ============================================
    // ACM Certificate (SSL/TLS)
    // ============================================
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // ============================================
    // CloudFront Distribution
    // ============================================
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
      },
      domainNames: [domainName, `www.${domainName}`],
      certificate: certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
    });

    // ============================================
    // Route 53 DNS Records
    // ============================================
    new route53.ARecord(this, 'AliasRecord', {
      zone: hostedZone,
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.ARecord(this, 'WwwAliasRecord', {
      zone: hostedZone,
      recordName: `www.${domainName}`,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    // ============================================
    // Secrets Manager for API Keys
    // ============================================
    const openaiSecret = new secretsmanager.Secret(this, 'OpenAIApiKey', {
      secretName: 'hausedge/openai-api-key',
      description: 'OpenAI API key for blog generation',
    });

    const githubSecret = new secretsmanager.Secret(this, 'GitHubToken', {
      secretName: 'hausedge/github-token',
      description: 'GitHub personal access token for committing blog posts',
    });

    // ============================================
    // Lambda Function for Blog Post Generation
    // ============================================
    const blogGeneratorLambda = new nodejs.NodejsFunction(this, 'BlogGenerator', {
      functionName: 'hausedge-blog-generator',
      entry: path.join(__dirname, '../../lambda/index.ts'),
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: cdk.Duration.minutes(2),
      memorySize: 512,
      environment: {
        OPENAI_SECRET_ARN: openaiSecret.secretArn,
        GITHUB_SECRET_ARN: githubSecret.secretArn,
        GITHUB_REPO: 'jeffflater/hausedgecapital', // Update this with actual repo
        GITHUB_BRANCH: 'main',
      },
      bundling: {
        minify: true,
        sourceMap: true,
        externalModules: ['@aws-sdk/*'],
      },
    });

    // Grant Lambda access to secrets
    openaiSecret.grantRead(blogGeneratorLambda);
    githubSecret.grantRead(blogGeneratorLambda);

    // ============================================
    // EventBridge Rule (Daily Trigger at 6 AM UTC)
    // ============================================
    const dailyRule = new events.Rule(this, 'DailyBlogRule', {
      ruleName: 'hausedge-daily-blog-trigger',
      description: 'Triggers blog post generation daily at 6 AM UTC',
      schedule: events.Schedule.cron({
        minute: '0',
        hour: '6',
        day: '*',
        month: '*',
        year: '*',
      }),
    });

    dailyRule.addTarget(new eventsTargets.LambdaFunction(blogGeneratorLambda));

    // ============================================
    // IAM User for GitHub Actions Deployment
    // ============================================
    const deploymentUser = new iam.User(this, 'DeploymentUser', {
      userName: 'hausedge-github-actions',
    });

    // S3 deployment permissions
    websiteBucket.grantReadWrite(deploymentUser);
    websiteBucket.grantDelete(deploymentUser);

    // CloudFront invalidation permissions
    deploymentUser.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['cloudfront:CreateInvalidation'],
      resources: [`arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`],
    }));

    // Create access key for GitHub Actions
    const accessKey = new iam.AccessKey(this, 'DeploymentAccessKey', {
      user: deploymentUser,
    });

    // ============================================
    // Outputs
    // ============================================
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${domainName}`,
      description: 'Website URL',
    });

    new cdk.CfnOutput(this, 'S3BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 bucket name for deployment',
    });

    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID for cache invalidation',
    });

    new cdk.CfnOutput(this, 'CloudFrontDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront domain name',
    });

    new cdk.CfnOutput(this, 'LambdaFunctionName', {
      value: blogGeneratorLambda.functionName,
      description: 'Blog generator Lambda function name',
    });

    new cdk.CfnOutput(this, 'DeploymentAccessKeyId', {
      value: accessKey.accessKeyId,
      description: 'Access Key ID for GitHub Actions (add to GitHub Secrets)',
    });

    new cdk.CfnOutput(this, 'DeploymentSecretAccessKey', {
      value: accessKey.secretAccessKey.unsafeUnwrap(),
      description: 'Secret Access Key for GitHub Actions (add to GitHub Secrets)',
    });

    new cdk.CfnOutput(this, 'OpenAISecretArn', {
      value: openaiSecret.secretArn,
      description: 'ARN for OpenAI API key secret - add your key via AWS Console',
    });

    new cdk.CfnOutput(this, 'GitHubSecretArn', {
      value: githubSecret.secretArn,
      description: 'ARN for GitHub token secret - add your token via AWS Console',
    });
  }
}
