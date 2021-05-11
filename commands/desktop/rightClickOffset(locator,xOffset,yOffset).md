---
layout: default
title: rightClickOffset(locator,xOffset,yOffset)
parent: desktop
tags: command desktop right-click offset
comments: true
---


### Description
This command instructs Nexial to right-click on the element matched to the specified `locator`, with the desired 
positional offset. This allows for more fine control and additional interactivity during automation.

The `xOffset` and `yOffset` values are the relative left and top position of the specified element, respectively.

One may view this command as a simplified form of [`clickScreen(button,modifiers,x,y)`](clickScreen(button,modifiers,x,y)).


### Parameters
- **locator** - the locator(xpath) of the target element.
- **xOffset** - the X coordinate of the element to be clicked on.
- **yOffset** - the Y coordinate of the element to be clicked on.


### Example
- [`clickButton(name)`](clickButton(name))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`clickElementOffset(name,xOffset,yOffset)`](clickElementOffset(name,xOffset,yOffset))
- [`clickOffset(locator,xOffset,yOffset)`](clickOffset(locator,xOffset,yOffset))
- [`clickScreen(button,modifiers,x,y)`](clickScreen(button,modifiers,x,y))
- [`rightClickElementOffset(name,xOffset,yOffset)`](rightClickElementOffset(name,xOffset,yOffset))
