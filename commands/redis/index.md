---
title: redis
tags: command redis
comments: true
---


### Introduction to Redis
![](image/redis_01.png)

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. 
It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, 
hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, 
transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and 
automatic partitioning with Redis Cluster.

Learn more about redis:
- <a href="https://redis.io/topics/introduction" class="external-link" target="_nexial_target">https://redis.io/topics/introduction</a>
- <a href="https://github.com/lettuce-io/lettuce-core/wiki/Redis-URI-and-connection-details">https://github.com/lettuce-io/lettuce-core/wiki/Redis-URI-and-connection-details</a>
- <a href="https://www.iana.org/assignments/uri-schemes/prov/redis">https://www.iana.org/assignments/uri-schemes/prov/redis</a>

#### Defining profile
- Nexial simplifies managing the database details by creating a `profile`.
- For e.g, define the profile in the data file, just as any other variable name:
![](image/redis_02.png)<br>
- So here becomes `myredis` as the profile name.
- Use this profile name as an argument to all the below listed out commands wherever is applicable.
- Nexial identifies all the variables prefixed with this profile name and uses the corresponding values to connect with database.

 ### Available Commands
- [`append(profile,key,value)`](append(profile,key,value))
- [`assertKeyExists(profile,key)`](assertKeyExists(profile,key))
- [`delete(profile,key)`](delete(profile,key))
- [`flushAll(profile)`](flushAll(profile))
- [`flushDb(profile)`](flushDb(profile))
- [`rename(profile,current,new)`](rename(profile,current,new))
- [`set(profile,key,value)`](set(profile,key,value))
- [`store(var,profile,key)`](store(var,profile,key))
- [`storeKeys(var,profile,keyPattern)`](storeKeys(var,profile,keyPattern))
