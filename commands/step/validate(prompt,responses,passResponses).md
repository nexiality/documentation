---
layout: default
title: validate(prompt,responses,passResponses)
parent: step
tags: command step
comments: true
---

### Description
This command provides manual validation.  Nexial will pause the current execution and display a `prompt` on the 
console, from which can provide the appropriate response as validation.  The `responses` parameter is a comma-separated
list of possible responses, and `passResponses` parameter presents a list of comma-separated responses that will be
considered as PASS.  If user provides a response that match one of the `passResponses`, then the corresponding test
step is considered as PASS.  Otherwise, Nexial will consider the corresponding step as FAIL.

The screenshot below is an example that shows the `prompt` and a set of possible `responses`:<br/>   
![](image/validate(prompt,responses,passResponses)_01.png)


### Parameters
- **prompt** - The prompt to the intended validation
- **responses** - Comma-separated list of possible responses
- **passResponses** - Comma-separated list of "PASS" responses.  Note that these responses must be found in `responses` 
  as well.  If user's response does not match one of these `passResponses`, the command is considered as FAIL


### Example
**Script**:<br/>
![](image/validate(prompt,responses,passResponses)_02.png)

**Output**:<br/>
![](image/validate(prompt,responses,passResponses)_03.png)


### See Also
- [`perform(instructions)`](perform(instructions).html )
- [`observe(prompt)`](observe(prompt).html)