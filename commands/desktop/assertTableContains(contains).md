---
layout: default
title: assertTableContains(contains)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command asserts the current table contains the specified value (`contains`). Internally all the data of the 
current table will be read to evaluate this assertion.

This command supports PolyMatcher, which provides greater flexibility and expressiveness in data filter:

{% include _polymatcher.md %}


### Parameters
- **contains** - this parameter is the cell values. It can be multiple values separated with a text delimiter.


### Example


### See Also
- [`assertTableRowContains(row,contains)`](assertTableRowContains(row,contains))