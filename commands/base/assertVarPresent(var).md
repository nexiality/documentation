---
layout: default
title: assertVarPresent(var)
parent: base
tags: command base
comments: true
---

### Description
This command asserts that the specified `var` exists, regardless to its value, in the current execution.  
Note that `var` is the name of the variable, not its value (i.e. not `${...}`)


### Parameters
- **var** - the name of the variable in question


### Example
**Script**:<br/>
![](image/assertVarPresent(var)_01.png)

**Output**:
![](image/assertVarPresent(var)_02.png)

In above example test step 2 and 3 passed because `nexial.browser` is defined in the script while 
`nexial.textDelim` is defined in data file. 


### See Also
- [`assertVarNotPresent(var)`](assertVarNotPresent(var))
