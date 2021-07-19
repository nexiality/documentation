---
layout: default 
title: assertVarsPresent(vars)
parent: base 
tags: command base variable
comments: true
---


### Description
This command asserts that all the specified data variables (denoted as `vars`) exist in the current execution. This list
of data variable names is separated by [`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim).

Notes:
- `vars` represent a list of data variable names, not their respective values (i.e. not `${...}`).
- this command supersedes its predecessor, [base &raquo; `assertVarNotPresent(var)`](assertVarNotPresent(var)), since it
  supports both single data variable and multiple data variable checks.


### Parameters
- **vars** - a list of data variable names to assert, separated
  by [`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim).


### Example
Now, multiple "is-variable-exist" assertions, like this:

![](image/assertVarPresent(var)_03.png)

... can be simplified into this:

![](image/assertVarsPresent(vars)_01.png)

The execution output will detail the data variables that do not exist during execution:

![](image/assertVarsPresent(vars)_02.png)


### See Also
- [`assertVarsNotPresent(vars)`](assertVarsNotPresent(vars))
