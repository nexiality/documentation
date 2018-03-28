---
title: rdbms
tags: command rdbms
comments: true
---


This collection of commands, as its name suggests, handle RDBMS-related automations and validations.  As such, Nexial 
users can incorporate as test steps the actions or validations related to database as a part of a larger set of tests.  
This provides many forms of benefit including test coverage, avoid data tainting, and widening test scope.  Some 
examples of using the `rdbms` commands are:
1. automate data seeding or initialization procedures
2. automate data cleanup procedures
3. validate backend logic
4. direct manipulate of data in database to simulate exceptional conditions
5. execute stored procedures
6. simulate additional load to database (since running multiple clients at times are non-trivial or downright 
   impossible)


### Database Connection Setup
In order to interact with a database, such as running a query, the first thing is to set up the connection against 
the target database.  A connection is a set of configuration (in Nexial data file) that describe how a database 
session can be established.  It can be referenced by a single name, which allows for reusability and appropriate 
connectivity separation.

To describe a connection, add the following to the appropriate data file:
![setup](image/index_01.png)

You can substitute `mydb` with something else more readable (**without dot**).

**IMPORTANT !!!** Note that only the following are required:
- `<connection name>` **.type** \- this specifies the type of database to connect.  Nexial will use this data to 
load the appropriate connection driver (a.k.a. JDBC driver).  The valid values (currently supported drivers) are:
	 - **`db2`** (IBM DB2, JDBC type 4)
	 - **`mssql`** (Microsoft SQL Server)
	 - **`oracle`** (Oracle, JDBC type 4)
	 - **`postgresql`** (PostgreSQL)
	 - **`mysql`** (MySQL)
	 - **`sqlite`** (SQLite)
	 - **`hsqldb`** (HyperSQL)
	 - **`isam` or `connx`** (ISAM/Connx, JDBC type 2)
- `<connection name>` **.url** \- this specifies how to connect to the target database.  Some connection string may 
  contain username and password.  Hence the `.username` and `.password` are required.  For more details about 
  connection string, check the following links:
  - <a href="https://msdn.microsoft.com/en-us/library/ms378428(v=sql.110).aspx" class="external-link" target="_nexial_external">Microsoft SQL Server connection string</a>
  - <a href="http://www.orafaq.com/wiki/JDBC#Thin_driver" class="external-link" target="_nexial_external">Oracle thin driver connection string</a>
    - not distributed as part of Nexial due to vendor restriction.  Please visit vendor website to obtain appropriate 
      driver files.
  - <a href="https://www.ibm.com/support/knowledgecenter/SSEPGG_9.7.0/com.ibm.db2.luw.apdv.java.doc/src/tpc/imjcc_r0052342.html" class="external-link" target="_nexial_external">IBM DB2 thin driver connection string</a>
    - not distributed as part of Nexial due to vendor restriction.  Please visit vendor website to obtain appropriate 
      driver files.
  - <a href="https://jdbc.postgresql.org/documentation/80/connect.html" class="external-link" target="_nexial_external">PostgreSQL connection string</a>
  - <a href="https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-reference-configuration-properties.html" class="external-link" target="_nexial_external">MySQL connection string</a>

In addition to the above, there are other useful configurations:
1. `<connection name>` **.user** \- the username to use to connect to the target database.
2. `<connection name>` **.password** \- the password to use to connect to the target database.
3. `<connection name>` **.autocommit** \- specifies if the executions (e.g. INSERT, DELETE, UPDATE) carried out via 
   this connection should be treated as individual transaction or as a single transaction.  This configuration only 
   makes sense when executing multiple SQL statements within one command.  Executing a single SQL statement within 1 
   command is always treated as a single transaction.  `.autocommit` set to `true` means that each SQL statement 
   within one command is treated as individual transaction.  `.autocommit` set to `false` means the commit will only 
   occur after all the SQL statements are executed successfully - any failure will force a rollback.
4. `<connection name>` **.treatNullAs** \- specifies how `NULL` value should be represented.  By default, a `NULL` 
   value will be treated as an empty string. 
