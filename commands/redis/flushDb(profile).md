---
layout: default
title: flushDb(profile)
parent: redis
tags: command redis
comments: true
---


### Description
This command is used to remove all keys from the current database. 


### Parameters
- **profile** - is the profile name with which `redis` database details are defined. (Refer [here](index.html#defining-profile) to know how to define `profile`)


### Example
**Script**:<br/>
![](image/flushDb_01.png)

**Output**:<br/>
![](image/flushDb_02.png)


### See Also
- [`flushAll(profile)`](flushAll(profile))
