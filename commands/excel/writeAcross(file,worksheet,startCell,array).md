---
layout: default
title: writeAcross(file,worksheet,startCell,array)
parent: excel
tags: command excel
comments: true
---


### Description
This command writes the data in the excel `worksheet` across the row with the `given` array of the values.


### Parameters
- **file** - the Excel file to write to
- **worksheet** - the name of the worksheet to write to
- **startCell** - the starting cell to write
- **array** - list of data values to write to the specified Excel `file`, `worksheet`.  Multiple values are separated by 
  [`$(nexial.textDelim)`](../../systemvars/index#nexial.textDelim).
    

### Example
**Script**:<br/>
![](image/writeAcross_01.png)

**Output**:<br/>
![](image/writeAcross_02.png)


### See Also
- [`write(file,worksheet,startCell,data)`](write(file,worksheet,startCell,data))
- [`writeDown(file,worksheet,startCell,array)`](writeDown(file,worksheet,startCell,array))
- [`writeVar(var,file,worksheet,startCell)`](writeVar(var,file,worksheet,startCell))
