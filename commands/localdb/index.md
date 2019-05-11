---
layout: default
title: localdb
tags: command localdb
comments: true
---


>Power of Relational Database embedded in Nexial!

## Introduction
What is _localdb_, you asked. Well, it's exactly what it sounds like - a local database!

More specifically, it is an embedded database, powered by the popular & awesome [SQLite](https://www.sqlite.org), 
inside Nexial. One can manage and manipulate relational records directly via Nexial automation. As an embedded database,
the management overhead is nearly non-existence and its access is strictly localized (good for security). Embedded
database also means that there isn't any data throughput concern since there is no network impact. But one may ask, 
"_Why would I want an embedded database?_"

The impetus for `localdb` is mainly two-fold:
1. Support the collection and analysis of execution-bound data over time.
2. Support the manipulation and querying of complex or large-size structured data set.


## Support for Execution-Bound Data Set
Often we consider testing as a series of actions and validations, and test automation is no different. However there 
are cases where the validation tasks do not correspond strictly to the actions incurred during the same
execution. In other words, this is validation against the data collected through multiple executions. Much like a
time-series data problem, each execution should be viewed as another data point collection and analysis. There are a 
variety of use cases to use such data points as validations. For example,
- _Did the current test run as quickly as the last 30 tests?_
- _Did that API generate the same data as it did in the last release?_
- _Did this change in database configuration result in a 50% faster response time than previous 10 tests?_
- _Is there a pattern of FAIL steps across the same test scripts over the last month?_

To answer the above questions (and the alike) effectively, we need a way to track the pertinent data points over time. 
Similarly we need an efficient way to perform analysis. Here comes "localdb", the embedded database, to the rescue!

While it is entirely possible to take a more conventional approach such as using a RDBMS server (Oracle, DB2, SQL 
Server, PostgresSQL, etc.) or NoSQL server, there are a few good reasons to favor the embedded database instead:
1. Using database server means administrative and management overhead - DBA or additional IT personnel needed.
2. Using database server means network accessibility and throughput consideration. Yes, it is possible to run database 
   locally. But one would need to incur the administrative overhead as well as additional compute resource strain on 
   the test system.
3. Using database server might create, perhaps inadvertently, conflict and confusion. Imagine multiple testers using the
   same database and tables to manage data that are specific to different tests or test harness. One would need to take
   additional precautions to avoid such issue, and this might complicate the design of the associated test scripts.

With embedded database:
- There is barely any administrative overhead to speak of. In the case of SQLite, there is no need to create or maintain 
  users or roles since it is only locally accessible. There is no network consideration needed. And since data is not 
  remotely shared, one would have complete control and the confidence that the locally managed data will not impact or 
  be impacted by remote processes.


## Complex or Large-size Data Set
The other great thing about embedded database is the same as server-based database: **SQL**.
 
With SQL, one can manipulate and analyze large amount of complex data set. SQLite is ACID compliant and supports most of
the SQL standards. This makes the localdb commands a great approach towards manipulating and analyzing large data set, 
including multi-level hierarchical data.

SQL is also for ideal for data-driven validation. From testing perspective this is highly desirable, especially given 
the fact that most quality engineers and testers are well versed in SQL.


## Go Deeper
As an embedded database, Nexial has a predefined location for the "localdb" file. By design, this file is located at
`${user.home}/.nexial/localdb/nexial`, where `${user.home}` is the HOME directory of the automation user. In a shared 
environment, each user would have his/her own instance of the database file.

There is no need to initialize the database instance or perform any one-time set up. As soon as a 
[DDL](https://en.wikipedia.org/wiki/Data_definition_language) such as `CREATE TABLE` is executed, the appropriate 
database file will be created. Purging a database is also straightforward. Nexial provides a convenient command - 
[`purge(var)`](purge(var) - which simply delete the localdb database file. Addition, Nexial provides commands to 
perform CRUD operations, data import/export to common structured data set such as JSON, XML, CSV, Excel.

Nexial provides functional parity with the query result between `localdb` commands and `rdbms` commands. See 
[Working with Execution Result](../../commands/rdbms/index#working-with-execution-result) in 
[`rdbms`](../../commands/rdbms) page to understand what one can do with the query result.

In addition to utilizing Nexial, one can manage the localdb database via a myriad of commercial and free database tools 
that support SQLite (in alphabetical order):

#### Commercial Tools
- [Aqua Data Studio for SQLite](https://www.aquafold.com/aquadatastudio)
- [DBTools](http://www.dbtools.com.br/EN/) (trial version available)
- [JetBrains DataGrip](https://www.jetbrains.com/datagrip/features/)
- [Navicat for SQLite](https://www.navicat.com/en/products/navicat-for-sqlite) (trial version available)
- [RazorSQL SQLite GUI](https://www.razorsql.com/landing/sqlite_gui.html)
- [SQLiteManager](https://www.sqlabs.com/sqlitemanager.php)
- [SQLVue](http://www.logicalvue.com/sqlvue/)

#### Free/Open Source Tools
- [DBeaver, Community](https://dbeaver.io/) (enterprise edition available)
- [DbVisualizer, Basic](https://www.dbvis.com/) (pro version available)
- [DB Browser for SQLite](https://sqlitebrowser.org/)
- [SQLiteExpert](http://www.sqliteexpert.com/) (pro version available)
- [SQLite Studio](https://sqlitestudio.pl/)
- [SQLite Manager, a Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager-webext/?src=search)
- [TablePlus](https://tableplus.io/) (commercial license available)


## SQLite References
Here are some useful links and references about SQLite:<br/>
<img src="image/sqlite_logo.png" style="box-shadow:none; width:350px; clear:both; float:left; margin:20px 35px 35px 0;">
- [SQLite on Wikipedia](https://en.wikipedia.org/wiki/SQLite)
- [SQL as understood by SQLite](https://www.sqlite.org/lang.html)
- [SQLite Core Functions](https://www.sqlite.org/lang_corefunc.html)
- [SQLite Aggregate Functions](https://www.sqlite.org/lang_aggfunc.html)
- [SQLite Date and Time Functions](https://www.sqlite.org/lang_datefunc.html)
- [SQL Features That SQLite Does Not Implement](https://sqlite.org/omitted.html)
- [SQLite Tutorial by sqlitetutorial.net](http://www.sqlitetutorial.net/)
- [SQLite Tutorial by QuackIt](https://www.quackit.com/sqlite/tutorial/)


## Available Commands
- [`cloneTable(var,source,target)`](cloneTable(var,source,target))
- [`dropTables(var,tables)`](dropTables(var,tables))
- [`exportCSV(sql,output)`](exportCSV(sql,output))
- [`importRecords(var,sourceDb,sql,table)`](importRecords(var,sourceDb,sql,table))
- [`purge(var)`](purge(var))
- [`runSQLs(var,db,sqls)`](runSQLs(var,db,sqls))
