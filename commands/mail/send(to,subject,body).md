---
layout: default
title: send(to,subject,body)
parent: mail
tags: command mail
comments: true
---


### Description
This command instructs Nexial to send out an email to one or more email recipients (all as "To") with the same 
subject line and same email body.  The email body will default to **text/html**.  This means that email body can 
be HTML. 


### Parameters
- **to** \- one or more email recipients, separated by comma.  For example, 
  `john_doe@company1.com,jane_smith@company2.com`
- **subject** \- the email subject line.  All recipients will receive the same email subject line
- **body** \- the email body, which all recipients will receive.  HTML is allowed since the default encoding will be 
  `text/html`.  Also, it is possible to use 
  the **[`$(projectfile)`](../../functions/$(projectfile))** built-in variable to pull in email content from a file.
  Token replacement will be in effect


### Example
**Script**:<br/>
![](image/send_01.png)


### See Also
-  [`$(projectfile)`](../../functions/$(projectfile))
