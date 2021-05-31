---
layout: default
title: scrollLeft(locator,pixel)
parent: web
tags: command web
comments: true
---

### Description

<div style="color:red;background-color:#ffb0b0;font-weight:bold;padding:15px;margin:15px;">
PLEASE NOTE THAT THIS COMMAND HAS BEEN REMOVED SINCE THE UNDERLYING JAVASCRIPT CAN NO LONGER STABLY PERFORM
THE INTENDED OPERATIONS ON ALL BROWSERS.<br/>
This command might be reinstated in the future, if we can find a suitable solution.
</div>
<br/>


> **One should treat [`scrollElement(locator,xOffset,yOffset)`](scrollElement(locator,xOffset,yOffset)) as the 
successor of [`scrollLeft(locator,pixel)`](scrollLeft(locator,pixel)) and 
[`scrollRight(locator,pixel)`](scrollRight(locator,pixel)).**

- This command is to scroll left of the scroll element.
- In other words the command will scroll left to the defined pixel if element found and will pass the command or else fail otherwise.


### Parameters
- **locator** - this parameter is the locator of the element.
- **pixel** - this parameter is the dimension in pixel to the left of the element identified to be scrolled.


### Example
**Script**:<br/>
![](image/scrollLeft_01.png)

**Output**:<br/>
![](image/scrollLeft_02.png)


### See Also
- [`assertScrollbarHNotPresent(locator)`](assertScrollbarHNotPresent(locator))
- [`assertScrollbarHPresent(locator)`](assertScrollbarHPresent(locator))
- [`scrollElement(locator,xOffset,yOffset)`](scrollElement(locator,xOffset,yOffset))
- [`scrollPage(xOffset,yOffset)`](scrollPage(xOffset,yOffset))
- [`scrollRight(locator,pixel)`](scrollRight(locator,pixel))
- [`scrollTo(locator)`](scrollTo(locator))
