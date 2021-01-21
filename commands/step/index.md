---
layout: default
title: step
tags: command step
comments: true
---


### Introduction
This set of commands provide console-based prompt during execution for manual test steps.  Using a "step" command, user
will be prompted to carry out an action manually and optionally provide feedback.  This technique can be useful in the
many areas:

1. A _gentler_ approach to adopting automation

   For those still learning Nexial, or perhaps learning new features of Nexial, using the "step" command can be in 
   place where specific commands are unfamiliar or unknown.  One can replace the "step" commands when he/she has 
   gained sufficient knowledge about the appropriate commands to carry the intended automation. **This elevates the 
   need to know "all the automation feature" in order to start automation.**

2. Improves collaboration

   Using the "step" commands, one can dictate the approach, step-by-step, to substantiate a test case or test scenario.
   Such can be performed by someone outside of the automation (or QA) team, like product owner or business analyst.
   When the test steps are ready for automation, converting them would be easier since:<br/>
   
   1. The test steps are already in Nexial script; there's no need to transfer them from another source
   2. The test steps can be converted in pieces (rather than in entirety) without losing context.  Nexial supports 
      execution where some steps are manual (i.e. a "step" command).
   
   The same approach can be applied to modifying an existing automation script.  For example, if existing functionality
   has changed, one can add additional "step" commands to highlight the corresponding changes needed to existing script.

3. Use for training

   Since each "step" command inherently pauses the execution with user-defined prompt, one can capitalize on this as a
   form of step-by-step training to those unfamiliar with the application/project in question.  One can customize the
   prompt for each "step" command to further clarify intent.
   [step &raquo; `validate(prompt,responses,passResponses)`](validate(prompt,responses,passResponses).html) and
   [step &raquo; `observe(prompt)`](observe(prompt).html) will capture user's response during execution.  The response
   will be displayed as part of execution output, which could in turn be use as training aid.

4. Required manual steps

   There are situations where the required automation is not available in Nexial, or where manual intervention is 
   required (such as multi-factor authentication or physical tasks).  Using the "step" command we can provide timely
   pauses in execution so such the required manual step can be carried out.
   
5. Capturing and Processing inputs provided in prompt
   
   The inputs provided by user during execution will also be shown in execution report file. These inputs are referred 
   as `response` and `comment`. 
   
   There may be cases where an execution could use these inputs for further processing or decision making. These can be 
   retrieved via the System variables `nexial.step.response` and `nexial.step.comment` respectively. Note that these
   System variables will be overwritten in subsequent `step` or `step.inTime` commands.
   
   Example: Suppose a script uses a [`observe(prompt)`](observe(prompt).html) command on Row 8, and a 
   [`validate(prompt,responses,passResponses)`](validate(prompt,responses,passResponses).html) command on Row 18. 
   The system variables [`nexial.step.response`](../../systemvars/index.html#nexial.step.response) and 
   [`nexial.step.comment`](../../systemvars/index.html#nexial.step.comment) will reflect the `response` and `comments` 
   captured at Row 8 until Row 18, when the next `step` (or `step.inTime`) command is executed.


Future version of Nexial will replace console-based prompts with desktop-based (GUI) prompts.


### Available Commands
- [`perform(instructions)`](perform(instructions).html )
- [`validate(prompt,responses,passResponses)`](validate(prompt,responses,passResponses).html)
- [`observe(prompt)`](observe(prompt).html)
