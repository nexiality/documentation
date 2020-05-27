---
layout: default
title: rdbms
tags: command rdbms
comments: true
---


This collection of commands, as its name suggests, handle RDBMS-related automations and validations. As such, Nexial 
users can incorporate as test steps the actions or validations related to database as a part of a larger set of tests.
This provides many forms of benefit including test coverage, avoid data tainting, and widening test scope. Some 
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
the target database. A connection is a set of configuration (in Nexial data file) that describe how a database 
session can be established. It can be referenced by a single name, which allows for reusability and appropriate 
connectivity separation.

To describe a connection, add the following to the appropriate data file:
![setup](image/index_01.png)

You can substitute `mydb` with something else more readable (**without dot**).

[Click here](dbConnectionSetup) for more detail.

#### Connecting to MongoDB
[MongoDB](https://www.mongodb.com/) is not a relational database. It is another form of database called 
[NoSQL](https://en.wikipedia.org/wiki/NoSQL) that provides a mechanism for managing unstructured (or non-tabular)
data structure. As a convenience, Nexial provides MongoDb connectivity via the `rdbms` commands so that those familar
with the `rdbms` command type might be able to adapt quickly to automating with MongoDb.

Connecting to MongoDb via Nexial is similar to how one would connect to MongoDb directly. One can utilize the same
[MongoDb connection URL](https://docs.mongodb.com/manual/reference/connection-string/). Be sure to specify the 
`<connection name>.type` as `mongodb`, and supply the appropriate credentials via the `<connection name>.user` and 
`<connection name>.password` data variables. For example:<br/>
![](image/index_10.png)

[Click here](mongodbConnectionSetup) for more detail.


### Working with Execution Result
Executing a SQL statement results in a series of outcome. The most common and sought-after is, of course, the 
resultset or dataset - assuming the executed SQL statement is a SELECT statement. However, for UPDATE, DELETE or 
INSERT, one might be more interested in the number of rows affected by the SQL statement in question. Or, perhaps one 
is interested in capturing any errors generated on the database server during SQL execution. For these reasons, Nexial 
is designed to encapsulate the various execution result into a "wrapper", or a "object". This wrapper can be thought 
of as the "outer casing" which houses the various execution results. There are 2 types of wrapper - one for SELECT 
statements and the other one for INSERT/UPDATE/DELETE:<br/>

[Click here](executionResult) for more detail.

### Available Commands
- [`resultToCSV(var,csvFile,delim,showHeader)`](resultToCSV(var,csvFile,delim,showHeader))
- [`runFile(var,db,file)`](runFile(var,db,file))
- [`runSQL(var,db,sql)`](runSQL(var,db,sql))
- [`runSQLs(var,db,sqls)`](runSQLs(var,db,sqls))
- [`saveResult(db,sql,output)`](saveResult(db,sql,output))
- [`saveResults(db,sqls,outputDir)`](saveResults(db,sqls,outputDir))
