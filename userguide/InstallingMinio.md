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

-----

### Download MinIO Binary & Start Server
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
location only.

Default admin User id/access key:  `minioadmin` and password/secret key: `minioadmin`
  
The service will be available on `http://localhost:9000` or `http://${hostname}:9000`. Port `9000` is default port.
However, you can configure it using `./minio server /data --address ":9000"`

-----

### Access on Browser
1. Open up your browser and goto [`http://localhost:9000`](http://localhost:9000)
2. Enter the `minioadmin` as access key and `minioadmin` as secret key to login.
3. Now, you can create bucket, upload and delete files.
  
For complete details and documentation on MinIO you may refer to their [official documentation](https://docs.min.io/)

-----

### Using Nexial with MinIO
While MinIO does not have feature parity with AWS S3 (which is also a moving target since AWS continues to add new 
features to S3 constantly), it will suffice as a S3 alternative for Nexial's Output-to-Cloud feature and it is 
compatible with Nexial's [`aws.s3`](../commands/aws.s3) commands. In addition, Nexial doesn't MinIO-specific code 
either. Ths means that another S3-compatible alternative will most likely work as well. 

Since MinIO is not S3, we will need some additional configuration parameters.  By default, S3 conductivities are 
pinned to `*.amazonaws.com` hosts; differ by region. However for localized alternatives like MinIO, there is no region
setting (hence local). Instead one would need to configure the location of the localized service. By default, MinIO
runs on port 9000. This means that one would need to specify an additional configuration entry, in addition to the 
required [`aws.s3` connection setup](../commands/aws.s3/#connection-setup) , like this:

```
<profile>.aws.url=http://<minio-server>:9000
```

-----

### Step-by-Step MinIO Integration Guide
[_needs cleaning up..._]

##### **setup-server** 
1. Download MinIO (see [above](#download-minio-binary--start-server)) 
   - minio is the server binary, and mc is the client binary.
2. Create startup script to ease the start of minio server process
   ```batch
    @echo off
    set MINIO_ACCESS_KEY=...
    set MINIO_SECRET_KEY=...
    minio server --address ":80" E:\minio
   ```
   Or, on *NIX:
   ```bash
    export MINIO_ACCESS_KEY=...
    export MINIO_SECRET_KEY=...
    minio server --address ":80" /minio/data
   ```
3. Run the start-up batch file. Confirm settings on console:
   ```log
    C:\tools\minio>run.cmd
    Endpoint:  http://xxx.xxx.xxx.xxx http://127.0.0.1
    AccessKey: ... ... ...
    SecretKey: ... ... ...
    
    Browser Access:
       http://xxx.xxx.xxx.xxx  http://127.0.0.1
    
    Command-line Access: https://docs.min.io/docs/minio-client-quickstart-guide
       $ mc.exe config host add myminio http://xxx.xxx.xxx.xxx [access-key] [secret-key]
    
    Object API (Amazon S3 compatible):
       Go:         https://docs.min.io/docs/golang-client-quickstart-guide
       Java:       https://docs.min.io/docs/java-client-quickstart-guide
       Python:     https://docs.min.io/docs/python-client-quickstart-guide
       JavaScript: https://docs.min.io/docs/javascript-client-quickstart-guide
       .NET:       https://docs.min.io/docs/dotnet-client-quickstart-guide
   ```
4. Optionally, one can set up MinIO as a Windows service:
   - https://github.com/minio/minio-service/tree/master/windows

##### **configure-client**
1. configure MinIO client:
   ```
   mc config host add [alias] http://xxx.xxx.xxx.xxx [access-key] [secret-key]  
   ```
   After this we can refer to the same MinIO host via the `alias`.

##### **bucket-management** 
1. create bucket via MinIO client:
   ```
   mc mb [alias]/[bucket-name]
   ```
2. confirm that the bucket is created:
   ```
   mc ls [alias]
   ```
3. assign "public" access to these buckets (as many as needed), path is optional:
   ```
   mc policy -r set public [alias]/[bucket-name]/[path?]
   ```
4. confirm that the permission is set to desired effect:
   ```
   mc policy list [alias]/[bucket-name]
   ```
   
   _sample output_:
   ```log
   > mc policy list [alias]/[bucket-name]
   [bucket-name]/[path?]* => readwrite
   ```
5. Repeat step 1-4 as needed. After this, MinIO is ready to be used as a S3 alternative for the 
   [Nexial Output-to-Cloud](../systemvars/index.html#nexial.outputToCloud) feature.
6. Ideally, one should have the following structure completed in order to effectively utilize Nexial's Output-to-Cloud 
   and Execution Dashboard features:
   ```
   [bucket-name]/
        +----- nexial-artifact/
                    +----- project1/
                    +----- project2/
                    +----- ... ... .../
        +----- nexial-dashboard/
                    +----- resources/   (clone from https://github.com/nexiality/execution-dashboard/resources)
                    +----- project1/
                    +----- project2/
                    +----- ... ... .../
   ```

##### **webhook-setup**
On Jenkins:
1. Install a Jenkins plugin called [Generic Webhook Trigger](https://plugins.jenkins.io/generic-webhook-trigger/).
2. From Jenkins configuration page (http://Jenkins-Host/configure), look for a section named "Generic Webhook Trigger".
3. As needed, add client whitelisting to limit access:
   1. Click `Whitelist enabled`
   2. Click the `Add` button
   3. Specify IP, CIDR or IP range to limit access
   4. If desired, apply additional security measure via HMAC by clicking on the "Verify with HMAC" checkbox and 
      complete the HMAC form accordingly
   5. Click `Save` button at the bottom of the page.
   6. More details here: https://plugins.jenkins.io/generic-webhook-trigger/
4. Create a new Jenkins job
5. From the job page, under the "Build Triggers" section, enable "Generic Webhook Trigger"
6. Extract pertinent information from the webhook request payload. Under the "Post content parameters":
   1. For "Variable", enter `s3Key`
   2. For "Expression", enter `$.Key` as the "JSONPath"
   3. Enable "JSONPath"
7. Create another "Post content parameters" by click on the "Add" button:
   1. For "Variable", enter `s3AccessKey`
   2. For "Expression", enter `$.Records[0].requestParameters.accessKey` as the "JSONPath"
   3. Enable "JSONPath"
7. To limit and to control access, add an unique token to separate the webhook traffic to this job from other 
   "webhook-enabled" jobs:
   1. Under the "Token" section, add an unique token for this job. Note down this for later use (`webhook_token`)
8. For debugging purpose, enable "Print post content" and "Print contributed variables"
9. This job essentially invoke a specific Nexial execution to (re)generate Nexial Dashboard for a project.
   ```batch
   @echo off
   set NEXIAL_HOME=C:\projects\nexial-core
   set PROJECT_HOME=C:\projects\execution-dashboard\execution-summary
   set NEXIAL_OUTPUT=%WORKSPACE%\output
   set POST_EXEC=%NEXIAL_OUTPUT%\postexec.cmd

   cd /d %NEXIAL_HOME%\bin

   nexial.cmd -script %PROJECT_HOME%\artifact\script\execution-summary.xlsx ^
       -override nexial.enableEmail=false ^
       -override nexial.postExecEnv=%POST_EXEC% ^ 
       -override execdash.aws.accessKey=... ^
       -override execdash.aws.secretKey=... ^
       -override summarySubdir=nexial-dashboard ^
       -override s3AccessKey=%s3AccessKey% ^
       -override s3Key=%sKey%
   ```

On MinIO:
1. Use MinIO client to enable "notification via webhook":
   ```
   mc admin config set [alias] notify_webhook:1 queue_limit="0" auth_token="[webhook_token]" endpoint="http://[JENKINS_URL]/generic-webhook/invoke"
   ```
   The `[webhook_token]` should be the same value used in the Jenkins setup above (Step 7). For the webhook notification 
   to take effect, restart the MinIO service:
   ```
   mc admin service restart [alias]
   ```
   For Windows, a manual restart is required.
2. Register the bucket to the webhook notification:
   ```
   mc event add [alias[/[bucket-name]/[path?] arn:minio:sqs::1:webhook --event put --suffix execution-detail.json
   ```
   This will register a webhook notification event when the file `execution-detail.json` is added to the specified 
   bucket/path. The `execution-detail.json` file is generated by Nexial at the end of an execution.
