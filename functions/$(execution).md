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

- **`$(execution|meta|nexial)`** - display the current Nexial version.
- **`$(execution|meta|java)`** - display the current Java version.
- **`$(execution|meta|user)`** - display the username of the current Nexial execution.


### Example
`$(execution|script|fullpath)`:<br/>
Example output: `C:\projects\MyProject\output\20190305_162921\MyFile.20190305_162923.001.xlsx`


`$(execution|step|index)`: Returns the index number of the row<br/>
![](image/$(execution)_01.png)<br/>
Output: `8`

`$(execution|step|name)`: Identifier of a step in the form of `[file][scenario or worksheet][activity][row number]`
![](image/$(execution)_02.png)<br/>
Output: `[MyFile][MyScenario][MyActivity][ROW 8]`

`$(execution|step|script)`:
![](image/$(execution)_03.png)<br/>
Example output: `MyFile`<br/>
`MyFile` is Excel file name/script name

`$(execution|step|scenario)`:<br/>
![](image/$(execution)_04.png)<br/>
Example output: `MyScenario`<br/>
`MyScenario` is the test scenario, or Excel worksheet, name

`$(execution|step|activity)`:<br/>
![](image/$(execution)_05.png)<br/>
Example output: `MyActivity`
`MyActivity` is the activity name

`$(execution|step|iteration)`:<br/>
![](image/$(execution)_06.png)<br/>
Example output: `1`<br/>
By default, each execution starts with iteration 1.

`$(execution|step|command)`:<br/>
![](image/$(execution)_07.png)<br/>
Output: `base.verbose(text)`

`$(execution|step|description)`:<br/> 
![](image/$(execution)_08.png)<br/>
Output: `print the execution`

Similar information can be retrieved via `$(execution|activity|...)` built-in functions.

`$(execution|activity|name)`:<br/>
![](image/$(execution)_09.png)<br/>
Example output: `MyActivity`

`$(execution|activity|script)`:<br/>
![](image/$(execution)_10.png)<br/>
Example output: `MyFile`

`$(execution|activity|iteration)`:<br/>
Example output: `1`
By default, each execution starts with iteration 1.

`$(execution|activity|scenario)`:<br/>
Example output: `MyActivity`

Additional information can be retrieved via `$(execution|meta|...)` built-in functions.

`$(execution|meta|nexial)`:<br/>
Example output: `nexial-core dev_0413`



### See Also

