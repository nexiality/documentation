---
layout: default
title: editTableCells(row,nameValues)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command is used to enter the values in a row of a table (data grid). This command should be used after the 
successful execution of [`useTable(var,name)`](useTable(var,name)). `row` specifies the target row number and its 
0-based. The `nameValues` parameter is a set of cell-value pairs in the form of 
```
[column name]=[value to enter]
[column name]=[value to enter]
[column name]=[value to enter]
...
``` 

The cell/value is separate by `=`, and each pair is separated by either a newline or 
[`${nexial.textDelim}`](../../systemvars/index#nexial.textDelim). For value, one can specify literal values such as 
`2016/02/22`, `100`, `7,254.10`, `Hello World`, or special commands:

- `[CLEAR]` – to clear data in the specified cell
- `[CHECK]` – to check the checkbox element in the specified cell
- `[UNCHECK]` – to uncheck the checkbox element in the specified cell
- `[CLICK]` – to click on the specific cell. In some rare situation, clicking on a cell updates its value 
  (by the application)
- `[<Function Key>]` - to send the function key in the table to the specific column. For example, 
  `Column 1=[F5]`,`Column2`=[TAB]`

Function Keys and literal value cannot be combined and sent as a column value with single command.

**Note:**
1. Both column name and value are case-sensitive. 
2. Either use [`nexial.textDelim`](../../systemvars/index) or newline as the pair delimiter to separate the cell/value 
   pairs. Do not mix the pair delimiter. 
3. Use equal sign (`=`) as delimiter between column name and value. Example:
   - `name=John Smith`
   - `date=07/17/2015`
   - `Member=[CHECK]`
   - `Citizen=[UNCHECK]`
   - `COMMENTS=[CLEAR]`
   - `Last Login=[CLICK]`
4. If a column is not specified, no action will be performed on the corresponding cell. 
5. It is possible to specify a row number (zero-based) 1 greater than currently available rows, Nexial will click on 
   such row to "create" a new row. 
6. If any of the specified cell is not editable or does not exists for the target table, Nexial will fail this 
   command execution.
7. Prior to executing this command, the appropriate `desktop.useForm(name)` and `desktop.useTable(name)` should be 
   invoked.


### Parameters
- **row** - this parameter is to specify the row number
- **nameValues** - is a set of cell-value pairs. See above for details


### Example


### See Also
