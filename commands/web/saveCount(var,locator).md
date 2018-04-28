---
layout: default
title: saveCount(var,locator)
parent: web
tags: command web
comments: true
---

### Description

- This command to save the count of the element found as per the locator passed into command.
- In other words command will save the count of the element into defined variable to be used for future usage.
- The command will pass if the element found and return element count as pr locator defined or else fail otherwise.

### Parameters

- **var** - this parameter is to store the return value from the command into variable.  can be any user defined name.
- **locator** - this parameter is the locator(xpath) of the element.

### Example

**Script**:<br/>
![](image/saveCount_01.png)

**Output**:<br/>
![](image/saveCount_02.png)

### See Also

- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))  
- [`assertElementPresent(locator)`](assertElementPresent(locator))