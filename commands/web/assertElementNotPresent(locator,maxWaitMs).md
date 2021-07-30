---
layout: default
title: assertElementNotPresent(locator,maxWaitMs)
parent: web
tags: command web
comments: true
---

### Description
This command is to assert is the element is not present as per the defined locator. Use `maxWaitMs` to set the maximum
amount of time to check for the presence of any element matching to the specified `locator`.


### Parameters
- **locator** - this parameter is the locator of the element which does not exist on the page.
- **maxWaitMs** - maximum amount of time, in millisecond, to ensure that no element matches the specified locator.


### Example

**Script**:<br/>
![](image/assertElementNotPresent_01.png)

**Output**:<br/>
![](image/assertElementNotPresent_02.png)

### See Also

- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))