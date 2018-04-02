---
title: redis &raquo; set(profile,key,value)
parent: redis
tags: command redis
comments: true
---

### Description
This command is used to set the `value` as the value of the `key`.

### Parameters
- **profile** - is the profile name with which `redis` database details are defined.
- **key** - is the key for which the `value` to be set.
- **value** - is the value to be set to the specified `key`. 

### Example
Script:
![](image/set_01.png)

Output:
![](image/set_02.png)

### See also

[`store(var,profile,key)`](store(var,profile,key))
[`storeKeys(var,profile,keyPattern)`](storeKeys(var,profile,keyPattern))