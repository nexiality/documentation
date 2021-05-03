---
layout: default
title: editCurrentRow(nameValues)
parent: desktop
tags: command desktop
comments: true
---

### Description

**DEPRECATED - USE [`editTableCells(row,nameValues)`](editTableCells(row,nameValues)) INSTEAD.**


This command instructs Nexial to edit the cells in the current row of the current data grid component (a.k.a. `table`). 
The current row is determined by the most recent use of these commands:

- [`useTableRow(var,row)`](useTableRow(var,row))
- [`editTableCells(row,nameValues)`](editTableCells(row,nameValues))

If the current row cannot be determined, then the corresponding step would return as FAIL.

The use of the `nameValues` parameter is the same as [`editTableCells(row,nameValues)`](editTableCells(row,nameValues)).
See [`editTableCells(row,nameValues)`](editTableCells(row,nameValues)) for more detail.


### Parameters
- **nameValues** - is a set of cell-value pairs. See [`editTableCells(row,nameValues)`](editTableCells(row,nameValues)) 
  for details


### Example


### See Also
