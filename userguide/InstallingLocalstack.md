---
layout: default
title: Installing Localstack
parent: User Guide
tags: installation install localstack userguide
comments: true
---


### Need for Localstack 
There are many cases where AWS services are not exposed to any other environment except _Production_. In such cases it 
becomes difficult for the user to write/test/verify their automation scripts in local. Another use case could be the one
where AWS services are not used at all initially but need some proof-of-concept that requires a working AWS services 
like SQS messaging.

[Loclastack](https://github.com/localstack/localstack) can be used to mock the AWS S3 and SQS service in local. 

### Install & Run Server
#### Docker(Recommended)
  Create a file in an empty directory named `docker-compose.yml` and copy the below content into that and save.
          
      version: '2.1'
      
      services:
        localstack:
          container_name: "${LOCALSTACK_DOCKER_NAME-localstack_main}"
          image: localstack/localstack
          ports:
            - "4566-4599:4566-4599"
            - "${PORT_WEB_UI-8080}:${PORT_WEB_UI-8080}"
          environment:
            - SERVICES=${SERVICES- }
            - DEBUG=${DEBUG- }
            - DATA_DIR=${DATA_DIR- }
            - PORT_WEB_UI=${PORT_WEB_UI- }
            - LAMBDA_EXECUTOR=${LAMBDA_EXECUTOR- }
            - KINESIS_ERROR_PROBABILITY=${KINESIS_ERROR_PROBABILITY- }
            - DOCKER_HOST=unix:///var/run/docker.sock
            - HOST_TMP_FOLDER=${TMPDIR}
          volumes:
            - "${TMPDIR:-/tmp/localstack}:/tmp/localstack"
            - "/var/run/docker.sock:/var/run/docker.sock"
      
    Navigate to the directory where `docker-compose.yml` is present and Run localstack using the command `docker-compose up`
    
    **Note:** 
    - On linux machine, you may require to use with `sudo`. 
    - Change the volumes directory path in `docker-compose.yml as per your local directory path. 
    - To find default ports used for AWS service in `localstack` you can see the console output of `docker-compose up`
     command.
     
#### Install Using `pip`

  To install `localstack` using python's `pip` installer, use following:
  
    pip install localstack
    
  **Note:** 
      - Don not run this command as `root` or `sudo` user. To know more on this, refer their 
      [official documentation](https://github.com/localstack/localstack). 

### install `awslocal` 
  To manage localstack there is no UI or dashboard present. So we need either AWS CLI or `awslocal` CLI. AWS CLI will 
  require one additional parameter `--endpoint-url` always while connecting to localstack. `awslocal` is a thin wrapper 
  over `aws cli` and it will connect to local services by default. So for the ease of use, we are going to show 
  `awslocal` example here.  
   
  To install use `pip install awscli-local`
  
  After install, you need to configure `aws` profile. To do this create a directory `.aws` in your user home directory.
  Inside this directory create two files `config` and `credentials`. 
  
  Write following text into `credentials` file:
  
      [default]
      aws_access_key_id = <any-random-access-key>
      aws_secret_access_key = <any-random-secret-key>
        
   Write following text into `config` file:
     
      [profile default]
      region = us-east-1

   
  To run any `aws` command using standard `aws cli` you have to use like following example: 
   
      aws --endpoint-url=http://localhost:4576 sqs create-queue --queue-name my_queue_name
   
  But with `awslocal`, you can do this way:
   
      awslocal sqs create-queue --queue-name my_queue_name
       
  
  **Note:** If you are comfortable with `aws` cli by passing one extra argument `--endpoint-url` every time then you 
  can skip this step.
  
### Access key and Secret Key
  `localstack` does not provide any authentication mechanism and thus it also does not validate any credentials passed 
  during execution. However, `aws cli` or `awslocal` may require the credentials to be present in your config file. You 
  can provide any random value in above `~/.aws/credential` file. 
  
### Using Nexial with localstack
  The purpose of this document is to help the user to work in AWS like local environment. In Nexial, there is nothing
  specific to localstack or to any other AWS alternatives. However some settings does require to alter the default behaviour 
  of nexial.
  
  By default, AWS SQS related features in nexial tries to connect on `*.amazonaws.com` with your configurations. But 
  since you are running AWS locally, you may now need to connect to your local url. 
  
  As of today, nexial have dependency of AWS SQS for [`aws.sqs`](../commands/aws.s3) commands. To mention the local 
  endpoint you have to use `<profile>.aws.url=http://localhost:4576` in addition to 
  [`aws.sqs` connection setup](../commands/aws.sqs/#connection-setup)
  
  
For complete details and documentation on localstack you may refer to their [official documentation](https://github.com/localstack/localstack)
  
   
   
  
  
