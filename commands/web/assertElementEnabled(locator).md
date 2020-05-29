---
layout: default
title: assertElementEnabled(locator)
parent: web
tags: command web
comments: true
---

### Description
This command asserts if the element matching to the specified `locator` is present, visible and enabled. Failing to
match any of these 3 criteria will result in a FAIL step.

This command is useful to ensure that a button or form input element is clickable or ready for interaction.


### Parameters
- **locator** - the locator of the target element.


### See Also
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertElementNotPresent(locator)`](assertElementNotPresent(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
