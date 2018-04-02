---
layout: default
title: useHierTable(var,name)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is used to automate hierarchy tables in desktop application.
- Hierarchy table consists of hierarchical tree structure with parent and child nodes.
- This command scans and holds the metadata of the hierarchical table during the test execution.
- Metadata consists of table headers and column count which helps the execution of further hierarchy table related commands.

It needs further configuration in extra component of the application.json file for respective hierarchical table. Along with the headers information, there are three additional elements to be defined. And those are:

- `hierarchyColumn`  - is the column name where the hierarchy category is defined.
- `hierarchyList` - is the list of the names defined in the hierarchyColumn.
- `categoryColumn` - is the column name where the hierarchy is defined and the expand and collapse button options are given.

**IMP**:

- `hierarchyColumn` and `hierarchyList` elements are to be provided in extra, if such column is available in hier tables. 
- `categoryColumn` is **MUST** to be provided as this column would be available for current hierarchical model tables.

### Parameters

- **var** - this parameter is stored with metadata of the hier table. Metadata consists of column headers and column count
- **name** - this parameter is the label of the hier table defined in the application.json file

### Example

### See Also