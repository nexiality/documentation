---
layout: default
title: nexial-core 2.3 (2019-06-??)
parent: release
tags: release nexial-core 2.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.3" class="external-link" target="_nexial_link">Release 2.3</a>
2019-06-??


### General
#### Fixes
- fixed error when dynamic data cannot be resolved during the initialization of an execution. This fix stabilize the 
  execution.

#### Improvements
- omit the creation of hyperlink on path longer than 254 characters; Excel doesn't support long path.


### [Nexial Installer](https://github.com/nexiality/nexial-installer)


### System Variables
- [`nexial.quiet`](../systemvars/index#nexial.quiet): **NEW** System variable to drastically reduce console logging. 
  Default is false.


### Nexial Expression
- [TEXT &raquo; `base64decodeThenSave(file,append)`] or [TEXT &raquo; `base64decode-then-save(file,append)`]: **NEW** 
  operation to perform BASE64 decoding on current TEXT content and then saving the decoded content to `file`. This is
  useful when the decoded content is expected to be binary data. 


### Built-in Function


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


### [desktop commands](../commands/desktop)


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


### [web commands](../commands/web)
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)): fix 
  data collection logic to consider boh `TD` and `TH` data found under a `TBODY` container.
  

