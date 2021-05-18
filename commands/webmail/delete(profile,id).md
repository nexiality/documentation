---
layout: default
title: delete(profile,id)
parent: webmail
tags: command mail mailinator webmail temporary-mail
comments: true
---

### Description
This command instructs Nexial to delete the email from the **inbox** 
[specified in the `profile`](index#webmail-configuration-settings). The `id` represents the "email id" to be deleted. 
This "email id" is determined during the 
[`search(var,profile,searchCriteria,duration)`](search(var,profile,searchCriteria,duration)) command.


### Parameters
- **profile** - the webmail profile which [specifies the settings](index#webmail-configuration-settings) like 
  `inbox`, `provider` etc.
- **id** - the `id` of the email to be deleted.

### Example
Consider the following example script which deletes the email read earlier.
**Script**:<br/>
![](image/delete_01.png)


### See Also
- [`search(var,profile,searchCriteria,duration)`](search(var,profile,searchCriteria,duration))
- [`read(var,profile,id)`](read(var,profile,id))
