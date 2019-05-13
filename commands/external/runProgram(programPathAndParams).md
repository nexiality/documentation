---
layout: default
title: runProgram(programPathAndParams)
parent: external
tags: command external
comments: true
---


### Description
This command is to execute the desired program or script, which is expected to be available on the test machine. If the
specified program or script is not found, this command will consider such condition as **FAIL**.

One can consider using this command as a technique to incorporate existing tests that are developed via a different
toolset, or to update client application via silent installation.  The standard output of the specified program or
script will be saved to the output directory, and made available on the output file. This output file can be derived 
via [`nexial.external.output`](../../systemvars/index#nexial.external.output) System variable.


### Parameters
- **programPathAndParams** - this parameter is the path along with the name of the exe file to be launched


### Example 1
**Script**:<br/>
![script](image/runProgram_01.png)


### Example 2
Running a sample.bat file.

Just provide the file path as an argument. And also has the option to pass arguments for that program along with the 
path.
![script](image/runProgram_02.png)

**Output**:<br/>
![output](image/runProgram_03.png)

The standard output from this program is saved in the output file, that can be found in the corresponding project 
output folder.
![output2](image/runProgram_04.png)


### See Also
[external &raquo; `runProgramNoWait(programPathAndParams)`](runProgramNoWait(programPathAndParams))
