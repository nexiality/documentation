---
layout: default
title: nexial-core 1.4 (2018-08-??)
parent: release
tags: release nexial-core 1.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.4" class="external-link" target="_nexial_link">Release 1.4</a>
2018-08-??

### General
- upgraded to kotlin 1.2.51
- [Issue #7](https://github.com/nexiality/nexial-core/issues/7): Script reference information such as 
  `Data File`, `DataSheet(s)`, `runtime args` and `JAVA_OPT` is included in output file `#summary` sheet.
- Support for data variables in description columns of test scripts.
- Better error message when not using the minimum version of Java with Nexial.
- prevent deleting of local log files when "output to cloud" is enabled.


### Flow Control
- `TimeTrackStart(label)` and `TimeTrackEnd()`: new flow control to mark start/end time of any arbitrary group of steps.


### Execution Dashboard
- fixed code to promote `buildnum` to execution summary.


### Event Notification
- new event handling to mark the elapsed time of a well-defined events:
  - `nexial.trackExecution=true`: log start/end and elapsed time of an execution.
  - `nexial.trackScript=true`: log start/end and elapsed time of a script.
  - `nexial.trackIteration=true`: log start/end and elapsed time of an iteration.
  - `nexial.trackScenario=true`: log start/end and elapsed time of a scenario.


### Nexial Expression
- The `in` condition will now consider an empty string as match to an empty filter.
- The `not in` condition will not consider an non-empty string as match to an empty filter (as in " this string is 
  not part of empty filter").
  
  #### [TEXT expression](../expressions/TEXTexpression)
  - `removeRegex(regex)`: remove character(s) that matches user-supplied `regex`.
  - `retain(keep)`: retain only the  character(s) that in the user-supplied `keep`.
  - `retainRegex(regex)`: retain only the character(s) that matches user-supplied `regex`.

  #### [JSON expression](../expressions/JSONexpression)
  - `addOrReplace(jsonpath,input)`: supports adding or replacing elements in existing JSON document/array.

  ### [CSV expression](../expressions/CSVexpression)
  - `retainColumns(columnNamesOrIndices)`: retain only the specified columns (by name or by position, separated by 
    commas) in a CSV. Think of this operation as the opposite of `removeColumns(namesOrIndices)`.
  - `replaceColumnRegex(searchFor,replaceWith,columnNameOrIndex)`: for the specified column (by name or by position),
    search for `searchFor` regular expression and replace matches by `replaceWith`. Regex group supported.
  - `distinct`: remove all duplicate rows from CSV. 
  - `parse`: new option added (`trim`) to retain leading/trailing whitespaces from parsed value. By default, trimming is
    in effect.

### [csv commands](../commands/csv)
- fixed parsing error found in 
  [csv &raquo; `compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual))
  that otherwise prevent parsing of files with multiple characters that might be candidate as field delimiter.
  

### [number commands](../commands/number)
- update code to align with documentation; command parameters are now correctly named.
  - **You will likely need to run 
    [`bin/nexial-script-update.cmd|sh`](../userguide/BatchFiles#nexial-script-update.cmd-/-nexial-script-update.sh) on
    your project, and might need to update your scripts accordingly to match the command parameter changes.**
  - `assertEqual(value1,value2)` now correctly named as [`assertEqual(num1,num2)`](../commands/number/assertEqual(num1,num2))
  - `average(variableName,array)` now correctly named as [`average(var,array)`](../commands/number/average(var,array))
  - `ceiling(variableName)` now correctly named as [`ceiling(var)`](../commands/number/ceiling(var)))
  - `decrement(variableName,amount)` now correctly named as [`decrement(var,amount)`](../commands/number/decrement(var,amount)))
  - `floor(variableName)` now correctly named as [`floor(var)`](../commands/number/floor(var)))
  - `increment(variableName,amount)` now correctly named as [`increment(var,amount)`](../commands/number/increment(var,amount)))
  - `max(variableName,array)` now correctly named as [`max(var,array)`](../commands/number/max(var,array))
  - `min(variableName,array)` now correctly named as [`min(var,array)`](../commands/number/min(var,array))
  - `round(variableName,closestDigit)` now correctly named as [`round(var,closestDigit)`](../commands/number/round(var,closestDigit))


### [json command](../commands/json)
- [Issue #4](https://github.com/nexiality/nexial-core/issues/4): 
  [`addToReplace`](../commands/json/addOrReplace(json,jsonpath,input,var)); new command to add or replace JSON element 
  in existing JSON.


#### [web commands](../commands/web)
- preliminary support for Microsoft Edge browser for Windows 10. 
  - **Note**: XPATH locator is not supported in the 10240 build of Windows 10/Edge/webdriver
- implemented auto download of Edge webdriver in order to support multiple builds of Windows 10.
  - Nexial no longer shipped with any Edge webdriver. Instead now it automatically downloads one that is appropriate
    for the version of Windows 10 running the execution.
  - fixed code to default to min. OS version (10.0.10240) if an old version of Windows 10 is encountered.
  - known issues:
    - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4468545/
- supports tag-based locator using `tag=` prefix
- browser-specific support on "switch-window" capability. Currently Edge does not support "switch-window".
- `firefox` is set as default browser ONLY when a web command is invoked. This fixed some confusion regarding browser
  initialization in the context of iteration and plan.
- initial implementation for "download-as-needed" webdriver support. Once complete for all webdrivers, we'll no
  longer ship webdrivers with Nexial. This will reduce Nexial distro size and speed up download speed.
  - firefox driver helper implementation completes; geckodriver removed from Nexial distro.
  - edge driver helper implementation completes
  - chrome-electron driver helper implementation completes