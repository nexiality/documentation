---
layout: default
title: clickOffset(locator,xOffset,yOffset)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to click on a desktop element matched to the specified `locator`, with the desired 
positional offset.

The `xOffset` and `yOffset` values are the relative left and top position of the specified element, respectively. If
these optional parameters are not specified, then Nexial will attempt to invoke right click at (or near) the center of
the target element. As such, it would be in effect the same as invoking the
[`clickByLocator(locator)`](clickByLocator(locator)) command.


### Parameters
- **locator** - the locator(xpath) of the target element.
- **xOffset** - the X coordinate of the element to be clicked on.
- **yOffset** - the Y coordinate of the element to be clicked on.


### Example
- [`clickButton(name)`](clickButton(name))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`clickElementOffset(name,xOffset,yOffset)`](clickElementOffset(name,xOffset,yOffset))
