---
layout: default
title: saveCssValue(var,locator,property)
parent: web
tags: command web
comments: true
---

### Description
This command store the value of a CSS `property` to a variable for a given web element denoted by `var`. Note that
the CSS value is the "computed" value, as interpreted and consolidated by the underlying browser upon the assigned CSS
class and inline `style` attribute. As such, some CSS value will be rendered slightly differently. In particular, color
properties are rendered either as `rgb(hex, hex, hex)` or `rgba(hex, hex, hex, alpha)` forms.

{% include_relative css.md %}


### Parameters
- **var** - the data variable to store the collected CSS value
- **locator** - this parameter is the locator(xpath) of the element
- **property** - this parameter is the css property of the element


### Example


### See Also
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`assertCssNotPresent(locator,property)`](assertCssNotPresent(locator,property))
- [`assertCssPresent(locator,property,value)`](assertCssPresent(locator,property,value))
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))
- [`saveAttributeList(var,locator,attrName)`](saveAttributeList(var,locator,attrName))
