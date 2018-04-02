---
layout: default
title: startRecording
parent: base
tags: command base
comments: true
---


### Description
This command performs screen recording during an execution.  The recording will capture the entire primary desktop
(and thus will not work in a headless mode). 

The screen recording can start within any part of a script file.  It will be start recording from the point this 
command is invoked until [`stopRecording()`](stopRecording()) is invoked _WITHIN THE SAME SCRIPT_.  The recording 
is saved as a MP4 in the **output** directory under `captures` folder.

### Useful tip
- You can control the screen recording by setting [`nexial.recordingEnabled`](../../systemvars/index.html#nexial.recordingEnabled) system variable to `true` or `false`.
- This can be useful when toggling between environments where screen recording is not ideal (such as CI/CD).

### Example
**Script**:<br/>
![script](image/startRecording_02.png)

This command is used in conjunction with [`stopRecording()`](stopRecording()) command. Using 
this command will stop all future:
![](image/startRecording_03.png)


### See Also
- [`stopRecording()`](stopRecording())
