---
title: mail
tags: command mail smtp
comments: true
---
{% include _breadcrumb_command_type.html %}


The "mail" command type represents a series of automation command(s) regarding sending emails.

Current implementation of such capability depends highly on setting the correct/expected system properties (via `-D`, 
for example).  We will be looking to rewrite the underlying email connectivity to a more flexible and comprehensive 
solution.  For now, be aware of the following system properties, which must be set prior to a Nexial execution.  For 
example:

> set JAVA_OPT=-Dmail.smtp.from=boss@mystore.com -Dmail.smtp.host=mail.mystore.com -Dmail.smtp.port=25
> 
> nexial.sh -plan ... ...

Another way of setting these mail related system properties is via the 
[`project.properties`](../../quickstart/UnderstandingProjectStructure#project.properties) file.

Here are the various settings available to configure the appropriate mail server for your automation:

| system property             | description                                                         |
| --------------------------- | ------------------------------------------------------------------- |
| `mail.smtp.host`            | the SMTP host for nexial                                            |
| `mail.smtp.port`            | the SMTP port for nexial; default is `25`                           |
| `mail.smtp.username`        | auth user for SMTP host                                             |
| `mail.smtp.password`        | auth credential for SMTP host                                       |
| `mail.smtp.starttls.enable` | boolean; determine if TTLS is enable for SMTP                       |
| `mail.smtp.localhost`       | determine if SMTP service is locally available                      |
| `mail.smtp.from`            | the sender of mail sent via nexial                                  |
| `mail.transport.protocol`   | `smtp` or `imap`; default is `smtp`                                 |
| `mail.smtp.auth`            | whether authentication is required to send mail; default is `false` |
| `mail.smtp.bufferSize`      | buffer size for smtp packet; default to system default of `512`     |
| `mail.smtp.contentType`     | smtp MIME type to use; default is `text/html`                       |

<br/>

### Available Commands
- [`send(to,subject,body)`](send(to,subject,body))
