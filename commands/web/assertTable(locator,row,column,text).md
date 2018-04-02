---
title: assertTable(locator,row,column,text)
parent: web
tags: command web
comments: true
---

### Description

- This command is the assert the row and column values of the table.
- In other words the command will assert the required value from table as per the row & column provided as Input Parameters.
- The command will pass if the required values are found in the table or else fail otherwise.

### Parameters

- **locatorScript** - this parameter is the locator of the element.
- **row** - this parameter is the row number of the web table.
- **column** - this parameter is the column number of web table.
- **text** - this parameter is the actual text to be found in the table row and column.

### Example

**Script**:<br/>
![](image/assertTable_01.png)

**Output**:<br/>
![](image/assertTable_02.png)

### See Also

- [`assertTextPresent(text)`](assertTextPresent(text).html)
- [`assertElementPresent(locator)`](assertElementPresent(locator).html)