---
layout: default
title: saveTotalColumnCount(file,worksheet,row,saveVar)
parent: excel
tags: command excel
comments: true
---


### Description
This command saves the total column count of a row in a Excel (denoted by `file`) worksheet (denoted as `worksheet`) 
to the specified data variable (`saveVar`). The specified `row` must be a valid row number in the specified Excel file;
it is 1-based, as found displayed in Excel.


### Parameters
- **file** - Excel file to inspect
- **worksheet** - the worksheet to inspect
- **row** - row number to inspect
- **saveVar** - the data variable to save the last row that contains data


### Example


### See Also
- [`saveTotalRowCount(file,worksheet,saveVar)`](saveTotalRowCount(file,worksheet,saveVar))
