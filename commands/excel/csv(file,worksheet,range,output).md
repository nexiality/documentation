---
layout: default
title: csv(file,worksheet,range,output)
parent: excel
tags: command excel csv worksheet
comments: true
---


### Description
This command transform a contiguous cell `range` from a Excel `worksheet` to a CSV `output` file. The `file` parameter
represents the Excel file to read from.


### Parameters
- **file** - The excel file to read from.
- **worksheet** - The worksheet to read from.
- **range** - The range to read from.
- **output** - The CSV output to write to (as CSV format). 


### Example
**Script**:<br/>
![](image/csv_01.png)

The Excel worksheet in question is as follows:<br/>
![](image/csv_02.png)

The **output** CSV file look something like this:<br/>
![](image/csv_03.png)


### See Also
- [`json(file,worksheet,range,header,output)`](json(file,worksheet,range,header,output))
- [`[EXCEL(...) => csv()]`](../../expressions/EXCELexpression#csv)
- [`[EXCEL(...) => csvWithHeader()]`](../../expressions/EXCELexpression#csvwithheader)
- [`[EXCEL(...) => json(firstRowAsHeader)]`](../../expressions/EXCELexpression#jsonfirstrowasheader)
