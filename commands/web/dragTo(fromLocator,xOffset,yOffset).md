---
layout: default
title: dragTo(fromLocator,xOffset,yOffset)
parent: web
tags: command web drag move
comments: true
---


### Description
This command automates the "drag" action on the target element, as denoted by `fromLocator`, to the x- and y- positions,
as denoted by `xOffset` and `yOffset` respectively. To drag the target element horizontally, specify `yOffset` as 0. To
drag the target element vertically, specify `xOffset` as 0.

The amount of drag (i.e. `xOffset` or `yOffset`) differs from application to application. So some amount of 
experimentation is required here. Furthermore, the starting position might have a part to play as well. One can use
the `nexial.web.dragFrom` System variable to control such starting position:

#### `nexial.web.dragFrom`
- `left`: set the starting point from the left-most corner of the target element.
- `right`: set the starting point from the right-most corner of the target element. 
- `top`: set the starting point from the top-most corner of the target element.
- `bottom`: set the starting point from the bottom-most corner of the target element.
- `middle`: set the starting point from the middle of the target element. **The is the default**.


### Parameters
- **fromLocator** - locator of the target web element.
- **xOffset** - the amount of horizontal move to make. Use negative integer to move left instead of right. 
- **yOffset** - the amount of vertical move to make. Use negative integer to move up instead of down.


### Example


### See Also
- [`dragAndDrop(fromLocator,toLocator)`](dragAndDrop(fromLocator,toLocator))
