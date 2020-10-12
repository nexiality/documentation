---
layout: default
title: mail
tags: command mail smtp
comments: true
---


The `mail` commands represent a series of automation regarding emails (SMTP). As of now, the main focus is on sending 
email. Future version of Nexial could potentially support the reading email as well. If this is of interest or
importance to you, please let us know via the 
[GitHub Feature request form](https://github.com/nexiality/nexial-core/issues/new?template=feature_request.md). It'll
help us prioritize future Nexial features. 

Using the `mail` commands, one can configure the configuration of an outgoing email dynamically, including: 
- The TO recipient(s) (via [`composeMail(var,action,value)`](composeMail(var,action,value)))
- The CC recipient(s) (via [`composeMail(var,action,value)`](composeMail(var,action,value)))
- The BCC recipient(s) (via [`composeMail(var,action,value)`](composeMail(var,action,value)))
- The FROM email (via [Mail Settings](#mail-settings))
- The email subject (via [`composeMail(var,action,value)`](composeMail(var,action,value)))
- The content of an email, which may be built dynamically over multiple steps 
  (via [`composeMail(var,action,value)`](composeMail(var,action,value)))
- The content type of an email (via [Mail Settings](#mail-settings))
- The attachment(s) (via [`composeMail(var,action,value)`](composeMail(var,action,value)))

In order to send email, appropriate mail server connectivity must be defined first.  The section below describes how
mail server connectivity would be configured. 

It is noteworthy to clarify that the mail server connectivity used here may not necessarily be the same as that used
by Nexial to [send out email notification](../../systemvars/index#nexial.enableEmail).


### Mail Settings
The `mail` command type uses a "profile" to group related data variables together, much like the case for 
[`ssh`](../ssh/index#connection-setup), [`rdbms`](../rdbms/index#database-connection-setup) or 
[`aws.s3`](../aws.s3/index#connection-setup).  The profile-based connectivity setting can be defined via command line 
(i.e. `JAVA_OPT=-D...` or via the `-override` option), 
[`project.properties`](../../userguide/UnderstandingProjectStructure#artifactprojectproperties), or the appropriate 
data file.  Below is a command line example:

```
nexial.sh -plan ... ... -override MyMail.from=boss@mystore.com -override MyMail.host=mail.mystore.com -override MyMail.port=25
```

Here are the various settings available to configure the appropriate mail server for your automation 
(assuming profile is `MyEmail`):

| data variable         | description                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| `MyEmail.host`        | **[REQUIRED]** the SMTP host for nexial                                        |
| `MyEmail.port`        | **[REQUIRED]** the SMTP port for nexial; default is `25`                       |
| `MyEmail.username`    | [optional] auth user for SMTP host. Required only if `auth` is true            |
| `MyEmail.password`    | [optional] auth credential for SMTP host. Required only if `auth` is true      |
| `MyEmail.tls`         | [optional] boolean; determine if TTLS is enable for SMTP                       |
| `MyEmail.localhost`   | [optional] determine if SMTP service is locally available                      |
| `MyEmail.from`        | **[REQUIRED]** the sender of mail sent via nexial                              |
| `MyEmail.protocol`    | **[REQUIRED]** `smtp` or `imap`; default is `smtp`                             |
| `MyEmail.auth`        | [optional] whether authentication is required to send mail; default is `false` |
| `MyEmail.bufferSize`  | [optional] buffer size for smtp packet; default to system default of `512`     |
| `MyEmail.contentType` | [optional] smtp MIME type to use; default is `text/html`                       |

<br/>


#### Gmail
Sending email via Gmail is possible, albeit a few things to take care initially.

Here's the settings for targeting Gmail as the mail host:<br/>
![](image/mail_01.png)

Note that you need to fill in the correct email and password for `Gmail.username` and `Gmail.password`. You can 
optionally rename the profile from `Gmail` to something else.

{% include _gmail_less_secure.md %}


### Available Commands
- [mail &raquo; `composeMail(var,action,value)`](../mail/composeMail(var,action,value))
- [mail &raquo; `send(profile,var)`](../mail/send(profile,var))
- [mail &raquo; `clearMail(var)`](../mail/clearMail(var))
