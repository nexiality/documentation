---
layout: default
title: xls2xlsx(xlsFile,xlsxFile)
parent: excel
tags: command excel xls xlsx
comments: true
---


### Description
This command converts an Excel file in XLS format (pre-2007 format) to the XLSX format (2007 and after). The target can
either be a fully qualified file name or a directory where the converted file should reside. If a directory is specified
as the`xlsxFile` then Nexial will derive at the target file name based on the source (i.e. `xlsFile`). For example,

```
excel | xls2xlsx(xlsFile,xlsxFile) | /path1/path2/myFile.xls | /path3/path4/ 
```

Nexial will convert `/path1/path2/myFile.xls` to `/path3/path4/myFile.xlsx`.

If `xlsxFile` resolves to an existing file, it will be overwritten during file conversion.

The source file will remain as is.


### Parameters
- **xlsFile** - the Excel file to convert; must be pre-2007 format (file ending with `.xls`)
- **xlsxFile** - the target Excel file for this conversion; assumes file saved with an `.xlsx` extension.


### Example
**Script**:<br/>
```
excel | xls2xlsx(xlsFile,xlsxFile) | /path1/path2/myFile.xls | /path3/path4/myNewFile.xlsx 
```

**Output**:<br/>
The Excel file `/path1/path2/myFile.xls` is converted to `/path3/path4/myNewFile.xlsx`. The source file 
`/path1/path2/myFile.xls` will remain as is. 


### See Also
