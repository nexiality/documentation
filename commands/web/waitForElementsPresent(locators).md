---
layout: default
title: waitForElementsPresent(locators)
parent: web
tags: command web
comments: true
---

### Description
This command instructs Nexial to wait for the presence of one or more elements based on the specified `locators`. For 
each locator, Nexial will wait until the time determined by [`nexial.pollWaitMs`](../../systemvars/index#nexial.pollWaitMs),
in milliseconds.

Nexial will try all the specified `locators`, even if any preceeding locator failed to be located. After cycle through 
all the `locators`, if any of them result in error (i.e. timeout while waiting for an element), Nexial will then fail
the associated step.

Note that each locator is separated to its own line (i.e. newline character).


### Parameters
- **locators** - One or more locators to wait on, with each locator given the same amount of `nexial.pollWaitMs` 
  millisecond of time tolerance.


### Example


### See Also
- [`waitForTitle(text)`](waitForTitle(text))
- [`waitForElementPresent(locator)`](waitForElementPresent(locator))