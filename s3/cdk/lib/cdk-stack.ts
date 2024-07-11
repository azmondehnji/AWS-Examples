import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create a new bucket
    
    new s3.Bucket(this, 'my-new-aws-s3-bucket-az232',{
      versioned:true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects:true,
    });
  }
}
