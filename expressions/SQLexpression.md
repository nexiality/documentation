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

### Execution Result of Queries
The `resultName` parameter used in the operations below refers to the [Execution Result](../commands/rdbms/#working-with-execution-result) 
of the SQL queries. It is the variable associated with the query result that we can assign using the syntax
<code>--nexial:resultName</code> as shown in the examples below. 
In cases where there is no variable specified corresponding to the query, Nexial, by default uses 0-based index to refer to 
execution outcome of that particular query.

**For Example**

Our `student` table looks like this <br/>
![](image/SQLexpression_53.png)

We write multiple queries into a single variable and assign only one of them a variable.<br/> 
![](image/SQLexpression_54.png)


As stated before, where there is no variable assigned to the query, nexial by default used a 0-based index. We use the index 0 
to address the outcome of this query.<br/>
![](image/SQLexpression_55.png)
![](image/SQLexpression_56.png)


Similarly, we use the index 1 for the second query<br/>
![](image/SQLexpression_57.png)
![](image/SQLexpression_58.png)


We assigned a variable to the third query, so we'll use that. Alternatively, we can use the index 2.<br/>
![](image/SQLexpression_59.png)
![](image/SQLexpression_60.png)


Using index 3 for the last query<br/>
![](image/SQLexpression_61.png)
![](image/SQLexpression_62.png)


The resulting `student` table looks like this after running the queries. <br/>
![](image/SQLexpression_63.png)

-----

**If the query contains errors**

Normally, the execution outcome of a query would contain various pieces of information as shown in the pictures below. <br/>
![](image/SQLexpression_64.png) ![](image/SQLexpression_65.png)

However, in case of inaccurate or erroneous queries. <br/>
![](image/SQLexpression_66.png)

The execution outcome will return an error upon running the execute and running other operations on the outcome will return 
either 0 or null.
![](image/SQLexpression_67.png) 

Output:<br/>
![](image/SQLexpression_68.png)

However, some meaningful information can be extracted the execution outcome of an erroneous query. For example<br/>
![](image/SQLexpression_69.png)

Output:<br/>
![](image/SQLexpression_70.png)

-----

**Referencing Queries in External File**<br/>

Nexial built-in functions, data variables and expressions can also be used in the SQL queries. For Example: <br/>

<code> select * from ${table}; </code> where table is:<br/>
![](image/SQLexpression_01.png)<br/>

SQL queries can either be written directly into the script or can be stored in a file and run. However, writing 
queries in a file has the following advantages:

- Ease of readability compared to queries written directly into the script
- Better flexibility in terms of modification since the queries are separate from the script.
- Externalized queries provide for ease of maintenance and reusabilty.
- Queries written in a file also can make use of built-in functions, data variables and expressions. 

As a best practice, the file(s) containing the queries should be stored under the data or the script directory as it helps 
with portablity. 

-----

### Operations

#### `execute(db)`
Execute the associated SQL statement(s) using `db` as the database connection. Most of the operations mentioned below must
be preceded by `execute(db)` as a requirement. `

**Example**

**Database:**<br/>
![](image/SQLexpression_23.png)

**Script:** Inserting new tuples into the table<br/>
![](image/SQLexpression_24.png)

**Output:** Insertion successful<br/>
![](image/SQLexpression_25.png)

**Output:** Insertion failed. Nexial prints the query as the output.
![](image/SQLexpression_26.png)
 
-----

#### `cells(resultName,column)`
Return a list of data matching `column`.

**Example**

**Existing Database:**<br/>
![](image/SQLexpression_02.png)

**Script:** Fetching the entries in the `first_name` column<br/>
![](image/SQLexpression_03.png)

**Output:**<br/>
![](image/SQLexpression_04.png)

-----

#### `columns(resultName)`
Returns the column names of an execution result named `resultName`. Must be invoked 
after **`execute()`**.

**Example**

**Database:**<br/>
![](image/SQLexpression_08.png)

**Script:**<br/>
![](image/SQLexpression_09.png)

**Output:**<br/>
![](image/SQLexpression_10.png)

-----

#### `columnCount(resultName)`
Returns the number of columns for a given execution result named `resultName`. 
  Must be invoked after **`execute()`**.

**Example**

**Database:**<br/>
![](image/SQLexpression_05.png)

**Script:**<br/>
![](image/SQLexpression_06.png)

**Output:**<br/>
![](image/SQLexpression_07.png)

-----
  
#### `csv(resultName)`
Transform the content of execution result named `resultName` to [`CSV`](CSVexpression). 
  Must be invoked after **`execute()`**.

**Example**

**Database:**<br/>
![](image/SQLexpression_11.png)

**Script:**<br/>
![](image/SQLexpression_12.png)

**Output:**<br/>
![](image/SQLexpression_13.png) 

-----

#### `elapsedTime(resultName)`
Returns amount of milliseconds to execute and retrieve an execution result named 
  `resultName`. Must be invoked after **`execute()`**.

**Example**

**Database:**<br/>
![](image/SQLexpression_14.png)

**Queries:**<br/>
insert2.sql<br/>
![](image/SQLexpression_15.png)<br/>

update.sql<br/>
![](image/SQLexpression_16.png)

**Script:**<br/>
![](image/SQLexpression_17.png)

**Output:**<br/>
![](image/SQLexpression_18.png)

**Resulting Database:**<br/>
![](image/SQLexpression_19.png) 

-----

#### `error(resultName)`
Returns any error, as [`TEXT`](TEXTexpression), incurred during the execution and 
  retrieval of an execution result named `resultName`. Must be invoked after **`execute()`**.
  
**Example**

**Script:**<br/>
![](image/SQLexpression_20.png)

**Output:**<br/>
![](image/SQLexpression_21.png)<br/>
![](image/SQLexpression_22.png)

-----

#### `resultCount`
Find out the number of execution results rendered through the most recent `execute()` 
  operation. Must be invoked after **`execute()`**.
  
**Example**

**Database:**<br/>
![](image/SQLexpression_26.png)

**Script:** Running a single select query.<br/>
![](image/SQLexpression_27.png)

**Output:**<br/>
![](image/SQLexpresbsion_28.png)

**SQL File: operation.sql** <br/>
![](image/SQLexpression_29.png)

**Script:** Running multiple queries<br/>
![](image/SQLexpression_30.png)

**Output:**<br/>
![](image/SQLexpression_31.png)

**Resulting Database**<br/>
![](image/SQLexpression_32.png)

-----

#### `rolledBack(resultName)`
Returns `true`/`false` value if the execution and retrieval of an execution result 
  named `resultName` has caused a roll back event. Must be invoked after **`execute()`**.
  
**Example**

**Database:** <br/>
![](image/SQLexpression_33.png)

**SQL file: insertRollback.sql** <br/>
![](image/SQLexpression_34.png)

**Script:** <br/>
![](image/SQLexpression_35.png)

**Output:** <br/>
![](image/SQLexpression_36.png)

**Resulting Database:** <br/>
![](image/SQLexpression_37.png)

-----

#### `rowCount(resultName)`
Returns the number of rows for a given execution result named `resultName`. Must be 
  invoked after **`execute()`**.

**Example**

**Database:**<br/>
![](image/SQLexpression_38.png)

**Script:**<br/>
![](image/SQLexpression_39.png)

**Output:**<br/>
![](image/SQLexpression_40.png)
  
-----

#### `sql(resultName)`
Returns the SQL statement used to derive an execution result named `resultName`. Must be 
  invoked after **`execute()`**.

**Example**

**SQL File: update.sql**<br/>
![](image/SQLexpression_41.png)

**Script:**<br/>
![](image/SQLexpression_42.png)

**Output:**<br/>
![](image/SQLexpression_44.png)

**Resulting Database** <br/>
![](image/SQLexpression_43.png)
  
-----

#### `startTime(resultName)`
Returns the time, in epoch, when the execution of a result named `resultName` was 
  started. Must be invoked after **`execute()`**.

**Example**

**Script:**<br/>
![](image/SQLexpression_45.png)

**Output:**<br/>
![](image/SQLexpression_46.png)

-----

#### `store(var)`
Store the current state of this expression for later use.

**Example**

**Database:**<br/>
![](image/SQLexpression_47.png)

**Script:**<br/>
![](image/SQLexpression_48.png)

**Output CSV:**<br/>
![](image/SQLexpression_49.png)

-----

#### `text`
Transform the associated SQL statement(s) into plain text.

**Example**

**Script:**<br/>
![](image/SQLexpression_50.png)

**Output:**<br/>
![](image/SQLexpression_51.png)

**Text File: output.txt** <br/>
![](image/SQLexpression_52.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>