5. For example, let's say that a query returns 2 rows of 3 columns each.  The first row has a `NULL` value for `col2`, 
   the second row as a empty string for `col2`.

   | col1 | col2   | col3 |
   | ---- | ------ | ---- |
   | ABC  | `NULL` | 123  |
   | DEF  |        | 456  |
    
   if <connection name>`.treatNullAs` is not defined or set to `(empty)`, then the output 
   via [`runSQL(var,db,sql)`](runSQL(var,db,sql)) would look like:
   
   | col1 | col2 | col3 |
   | ---- | ---- | ---- |
   | ABC  |      | 123  |
   | DEF  |      | 456  |
    
   if <connection name>`.treatNullAs` is defined as `<null>`, then the output via 
   [`runSQL(var,db,sql)`](runSQL(var,db,sql)) would look like:

   | col1 | col2     | col3 |
   | ---- | -------- | ---- |
   | ABC  | `<null>` | 123  |
   | DEF  |          | 456  |
    
It is not uncommon that multiple connections are needed within one test script.  To differentiate between different 
connections, set up multiple connections in the appropriate Nexial data file:
![setup2](image/index_02.png)

Then in test script, reference the appropriate connection via its name (i.e. `mydb` or `app2`):
![script](image/index_03.png)


### Working with Execution Result
Executing a SQL statement results in a series of outcome. The most common and sought-after is, of course, the 
resultset or dataset - assuming the executed SQL statement is a SELECT statement.  However, for UPDATE, DELETE or 
INSERT, one might be more interested in the number of rows affected by the SQL statement in question.  Perhaps one 
would be interested in capturing any errors generated on the database server during SQL execution.

For these reasons, Nexial is designed to encapsulate the various execution result into a "wrapper", or a "object".  
This wrapper can be thought of as the "outer casing" which houses the various execution results.  There are 2 types 
of wrapper - one for SELECT statements and the other one for INSERT/UPDATE/DELETE:<br/>

![metadata](image/index_04.png)![metadata2](image/index_05.png)

To reference the specific execution result, one would use the dot notation (`.`) like this: `${result}.sql` . This 
would retrieve the SQL statement associated to this execution.  Of course one could assign a different variable name 
other than `result`.
- `${...}.sql` \- retrieves the SQL statement executed to derive this execution result.
- `${...}.startTime` \- retrieves the time when this SQL was executed, in 
  <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_external">`epoch`</a> format.  
  Considering using the [`date`](../../functions/$(date)) built-in function to convert the timestamp value into a 
  human-readable form.
- `${...}.elapsedTime` \- retrieves the time spent to complete the associated SQL execution, in milliseconds.
- `${...}.rowCount` \- retrieves the number of rows affected by the execution of the associated SQL statement.  This 
   is usually used when executing a INSERT, DELETE or UPDATE statement. 
- `${...}.error` \- retrieves the error message as a result of executing the associated SQL statement. 
- `${...}.data` \- retrieves the resultset or dataset; usually only contains data for SELECT statements.  To retrieve 
  portion of the dataset, 
  - use `${...}.data[1]` notation to retrieve a row of data (row index is zero-based)
  - use `${...}.data[1].column-name` notation to retrieve the value of a specific cell. 
- `${...}.cells[COLUMN_NAME]`
  - ONLY APPLICABLE TO SELECTs. 
  - Retrieves data column-wise so that the values of the matching column (as specified via `COLUMN_NAME`) are 
    retrieved, in the order of the rows returned from the query execution, as a list.  
  - For example, suppose a query returns a data set like this:  <br/>
    ![resultset](image/index_06.png)  

    If this resultset is encapsulated in a variable named as `${result}`, then <br/>  
    ![script3](image/index_07.png)
    
    would produce the following:<br/>
    ![](image/index_08.png)
  - Note that some database vendors adhered to case sensitivity for column names.
- `${...}.columns` \- retrieves the column names of the resultset. 
- `${...}.columnCount` \- retrieves the number of columns in the resultset.
- `${...}.rolledBack` - `true` or `false` to indicate whether the execution had resulted in a transaction rollback.

Note that many database vendors (and the corresponding database drivers) adhere to case-sensitivity so that column 
'Address' is considered NOT THE SAME as 'address' or 'ADDRESS'.


### See Also
- [`resultToCSV(var,csvFile,delim,showHeader)`](resultToCSV(var,csvFile,delim,showHeader))
- [`runFile(var,db,file)`](runFile(var,db,file))
- [`runSQL(var,db,sql)`](runSQL(var,db,sql))
- [`runSQLs(var,db,sqls)`](runSQLs(var,db,sqls))
- [`saveResult(db,sql,output)`](saveResult(db,sql,output))
