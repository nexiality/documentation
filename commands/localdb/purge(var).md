---
layout: default
title: purge(var)
parent: localdb
tags: command localdb sqlite embedded
comments: true
---


### Description
This command instructs Nexial to completely wipe out all the data and data objects in the localdb associated to 
current execution. In actuality, Nexial simply delete the associated database file and re-establish connectivity.


### Parameters
- **var** - stores `true` if the purge was successful, and `false` if it was not


### Example


### See Also
- [`dropTables(var,tables)`](dropTables(var,tables))
- [localdb commands](index#available-commands)