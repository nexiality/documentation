---
layout: default
title: scrollRight(locator,pixel)
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

> > **One should treat [`scrollElement(locator,xOffset,yOffset)`](scrollElement(locator,xOffset,yOffset)) as the supersede 
of [`scrollLeft(locator,pixel)`](scrollLeft(locator,pixel)) and [`scrollRight(locator,pixel)`](scrollRight(locator,pixel)).**

- This command scroll right on the first matched element of the specified `locator`.  The amount of scroll is 
  controlled by the specified `pixel`.   If the specified locator does not resolved to a valid element, this command 
  will consider as **FAIL**.
- Note that this command only make sense for elements that contains other elements and has a horizontal scrollbar.  
  For example, this command would like to have no effect on a button or a checkbox.


### Parameters
- **locator** - this parameter is the locator of the element.
- **pixel** - the amount of scroll to apply.


### Example


### See Also
- [`assertScrollbarHNotPresent(locator)`](assertScrollbarHNotPresent(locator))
- [`assertScrollbarHPresent(locator)`](assertScrollbarHPresent(locator))
- [`scrollElement(locator,xOffset,yOffset)`](scrollElement(locator,xOffset,yOffset))
- [`scrollLeft(locator,pixel)`](scrollLeft(locator,pixel))
- [`scrollPage(xOffset,yOffset)`](scrollPage(xOffset,yOffset))
- [`scrollTo(locator)`](scrollTo(locator))
