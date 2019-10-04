---
layout: default
title: nexial-core 2.3 (2019-06-03)
parent: release
tags: release nexial-core 2.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.3_0518" class="external-link" target="_nexial_link">Release 2.3</a>
2019-06-03

### General
#### Fixes
- fixed error when dynamic data cannot be resolved during the initialization of an execution. This fix stabilize the 
  execution.
- fixed an parsing error to consider other character sequences that look like a Nexial Expression.
- add execute permission to `nexial-artifact-repair.sh` script.
- fixed excel file corruption after repairing file with `nexial-artifact-repair.cmd|sh` when there is data in last cell. 
  Added 10000 as a maximum row and column limit to read and write data of excel.

#### Improvements
- omit the creation of hyperlink on path longer than 254 characters; Excel doesn't support long path.
- updated to Kotlin 1.3.31, Spring 5, SpringBoot 2.1.4 - improved stability and performance.
- [`nexial-artifact-repair.cmd|sh`](../userguide/BatchFiles#nexial-artifact-repair): 
  **NEW** Nexial utility batch file to repair excel file (remove unnecessary links and comments).
- minor update to MacOSX/*NIX script to that focus will stay on terminal when Nexial execution commences.
- [`nexial-var-update.cmd|sh`](../userguide/BatchFiles#nexial-variable-update): 
  now support batch files and minor improvement to console output.
- more informative error messages when invalid or out-of-bound array index is referenced.
- console log hygiene; minor reduction of duplicated logs

### [Nexial Installer](https://github.com/nexiality/nexial-installer)
- released 1.4.2 for minor fix script permission to MacOS/*NIX installation.

### System Variables
- [`nexial.quiet`](../systemvars/index#nexial.quiet): **NEW** System variable to drastically reduce console logging. 
  Default is false.
- [`nexial.csv.maxColumns`](../systemvars/index#nexial.csv.maxColumns): **NEW** System variable to alter default max.
  number of columns to allow during the parsing of a CSV file. Applicable to 
  [CSV expression](../expressions/CSVexpression#parseconfig) and [`CSV`](../commands/csv) commands.
- [`nexial.csv.maxColumnWidth`](../systemvars/index#nexial.csv.maxColumnWidth): **NEW** System variable to alter default 
  max. number of characters allowed per column during the parsing of a CSV file. Applicable to 
  [CSV expression](../expressions/CSVexpression#parseconfig) and [`CSV`](../commands/csv) commands.

### Nexial Expression
- [TEXT &raquo; `base64decodeThenSave(file,append)`] or [TEXT &raquo; `base64decode-then-save(file,append)`](../expressions/TEXTexpression): 
  **NEW** operation to perform BASE64 decoding on current TEXT content and then saving the decoded content to `file`. 
  This is useful when the decoded content is expected to be binary data. 
- [`LIST`](../expressions/LISTexpression): now supports array/list data variables, such as those derived from
  [web &raquo; `saveTextArray(var,locator)`](../commands/web/saveTextArray(var,locator)), 
  [base &raquo; `split(text,delim,saveVar)`](../commands/base/split(text,delim,saveVar)) or the alike.

### Nexial Filter
- [` has file-size`](../flowcontrols/filter#description): **NEW** filter on file size (and inherently file availability)
- [` is readable-path`](../flowcontrols/filter#description): **NEW** filter on valid directory.

### [aws.sqs commands](../commands/aws.sqs)
- [`receiveMessage(profile,queue,var)`](../commands/aws.sqs/receiveMessage(profile,queue,var)): no message received no 
  longer result in a FAIL to the corresponding step.
- [`receiveMessages(profile,queue,var)`](../commands/aws.sqs/receiveMessages(profile,queue,var)): no message received 
  no longer result in a FAIL to the corresponding step.
- [`purgeQueue(profile,queue,var)`](../commands/aws.sqs/purgeQueue(profile,queue,var)): **NEW** command to clear out 
  all messages in target SQS queue.

### [base commands](../commands/base)
- [`repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)): additional logging to indicate the
  start of each loop.

### [csv commands](../commands/csv)
- [`fromExcel(excel,worksheet,csvFile)`](../commands/csv/fromExcel(excel,worksheet,csvFile)): fix coding error that 
  caused empty Excel cells not to be converted to empty CSV cells.
- [`fromExcel(excel,worksheet,csvFile)`](../commands/csv/fromExcel(excel,worksheet,csvFile)): fix to now consider
  surround text with comma with double quotes, thus making such data "CSV safe".
- [`fromExcel(excel,worksheet,csvFile)`](../commands/csv/fromExcel(excel,worksheet,csvFile)): fix to consider 
  `nexial.textDelim` as CSV cell delimiter.

### [external commands](../commands/external)
- support the console display while external program is actively executing via `nexial.external.console` (default is `false`).
- [`tail(id,file)`](../commands/external/tail(id,file)): simulate the *NIX tail command.

### [localdb commands](../commands/localdb)
- [`cloneTable(var,source,target)`](../commands/localdb/cloneTable(var,source,target)): **NEW** command to clone one
  table, both structure and data, to another table in the same localdb schema
- [`dropTables(var,tables)`](../commands/localdb/dropTables(var,tables)): **NEW** command to drop (remove) one or more 
  tables in the localdb schema
- [`exportCSV(sql,output)`](../commands/localdb/exportCSV(sql,output)): **NEW** command to export query result to CSV file
- [`exportEXCEL(sql,output,sheet,start)`](../commands/localdb/exportEXCEL(sql,output,sheet,start)): **NEW** command
   to export query result to EXCEL file
- [`exportJSON(sql,output,header)`](../commands/localdb/exportJSON(sql,output,header)): **NEW** command  to export 
  query result to JSON file
- [`exportXML(sql,output,root,row,cell)`](../commands/localdb/exportXML(sql,output,root,row,cell)): **NEW** command to 
  export query result to XML file
- [`importCSV(var,csv,table)`](../commands/localdb/importCSV(var,csv,table)): **NEW** command to import CSV data to 
  localdb
- [`importEXCEL(var,excel,sheet,ranges,table)`](../commands/localdb/importEXCEL(var,excel,sheet,ranges,table)): **NEW** 
  command to import Excel data to localdb
- [`importRecords(var,sourceDb,sql,table)`](../commands/localdb/importRecords(var,sourceDb,sql,table)): **NEW** command
  to import query result from one database to localdb
- [`purge(var)`](../commands/localdb/purge(var)): **NEW** command to purge the entire localdb database
- [`runSQLs(var,sqls)`](../commands/localdb/runSQLs(var,sqls)): **NEW** command to execute SQL queries against localdb

### [io commands](../commands/io)
- [`saveMatches(var,path,filePattern)`](../commands/io/saveMatches(var,path,filePattern)): now support muti-criteria 
  filtering using Nexial Filter syntax on file `name`, `size` and `lastMod`.
- [`writeBase64decode(encodedSource,decodedTarget,append)`](../commands/io/writeBase64decode(encodedSource,decodedTarget,append)): 
  **NEW** command to write decoded content to file as binary.
- [`writeBase64decode(encodedSource,decodedTarget,append)`](../commands/io/writeBase64decode(encodedSource,decodedTarget,append)): 
  fix to write file correctly; added `append` parameter 
- [`writeBase64decode(encodedSource,decodedTarget,append)`](../commands/io/writeBase64decode(encodedSource,decodedTarget,append)): 
  no longer require `encodedSource` to be a valid file.

### [web commands](../commands/web)
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)): fix 
  data collection logic to consider boh `TD` and `TH` data found under a `TBODY` container.
- [`assertTextNotContain(locator,text)`](../commands/web/assertTextNotContain(locator,text)): assert that the 
  text represented via `locator` does **NOT** contain `text`.
- fixed the resolution of window/tab when an existing window/tab is closed or removed.  
- [`open(url)`](../commands/web/open(url)): now supports local file (must be fully qualified).
