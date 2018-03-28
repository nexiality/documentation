---
title: web &raquo; assertAttributeContains(locator,attrName,contains)
parent: web
tags: command web
comments: true
---

### Description

- This command asserts that an attribute, denoted by `attrName`, belonging to an web element whose locator is represented by `locator` \- such attribute contains the value as specified in `contains`. 

### Parameter(s)

- **locator** - the locator of the target web element
- **attrName** - the name of the attribute belonging to the web element
- **contains** - the text to verify against the value of the specified attribute

### Example

Script:<br/>
![](image/assertAttributeContains_01.png)

Output:<br/>
![](image/assertAttributeContains_02.png)

### See Also

- [`assertAttributeNotContains(locator,attrName,contains)`](assertAttributeNotContains(locator,attrName,contains).html)
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value).html)
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName).html)
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName).html)
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName).html)