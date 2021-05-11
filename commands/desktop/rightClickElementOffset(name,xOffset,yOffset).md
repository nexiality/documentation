---
layout: default
title: rightClickElementOffset(name,xOffset,yOffset)
parent: desktop
tags: command desktop right-click offset
comments: true
---


### Description
This command instructs Nexial to right-click on the element identified by `name`. Unlike other click commands, this 
command allows user to specify the `x` and `y` offset. This allows for more fine control and additional interactivity 
during automation.

Note that this command will only work on an "interactive" element, such as textbox, textarea, toolbar, 
combo (i.e. dropdown). Issuing this command on element such as a label or dialog title bar will likely result in no
automation being performed.

The `xOffset` and `yOffset` values are the relative left and top position of the specified element, respectively.

One may view this command as a simplified form of [`clickScreen(button,modifiers,x,y)`](clickScreen(button,modifiers,x,y)).


### Parameters
- **name** - the name of the target desktop element
- **xOffset** - the X coordinate of the element to be clicked on.
- **yOffset** - the Y coordinate of the element to be clicked on.


### Example
- [`clickButton(name)`](clickButton(name))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`clickElementOffset(name,xOffset,yOffset)`](clickElementOffset(name,xOffset,yOffset))
- [`clickOffset(locator,xOffset,yOffset)`](clickOffset(locator,xOffset,yOffset))
- [`clickScreen(button,modifiers,x,y)`](clickScreen(button,modifiers,x,y))
- [`rightClickOffset(locator,xOffset,yOffset)`](rightClickOffset(locator,xOffset,yOffset))
