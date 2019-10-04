---
layout: default
title: sms
tags: command sms texting phone
comments: true
---


### Description
Automate the process of sending 
<a href="https://en.wikipedia.org/wiki/SMS" class="external-link" target="_nexial_link">SMS</a> to one or more mobile
numbers. Note that a [one-time setup](#one-time-setup) is required in order to enable the cloud-based SMS messaging 
capability. This also means that while Nexial does not incur any cost to automate SMS messaging, the underlying cloud 
service can likely incur some costs to utilize the feature.

Future enhancement to this command group might include receiving SMS messages as well. Any 
<a href="https://github.com/nexiality/nexial-core/issues/new/choose" class="external-link" target="nexial_target">
comment or feature requests</a> are most welcome!


### One-time setup
Nexial uses <a href="https://aws.amazon.com/sns/" class="external-link" target="nexial_external">AWS SNS</a> as the 
underlying SMS service. Hence, the following one-time setup is required to enable the appropriate AWS configuration. 
Note that AWS SNS is not free, although for a very small amount of monthly use, it will unlikely to incur any costs. 
See the online
<a href="https://aws.amazon.com/sns/sms-pricing/" class="external_link" target="nexial_external">SMS Pricing listing</a>
for more details.

The following information is **REQUIRED** to enable SMS messaging.

| setting              | default     | explanation |
|----------------------|-------------|-------------|
|`nexial.sms.region`   | `us-east-1` | (Optional) Specify the AWS region to use for the SMS (SNS) service. |
|`nexial.sms.accessKey`|             | [**REQUIRED**] Specify the AWS access key to use for the SMS (SNS) service. |
|`nexial.sms.secretKey`|             | [**REQUIRED**] Specify the AWS secret key to use for the SMS (SNS) service. |

<br/>

The above settings can be configured via [Nexial Setup](../../userguide/BatchFiles#nexial-setup),
via command line and via `project.properties`. For example,

- via command line:
  ```batch
  set JAVA_OPT=-Dnexial.sms.accessKey=... -Dnexial.sms.secretKey=...
  nexial.cmd -script ... ...
  ```
- via `project.properties`:
  ```properties
  nexial.sms.accessKey=...
  nexial.sms.secretKey=...
  nexial.sms.region=...
  ```


### Zero-Touch Environment
Note that the SMS messaging feature will work in zero-touch environments like Jenkins.


### Available Commands
- [sms &raquo; `sendText(phones,text)`](sendText(phones,text))

