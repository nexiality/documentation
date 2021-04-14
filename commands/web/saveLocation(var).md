---
layout: default
title: saveLocation(var)
parent: web
tags: command web
comments: true
---

### Description
This command instructs Nexial to save the current URL of the web page to a data variable denoted by `var`, which can be 
used in the later part of the execution.


### Parameters
- **var** - this parameter is the variable where the current location of the web page is save.


### Example
**Script**:<br/>
![](image/saveLocation_01.png)

**Output**:<br/>
![](image/saveLocation_02.png)


### See Also
- [`assertLocation(search)`](assertLocation(search))
- [`open(url)`](open(url))
- [`openAndWait(url,waitMs)`](openAndWait(url,waitMs))
