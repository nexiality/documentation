---
layout: default
title: assertKeyExists(profile,key)
parent: redis
tags: command redis
comments: true
---


### Description
This command is used to assert if the given `key` exists in the database.


### Parameters
-  **profile** - is the profile name with which `redis` database connection details are defined. (Refer [here](index.html#defining-profile) to know how to define `profile`)
-  **key** - is the key that is to be asserted if it exists in the given database.


### Example
**Script**:<br/>
![](image/assertKeyExists_01.png)

**Output**:<br/>
![](image/assertKeyExists_02.png)


### See Also