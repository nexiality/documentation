---
layout: default
title: nexial-core 1.6 (2018-10-??)
parent: release
tags: release nexial-core 1.6
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.6" class="external-link" target="_nexial_link">Release 1.6</a>
2018-10-??


### General
- support default output directory via environment variable `NEXIAL_OUTPUT`


### Nexial Filter


### Flow Control


### Built-in Function
- [`$(array|length)`](../functions/$(array)): added logic to compensate for web element array with characters that 
  might be misinterpreted as array delimiter. Now it should be safe/correct to issue: 
  `web    | saveElements(var,locator) | MyList | //div` 
  `number | assertEquals(num1,num2)   | 53      | $(array|length|${MyList}) `


### Event Notification


### Nexial Expression  
- [`[LIST(...) => count]`](../expressions/LISTexpression.md#count): added logic to compensate for web element array 
  with characters that might be misinterpreted as array delimiter. Now it should be safe/correct to issue: 
  `web    | saveElements(var,locator) | MyList | //div` <br/>
  `number | assertEquals(num1,num2)   | 53      | [LIST(${MyList}) => count] `
- [`[EXCEL(...) => csvWithHeader`](../expressions/EXCELexpression#csvwithheader): convert a contiguous cell range (from
  Excel worksheet) to a [`CSV`](../expressions/CSVexpression) where the first range is treated as header.
- [`[EXCEL(...) => json(firstRowAsHeader)`](../expressions/EXCELexpression#jsonfirstrowasheader): convert a contiguous 
  cell range (from Excel worksheet) to a [`JSON`](../expressions/JSONexpression) where the first range may be treated 
  as header to impact the output JSON structure.
    

### [base commands](../commands/base)
- [`saveCount(text,regex,saveVar)`](../commands/base/saveCount(text,regex,saveVar)): *NEW* command to save the number of
  matches (based on `regex`) found in `text.

### [io commands](../commands/io)


### [csv commands](../commands/csv)


### [excel commands](../commands/excel)
- [`assertPassword(file)`](../commands/excel/assertPassword(file)): **NEW** command to assert if a password is set to 
  Excel file.
- [`clearPassword(file,password)`](../commands/excel/clearPassword(file,password)): **NEW** command to clear the 
  password from Excel file.
- [`setPassword(file,password)`](../commands/excel/setPassword(file,password)): **NEW** command to set a password to 
  Excel file.
- [`csv(file,worksheet,range,output)`](../commands/excel/csv(file,worksheet,range,output)): **NEW** command to convert
  a contiguous cell range (from Excel worksheet) to a CSV file (`output`).
- [`json(file,worksheet,range,header,output)`](../commands/excel/json(file,worksheet,range,header,output)): **NEW**
  command to convert a contiguous cell range (from Excel worksheet) to a JSON file (`output`).


### [json command](../commands/json)
- [`assertEqual(expected,actual)](../commands/json/assertEqual(expected,actual)): **NEW** command to compare JSON 
  documents.


### [rdbms command](../commands/rdbms)


#### [web commands](../commands/web)


### [web commands](../commands/web)
- reduce verbosity in web commands (controllable via `nexial.verbose`)
- code fix for downloading electron driver


### [webalert commands](../commands/webalert)
