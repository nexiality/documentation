---
layout: default
title: assertElementDisabled(locator)
parent: web
tags: command web
comments: true
---

### Description
This command asserts the element matching to the specified `locator` is either disabled and/or is not currently visible.
Note that if no element is found to match the specified `locator`, Nexial will consider such as a **FAIL**. 

This command is useful to ensure that the target element switches from being "enabled" to "disabled" in accordance to 
the interactions made to its enclosing web page. For example, _"When the required fields are not filled in, the 'Submit'
button should remain disabled. When all the required fields are completed, the 'Submit' button shall be enabled."_


### Parameters
- **locator** - the locator of the target element.


### See Also
- [`assertElementEnabled(locator)`](assertElementEnabled(locator))
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertElementNotPresent(locator)`](assertElementNotPresent(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
