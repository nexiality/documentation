---
layout: default
title: Improving Memory Management
parent: Tips and Tricks
tags: command tipsandtricks memory iteration
comments: true
---


### Introduction
It should be in every project's strategy to keep the runtime memory footprint to a reasonable size. All compute 
resources come with a fixed memory capacity (_yes, there are such with more elastic capacity, but those are hard to 
come by_). Unmanaged memory utilization will eventually lead to runtime failure - an undesirable false-positive for
automation. Since Nexial is predominately written in Java, most of the memory management is managed internally by the 
JVM (Java Virtual Machine). However, Nexial provides a few ways for additional memory management.


#### Use [nexial.manageMemory](../systemvars/index#nexial.manageMemory)
The purpose of this System variable is to instruct Nexial to manage runtime memory utilization more aggressively. 
Setting this System variable as **`true`** will increase the frequency of JVM garbage collection to reclaim unreferenced 
heap memory space after completion of each iteration and script execution.

This is especially useful when executing over a large set of iterations. Nexial maintains iteration-bound data in
support of "[fallback to previous](../systemvars/index#nexial.scope.fallbackToPrevious)". Setting `nexial.manageMemory`
as `true` will effective clear all the unused data variables after each iteration.

For more details, please go through [nexial.manageMemory](../systemvars/index#nexial.manageMemory).


#### Use [base.clear(vars)](../commands/base/clear(vars))
This will instruct Nexial to remove one or more variables from current execution, more specifically from current 
iteration. It doesn't mean that Nexial will remove variable from script or data files. It clears the specified data 
variables from the runtime memory. For more details, please go through [base.clear(vars)](../commands/base/clear(vars)).
