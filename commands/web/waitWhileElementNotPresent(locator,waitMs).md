---
layout: default
title: waitWhileElementNotPresent(locator,waitMs)
parent: web
tags: command web
comments: true
---


### Description
This command polls for an element to match the specified `locator` until `waitMs` millisecond. If the element is found 
within `waitMs` millisecond, then the corresponding step is considered as `FAIL`. Note that this command will keep
polling for the presence of the target element until `waitMs` milliseconds has passed.

This command can be useful when one desires to ensure that a certain element is not present. For example, 
1. after correcting and submitting the registration form, the "error message" section should no longer be present.
2. after completing the outstanding payment, the "payment" icon should no longer be present.


### Parameters
- **locator** - this parameter is the locator of the element.
- **waitMs** - the maximum amount of time to wait for said condition.


### Example


### See Also
- [`assertElementNotPresent(locator,maxWaitMs)`](assertElementNotPresent(locator,maxWaitMs))
- [`waitForElementPresent(locator)`](waitForElementPresent(locator))
- [`waitForElementsPresent(locators)`](waitForElementsPresent(locators))
- [`waitForPopUp(winId,waitMs)`](waitForPopUp(winId,waitMs))
