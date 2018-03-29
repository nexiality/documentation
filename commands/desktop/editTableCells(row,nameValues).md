---
title: desktop &raquo; editTableCells(row,nameValues)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is used to enter the values in table row.
- This command always should be used after useTable(var,name) command.
- Row number is 0-based.  So 0 means first row.
- The nameValues parameter is a set of cell-value pairs.  You would specify in the format of \[column name\]=\[value to enter\] for each pair and use carriage return or ${nexial.textDelim} to separate them.  For value, you can specify literal values like   
  
    
 **DATE**, **100**, **7,254.10**, **Hello World**,

**\[CLEAR\]** – to clear data in the specified cell

**\[CHECK\]** – to check the checkbox element in the specified cell

**\[UNCHECK\]** – to uncheck the checkbox element in the specified cell

**\[CLICK\]** – to click on the specific cell.  In some rare situation, clicking on a cell updates its value (by the application)

**\[\<Function Key\>\]** -  to send the function key in the table to the specific column. Like for **e.g.,** \<Column Name\>=\[F5\], \<Column Name\>=\[TAB\]

- Function Keys and the text value cannot be combined and sent as a column value with single command.


**Note that:**

1.  Both column name and value are case-sensitive. 
2.  Either use [`nexial.textDelim`](../../systemvars/index) or newline as the pair delimiter to separate between name/value pairs. Do not mix pair delimiter. 
3.  Use equal sign (=) as delimiter between column name and value.
    - name=John Smith  
    - date=07/17/2015  
    - Member=\[CHECK\]  
    - Citizen=\[UNCHECK\]  
    - COMMENTS=\[CLEAR\]  
    - Last Login=\[CLICK\]
    
4.  If a column is not specified, no action will be performed on the corresponding cell. 
5.  It is possible to specify a row number (zero-based) 1 greater than currently available rows, Nexial will click on such row to "create" a new row. 
6.  If any of the specified cell is not editable or does not exists for the target Table, Nexial will fail this command execution.
7.  Prior to executing this command, the appropriate `desktop.useForm(name)` and `desktop.useTable(name)` should be invoked.



### Parameter(s)

- **row** - this parameter is to specify the row number
- **nameValues** -  is a set of cell-value pairs. The format is <column name>= <value> (or) <column name>=<value\[Key\]> for each pair.   
    

### Example


### See Also
