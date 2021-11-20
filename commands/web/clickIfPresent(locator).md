---
layout: default
title: clickIfPresent(locator)
parent: web
tags: command web
comments: true
---

### Description
This command essentially works the same way as [`click(locator)`](click(locator)), with the exception that a failure
to locate the target element via `locator` would not result in a FAIL result. Instead, if the specified `locator` 
cannot be found, Nexial simply end the corresponding step with a PASS.

For more information about the click command, please read the [`click(locator)`](click(locator)) command reference page.


### Parameters
- **locator** - the locator of the target element.


### See Also
- [`click(locator)`](click(locator))
- [`clickAll(locator)`](clickAll(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs))
- [`clickByLabel(label)`](clickByLabel(label))
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs))
- [`clickOffset(locator,x,y)`](clickOffset(locator,x,y))
- [`clickWithKeys(locator,keys)`](clickWithKeys(locator,keys))

