---
title: redis &raquo; store(var,profile,key)
parent: redis
tags: command redis
comments: true
---

### Description
This command is used to retrieve the value of the `key` specified from the database and store the value to the given `var`.

### Parameters
- **var** - is the variable name where the retrieved value to be stored. 
- **profile** - is the profile name with which `redis` database details are defined.
- **key** - is the database key from which the value to be retrieved.

### Example
Script:
![](image/store_01.png)
Output:
![](image/store_02.png)
### See also

[`storeKeys(var,profile,keyPattern)`](storeKeys(var,profile,keyPattern))