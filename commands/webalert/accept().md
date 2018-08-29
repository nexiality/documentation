---
layout: default
title: accept()
parent: webalert
tags: command webalert alert web
comments: true
---


### Description
This command clicks 'Yes' or issues a affirmative action on the alert dialog window.  The command does not 
require any input parameters. The text of the alert dialog, if present, will be saved to `nexial.lastAlertText`, which 
can be retrieved after this command is executed.


### Example
**Script**:<br/>
![](image/accept_01.png)

**Output**:<br/>
![](image/accept_02.png)



### See Also
- [`assertText(text,matchBy)`](assertText(text,matchBy))
- [`dismiss()`](dismiss())
- [`assertPresent()`](assertPresent())
