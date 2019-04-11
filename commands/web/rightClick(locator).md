---
layout: default
title: rightClick(locator)
parent: web
tags: command web rightclick click right-click
comments: true
---

### Description
This command performs right-click action on the target element as specified via `locator`. 
Like [`click(locator)`](click(locator)) command, if the specified `locator` does not resolved to a valid web element,
Nexial will FAIL the corresponding step. In additional, Nexial does not validate if the target web element supports 
or positively responds to the right-click event.


### Parameters
- **locator** - this parameter is the xpath of the element on which action need to be performed.


### Example


### See Also
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs).html)
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs).html)
- [`clickByLabel(label)`](clickByLabel(label).html)
