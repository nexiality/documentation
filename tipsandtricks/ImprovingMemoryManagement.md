---
layout: default
title: Improving Memory Management
parent: Tips and Tricks
tags: command tipsandtricks
comments: true
---


### Introduction
It should be in every project's strategy to ensure that the utilization of memory should be minimum.
This means that after/at the time of execution unused heap memory should be reclaimed by garbage collector.

Nexial provides a few ways towards memory management.

#### Use [nexial.manageMemory](../systemvars/index#nexial.manageMemory)
The purpose of this environment variable is to instruct Nexial aggressive memory management. Setting this variable as 
**`nexial.manageMemory=true`** in Nexial will allow garbage collector to reclaim unused heap memory after completion of 
each test script execution. <br>
Nexial reads all iteration data once per execution. So there might be a case where many variables which are unused for 
some iterations can be available for garbage collection.<br>
For example, if Nexial has around 1000 iterations, it's unnecessary to store all iterations data in heap memory. 
So Nexial will clear out all unused data variables from heap memory after execution. 

For more details, please go through [nexial.manageMemory](../systemvars/index#nexial.manageMemory).

#### Use [base.clear(vars)](../commands/base/clear(vars))
This will instruct Nexial to remove one or more variables from current execution. It doesn't mean that Nexial will 
remove variable from script or data files. It will just clear specified data variable from the heap memory. For more details,
please go through [base.clear(vars)](../commands/base/clear(vars))
