---
layout: default
title: queryAsCSV(var,sql)
parent: localdb
tags: command localdb sqlite embedded table export csv
comments: true
---


### Description
This command automates the export of a query (`sql`) result from `localdb` database into a data variable denoted as 
`var`. The content of the query result will be stored as CSV. The behavior and outcome of this command is very similar 
to that of [localdb &raquo; `exportCSV(sql,output)`](exportCSV(sql,output)), except that the CSV content is stored to 
a data variable. The CSV content will be comma-delimited, with newline (`\n`) as the record separator.

If no result is found via `sql`, or if there should be any error during the execution of the query, Nexial will not
store as data to `var`.


### Parameters
- **sql** - the query to execute. Note that if this query does not result in any dataset (such as a UPDATE or 
  INSERT query), then only the result metadata file (JSON) will be generated.
- **var** - the target data variable to store the CSV content.


### Example


### See Also
- [`exportCSV(sql,output)`](exportCSV(sql,output))
