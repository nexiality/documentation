---
layout: default
title: sendComposed(profile,var)
parent: mail
tags: command mail
comments: true
---

### Description
This command instructs Nexial to send out an email using the email configuration set in the `profile` and set via the 
[compose(var,config,value)](../mail/compose(var,config,value)) command. Use `var` to specify the email settings 
to use for sending out email.

This command expects that the variable passed in the `var` has the Subject, TO recipient and Body set. In case any of
these values are not set, then the email will not be delivered resulting an error message.

Read about [Mail Settings](index#mail-settings) for details about configuring mail server for your automation.


### Parameters
- **profile** - the profile of the target mail connectivity. See [mail settings](index#mail-settings) for more details.
- **var** - the variable name containing the email information.


### Example
**Script**:<br/>
![](image/mail_02.png)


### See Also
- [mail &raquo; `send(profile,to,subject,body)`](../mail/send(profile,to,subject,body))
- [mail &raquo; `compose(var,config,value)`](../mail/compose(var,config,value))
- [mail &raquo; `clearComposed(var)`](../mail/clearComposed(var))
