---
layout: default
title: fromExcel(excel,worksheet,csvFile)
parent: csv
tags: command csv excel
comments: true
---


### Description
This command converts any `worksheet` of an `excel` file into a CSV file (denote `csvFile`). This is the new command 
name for the now-deprecated [`convertExcel(excel,worksheet,csvFile)`](convertExcel(excel,worksheet,csvFile)) command.


### Parameters
- **excel** - the Excel file to convert
- **worksheet** - name of the worksheet to convert
- **csvFile** - the destination CSV File. If exist, this file will be overwritten


### Example
**SampleData.xlsx**<br/>
![excelFile](image/fromExcel_01.png)<br/>
- We need the 'SalesOrders' in CSV format.<br/>

**Script:**<br/>
![script](image/fromExcel_02.png)<br/>
**Output.csv**<br/>
![outputCSV](image/fromExcel_03.png)

### See Also
- [`toExcel(csvFile,excel,worksheet,startCell)`](toExcel(csvFile,excel,worksheet,startCell))
