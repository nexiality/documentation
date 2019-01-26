---
layout: default
title: runProgramNoWait(programPathAndParams)
parent: external
tags: command external
comments: true
---


### Description
This command is to execute the desired program or script, which is expected to be available on the test machine. This 
command is similar to [external &raquo; `runProgram(programPathAndParams)`](runProgram(programPathAndParams)), except 
that this command will **NOT** wait for the invoked program/command/script to terminate.

This can be useful when there is the need to invoke one or more external program(s) and run them in parallel. The output
(i.e. standard out and standard error) will be saved in the `output` directory as `runProgramNoWait_A[row index].log`.
The `[row index]` will be based on the row number where this command is located. One can also derive this file name 
via [`nexial.external.output`](../../systemvars/index#nexial.external.output) System variable.


### Parameters
- **programPathAndParams** - this parameter is the path along with the name of the exe file to be launched


### See Also
[external &raquo; `runProgram(programPathAndParams)`](runProgram(programPathAndParams))
