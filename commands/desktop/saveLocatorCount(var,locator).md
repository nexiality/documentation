---
layout: default
title:  saveLocatorCount(var,locator)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to count the number of elements matching to the specified `locator`. If no element is 
found, `0` will be saved to the specified `var`.

It is not common that a GUI element might not be rendered (present) until some time has passed. It is also possible that
the matching count for the specified `locator` might change over time. For these reasons, this command will utilize the
[`nexial.pollWaitMs`](../../systemvars/index.html#nexial.pollWaitMs) value to determine the amount of time to wait. One
might want to adjust the value of this System variable to ensure appropriate count is timely captured.


### Parameters
- **var** - this parameter is the variable of the locator count.
- **locator** - this parameter is the locator of the element.


### Example

### See Also
- [`assertLocatorPresent(locator)`](assertLocatorPresent(locator))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`saveAttributeByLocator(var,locator,attribute)`](saveAttributeByLocator(var,locator,attribute))
- [`saveElementCount(var,name)`](saveElementCount(var,name))
- [`waitForLocator(locator,maxWaitMs)`](waitForLocator(locator,maxWaitMs))
