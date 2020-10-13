---
layout: default
title: clearComposed(var)
parent: mail
tags: command mail
comments: true
---

### Description
This command deletes existing email configuration (configured via 
[`compose(var,config,value)`](compose(var,config,value))) based on the specified `var`.


### Parameters
- **var** - the variable name containing the email information.


### Example
**Script**:<br/>
![](image/mail_02.png)


### See Also
- [mail &raquo; `send(profile,to,subject,body)`](../mail/send(profile,to,subject,body))
- [mail &raquo; `compose(var,config,value)`](../mail/compose(var,config,value))
- [mail &raquo; `sendComposed(profile,var)`](../mail/sendComposed(profile,var))
