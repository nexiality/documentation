---
layout: default
title: compose(var,config,value)
parent: mail
tags: command mail
comments: true
---

### Description
This command instructs Nexial to compose an email variable at various steps. The `config` specifies the configuration to
configure. The `value` provides the value corresponding to the `configuration` set. This step is mandatory before 
executing the [sendComposed(profile,var)](../mail/sendComposed(profile,var)).


### Supported Configs
- **subject** - Sets the email subject for the email to sent via 
[sendComposed(profile,var)](../mail/sendComposed(profile,var)).Effectively overrides previously configured
email subject.

- **to** - Adds the list of the TO recipients who receives the email. This can be a single email address or a list
  of email addresses separated by a `,`. TO recipients can be altered at any step.

- **cc** - Adds the list of the CC recipients who receives the email. This can be a single email address or a list 
  of emails separated by a `,`. CC recipients can be altered at any step.

- **bcc** - Adds the list of the BCC recipients who receives the email. This can be a single email address or a list 
of emails separated by a `,`. BCC recipients can be altered at any step.

- **body** - Sets the email content body. This can be overriden at any step.

- **attachment** - Attaches file(s) to the email. The file attachments can be added as a list separated by `,`.
  The max size of all the attachments is 10 MB. In case you want to rename an attachment it can be done by providing
  the attachment as a key/value pair  separated by `=`. For example:<br/>
```first.xlsx=$(syspath|data|fullpath)/test1.xlsx, second.xlsx=$(syspath|data|fullpath)/test2.xlsx```.
   The email body will default to **text/html**. This means that email body can be HTML. Attachments can be reset
   at any step.

Read about [Mail Settings](index#mail-settings) for details about configuring mail server for your automation.

Any of the above config can be cleared by passing it a value `(empty)`.

The below screenshot is an example.
![](image/clearValue.png)


### Parameters
- **var** - the variable name containing the email information.
- **config** - action to perform as part of email composition.
- **value** - value to be set while composing the email against the action provided.


### Example
**Script**:<br/>
![](image/mail_02.png)


### See Also
- [mail &raquo; `send(profile,to,subject,body)`](../mail/send(profile,to,subject,body))
- [mail &raquo; `sendComposed(profile,var)`](../mail/sendComposed(profile,var))
- [mail &raquo; `clearComposed(var)`](../mail/clearComposed(var))
