---
layout: default
title: observe(prompt)
parent: step
tags: command step
comments: true
---


### Description
This command provides a facility for user to manually record his/her observation after performing an action or task. 
The use input (i.e. the observation) will be displayed as part of the execution output

This is particularly useful when use in conjunction with [base &raquo; `startRecord()`](../base/startRecording()). One
can note the results for certain actions to help others better understand the behavior of the automation script and/or 
application under test.


### Parameters
- **prompt** - The prompt to display on console.


### Example
**Script**:<br/>
![](image/observe(prompt)_02.png)

During execution, the prompt is displayed on console (\| Write Observation Here):<br/> 
![](image/observe(prompt)_01.png)

**Output**:<br/>
![](image/observe(prompt)_03.png)


### See Also
- [`perform(instructions)`](perform(instructions).html )
- [`validate(prompt,responses,passResponses)`](validate(prompt,responses,passResponses).html)
