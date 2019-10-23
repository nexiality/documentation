---
layout: default
title: terminate(programName)
parent: external
tags: command external executable terminate kill
comments: true
---


### Description
This command instructs Nexial to terminate (possibly abruptly) the specified program via its executable file name 
(`programName`). One can use this command to simulate a hazardous condition by abruptly terminating a running 
program. Similarly one can use this command to stop running program(s) as a way of "initializing" test automation.

Note that Nexial adheres to the security and permission of the current run-user - the userid that is running the Nexial
Automation. So it is conceivable that some program termination will not work, should the current run-user be without
the necessary authority.

Also, any program termination will not trigger any further action to Nexial and any processes (programs) initiated by 
Nexial. For example, Nexial will automate the opening of a browser as part of its Web automation capability. But it
is unaware when the same browser is terminated via this command. The consequence will likely be highly undesirable. 
Similarly, one may use the [`runProgramNoWait(programPathAndParams)`](runProgramNoWait(programPathAndParams)) command 
to run `Notepad.exe`. The same `Notepad.exe` can be terminated via this command, but Nexial will not have any knowledge 
of it.


### Parameters
- **programName** - the program name (executable file name) of the program to be terminated. File extension and 
  directory is not required.



### See Also
- [`runProgram(programPathAndParams)`](runProgram(programPathAndParams))
- [`runProgramNoWait(programPathAndParams)`](runProgramNoWait(programPathAndParams))
