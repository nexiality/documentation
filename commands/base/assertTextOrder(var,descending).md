---
layout: default
title: assertTextOrder(var,descending)
parent: base
tags: command base
comments: true
---


### Description
This command checks that the array represented by `var` is in ascending or descending order. Set `descending` to 
`true` to force descending order check. This command expects `var` to represent an array, and will fail if such is 
not the case.


### Parameters
- **var** - the variable that represents the array in question
- **descending** - `true` if Nexial should check that the array is in descending order. Otherwise Nexial will check 
  in ascending order.


### Example
Here's an example:<br/>
![script](image/assertTextOrder_01.png)

And the output:<br/>
![output](image/assertTextOrder_02.png)


### See Also