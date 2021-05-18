---
layout: default
title: saveTableRowsRange(var,beginRow,endRow,csv)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to save rows of data from the [current table](useTable(var,name)) into `var` for 
offline (and often, faster) data processing. All the captured data will be treated as text; no data type conversion or 
formatting will be performed. One would use `beginRow` and `endRow` to indicate the row(s) to capture.

Note that this command will work only after the [`useTable(name)`](useTable(var,name)) has been invoked.

Optionally, one can set the last parameter `csv` to `true` to obtain the same data set as a CSV structure. Note that
this CSV structure will include column header as well. Often converting grid data to CSV is preferred as one would be
able to utilize the various CSV-related facilities within Nexial for additional automation. See 
[`saveAllTableRows(var,csv)`](saveAllTableRows(var,csv)) for examples.
    
As of [v3.7](../../release/nexial-core-v3.7.changelog), this command supports also "HierTable" (as a "table"). One may 
use this command for both the traditional "data grid" component as well as the hierachical/collapsible "TreeView" grid.


### Parameters
- **var** - this parameter will store the table row value into variable
- **beginRow** - is the row number for the desired row range to begin with.
- **endRow** - is the row number for the desired row range to end with.
- **csv** - `true` if data should be converted into CSV structure


### Example
See above


### See Also
- [`saveAllTableRows(var,csv)`](saveAllTableRows(var,csv))
- [`saveRowCount(var)`](saveRowCount(var))
- [`saveTableRows(var,contains,csv)`](saveTableRows(var,contains,csv))
- [`useHierTable(var,name)`](useHierTable(var,name))
- [`useTable(var,name)`](useTable(var,name))
