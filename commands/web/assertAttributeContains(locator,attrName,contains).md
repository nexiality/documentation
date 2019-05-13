---
layout: default
title: assertAttributeContains(locator,attrName,contains)
parent: web
tags: command web
comments: true
---

### Description
This command asserts that an attribute, denoted by `attrName`, belonging to an web element whose locator is
represented by `locator`, and that such attribute contains the value as specified in `contains`. 


### Parameters
- **locator** - the locator of the target web element
- **attrName** - the name of the attribute belonging to the web element
- **contains** - the text to verify against the value of the specified attribute


### Example
**Script**:<br/>
![](image/assertAttributeContains_01.png)

**Output**:<br/>
![](image/assertAttributeContains_02.png)


### See Also
- [`assertAttributeNotContains(locator,attrName,contains)`](assertAttributeNotContains(locator,attrName,contains))
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName))
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))
