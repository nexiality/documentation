---
layout: default
title: composeMail(var,action,value)
parent: mail
tags: command mail
comments: true
---

### Description
This command instructs Nexial to compose an email variable at various steps. The `action` specifies what information to
configure. The `value` provides the value corresponding to the `action` set. This step is mandatory before executing
the [send(profile,var)](../mail/composeMail(var,action,value)).

### Supported Actions
- **set-subject** - Sets the email subject. When the `set-subject` is given a different value at a later step in the 
script for the same variable mentioned in the `var` then the previous email subject will be overriden.

- **add-to** - Adds the list of the TO recipients who receives the email. This can be a single email address or a list
 of email addresses separated by a ','. TO recipients can be added at multiple steps. It is not mandatory that all the 
TO recipients should be mentioned in one go.

- **add-cc** - Adds the list of the CC recipients who receives the email. This can be a single email address or a list 
of emails separated by a ','. CC recipients can be added at multiple steps. It is not mandatory that all the CC 
recipients should be mentioned in one go.

- **add-bcc** - Adds the list of the BCC recipients who receives the email. This can be a single email address or a list
 of emails separated by a ','. BCC recipients can be added at multiple steps. It is not mandatory that all the BCC 
 recipients should be mentioned in one go.

- **add-body** - Appends content to the body of the email.

- **add-attachment** - Attaches file(s) to the email. The file attachments can be added as a list separated by `,`.
The max size of the files that can be added is 10 MB. Attachments can be added dynamically at different steps in the 
script. In case you want to rename an attachment it can be done by providing the attachment as a key, value pair
separated by `=`. For example :- `test1.xlsx=C:\projects\mailtest\artifact\data\test1.data.xlsx,
test3.data.xlsx=C:\projects\mailtest\artifact\data\test2.data.xlsx`
 
The email body will default to **text/html**. This means that email body can be HTML. .

Read about [Mail Settings](index#mail-settings) for details about configuring mail server for your automation.

### Parameters
- **var** - the variable name containing the email information.
- **action** - action to perform as part of email composition.
- **value** - value to be set while composing the email against the action provided.

### Example
**Script**:<br/>
![](image/mail_02.png)


### See Also
- [mail &raquo; `send(profile,var)`](../mail/send(profile,var))
- [mail &raquo; `clearMail(var)`](../mail/clearMail(var))
