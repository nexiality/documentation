---
layout: default
title: Nexial Exit Status
parent: System Variables
tags: system exit status
comments: true
redirect_from:
  - /exitcode
  - /exitcodes
  - /systemvars/exitcodes
---


At the [end of execution](endofexecution), Nexial emits some information that might be useful for external or its parent
process. One of such information is the <a href="https://en.wikipedia.org/wiki/Exit_status" class="external-link" 
target="nexial_link">exit status</a>. The main idea is that one can use the exit status to make informed decision 
regarding a Nexial execution. Note that exit status represents the "overall status" of an execution. In general, a value
of `0` means that the execution has completed successfully. This does not mean that there were no test step failure, 
however. It simply means that the execution has completed.

Here are the known exit status that a Nexial execution can possibly emit:

| Code      | Description                                                                                              |
|:---------:|:---------------------------------------------------------------------------------------------------------|
|0          |Execution completed without issue. All test passed.                                                       |
|-12 or 244 |Execution completed with some warning. See log or execution output for details.                           |
|-13 or 243 |Execution completed with errors but the [success rate is still within expectation](index#nexial.minExecSuccessRate). |
|-14 or 242 |Execution completed with error rate higher than expectation. In other words, too many failed steps found. |
|-15 or 241 |Execution status unknown due to missing execution output.                                                 |
|-16 or 240 |Incorrect commandline argument; execution did not run.                                                    |
|-17 or 239 |The target output Excel file is currently in use; execution did not complete successfully.                |
|-18 or 238 |Most likely a bad Nexial distro. is in use. Please update to the latest Nexial distribution.              |
|-19 or 237 |Only applicable to [Nexial Setup](../userguide/BatchFiles#nexial-setup). This usually means that the specified data file is not valid for use. |

<br/>

The exit status is available via the console/process from which Nexial is executed.

Windows:
```
...
nexial.cmd -script ... ...
... ...
... ...
... ...

echo %errorlevel%
if errorlevel 242 (
   echo FAILURE FOUND!
   exit /b %errorlevel%
)

... ...
```

*Nix/MacOSX:
```
...
./nexial.sh -script ... ...
... ...
... ...
... ...

echo $?
status=$?

if test $status -eq 0
then
    echo "All good!"
else
    echo "Nope.. need better results."
fi
```

For more execution metadata output from Nexial, please see [End of Execution](endofexecution).