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
- **`$(execution|step|index)`** - display the row number of the step currently in execution
- **`$(execution|step|name)`** - display the step currently in execution, in the format of <br/>
  `[ script name ][ scenario name ][ activity name ][ row number ]`
- **`$(execution|step|script)`** - display the script name (without file extension) currently in execution
- **`$(execution|step|scenario)`** - display the scenario currently in execution
- **`$(execution|step|activity)`** - display the activity currently in execution
- **`$(execution|step|iteration)`** - display the iteration index currently in execution
- **`$(execution|step|command)`** - display the command currently being executed
- **`$(execution|step|description)`** - display the description of the step currently in execution
- **`$(execution|activity|name)`** - display the activity currently in execution
- **`$(execution|activity|script)`** - display the script name currently in execution
- **`$(execution|activity|iteration)`** - display the iteration index currently in execution
- **`$(execution|activity|scenario)`** - display the scenario currently in execution
- **`$(execution|scenario|name)`** - display the scenario currently in execution
- **`$(execution|scenario|script)`** - display the script name currently in execution
- **`$(execution|scenario|iteration)`** - display the iteration index currently in execution
- **`$(execution|iteration|index)`** - display the iteration index currently in execution
- **`$(execution|iteration|script)`** - display the script name currently in execution
- **`$(execution|script|name)`** - display the script name (without file extension) currently in execution
- **`$(execution|script|fullpath)`** - display the fullpath of the script currently in execution

### Example


### See Also

