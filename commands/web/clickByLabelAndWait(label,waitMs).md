---
layout: default
title: clickByLabelAndWait(label,waitMs)
parent: web
tags: command web
comments: true
---

### Description
This command instructs Nexial to click the first element that contains `label`, with a custom wait time (`waitMs`) as 
specified for the resulting page to load. Note that if there are more than 1 element with text that matches the 
specified `label`,  only the first matching element will be considered by this command. 


### Parameters
- **label** - this parameter is actual label name displayed for the element.
- **waitMs** - this parameter is the time to wait(time should be defined in milliseconds)


### Example
![](image/clickByLabelAndWait_01.png)

**Output**:<br/>
![](image/clickByLabelAndWait_02.png)

### See Also
- [`click(locator)`](click(locator))
- [`clickByLabel(label)`](clickByLabel(label))
- [`doubleClickByLabel(label)`](doubleClickByLabel(label))
- [`doubleClickByLabelAndWait(label,waitMs)`](doubleClickByLabelAndWait(label,waitMs))