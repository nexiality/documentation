---
layout: default
title: nexial-core 1.6 (2018-10-08)
parent: release
tags: release nexial-core 1.6
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.6_0260" class="external-link" target="_nexial_link">Release 1.6</a>
2018-10-08


### General
- upgraded to Kotlin 1.2.70
- upgraded to nexial-seeknow-1.2. Supports sikulix-1.1.3.
- support default output directory via environment variable `NEXIAL_OUTPUT`
- support "ignored variable" via **NEW** System variable [`nexial.var.ignored`](../systemvars/index#nexial.var.ignored).
- code fix to support newer version of WPS (post-execution to open result automatically)
- prevent open results in CI/CD env.
- configurable JVM max memory via NEXIAL_MAX_MEM environment variable.
- exclude empty log files as links in execution summary
- include data variables specified via `JAVA_OPT` in execution summary
- (Linux/MacOSX only) store the batch file used to execute Nexial in the execution output directory. Good for 
  troubleshooting.
- prevent runtime error when WPS is selected as the spreadsheet program and the execution is conducted on Mac/Linux.
- fixed error regarding iteration data when `nexial.fallbackToPrevious` is set to `false`. Now Nexial correctly resolves
  data variable in the appropriate iteration definition, as specified in the data sheet.


### [Nexial Filter](../expressions)
- ` not contain `: **NEW** filter to support the `${...}` not contain "..." filter.
- ` not start with `: **NEW** filter to support the `${...}` not start with "..." filter.
- ` not end with `: **NEW** filter to support the `${...}` not end with "..." filter.


### Built-in Function
- [`$(array|length)`](../functions/$(array)): added logic to compensate for web element array with characters that 
  might be misinterpreted as array delimiter. Now it should be safe/correct to issue: <br/>
  `web    | saveElements(var,locator) | MyList | //div` <br/>
  `number | assertEquals(num1,num2)   | 53      | $(array|length|${MyList})`
- [`$(execution|step)`](../functions/$(execution)): added new built-in function param to have step level metadata like 
  activity, description, command etc. 
- **`$(format|base64decode|text)`** - base64 decode `text`.
- **`$(format|base64encode|text)`** - base64 encode `text`.


### Nexial Expression  
- [`[LIST(...) => count]`](../expressions/LISTexpression.md#count): added logic to compensate for web element array 
  with characters that might be misinterpreted as array delimiter. Now it should be safe/correct to issue: 
  `web    | saveElements(var,locator) | MyList | //div` <br/>
  `number | assertEquals(num1,num2)   | 53     | [LIST(${MyList}) => count] `
- [`[EXCEL(...) => csvWithHeader]`](../expressions/EXCELexpression#csvwithheader): convert a contiguous cell range (from
  Excel worksheet) to a [`CSV`](../expressions/CSVexpression) where the first range is treated as header.
- [`[EXCEL(...) => json(firstRowAsHeader)]`](../expressions/EXCELexpression#jsonfirstrowasheader): convert a contiguous 
  cell range (from Excel worksheet) to a [`JSON`](../expressions/JSONexpression) where the first range may be treated 
  as header to impact the output JSON structure.
- `save()` operation now supports appending content to existing file.
- [`XML` expression](../expressions/XMLexpression) updated with new operations:
  - **`attribute(xpath,name)`** - retrieves the value of `name` attribute from the element(s) that matched the specified
    `xpath`. If exactly one match is found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than
    one matches are found, a [`LIST`](LISTexpression) data type is returned instead.
  - **`content(xpath)`** - retrieves the content of the element(s) that matched the specified `xpath`. If exactly one 
    match is found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, 
    a [`LIST`](LISTexpression) data type is returned instead.
  - **`count(xpath)`** - counts the number of elements present at the specified `xpath`.
  - **`extract(xpath)`** - transform current XML document using `xpath`.
  - **`remove(xpath)`** - remove from the source XML the element(s) that matches the specified `xpath`.
  - **`store(var)`** - save current XML expression to a data variable.  If the specified `var` exists, its value will 
    be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
  - **`text`** - transform current XML document into its textual representation.
  - **`updateAttribute(xpath,name,value)`** - also known as **`update-attribute(xpath,name,value)`**. This operation 
    updates the attribute of all matched elements based on `name` and `value`. If `value` is empty, then the target 
    attributes are effectively removed. 
  - **`updateContent(xpath,content)`** - also known as **`update-content(xpath,content)`**. This operation updates (
    technically speaking, replace) the content of the matched elements with the specified `content`. `content` may be 
    text or XML nodes. If `content` is empty, then the content of the target elements are effectively removed. 
- [`TEXT` expression](../expressions/TEXTexpression)
  - **`base64decode`** - base64 decode text.
  - **`base64encode`** - base64 encode text.


### [base commands](../commands/base)
- [`saveCount(text,regex,saveVar)`](../commands/base/saveCount(text,regex,saveVar)): **NEW** command to save the number 
  of matches (based on `regex`) found in `text`.
- add code to automatically shut down screen recording at the end of an execution.


### [desktop commands](../commands/desktop)
- code fix to get text from the disabled combo type element.


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
- [`csv(file,worksheet,range,output)`](../commands/excel/csv(file,worksheet,range,output)): support multiple ranges.
- [`columnarCsv(file,worksheet,ranges,output)`](../commands/excel/columnarCsv(file,worksheet,ranges,output)): support
  merging of multiple ranges from the same worksheet. The merge is performed columnwise (not adding new rows).


### [io commands](../commands/io)
- [`nexial.io.eolConfig`](../systemvars/index#nexial.io.eolConfig): **NEW** System variable to control EOL character
  during file-write.
- [`validate(var,profile,inputFile)`](../commands/io/validate(var,profile,inputFile)): minor code fix for equals 
  validation and IN check error report format.
- [`rename(target,newFile)`](../commands/io/rename(target,newName)): **NEW** command to rename file or directory.


### [json command](../commands/json)
- [`assertEqual(expected,actual)`](../commands/json/assertEqual(expected,actual)): **NEW** command to compare JSON 
  documents.
- [`addOrReplace(json,jsonpath,input,var)`](../commands/json/addOrReplace(json,jsonpath,input,var)): now supports
  `json` either as JSON content or JSON file (must be fully qualified).


### [rdbms command](../commands/rdbms)
- fixed the issue of resolving SQL variable name that defined in the SQL file per statement.


### [step commands](../commands/step)
- [`observe(prompt)`] now supports error capturing. Use `FAIL ` as the beginning of your response to mark a step as FAIL.


### [web commands](../commands/web)
- reduce verbosity in web commands (controllable via `nexial.verbose`)
- code fix for downloading electron driver
- [`maximizeWindow()`](../commands/web/maximizeWindow()): FAIL for Electron since it's not supported by underlying driver.
- [`goBack()`](../commands/web/goBack()): FAIL for Electron since it's not supported by underlying driver.
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)):
  **NEW** command to save a "DIV"-style grid data to CSV file.
- [`maximizeWindow()`](../commands/web/maximizeWindow()): implemented native maximize strategy for Chrome/Mac since 
  Chrome on Mac doesn't support window maximizing.
- [`openHttpBasic(url,username,password)`](../commands/web/openHttpBasic(url,username,password)): support the access of
  URL protected by HTTP Basic authentication.
- [`typeKeys(locator,value)`](../commands/web/typeKeys(locator,value)): support keystroke automation on currently 
  active web element (no locator specified.)
- by default `electron` will not favor JS-based clicks
- configurable driver logging for chrome and electron automation via 
  [`nexial.browser.logElectron`](../systemvars/index#nexial.browser.logElectron)
- configurable driver logging for chrome and electron automation via 
  [`nexial.browser.logChrome`](../systemvars/index#nexial.browser.logChrome)
- [`executeScript(var,script)`](../commands/web/executeScript(var,script)): now support execution of JavaScript file.
