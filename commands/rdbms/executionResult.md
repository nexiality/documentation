---
layout: default
title: Execution Result
parent: rdbms
tags: command rdbms
comments: true
---


### Working with Execution Result
Executing an SQL statement results in a series of outcome. The most common and sought-after is, of course, the 
query result or dataset - assuming the executed SQL statement is a SELECT statement. However, for UPDATE, DELETE or 
INSERT, one might be more interested in the number of rows affected by the SQL statement in question. Or, perhaps the 
interest is in capturing any errors generated on the database server during SQL execution. For these reasons, Nexial 
is designed to encapsulate the various execution result into a "wrapper", or an "object". This wrapper can be thought 
of as the "reference point" which houses the various execution results. There are 2 types of wrapper - one for the 
SELECT statements, and the other for INSERT/UPDATE/DELETE:<br/>

![](image/index_04.png) ![](image/index_05.png)

To reference the specific execution result, one would use the dot notation (`.`) like this: `${result}.sql`. This 
would retrieve the SQL statement associated to this execution.  Of course one could assign a different variable name 
other than `result`.

- **`${...}.sql`** >> retrieves the SQL statement executed to derive this execution result.
 
- **`${...}.startTime`** >> retrieves the time when this SQL was executed, in 
  <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_link">epoch</a> format. 
  Considering using the [`date`](../../functions/$(date)) built-in function to convert the timestamp value into a 
  human-readable form.
- **`${...}.elapsedTime`** >> retrieves the time spent to complete the associated SQL execution, in milliseconds.

- **`${...}.error`** >> retrieves the error message as a result of executing the associated SQL statement.
- **`${...}.rolledBack`** >> `true` or `false` to indicate whether the execution had resulted in a transaction rollback.

- **`${...}.rowCount`** >> retrieves the number of rows affected by the execution of the associated SQL statement. This 
   is usually used when executing a INSERT, DELETE or UPDATE statement. 
- **`${...}.columnCount`** >> retrieves the number of columns in the execution result.
- **`${...}.columns`** >> retrieves the column names of the execution result.
 
- **`${...}.data`** >> retrieves the execution result or dataset; usually only contains data for SELECT statements. 
  To retrieve portion of the dataset,
  - use **`${...}.data[1]`** notation to retrieve the second row of data (row index is zero-based).
  - use **`${...}.data[1].column-name`** notation to retrieve the value of a specific cell (column `column-name` from 
    Row 2).
- **`${...}.cells[COLUMN_NAME]`** >> retrieves data column-wise so that the values of the specified column 
  (`COLUMN_NAME`) are retrieved, in the order of the rows returned from the query execution, as a list.
  - ONLY APPLICABLE TO SELECT statements.
  - For example, suppose a query returns a data set, denoted as `${result}`, like this:<br/>
    ![](image/index_06.png)  

    Then `${result}.cells[CODE]`:<br/>
    ![](image/index_07.png)
    
    ...would produce the following:<br/>
    ![](image/index_08.png)
  - Note that many database vendors (and the corresponding database drivers) adhere to case-sensitivity so that column
    'Address' is considered NOT THE SAME as 'address' or 'ADDRESS'. However, some database vendors adhered to case 
     sensitivity for column names. Check vendor documentation for more details.

As of [v4.3](../../release/nexial-core-v4.3.changelog), Nexial supports the handling of nested query results (normally 
through stored procedure). When the execution of an SQL statement yielded multiple results, the initial result is
store in the `.data` property, as expected (see above). The remaining results are stored in the `.nested` property.
Each nested result (subsequent results after the firs/initial one) is accessible via the `.nested[index]` syntax, or the
`.next` or `.previous` syntax. More details below:
- **`${...}.hasNested`** >> `true` or `false` to indicate whether the execution had resulted in nested results. If 
  the execution resulted only in single result, then this `.hasNested` property would return `false`.
- **`${...}.nestedCount`** >> retrieves the number of nested results for the corresponding execution. If the 
  corresponding execution only has a single result, the `.nestedCount` property would return `0`.
- **`${...}.nested[index]`** >> retrieves one of the nested results via the corresponding `index`. The first nested
  result (meaning, the second result from the execution) would be "index 0".
- **`${...}.next`** >> retrieves the next nested result from the current query result. If the current query result is
  the initial result, then `${...}.next` would return the first nested result.
- **`${...}.previous`** >> retrieves the previous nested result from the current nested result. If the current nested
  result is the first nested result (meaning, the second query result fromt he execution), then `.previous` would return
  the initial/first query result.


### Working with MongoDb Query Result
In addition to the execution result as shown above, MongoDb query result contains additional information:<br/>
![](image/index_09.png)

As shown above, there are additional execution results for MongoDb:
- `${...}.deletedCount` - retrieves the number of documents deleted; applicable only when using MongoDb's 
   [delete commands](https://docs.mongodb.com/manual/reference/method/db.collection.find/).
- `${...}.modifiedCount` - retrieves the number of documents modified; applicable only when using MongoDb's 
   [update commands](https://docs.mongodb.com/manual/reference/command/update/). 
- `${...}.matchedCount` - retrieves the number of documents matched to the 
   [update commands](https://docs.mongodb.com/manual/reference/command/update/) command.
- `${...}.acknowledged` - `true`/`false` to signify whether a write operation was acknowledged by the corresponding 
   MongoDb server. It is often safe to ignore this except for high volume writes to replica set. For more information, 
   check out MongoDb's document on [Write Concern](https://docs.mongodb.com/manual/reference/write-concern/).


### See Also
- [`MongoDB connection setup`](mongodbConnectionSetup)
- [`resultToCSV(var,csvFile,delim,showHeader)`](resultToCSV(var,csvFile,delim,showHeader))
- [`runFile(var,db,file)`](runFile(var,db,file))
- [`runSQL(var,db,sql)`](runSQL(var,db,sql))
- [`runSQLs(var,db,sqls)`](runSQLs(var,db,sqls))
- [`saveResult(db,sql,output)`](saveResult(db,sql,output))
- [`saveResults(db,sqls,outputDir)`](saveResults(db,sqls,outputDir))
