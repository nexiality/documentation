---
title: base &raquo; assertVarNotPresent(var)
parent: base
tags: command base
comments: true
---


### Description
This command asserts that the specified `var` does not exists in the current execution.  Note that `var` is the name 
of the variable, not its value (i.e. not `${...}`)


### Parameters
- **var** \- The name of the variable in question

### Example
**Script:-** <br>
![](image/assertVarNotPresent(var)_01.png)

**Output:-**
![](image/assertVarNotPresent(var)_02.png)

In above example test step second and third are failed because nexial.browser is defined in script while nexial.textDelim is defined in data file.


### See Also
