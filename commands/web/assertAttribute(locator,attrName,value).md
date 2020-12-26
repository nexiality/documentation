---
layout: default
title: assertAttribute(locator,attrName,value)
parent: web
tags: command web
comments: true
---

### Description
Use this command to assert the value of an attribute belonging to a web element denoted by the specified `locator`. 
The attribute name is denoted via the `attrName` parameter. If the specified element cannot be found or the specified
attribute name does not exist, this command will FAIL.

{% include _polymatcher.md %}


### Parameters
- **locator** - this parameter if the xpath of the element.
- **attrName** - this parameter is the name of the attribute to be identified in the element.
- **value** - this parameter is the expected value of the attribute to be found in the element


### Example
**Script**:<br/>
![](image/assertAttribute_01.png)

**Output**:<br/>
![](image/assertAttribute_02.png)


### See Also
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName))
- [`assertAttributeNotContain(locator,attrName,contains)`](assertAttributeNotContain(locator,attrName,contains))
- [`assertAttributeContain(locator,attrName,contains)`](assertAttributeContain(locator,attrName,contains))
