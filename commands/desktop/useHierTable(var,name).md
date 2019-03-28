---
layout: default
title: useHierTable(var,name)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to use (and focus on) a specific desktop element that is rendered as a hierarchical grid, 
or hierarchical table. Such hierarchical table consists of hierarchical tree structure with parent and child nodes. 
Often these parent/child nodes can be expanded or collapsed to display data of the next level down.

By executing this command, Nexial will scan and collect the metadata of the hierarchical table. Such metadata consists 
of, among other things, the table headers and column count which helps the further execution of related commands.

In the `application.json` file, additional configuration in `extra` component of the respective hierarchical table is 
needed. Along with `headers`, 3 additional elements should be defined:
- `hierarchyColumn` - the column name of the hierarchy category. Such column provides the categorization of each "level"
  within one hierarchical table. This is optional (as some hierarchical table does not have such information). 
- `hierarchyList`   - the list of the hierarchy "type" available for the column defined in `hierarchyColumn`.
- `categoryColumn`  - the column name where the hierarchy "key" is defined and where the expand and collapse options 
  are usually found. This is usually where a parent row can be expanded or collapsed to show or hide, respectively, 
  its child information.

**NOTE**:
- `hierarchyColumn` and `hierarchyList` elements are to be provided in `extra` component, if such column is available 
  in the target hierarchical tables. 
- `categoryColumn` is a **REQUIRED** configuration as such column would be essential towards the automation of the 
  target hierarchical table.


### Parameters
- **var** - this parameter is stored with metadata of the hier table. Metadata consists of column headers and column count
- **name** - this parameter is the label of the hier table defined in the application.json file


### Example

### See Also
- [`assertHierCells(matchBy,column,expected,nestedOnly)`](assertHierCells(matchBy,column,expected,nestedOnly))
- [`assertHierRow(matchBy,expected)`](assertHierRow(matchBy,expected))
- [`collapseHierTable()`](collapseHierTable())
- [`editHierCells(var,matchBy,nameValues)`](editHierCells(var,matchBy,nameValues))
- [`saveHierCells(var,matchBy,column,nestedOnly)`](saveHierCells(var,matchBy,column,nestedOnly))
- [`saveHierRow(var,matchBy)`](saveHierRow(var,matchBy))
