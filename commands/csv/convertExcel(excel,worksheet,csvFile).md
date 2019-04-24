---
layout: default
title: convertExcel(excel,worksheet,csvFile)
parent: csv
tags: command csv
comments: true
---

**DEPRECATED - USE [`fromExcel(excel,worksheet,csvFile)`](fromExcel(excel,worksheet,csvFile)) INSTEAD.**


### Description
This command converts a `worksheet` of an `excel` file into a CSV file (denote `csvFile`). 


### Parameters
- **excel** - the Excel file to convert
- **worksheet** - name of the worksheet to convert
- **csvFile** - the destination CSV File. If exist, this file will be overwritten


### Example
**Script**:<br/>
![script](image/convertExcel_01.png)

**Output**: .csv file is created at given location<br/>
![output](image/convertExcel_02.png)


### See Also
- [`fromExcel(excel,worksheet,csvFile)`](fromExcel(excel,worksheet,csvFile))
- [`toExcel(csvFile,excel,worksheet,startCell)`](toExcel(csvFile,excel,worksheet,startCell))
