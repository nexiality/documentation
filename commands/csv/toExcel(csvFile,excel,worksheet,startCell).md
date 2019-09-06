---
layout: default
title: toExcel(csvFile,excel,worksheet,startCell)
parent: csv
tags: command csv excel
comments: true
---


### Description
This command instruct Nexial to import the content of a CSV file (denote `csvFile`) into a `worksheet` of a `excel` 
file. Use the `startCell` parameter to specify the starting cell from which the CSV content will be imported. The 
cell format will be the same as the familiar Excel cell format - `COLUMN_LETTER`:`ROW_NUMBER`. For example, `A5`.

If the specified `excel` file doesn't exist, a new Excel file will be created. If the specified `worksheet` exists, its
content will be overridden by the specified CSV content.


### Parameters
- **csvFile** - the source CSV File from which to import
- **excel** - the destination Excel file
- **worksheet** - name of the destination worksheet
- **startCell** - starting cell address, such as `A1`, to import into


### Example
**Source CSV file : CountyDetails.csv**<br/>
![sourceCsv](image/toExcel_01.png)

**Script**<br/>
![script](image/toExcel_02.png)<br/>
<br>**Output : CountyDetails.xlsx**<br/>
![outputExcel](image/toExcel_03.png)

### See Also
- [`fromExcel(excel,worksheet,csvFile)`](fromExcel(excel,worksheet,csvFile))