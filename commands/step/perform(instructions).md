---
layout: default
title: perform(instructions)
parent: step
tags: command step
comments: true
---


### Description
This command pauses the execution and prompts a set of user-defined `instructions` on console.  User can perform the
intended action manually by following the `instructions`.  The image below is an example that shows 3 action to be 
performed manually:<br/>

![](image/perform(instructions)_01.png)

After completing, press the `Enter` key to resume execution.


### Parameters
- **instructions** - The instructions/prompt to display when performing manual actions or tasks


### Example
**Script**:<br/>
![](image/perform(instructions)_02.png)

**Output**:<br/>
![](image/perform(instructions)_03.png)


### See Also
- [`validate(prompt,responses,passResponses)`](validate(prompt,responses,passResponses).html)
- [`observe(prompt)`](observe(prompt).html)
