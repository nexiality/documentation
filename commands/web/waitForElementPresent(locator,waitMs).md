---
layout: default
title: waitForElementPresent(locator,waitMs)
parent: web
tags: command web
comments: true
---


### Description
This command effectively replaced the now-removed [`waitForElementPresent(locator)`](waitForElementPresent(locator))
command. The new command (this one) provides additional control via the `waitMs` parameter.

This command waits for the target element (denoted by `locator`) to be present on the current browser window, until the
`waitMs` time is reached,.


### Parameters
- **locator** - this parameter is the locator of the element.
- **waitMs** - the maximum amount of time to wait for said condition.


### Example


### See Also
- [`waitForTitle(text)`](waitForTitle(text))