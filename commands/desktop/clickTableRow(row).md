---
layout: default
title: clickTableRow(row)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command clicks on the specified row of the current data grid component. The corresponding data grid component must
first be recognized as "current" via the [`useTable(var,name)`](useTable(var,name)) command.

Note:
- In order to use this command make sure you have data on the specified row. In many cases, without data the 
  corresponding row cannot be clicked.
- `row` is 0-based. First row would be `0`.
- The click will be performed on the middle (approximate) of the target row component.
- If the specified row is currently not in displayed, the corresponding step will likely FAIL.


### Parameters
- **rowNum** -  The row number of the data grid populated by using search method.


### Example


### See Also
- [`clickTableCell(row,column)`](clickTableCell(row,column))
