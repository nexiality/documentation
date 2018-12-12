---
layout: default
title: Improving Script Portability
parent: Tips and Tricks
tags: command tipsandtricks
comments: true
---


### Introduction
It should be in every project's test automation strategy to ensure that the automation tests/suites therein are 
portable.  This means that the same script can execute and behave as expected both locally (to the test script author)
and remotely (someone else's machine or remote/virtual environment).  Portability improves both the creditability and
the extensibility of the automation, as well as collaboration amongst the script authors.

Nexial provides a few ways towards script portability.


#### Use $(syspath)
Use [`$(syspath)`](../functions/$(syspath)) to reference test artifacts such as script and data file. This 
built-in function resolves the physical location of test artifacts at runtime so that one would not need to resort to 
hard coding.  Thus, instead of specifying the fully qualified path, such as `C:\projects\MyProject` or 
`/Users/user123/projects/MyApplication/artifact/script/TEST-1234.xlsx`, one can specify `$(syspath|project|fullpath)` 
and `$(syspath|script|fullpath)/TEST-1234.xlsx`, respectively.  During execution, Nexial will resolve the appropriate 
physical path and automation script is thus guarded against location or even OS changes.


#### Use relative path in Test Plan
Since Nexial is aware of the relative location of test artifact within a "project", and the project location is resolved
dynamically during execution, it is not necessary (and not recommended) to specify fully qualified path information
in a test plan.

If the referenced test scripts and data files are in the same project location, there is no need to specify the 
path of these artifacts. Nexial will automatically resolves this for you.  If the referenced artifact is in another 
project that is in "sibling location" as current project (i.e.  `C:\projects\Project1\` and `C:\projects\Project2`),
then one can use relative path (2 dots to move up one directory) for reference.

For example, assuming the current project is `C:\projects\Project1`:

- `C:\projects\Project2\artifact\script\Project2_script.xlsx` would be 
  `../../Projects2/artifact/script/Project2_script.xlsx`
- `C:\projects\Project2\artifact\data\Project2_script.data.xlsx` would be 
  `../../Projects2/artifact/data/Project2_script.data.xlsx`


#### When `nexial.openResult` is enabled
Specifying the spreadsheet program is **ONLY** required to enable Nexial to open up the execution output automatically 
after the execution is completed. Otherwise, no need to specify this information at all. To achieve portability, 
use one of the following ways to specify the spreadsheet program path:  

- set the environment variables from command line before executing the scripts:<br/>
  ```
  set JAVA_OPT=-Dnexial.openResult=on -Dnexial.spreadsheet.program=wps
  ... ...
  nexial.cmd -script ...
  ```

- a perhaps simple way is to specify the spreadsheet program of choice in data file<br/>

  | data variable name          | data variable value |
  | --------------------------- | ------------------- |
  |`nexial.spreadsheet.program` | `excel`             |
  
  [`nexial.spreadsheet.program`](../systemvars/index#nexial.spreadsheet.program) can be `excel` (default) or `wps`.

  - There is NO need to specify the full path of the target spreadsheet program, like
    `C:\Users\<user>\AppData\Local|Kingsoft\WPS Office\10.2.0.5820\office6\et.exe`
