---
layout: default
title: aws.s3
tags: command aws.s3
comments: true
---


S3, or Simple Storage Service, is a cloud service provided by Amazon AWS.  One can utilize such service to manage files
and content in the cloud.  Nexial supports the use of S3 via various automation capabilities (below) such as move, copy,
delete, list, etc.


#### Connection Setup
Similar to other command collections in Nexial, the "aws.s3" command collection utilize a profile-based approach to 
connect to the target S3 location.  A profile is a collection of data variables that share the same prefix.  In this 
case, below are the data variables that make up a "s3" profile:

<a name="s3profile"/>

|data variable            |value                             | note                                                    |
|-------------------------|----------------------------------|---------------------------------------------------------|
|`<profile>.aws.accessKey`|The access key for a S3 connection| For more information, consult <a href="https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/" class="external-link" target="_nexial_external">AWS online documentation</a>|
|`<profile>.aws.secretKey`|The secret key for a S3 connection| More information available on <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys" class="external-link" target="_nexial_external">AWS online documentation</a>|
|`<profile>.aws.region`   |The S3 region to connect to       | <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region" class="external-link" target="_nexial_external">Available AWS S3 regions</a>|

<br/>

For example, suppose we have a "profile" named as `projectX`:<br/>
![profile](image/index_01.png)

`projectX` will be used as a "profile" throughout the "aws.s3" commands for S3-related automation.


{% include _remote_output.md %}


The "aws.s3" command type represents a series of commands regarding AWS S3.


### Available Commands
- [`assertNotPresent(profile,remotePath)`](assertNotPresent(profile,remotePath))
- [`assertPresent(profile,remotePath)`](assertPresent(profile,remotePath))
- [`copyFrom(var,profile,remote,local)`](copyFrom(var,profile,remote,local))
- [`copyTo(var,profile,local,target)`](copyTo(var,profile,local,target))
- [`delete(var,profile,remotePath)`](delete(var,profile,remotePath))
- [`list(var,profile,remotePath)`](list(var,profile,remotePath))
- [`moveFrom(var,profile,remote,local)`](moveFrom(var,profile,remote,local))
- [`moveTo(var,profile,local,target)`](moveTo(var,profile,local,target))
