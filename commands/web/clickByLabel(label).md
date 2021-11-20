---
layout: default
title: clickByLabel(label)
parent: web
tags: command web
comments: true
---

### Description
This command instructs Nexial to click the first element that contains `label`. Note that if there are more than 1 
element with text that matches the specified `label`,  only the first matching element will be considered by this 
command.


### Parameters
- **label** - this actual label name displayed for the element.


### Example
**Script**:<br/>
![](image/clickByLabel_01.png)

**Output**:<br/>
![](image/clickByLabel_02.png)


### See Also
- [`click(locator)`](click(locator))
- [`clickAll(locator)`](clickAll(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs))
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs))
- [`clickIfPresent(locator)`](clickIfPresent(locator))
- [`clickOffset(locator,x,y)`](clickOffset(locator,x,y))
- [`clickWithKeys(locator,keys)`](clickWithKeys(locator,keys))
