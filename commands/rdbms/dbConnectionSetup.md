---
layout: default
title: Database Connection Setup
parent: rdbms
tags: command rdbms
comments: true
---


### Database Connection Setup
In order to interact with a database, such as running a query, the first thing is to set up the connection against 
the target database. A connection is a set of configuration (in Nexial data file) that describe how a database 
session can be established. It can be referenced by a single name, which allows for reusability and appropriate 
connectivity separation.

To describe a connection, add the following to the appropriate data file:
![setup](image/index_01.png)

You can substitute `mydb` with something else more readable (**without dot**).

**IMPORTANT !!!** Note that only the following are required:
- 1. `<connection name>` **.type** - this specifies the type of database to connect. Nexial will use this data to 
load the appropriate connection driver (a.k.a. JDBC driver). The valid values (currently supported drivers) are:
	 - **`db2`** (IBM DB2, JDBC type 4)
	 - **`mssql`** (Microsoft SQL Server)
	 - **`oracle`** (Oracle, JDBC type 4)
	 - **`postgresql`** (PostgreSQL)
	 - **`mysql`** (MySQL)
	 - **`sqlite`** (SQLite)
	 - **`hsqldb`** (HyperSQL)
	 - **`isam` or `connx`** (ISAM/Connx, JDBC type 2)
	 - **`mongodb`** (see [below](#connecting-to-mongodb) for more details)
	 - **`mariadb`** (MariaDB)
	 
	 - Note that to connect to other database not mentioned above, you may do the following:
	   1. Add the appropriate JDBC Type 4 driver (jar file) to `${user.home}/.nexial/jar` or `${NEXIAL_HOME}/lib` directory.<br/>	       
	   2. Add the appropriate driver class name to `<connection name>.JavaClassName` data variable (instead of 
	      `<connection name>.type`). Check the vendor's support page for the correct driver jar and driver classname.	      
	   3. If you have any dll file which is required to load then you can add it to `${user.home}/.nexial/dll` directory.
	     Example: mssql requires a dll file if integratedSecurity (for window authentication) is true in the url, system will automatically download the dll file while downloading the driver but if you have to use some different dll you can place here. 
	    
- 2. `<connection name>` **.url** - this specifies how to connect to the target database. Some connection string may 
  contain username and password. Hence the `.username` and `.password` are required. For more details about 
  connection string, check the following links:
  - <a href="https://msdn.microsoft.com/en-us/library/ms378428(v=sql.110).aspx" class="external-link" target="_nexial_link">Microsoft SQL Server connection string</a>
  - <a href="http://www.orafaq.com/wiki/JDBC#Thin_driver" class="external-link" target="_nexial_link">Oracle thin driver connection string</a>
    - not distributed as part of Nexial due to vendor restriction.  Please visit vendor website to obtain appropriate 
      driver files.
  - <a href="https://www.ibm.com/support/knowledgecenter/SSEPGG_9.7.0/com.ibm.db2.luw.apdv.java.doc/src/tpc/imjcc_r0052342.html" class="external-link" target="_nexial_link">IBM DB2 thin driver connection string</a>
    - not distributed as part of Nexial due to vendor restriction.  Please visit vendor website to obtain appropriate 
      driver files.
  - <a href="https://jdbc.postgresql.org/documentation/80/connect.html" class="external-link" target="_nexial_link">PostgreSQL connection string</a>
  - <a href="https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-reference-configuration-properties.html" class="external-link" target="_nexial_link">MySQL connection string</a>

In addition to the above, there are other useful configurations:
- 3. `<connection name>` **.user** - the username to use to connect to the target database.
- 4. `<connection name>` **.password** - the password to use to connect to the target database.
- 5. `<connection name>` **.autocommit** - specifies if the executions (e.g. INSERT, DELETE, UPDATE) carried out via 
   this connection should be treated as individual transaction or as a single transaction. This configuration only 
   makes sense when executing multiple SQL statements within one command. Executing a single SQL statement within 1 
   command is always treated as a single transaction. `.autocommit` set to `true` means that each SQL statement 
   within one command is treated as individual transaction. `.autocommit` set to `false` means the commit will only 
   occur after all the SQL statements are executed successfully - any failure will force a rollback.
- 6. `<connection name>` **.treatNullAs** - specifies how `NULL` value should be represented. By default, a `NULL` 
   value will be treated as an empty string. 
   For example, let's say that a query returns 2 rows of 3 columns each. The first row has a `NULL` value for `col2`, 
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

### Multiple connections within one test script   
It is not uncommon that multiple connections are needed within one test script. To differentiate between different 
connections, set up multiple connections in the appropriate Nexial data file:<br/>
![setup2](image/index_02.png)

Then in test script, reference the appropriate connection via its name (i.e. `mydb` or `app2`):<br/>
![script](image/index_03.png)


### See Also
- [`Execution Result`](executionResult)
