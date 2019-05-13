---
layout: default
title: runSQLs(var,sqls)
parent: localdb
tags: command localdb sqlite embedded
comments: true
---


### Description
This command executes one or many SQL statements on the embedded database. Nexial internally uses the same code as with 
[RDMBS &raquo; `runSQLs(var,db,sqls)`](../rdbms/runSQLs(var,db,sqls)). Hence these commands behave very similar to each
other. See [RDMBS &raquo; `runSQLs(var,db,sqls)`](../rdbms/runSQLs(var,db,sqls)) and 
[`Working with Execution Result`](../rdbms/index#working-with-execution-result) for more details.
 

### Parameters
- **var** - the data variable to store result(s) of `sqls`
- **sqls** - one or more SQL statements to execute.


### Example


### See Also
- [`exportCSV(sql,output)`](exportCSV(sql,output))
- [`importRecords(var,sourceDb,sql,table)`](importRecords(var,sourceDb,sql,table))
- [localdb commands](index#available-commands)
- [RDBMS &raquo; `runSQLs(var,db,sql)`](../rdbms/runSQLs(var,db,sql))
