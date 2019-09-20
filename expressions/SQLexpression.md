---
layout: default
title: SQL expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
SQL expression allows one to express the processing of one or more SQL statements.

For connection setup, visit [Database Connection Setup](../commands/rdbms/index#database-connection-setup) for more
detail.


### Operations

#### `cells(resultName,column)`
return a list of data matching `column`.

-----

#### `columns(resultName)`
returns the column names of an execution result named `resultName`. Must be invoked 
after **`execute()`**.

-----

#### `columnCount(resultName)`
Returns the number of columns for a given execution result named `resultName`. 
  Must be invoked after **`execute()`**.

-----
  
#### `csv(resultName)`
Transform the content of execution result named `resultName` to [`CSV`](CSVexpression). 
  Must be invoked after **`execute()`**.
  
-----

#### `elapsedTime(resultName)`
Returns amount of milliseconds to execute and retrieve an execution result named 
  `resultName`. Must be invoked after **`execute()`**.
  
-----

#### `error(resultName)`
Returns any error, as [`TEXT`](TEXTexpression), incurred during the execution and 
  retrieval of an execution result named `resultName`. Must be invoked after **`execute()`**.
  
-----

#### `execute(db)`
Execute the associated SQL statement(s) using `db` as the database connection.

-----

#### `resultCount`
Find out the number of execution results rendered through the most recent `execute()` 
  operation. Must be invoked after **`execute()`**.
  
-----

#### `rolledBack(resultName)`
Returns `true`/`false` value if the execution and retrieval of an execution result 
  named `resultName` has caused a roll back event. Must be invoked after **`execute()`**.
  
-----

#### `rowCount(resultName)`
Returns the number of rows for a given execution result named `resultName`. Must be 
  invoked after **`execute()`**.
  
-----

#### `sql(resultName)`
Returns the SQL statement used to derive an execution result named `resultName`. Must be 
  invoked after **`execute()`**.
  
-----

#### `store(var)`
Store the current state of this expression for later use.

-----

#### `startTime(resultName)`
Returns the time, in epoch, when the execution of a result named `resultName` was 
  started. Must be invoked after **`execute()`**.
  
-----

#### `text`
Transform the associated SQL statement(s) into plain text.

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>

