# Haus Edge Capital - AWS Infrastructure

This directory contains the AWS CDK infrastructure for deploying Haus Edge Capital.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Namecheap DNS                               │
│              (Custom Nameservers → Route 53)                    │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                      Route 53 Hosted Zone                       │
│                    (hausedgecapital.com)                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│                     CloudFront CDN                              │
│               (HTTPS, Caching, Edge Locations)                  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
          ┌───────────▼───────────┐
          │      S3 Bucket        │
          │   (Static Website)    │
          │   - HTML/CSS/JS       │
          │   - Images            │
          └───────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                  Daily Blog Generation Flow                      │
└─────────────────────────────────────────────────────────────────┘
          │
   ┌──────▼──────┐     ┌──────────────┐     ┌─────────────────┐
   │ EventBridge │────▶│    Lambda    │────▶│  GitHub API     │
   │ (6 AM UTC)  │     │  + OpenAI    │     │  (Commit Post)  │
   └─────────────┘     └──────────────┘     └────────┬────────┘
                                                      │
                                            ┌─────────▼─────────┐
                                            │  GitHub Actions   │
                                            │  (Auto Deploy)    │
                                            └───────────────────┘
```

## Prerequisites

1. **AWS CLI** installed and configured
2. **Node.js 20+** installed
3. **AWS CDK** installed globally: `npm install -g aws-cdk`
4. **AWS Profile** `ensomniamedia` configured

### Configure AWS Profile

```bash
# Add the ensomniamedia profile to your AWS credentials
aws configure --profile ensomniamedia

# Enter your AWS Access Key ID, Secret Access Key, and set region to us-east-1
```

Verify the profile:
```bash
aws sts get-caller-identity --profile ensomniamedia
```

## Deployment Steps

### Step 1: Install Dependencies

```bash
cd infrastructure/cdk
npm install

cd ../lambda
npm install
```

### Step 2: Bootstrap CDK (First Time Only)

```bash
cd infrastructure/cdk
npm run bootstrap
```

### Step 3: Deploy Infrastructure

```bash
npm run deploy
```

This will output:
- **NameServers** - Configure these in Namecheap
- **S3BucketName** - For GitHub Actions
- **CloudFrontDistributionId** - For cache invalidation
- **DeploymentAccessKeyId** - For GitHub Secrets
- **DeploymentSecretAccessKey** - For GitHub Secrets
- **OpenAISecretArn** - ARN to store your OpenAI API key
- **GitHubSecretArn** - ARN to store your GitHub token

### Step 4: Configure Secrets in AWS

After deployment, add your API keys to Secrets Manager:

```bash
# Add OpenAI API key
aws secretsmanager put-secret-value \
  --secret-id hausedge/openai-api-key \
  --secret-string "sk-your-openai-api-key" \
  --profile ensomniamedia

# Add GitHub Personal Access Token (needs repo write access)
aws secretsmanager put-secret-value \
  --secret-id hausedge/github-token \
  --secret-string "ghp_your-github-token" \
  --profile ensomniamedia
```

### Step 5: Configure Namecheap DNS

1. Log in to Namecheap
2. Go to **Domain List** → **Manage** for hausedgecapital.com
3. Under **Nameservers**, select **Custom DNS**
4. Enter the 4 nameservers from the CDK output (e.g.):
   ```
   ns-1234.awsdns-12.org
   ns-567.awsdns-34.com
   ns-890.awsdns-56.co.uk
   ns-1011.awsdns-78.net
   ```
5. Click the green checkmark to save
6. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 6: Configure GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

| Secret Name | Value |
|------------|-------|
| `AWS_ACCESS_KEY_ID` | DeploymentAccessKeyId from CDK output |
| `AWS_SECRET_ACCESS_KEY` | DeploymentSecretAccessKey from CDK output |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFrontDistributionId from CDK output |

### Step 7: Initial Website Deployment

Push your code to trigger the GitHub Actions deployment:

```bash
git add .
git commit -m "Deploy to AWS"
git push origin main
```

## Daily Blog Generation

The Lambda function runs automatically every day at **6 AM UTC** and:

1. Determines the day of the week
2. Selects the appropriate theme (see schedule below)
3. Uses OpenAI GPT-4 to generate a unique, high-quality blog post
4. Commits the new post to the GitHub repository
5. GitHub Actions automatically rebuilds and deploys the site

### 7-Day Topic Schedule

| Day | Theme | Content Focus |
|-----|-------|---------------|
| Monday | Beginner Crypto Education | What is / How to / Beginner guides |
| Tuesday | Trading Strategy Deep Dives | Strategy setups, how to trade |
| Wednesday | Risk Management & Psychology | Risk, stop losses, trading psychology |
| Thursday | Market Structure & Cycles | Market structure, support/resistance |
| Friday | Capital Growth & Long-Term | Long-term investing, compounding |
| Saturday | Lending Education | Crypto lending explained (educational) |
| Sunday | Evergreen SEO | FAQs, comparisons, glossaries |

### Manual Blog Generation

To trigger a blog post manually:

```bash
aws lambda invoke \
  --function-name hausedge-blog-generator \
  --profile ensomniamedia \
  /dev/stdout
```

## Useful Commands

```bash
# View deployed resources
npm run diff

# Synthesize CloudFormation template
npm run synth

# Destroy all resources (careful!)
npm run destroy
```

## Costs

Estimated monthly costs (with moderate traffic):
- **S3**: ~$0.50-2.00
- **CloudFront**: ~$1.00-5.00
- **Route 53**: ~$0.50
- **Lambda**: ~$0.00 (free tier covers it)
- **Secrets Manager**: ~$0.80
- **OpenAI API**: Variable (depends on usage, ~$0.10-0.50/post)

**Total: ~$5-15/month** for a typical static site with daily blog generation.

## Troubleshooting

### DNS Not Working
- Verify nameservers are correctly set in Namecheap
- Check Route 53 hosted zone has the correct records
- Use `dig hausedgecapital.com` to verify DNS resolution

### SSL Certificate Issues
- Certificate validation requires DNS to be working
- Check ACM console for certificate status
- May need to wait for DNS propagation

### Lambda Errors
- Check CloudWatch Logs: `/aws/lambda/hausedge-blog-generator`
- Verify secrets are correctly stored in Secrets Manager
- Test the function manually with `aws lambda invoke`

### GitHub Actions Failing
- Verify AWS credentials in GitHub Secrets
- Check S3 bucket name matches
- Verify IAM user has correct permissions
