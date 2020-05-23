---
layout: default
title: validate(prompt,responses,passResponses,waitMs)
parent: step.inTime
tags: command step.inTime
comments: true
---

### Description
This command is same as [step &raquo; `validate(prompt,responses,passResponses)`](../step/validate(prompt,responses,passResponses).html)
 but it has one extra parameter for timeout duration. 

This command provides manual validation with a timeout. Nexial will pause the current execution and display a `prompt` 
on the console, from which one can provide the appropriate response as validation. The maximum pause time will be  `waitMs` 
milliseconds. If user provides input before the `waitMs` milliseconds then the pause will over immediately. The 
`responses` parameter is a comma-separated list of possible responses, and `passResponses` parameter presents a list of 
comma-separated responses that will be considered as **_PASS_**.  If user provides a response that match one of the 
`passResponses`, then the corresponding test step is considered as PASS. Otherwise, Nexial will consider the 
corresponding step as **_FAIL_**.

The screenshot below is an example that shows the `prompt` and a set of possible `responses`:<br/>   
![](image/validate(prompt,responses,passResponses,waitMs)_01.png)


### Parameters
- **prompt** - The prompt to the intended validation
- **responses** - Comma-separated list of possible responses
- **passResponses** - Comma-separated list of "PASS" responses.  Note that these responses must be found in `responses` 
  as well.  If user's response does not match one of these `passResponses`, the command is considered as FAIL
- **waitMs** - The number of milliseconds to wait before timeout.

### Example
**Script**:<br/>
![](image/validate(prompt,responses,passResponses,waitMs)_02.png)

**Output**:<br/>
![](image/validate(prompt,responses,passResponses,waitMs)_03.png)


### See Also
- [`perform(instructions,waitMs)`](perform(instructions,waitMs).html )
- [`observe(prompt,waitMs)`](observe(prompt,waitMs).html)