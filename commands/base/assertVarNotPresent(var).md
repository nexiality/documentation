---
layout: default
title: assertVarNotPresent(var)
parent: base
tags: command base
comments: true
---

**DEPRECATED - USE [`assertVarsNotPresent(vars)`](assertVarsNotPresent(vars)) INSTEAD.**


### Description
This command asserts that the specified `var` does not exists in the current execution.  Note that `var` is the name 
of the variable, not its value (i.e. not `${...}`).


### Parameters
- **var** - The name of the variable in question


### Example
**Script**:<br/>
![](image/assertVarNotPresent(var)_01.png)

**Output**:<br/>
![](image/assertVarNotPresent(var)_02.png)

In above example test, step 2 and 3 failed because `nexial.browser` is defined in the script while 
`nexial.textDelim` is defined in the data file.


### See Also
- [`assertVarsPresent(vars)`](assertVarsPresent(vars))
