---
layout: default
title: clickOffset(locator,x,y)
parent: web
tags: command web
comments: true
---

### Description
This command clicks on a specific spot of a Web element as specified via `locator`. If the locator does not resolve to 
a valid web element, this command will consider it as a FAIL. If the specified locator resolves to multiple web 
elements, only the first one will be considered.

Use the `x` and `y` parameter to specify where the mouse click should occur. The top-left corner of the target element
would be considered as `0,0`. It is possible to specify the `x` and `y` value outside of the current dimension of the
target element. As such, the mouse click would occur outside the target element. One may consider using this command
as a way to move focus from target element (e.g. assign `x` to `-20` and `y` to `0` would create a mouse-click event 
outside the bounds of the target element).


### Parameters
- **locator** - locator of the target element
- **x** - the x-position relative to the top-left (0,0) corner of the target element
- **y** - the y-position relative to the top-left (0,0) corner of the target element


### Example


### See Also
- [`click(locator)`](click(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs).html)
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs).html)
- [`clickByLabel(label)`](clickByLabel(label).html)
