---
layout: default
title: Service Integrations
parent: User Guide
tags: one time setup service integration userguide
comments: true
---


### Overview
The [`nexial-setup.cmd`](BatchFiles#nexial-setup) or [`nexial-setup.sh`](BatchFiles#nexial-setup) command allows you 
to setup the common configurations by providing it the location of the configuration file only once.

The ideal person to use this command could be the one who is responsible for managing the team/projects such as the 
team lead or tech lead. They can use this feature to encrypt the credentials and configurations of external services 
into a `setup.jar` and then share it amongst the team. 

Read more about `nexial-setup.cmd` on the [Nexial Batch Files](BatchFiles#nexial-setup) page.

**Advantages**
- One time setup, no need to configure system variables for every project/test.
- Encryption of sensitive information such as passwords and secret keys. 
- Running the command creates a configuration jar. This nexial build can be distributed to other members of team 
  allowing the team to work with the same configuration without having to set it up individually. 


### Email Notification Setup
With this one-time setup, you can provide email server configuration details once and build `setup.jar` using 
[`nexial-setup.cmd`](BatchFiles#nexial-setup) or [`nexial-setup.sh`](BatchFiles#nexial-setup).

Example of a **_setup.properties_**
~~~
# Values are for reference purpose only  
nexial.enableEmail=true
nexial.mail.smtp.host=<SMTP_HOST>
nexial.mail.smtp.port=<SMTP_PORT>
nexial.mail.smtp.from=<Sender_Email_Id>
nexial.mail.smtp.auth=true
nexial.mail.smtp.username=<Auth_Email_id_or_Sender_email_id>
nexial.mail.smtp.password=<Email_Password>
nexial.mail.smtp.starttls.enable=true
~~~
  
Command:<br/>
![terminal command](image/EmailNotifications_07.png)<br/>
![terminal output](image/EmailNotifications_08.png)

To setup Email Notification with Gmail, [click here](../tipsandtricks/IntegratingNexialWithEmail#email-notification-via-gmail)


### Nexial Output-To-Cloud Setup
Note that cloud storage support is not enabled by default (it's not free). One can enable such capability
by adding the following configuration for S3 connectivity (in addition to setting
[`nexial.outputToCloud`](../systemvars/index.html#nexial.outputToCloud) as <code>true</code>:

| configuration          | notes                                                                                       |
|:-----------------------|:--------------------------------------------------------------------------------------------|
|`nexial.otc.region`     | The desire <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html" class="external-link" target="_nexial_link">AWS region</a>. Default is `us-west-2`. Only applicable to AWS S3. |
|`nexial.otc.accessKey`  | The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys" class="external-link" target="_nexial_link">AWS access key</a> to access target S3 service. |
|`nexial.otc.secretKey`  | The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys" class="external-link" target="_nexial_link">AWS secret key</a> to access target S3 service. |
|`nexial.otc.url`        | The URL of alternative S3 service such as <a href="InstallingMinio">MinIO. |
|`nexial.outputCloudBase`| The target bucket and path (prefix) to use for storing execution output. |


### TMS Integration Setup
With this one-time setup, you can provide TMS integration configuration details once and build `setup.jar` using 
[`nexial-setup.cmd`](BatchFiles#nexial-setup) or [`nexial-setup.sh`](BatchFiles#nexial-setup).

Example of a **_setup.properties_**
- TestRail
~~~
# Values are for reference purpose only except source 
nexial.tms.source=testrail
nexial.tms.url=https://tms1.testrail.io/
nexial.tms.username=<tms_username>
nexial.tms.password=<tms_password>
~~~
- Azure 
~~~
# Values are for reference purpose only except source
# Azure doesn't require username. Only passowrd can be specified as pat(Personal access token)
nexial.tms.source=azurehttps://dev.azure.com/tms1
nexial.tms.username=
nexial.tms.password=4hsg6n5bb5n56ahixmdu7suoah65kk6bro3yu3rokcqhee5u5
~~~

 