---
layout: default
title: search(var,profile,searchCriteria,duration)
parent: webmail
tags: command mail mailinator webmail
comments: true
---

### Description
This command instructs Nexial to search for the  emails contents from the **inbox** specified against the `profile`
configured. The search criteria is based on the following two conditions:- <br/>
 
- The email subject should contain the text specified against the `searchCriteria` parameter.
- Also, the difference between the current time to the mail received time should be greater than the `duration`
  provided in minutes. 
  
All the emails matching the above two criteria will be added to the variable list with the name specified against the 
parameter `var`.In case any of the below parameters are not set then the operation cannot be performed resulting
in an error.

### Parameters
- **var** - the name given to the list of emails satisfying the search criteria. This is a comma separated value.
- **profile** - the webmail profile in the `data` file which specifies the settings like inbox, mailProvider etc.
- **searchCriteria** - the text that the subject of the email should contain.
- **duration** - the duration since the email was received. Remember that duration should always be specified in minutes 
  and the value should be numeric as well as positive. Mails which are older than 24 hours cannot be retrieved hence the
  max value of the duration will be 1440. 


### Example
**Script**:<br/>
![](image/search_01.png)
<br/>


### See Also
- [webmail &raquo; `read(var,profile,id)`](../webmail/read(var,profile,id))
- [webmail &raquo; `delete(profile,id)`](../webmail/delete(profile,id))
