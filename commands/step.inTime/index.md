---
layout: default
title: step.inTime
tags: command step.inTime
comments: true
---


### Introduction
This set of commands is similar to [`step`](../step/index.html) commands but with a timeout duration.
The timeout duration is the maximum waiting time for input or maximum time within that the command has
 to complete. 
 
 There are certain situations where you don't want the execution to be blocked lifelong because of the 
 input is pending. In such cases, you can use these commands and supply a timeout duration. The command 
 will be completed as soon as input is provided (normal case) or it will wait for that much time and if
 the time duration has finished and no input supplied, then also this command will complete so that 
 automation script can continue with other executions. 

### Available Commands
- [`perform(instructions,waitMs)`](perform(instructions,waitMs).html )
- [`validate(prompt,responses,passResponses,waitMs)`](validate(prompt,responses,passResponses,waitMs).html)
- [`observe(prompt,waitMs)`](observe(prompt,waitMs).html)
