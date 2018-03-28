---
title: web &raquo; scrollRight(locator,pixel)

parent: web
tags: command web
comments: true
---

### Description

*   This command scroll right on the first matched element of the specified `locator`.  The amount of scroll is controlled by the specified `pixel`.   If the specified locator does not resolved to a valid element, this command will consider as **FAIL**.
*   Note that this command only make sense for elements that contains other elements and has a horizontal scrollbar.  For example, this command would like to have no effect on a button or a checkbox.

### Parameter(s)

- **locator** - this parameter is the locator of the element.
- **pixel** - the amount of scroll to apply.

### Example

### See Also

*   [`scrollLeft(locator,pixel`](scrollLeft(locator,pixel))
*   [`assertScrollbarHNotPresent(locator)`](assertScrollbarHNotPresent(locator))
*   [`assertScrollbarHPresent(locator)`](assertScrollbarHPresent(locator))