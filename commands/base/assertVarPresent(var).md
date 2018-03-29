---
title: base &raquo; assertVarPresent(var)
parent: base
tags: command base
comments: true
---

### Description
This command asserts that the specified `var` exists, regardless to its value, in the current execution.  
Note that `var` is the name of the variable, not its value (i.e. not `${...}`)

### Parameters
- **var** \- the name of the variable in question

### Example
**Script:-** <br>
![](image/assertVarPresent(var)_01.png)

**Output:-**
![](image/assertVarPresent(var)_02.png)

In above example test step second and third are passed because nexial.browser is defined in script while nexial.textDelim is defined in data file. 
### See Also
