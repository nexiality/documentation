---
layout: default
title: Installing MinIO
parent: User Guide
tags: installation install minio userguide
comments: true
---


### Need for MinIO
There are many cases where AWS services are not exposed to any other environment except _Production_. In such cases it 
becomes difficult for the user to write/test/verify their automation scripts in local. Another use case could be the one
where AWS services are not used at all initially but need some proof-of-concept that requires a working AWS services 
like S3 as cloud storage.

[MinIO](https://minio.io) can be used to mock the AWS S3 service in local. 

### Download Binary & Start Server
#### Linux
  Download the MinIO binary for linux machine & set the binary file in executable mode. Once set, can directly start the 
  MinIO server using below commands.
           
    # Download binary
    wget https://dl.min.io/server/minio/release/linux-amd64/minio
          
    # Set to executable mode 
    chmod +x minio
          
    # Start server
    ./minio server /data
  
#### macOs
  
    # Install using homebrew
    brew install minio/stable/minio
      
    # Start server
    minio server /data
      
#### Windows
  Download binary from thier [latest official release](https://dl.min.io/server/minio/release/windows-amd64/minio.exe)
  
    # Start server
    minio.exe server D:\data
      
#### Docker
  
    docker pull minio/minio
    docker run -p 9000:9000 minio/minio server /data
  
**Note:** `/data` (`D:\data`) is the root directory for MinIO. All the buckets and files will be created into this 
space only.
  
Default admin User id/AccessKey:  `minioadmin` and Password/SecretKey: `minioadmin`
  
The service will be available on `http://localhost:9000` or `http://${hostname}:9000`. Port `9000` is default port.
However, you can configure it using `./minio server /data --address ":9000" `
  
### Access on Browser
1. Open up your browser and goto [`http://localhost:9000`](http://localhost:9000)
2. Enter the `minioadmin` as access key and `minioadmin` as secret key to login.
3. Now, you can create bucket, upload and delete files.
  
For complete details and documentation on MinIO you may refer to their [official documentation](https://docs.min.io/)
  
### Using Nexial with MinIO
The purpose of this document is to help the user to work in AWS like local environment. In Nexial, there is nothing
specific to MinIO or to any other AWS alternatives. However some settings does require to alter the default behaviour 
of nexial.
  
By default, AWS S3 related features in nexial tries to connect on `*.amazonaws.com` with your configurations. But 
since now you are running AWS locally, you may now need to connect to your local url. 

As of today, nexial have dependency of AWS S3 for [`aws.s3`](../commands/aws.s3) commands and 
[`nexial.outputToCloud`](../systemvars/#nexial.outputToCloud) feature. To mention the local endpoint you have to use 
`<profile>.aws.url=http://localhost:9000` in addition to [`aws.s3` connection setup](../commands/aws.s3/#connection-setup)
  