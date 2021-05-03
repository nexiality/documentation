---
layout: default
title: useTableRow(var,row)
parent: desktop
tags: command desktop
comments: true
---


### Description
This command instructs Nexial to inspect a specific row in the current data grid component (a.k.a. `table`). This 
command must be invoked **ONLY** after [`useTable(var,name)`](useTable(var,name)) is successfully executed (which also
means that we have established the "current" data grid component.). If no data grid component can be found or no data 
grid is set as the "current" data grid component, then the corresponding step will return as **FAIL**.

If the specified row - denoted by `row` - can be referenced, Nexial will inspect it. If the specified row is currently 
unavailable, Nexial will attempt to create it. The row metadata is stored in a data variable denoted by `var`.

Assuming that the specified variable is `myRow`:
- `${myRow}.row` - the row number, as specified.
- `${myRow}.newRow` - `true` if the specified row was created during the execution of this command.
- `${myRow}.columnNames` - the list of column names found for the specified row.


### Parameters
- `var` - the variable name to store the metadata of the specified row.
- `row` - the row number to inspect and to "use" in subsequent commands.


### Example


### See Also
- [`editTableCells(row,nameValues`](editTableCells(row,nameValues))
- [`useHierTable(var,name)`](useHierTable(var,name))
- [`useTable(var,name)`](useTable(var,name))
