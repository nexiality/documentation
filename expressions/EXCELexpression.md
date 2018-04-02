---
title: EXCEL expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
In many ways the Excel document works and feels like a [CSV](CSVexpression) document.  Most significant differences 
would be formatting, formula and sheets.  For the purpose of test automation, Nexial focuses only on the 
"_CSV-like, tabular data set"_ part of Excel spreadsheets.  To start using this expression, a reference to the full 
path of the target Excel file is needed.  Here are a few examples:

`[EXCEL(C:\my_project\my_data\my_excel.xlsx) => ...]`

`[EXCEL( ${spreadsheet location} ) => ...]` 

The second example uses a data variable to encapsulate the location of an Excel spreadsheet.


### Specifying cell location and range
Within this expression, it is quite common to reference a specific cell or a contiguous set of cells using the 
conventional Excel address format.  To specify a range, use the range format as follows:

`[column letter][row number]:[column letter][row number]`

For example, `C4:T25` would represent a contiguous range of cells starting from `C4`, spread breadth-wise to `T4` and 
then spread depth-wise to `T25`.  This would make up an "area" of 18x22, or 396, cells:

![](image/EXCELexpression_01.png)

To specify the location of a cell, simply use the format: `[column letter][row number]`.


### Operations
- **`clear(range)`** \- clear off any existing value from the cells found in the range specified by `range`.  After 
  clearing off any existing value from the target cells, cell values are recaptured (via **`read()`**) again to ensure 
  relevancy.

- **`columnCount`** \- return the number of columns captured.

- **`csv`** \- transform current EXCEL content into **[`CSV`](CSVexpression)**.

- **`pack`** \- trim (remove beginning and trailing spaces) the values of captured cell and remove any blank rows in 
  the captured cells.

- **`read(sheet,range)`** \- read a contiguous set of cell values in a worksheet denoted by `sheet`, in a range 
  denoted by `range`.  See above for more details on specifying cell range.   All the cells in the specified range 
  will be read, regardless if those cells contain any value.  After this operation, **`text`** will render the 
  captured value as `LIST` of `LIST`.

- **`rowCount`** \- return the number of rows captured.

- **`save(file,sheet,start)`** \- save the captured cell values to a Excel `file` (existing or new), using the 
  specified `sheet` as the target worksheet and `start` as the start cell position where the captured cell values will 
  be saved to.  For example, `[EXCEL(${file}) => read(Sheet1,A5:M10) save(${file},Sheet1,A11:M16)]` would effectively 
  copy cell value from `A5:M10` to `A11:M16` (same sheet).

- **`store(var)`** \- save current EXCEL expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
    
- **`text`** - transform the current EXCEL cell data to text.  This would be the plain text rendition of the 
  referenced cell data.   Note that if **`text`** is called prior to the **`read()`** operation, then only the 
  location of the underlying Excel file will be returned.  In order to return the cell content, the **`read()`** 
  operation must be invoked.

- **`transpose`** - transpose captured cell values so that row data is displayed as column data, and column's as row's.

- **`worksheets`** \- retrieves a list of worksheets in the referenced Excel file.
    
- **`writeAcross(start,value1,value2,value3,...)`** - starting from the cell location specified via `start`, save 
  into cells the values as specified via `value1`, `value2`, `value3`, ... by moving to the right for each value 
  specified.  For example, 
  `[EXCEL( ${file} ) => read(Sheet1,B2:F20) writeAcross(B3,Banana,Grape,Apple,Kiwi,Black Concurrent]` would write 
  the list of fruits (Banana, Grape, Apple, Kiwi, and Black Concurrent) into Sheet1, starting from `B3`.  Therefore 
  `Banana` is stored to `B3`, `Grape` is stored to `C3`, Apple to `D3`, and so on:
    
  (before)  
  ![](image/EXCELexpression_02.png)  

  (after)  
  ![](image/EXCELexpression_03.png)

- **writeDown(start,value1,value2,value3,...)** \- store `value1`, `value2`, so on, starting from the cell position 
  denoted by `start`.  See **`writeAcross()`** for more details.


### Example
The content of excel file stored at location `C:\projects\xyz.xlsx` is:
![](image/EXCELexpression_04.png)
 
**Script**:<br/>
![Script](image/EXCELexpression_05.png)

**Output**:<br/>
![Output](image/EXCELexpression_06.png)
