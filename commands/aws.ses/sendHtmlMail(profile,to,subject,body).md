---
layout: default
title: sendHtmlMail(profile,to,subject,body)
parent: aws.ses
tags: command aws.ses ses email mail
comments: true
---


### Description
This command automates the sending of HTML email via AWS SES. The setting up of a "profile" is pre-requisite for this 
command work. Visit [Connection Setup](index#connection-setup) for more details on setting a "profile" specific to AWS 
SES.

It is entirely possible to embed data variables via the standard `${...}` convention in both the `subject` and `body`
parameter. Last, the `body` parameter can represent either HTML or a file with which its content will be used as email 
body. Last, the `to` parameter represent the email recipient(s), each separated by 
[`nexial.textDelim`](../../systemvars/index#nexial.textDelim).  



### Parameters
- **profile** - the [profile](index#connection-setup) added in the data file which contains AWS SES credentials and 
  connectivity.
- **to** - one or more recipients to receive this email. Multiple addresses are separated by 
  [`nexial.textDelim`](../../systemvars/index#nexial.textDelim).
- **subject** - the email subject line. All recipients will receive the same email subject line.
- **body** - the email body which all recipients will receive.  The content is assumed as HTML. Also, it is 
  possible to use the **[`$(projectfile)`](../../functions/$(projectfile))** built-in variable to pull in email 
  content from a file. Token replacement will be in effect.


### Example
**Script**:<br/>
![](image/sendHtmlMail_01.png)

**Output**:<br/>
![](image/sendHtmlMail_02.png)

Note that the line breaks are kept as is, and an additional line added to the end of the email.  The additional tag
line is configured through the _optional_ `xmailer` configuration:

![](image/sendHtmlMail_03.png)


### See Also
- [`sendTextMail(profile,to,subject,body)`](sendTextMail(profile,to,subject,body))
- [mail &raquo; `send(profile,to,subject,body)`](../mail/send(profile,to,subject,body))
- [AWS SES Setup](index#connection-setup)
