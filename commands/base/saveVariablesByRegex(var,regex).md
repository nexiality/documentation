---
layout: default
title: saveVariablesByRegex(var,regex)
parent: base
tags: command base variable regex
comments: true
---


### Description
This command collects all available data variables whose name matches the specified `regex`. The matched data variable
names will be saved as a list under the named specified by `var`.


### Parameters
- **var** - the variable name to save the matching data variable names.
- **regex** - the regular expression to find matching data variable names.


### Example
**Script:**<br/>
![script](image/saveVariablesByRegex_01.png)

**Output:**<br/>
Observe that the extracted variable names as a list.
![output log](image/saveVariablesByRegex_02.png)

### See Also
- [`saveVariablesByPrefix(var,prefix)`](saveVariablesByPrefix(var,prefix))