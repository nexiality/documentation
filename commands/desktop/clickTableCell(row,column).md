---
layout: default
title: clickTableCell(row,column)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command clicks on the specified `column` of the specified `row` of the current data grid component. The 
corresponding data grid component must first be recognized as "current" via the [`useTable(var,name)`](useTable(var,name)) 
command.

Note:
- In order to use this command make sure you have data on the specified `row` and `column`. In many instances, data grid
  cell without any data would likely NOT respond to any click.
- `row` is 0-based.
- `column` should match the header of the target data grid component.
- The click will be performed on the middle (approximate) of the target cell.
- If the specified row is currently not in displayed, the corresponding step will likely FAIL.


### Parameters
- **rowNum** -  This parameter is the row number of the table(data Grid)
- **column-** -  This is parameter is the column name of the table(data Grid)


### Example


### See Also

- [`clickTableRow(row)`](clickTableRow(row))