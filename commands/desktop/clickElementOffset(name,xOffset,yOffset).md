---
layout: default
title: clickElementOffset(name,xOffset,yOffset)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to click on the element identified by `name`. Unlike other click commands such as 
[`clickButton(name)`](clickButton(name)) and [`clickByLocator(locator)`](clickByLocator(locator)), this command
allows user to specify the `x` and `y` offset. This allows for more fine control and additional interactivity during
automation.

Note that this command will only work on an "interactive" element, such as textbox, textarea, toolbar, 
combo (i.e. dropdown). Issuing this command on element such as a label or dialog title bar will likely result in no
automation being performed.

The `xOffset` and `yOffset` values are the relative left and top position of the specified element. If they are both 
specified as `0`, it would be equivalent to [`clickByLocator(locator)`](clickByLocator(locator)).


### Parameters
- **name** - the name of the target desktop element
- **xOffset** - the X coordinate of the element to be clicked on.
- **yOffset** - the Y coordinate of the element to be clicked on.


### Example
- [`clickButton(name)`](clickButton(name))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`clickOffset(locator,xOffset,yOffset)`](clickOffset(locator,xOffset,yOffset))
