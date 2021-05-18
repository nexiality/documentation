---
layout: default
title: read(var,profile,id)
parent: webmail
tags: command mail mailinator webmail temporary-mail
comments: true
---


### Description
This command instructs Nexial to retrieve email contents from the **inbox** 
[specified in the `profile`](index#webmail-configuration-settings). The `id` represents the "email id", which is 
determined via the [`search(var,profile,searchCriteria,duration)`](search(var,profile,searchCriteria,duration)) command. 
The details of the email is stored into `var`.


### Parameters
- **var** - the target variable name to which the email details will be stored.
- **profile** - the webmail profile in the `data` file which 
  [specifies the settings](index#webmail-configuration-settings) like `inbox`, `provider` etc.
- **id** - the `id` of the email to be read.

Consider the following example where you can read the details of an email based on its email id.


### Example
**Script**:<br/>
![](image/read_01.png)
<br/>

In the above example you can see that once the email is read we can retrieve the following email details:
### Email Details
- **id** - The `id` of the email read.
- **from** - The `from` address of the email.
- **to** - The `to` address of the email.
- **subject** - The `subject` of the email.
- **time** - The `time` at which the email is received.
- **content** - The `text content` of the email.
- **links** - The list of the `html links` in the email.
- **html** - The `html` content of the email.


### See Also
- [`delete(profile,id)`](delete(profile,id))
- [`search(var,profile,searchCriteria,duration)`](search(var,profile,searchCriteria,duration))
