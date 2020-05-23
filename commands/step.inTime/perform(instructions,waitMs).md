---
layout: default
title: perform(instructions,waitMs)
parent: step.inTime
tags: command step.inTime
comments: true
---


### Description
This command is same as [step &raquo; `perform(instructions)`](../step/perform(instructions).html) but it has one extra 
parameter for timeout duration.   

This command pauses the execution for `waitMs` milliseconds and prompts a set of user-defined `instructions` on console. 
The execution will be paused only until the timeout occurs or the user provides input 
before timeout. User can perform the intended action manually by following the `instructions` within `waitMs` milliseconds.
The image below is an example that shows an instruction to check if the printer is turned on:<br/>

![](image/perform(instructions,waitMs)_01.png)

After completing, press the `Enter` key to resume execution.


### Parameters
- **instructions** - The instructions/prompt to display when performing manual actions or tasks.
- **waitMs** - The number of milliseconds to wait before timeout.


### Example
**Script**:<br/>
![](image/perform(instructions,waitMs)_02.png)

**Output**:<br/>
![](image/perform(instructions,waitMs)_03.png)


### See Also
- [`validate(prompt,responses,passResponses,waitMs)`](validate(prompt,responses,passResponses,waitMs).html)
- [`observe(prompt,waitMs)`](observe(prompt,waitMs).html)
