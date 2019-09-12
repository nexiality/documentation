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
via [`nexial.external.output`](../../systemvars/index#nexial.external.output) System variable. The same output file - 
which will be a combination of standard out and standard error - will be made available as a link in the output file as 
well (see screenshot in the Example section below).

Nexial supports the execution of parameterized commands over sub-shell (`cmd.exe` for Windows, `sh` or `bash` for 
*NIX and MacOSX) via the use of single quotes. For example:

```
/bin/bash -c '~/tools/AwesomeTool*/bin/MyTool.sh param1 param2 param3'
```

By using the `'...'` syntax, Nexial will pass the parameterized command wrapped within the single quotes to the 
sub-shell (in this case, `bin/bash`) to interpret. The `bash` program will in turn expand its input and then execute it 
within its command space. This provides the capability to expand out `~/tools/AwesomeTool*/bin/MyTool.sh` to its 
proper/physical path before executing it. This is a great way to execute commands where its exact location cannot be 
determined at the time of automation.


### Parameters
- **programPathAndParams** - this parameter is the path along with the name of the exe file to be launched


### See Also
[external &raquo; `runProgram(programPathAndParams)`](runProgram(programPathAndParams))
