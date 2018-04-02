---
title: saveAttribute(var,locator,attrName)
parent: web
tags: command web
comments: true
---

### Description

- This command is to save the attributes of the element found as per defined locator.
- The attributes can be stored into variable and can be used for future validation.

### Parameters

- **var** - this parameter is variable for storing the  attribute values found for the element.
- **locator** - this parameter is locator(xpath) of the element.
- **attrName** - this parameter is attribute name of the element

### Example

**Script**:<br/>
       
![](image/saveAttribute_01.png)

**Output**:<br/>
![](image/saveAttribute_02.png)

### See Also

- [`web`](index)
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))