---
layout: default
title: $(execution)
parent: Built-in Functions
tags: date $(execution)
comments: true
---


### Description
This built-in function expose the execution-level metadata, both the runtime and design-time information.


### Available Functions
- **`$(execution|command|name)`** - display the command currently being executed
- **`$(execution|step|index)`** - display the row number of the step currently in execution
- **`$(execution|step|name)`** - display the step currently in execution, in the format of <br/>
  `[ script name ][ scenario name ][ activity name ][ row number ]`
- **`$(execution|activity|name)`** - display the activity currently in execution
- **`$(execution|scenario|name)`** - display the scenario currently in execution
- **`$(execution|iteration|index)`** - display the iteration index currently in execution
- **`$(execution|script|name)`** - display the script name (without file extension) currently in execution
- **`$(execution|script|fullpath)`** - display the fullpath of the script currently in execution


### Example


### See Also

