#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HausEdgeStack } from '../lib/hausedge-stack';

const app = new cdk.App();

// Main infrastructure stack
new HausEdgeStack(app, 'HausEdgeCapital', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1', // Required for CloudFront certificates
  },
  domainName: 'hausedgecapital.com',
  description: 'Haus Edge Capital - Static Website with Daily Blog Generation',
});

app.synth();
