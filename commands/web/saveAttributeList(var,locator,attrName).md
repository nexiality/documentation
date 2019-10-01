---
layout: default
title: saveAttributeList(var,locator,attrName)
parent: web
tags: command web
comments: true
---

### Description
This command captures the attribute value of the matching elements and save them as a list to `var`. The attribute 
name is denoted as `attrName`. The target elements is specified through `locator`.

Suppose the following HTML:<br/>
```html
<div class="data" data-value="Jim">...</div>
<div class="data" data-value="John">...</div>
<div class="data" data-value="James">...</div>
<div class="data" data-value="Joe">...</div>
<div class="data" data-value="Jumbotron">...</div>
```

With the following command:<br/>
`web | saveAttributeList(var,locator,attrName) | myVar | css=#myDiv | data-value`

Now the data variable `myVar` would contain the value `Jim,John,James,Joe,Jumbotron`.


### Parameters
- **var** - the data variable name to store the attribute values found for the matching elements.
- **locator** - locator of the target elements.
- **attrName** - attribute name of the element.


### Example


### See Also
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertAttributeContain(locator,attrName,contains)`](assertAttributeContain(locator,attrName,contains))
- [`assertAttributeNotContain(locator,attrName,contains)`](assertAttributeNotContain(locator,attrName,contains))
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName))
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))
- [`updateAttribute(locator,attrName,value)`](updateAttribute(locator,attrName,value))
