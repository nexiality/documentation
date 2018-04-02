---
layout: default
title: stopRecording
parent: base
tags: command base
comments: true
---


### Description
This command stops screen recording of an execution. This command is used in conjunction with 
[`startRecording()`](startRecording()) command. By default, the output file is saved in .mp4 format and 
will be saved in output folder under `captures` directory.  If no recording has started prior to this command, this 
command will do nothing (aka no-op).  If there was a recording started, then that recording would stop with the 
invocation of this command, and the video file would be made available as a link to the corresponding test step.

**Note**: the "scope" of a screen recording is a script (technically a script file).  A screen recording should start
and end within one script file, which could contain multiple iterations and scenarios.


### Example
Script (_to be used after [`startRecording()`](startRecording()) in the same script_)
![script](image/stopRecording_02.png)


### See Also
- [`startRecording()`](startRecording())

