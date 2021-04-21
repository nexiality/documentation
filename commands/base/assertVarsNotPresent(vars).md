---
layout: default title: assertVarsNotPresent(vars)
parent: base tags: command base comments: true
---


### Description
This command asserts that none of the specified data variables (denoted as `vars`) exists in the current execution.  
This list of data variable names is be to separated
by [`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim).

Notes:
- `vars` represent a list of data variable names, not their respective values (i.e. not `${...}`).
- this command supersedes its predecessor, [base &raquo; `assertVarNotPresent(var)`](assertVarNotPresent(var)), since it
  supports both single data variable and multiple data variable checks.


### Parameters
- **vars** - a list of data variable names to assert, separated
  by [`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim).


### Example
See example in [`assertVarsPresent(vars)`](assertVarsPresent(vars)#example)


### See Also
- [`assertVarPresent(var)`](assertVarPresent(var))
