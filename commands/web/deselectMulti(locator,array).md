---
layout: default
title: deselectMulti(locator,array)
parent: web
tags: command web
comments: true
---

### Description
This command deselects one or more items from a `<SELECT>` element specified by `locator`. The item(s) to deselect is
specified via the `array` parameter, where each item is separated by [`nexial.textDelim`].

Note that only a `<SELECT>` element that supports multi-select (i.e. with attribute `multiple=true`) can support 
deselection of its `<OPTION>` elements. Executing this command against a single-select `<SELECT>` element will render
a FAIL to the corresponding step.

{% include _polymatcher.md %}


### Parameters
- **locator** - this parameter is the locator of the element.
- **array** - this parameter is the list of the item to be unselected from the listbox.


### Example
![](image/deselectMulti_01.png)

**Output**:<br/>
![](image/deselectMulti_02.png)


### See Also
- [`selectMultiOptions(locator)`](selectMultiOptions(locator))