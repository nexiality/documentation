---
layout: default
title: saveTotalRowCount(file,worksheet,saveVar)
parent: excel
tags: command excel
comments: true
---


### Description
This command saves the total row count of a Excel (denoted by `file`) worksheet (denoted as `worksheet`) to the 
specified data variable (`saveVar`). More specifically, Nexial will look for the last row of data that contain data and
save that to `saveVar`. 


### Parameters
- **file** - Excel file to inspect
- **worksheet** - the worksheet to inspect
- **saveVar** - the data variable to save the last row that contains data


### Example


### See Also
- [`saveTotalColumnCount(file,worksheet,row,saveVar)`](saveTotalDataCount(file,worksheet,row,saveVar))
