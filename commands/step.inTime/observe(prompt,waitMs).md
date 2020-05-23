---
layout: default
title: observe(prompt,waitMs)
parent: step.inTime
tags: command step.inTime
comments: true
---


### Description
This command is same as [step &raquo; `observe(prompt)`](../step/observe(prompt).html) but it has one extra parameter 
for timeout duration. 

This command will wait for the user input for that specified time duration (in milliseconds). 
If the given time expires then the command will complete and the automation script will continue with the next commands 
(if any). On the other hand, if the user provides input (his/her observation) in the input prompt before timeout then 
also the command will complete and the automation script will continue with next command (if any).


This command is useful in cases where you want to provide some manual observation, but you also don't want to keep 
waiting for the input lifelong. You can use the `waitMs` parameter to specify the maximum time to wait for the input. 
If input is not provided withing given time then the command will complete and the automation script will move to the 
next command executions, if any.



### Parameters
- **prompt** - The prompt to display on console.
- **waitMs** - The number of milliseconds to wait before timeout.


### Example
**Script**:<br/>
![](image/observe(prompt,waitMs)_02.png)

During execution, the prompt is displayed on console with timeout duration (\| Write Observation Here):<br/> 
![](image/observe(prompt,waitMs)_01.png)

**Output**:<br/>
![](image/observe(prompt,waitMs)_03.png)


### See Also
- [`perform(instructions,waitMs)`](perform(instructions,waitMs).html )
- [`validate(prompt,responses,passResponses,waitMs)`](validate(prompt,responses,passResponses,waitMs).html)
