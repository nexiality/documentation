---
layout: default
title: saveHierCells(var,matchBy,column,nestedOnly)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is used to save cell(s) values of hierarchical table to the given variable.
- Cell(s) values are retrieved as per the given `matchBy` criteria and the `column` name specified.
- This command gives the option to choose **EITHER** the cell value of the column to be returned for the current row **OR** list of cell values of the given column for all the nested rows.
- If `nestedOnly` parameter is set as **true**, list of all the nested cell values is returned. If `nestedOnly` parameter is set as **false**, only the cell value of the current row will be returned.

### Parameters

- **var** - this parameter is used to store the returned cell(s) values.
- **matchBy** - is the hierarchical data criteria of the `categoryColumn` until that row. Refer the format in the example.
- **column** - is the column name for which the cell values are to be returned.
- **nestedOnly** - is the **boolean** parameter. If set as **true,** list of all the nested cell values is returned. If set as **false,** only the cell value of the current row will be returned.

### Example

### See Also
