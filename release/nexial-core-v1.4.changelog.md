---
layout: default
title: nexial-core 1.4 (2018-08-07)
parent: release
tags: release nexial-core 1.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.4_0150" class="external-link" target="_nexial_link">Release 1.4</a>
2018-08-07


### General
- Upgraded to Kotlin 1.2.51
- [Issue #7](https://github.com/nexiality/nexial-core/issues/7): Script reference information such as 
  `Data File`, `DataSheet(s)`, `runtime args` and `JAVA_OPT` is included in output file `#summary` sheet. Visit
  [Understanding Project Structure](../userguide/UnderstandingProjectStructure) to see a sample output file.
- Support for data variable expansion in "description" columns of test scripts. It is now possible to specify data 
  variable using the `${...}` form in both the "description" column in the script header (Cell A2) and the "description"
  columns in test steps (Row B). Nexial will expand these `${...}` into actual value during output generation. Visit
  [Understanding Project Structure](../userguide/UnderstandingProjectStructure) to see a sample output file.
- Better error message when not using the minimum version of Java with Nexial. The minimum version of Java required is 
  **1.8.0_151**.
- Prevent deleting of local log files when "output to cloud" is enabled.


### Flow Control
- `TimeTrackStart(label)` and `TimeTrackEnd()`: **NEW** flow control to mark start/end time of any arbitrary group of 
  steps. Via this new flow control, it is possible for one to mark the start and stop time between 2 test steps. The 
  timing information is logged separately as pipe-delimiter text file in the `log/nexial-timetrack.log` under the output 
  directory. For more details, visit [Time Tracking](../flowcontrols/timeTracking) page for more details and 
  customization options.


### Execution Dashboard
- Fixed code to promote `buildnum` in the Execution Summary section of the execution output.


### Event Notification
- **NEW** event handling to mark the elapsed time of a well-defined events:
  - `nexial.timetrack.trackExecution`: log start/end and elapsed time of an execution. Set this to `true` to enable.
  - `nexial.timetrack.trackScript`: log start/end and elapsed time of a script. Set this to `true` to enable.
  - `nexial.timetrack.trackIteration`: log start/end and elapsed time of an iteration. Set this to `true` to enable.
  - `nexial.timetrack.trackScenario`: log start/end and elapsed time of a scenario. Set this to `true` to enable.
  - For more details, visit [Time Tracking](../flowcontrols/timeTracking) page for more details and customization 
    options.


### Nexial Expression  

#### [TEXT expression](../expressions/TEXTexpression)
- `removeRegex(regex)`: **NEW** operation to remove character(s) that matches user-supplied `regex`.
- `retain(keep)`: **NEW** operation to retain only the  character(s) that in the user-supplied `keep`.
- `retainRegex(regex)`: **NEW** operation to retain only the character(s) that matches user-supplied `regex`.

#### [JSON expression](../expressions/JSONexpression)
- `addOrReplace(jsonpath,input)`: **NEW** operation to supports adding or replacing elements in existing JSON 
document/array.

#### [CSV expression](../expressions/CSVexpression)
- For `fetch(conditions)`, `filter(conditions)` and `removeRows(conditions)`:  the `in` condition will now consider 
an empty string as match to an empty filter. The `not in` condition will not consider an non-empty string as match 
to an empty filter (as in " this string is not part of empty filter").
- `retainColumns(columnNamesOrIndices)`: **NEW** operation to retain only the specified columns (by name or by 
position, separated by commas) in a CSV. Think of this operation as the opposite of `removeColumns(namesOrIndices)`.
- `replaceColumnRegex(searchFor,replaceWith,columnNameOrIndex)`: **NEW** operation where the specified column (by 
name or by position), search for `searchFor` regular expression will be performed and all matches be replaced with 
`replaceWith`. Regex group supported.
- `distinct`: **NEW** to remove all duplicate rows from CSV. 
- `parse`: new option added (`trim`) to retain leading/trailing whitespaces from parsed value. By default, trimming is
in effect.
- Code fix to honor pipe character (`|`) as delimiter


### [csv commands](../commands/csv)
- Fixed parsing error found in 
  [csv &raquo; `compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual))
  that otherwise prevent parsing of files with multiple characters that might be candidate as field delimiter.
  

### [number commands](../commands/number)
- Update code to align with documentation; command parameters are now correctly named.
  - **You will likely need to run 
    [`bin/nexial-script-update.cmd|sh`](../userguide/BatchFiles#nexial-script-update) on
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
  [`addToReplace`](../commands/json/addOrReplace(json,jsonpath,input,var)); **NEW** command to add or replace JSON 
  element in existing JSON.


#### [web commands](../commands/web)
- Support for Microsoft Edge browser for Windows 10. 
  - **Note**: XPATH locator is not supported in the 10240 build of Windows 10/Edge/webdriver
  - known issues: 
  <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4468545/" class="external-link" target="nexial_external">https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4468545/</a>
- Automatic webdriver download/update now available:
  - Nexial no longer ships with any webdriver. Instead now it automatically downloads the webdriver according to 
    what's specified in [`${nexial.browser}`](../systemvars/index#nexial.browser) and that which is appropriate for the
    operation system (that executes Nexial).
  - Refer to [WebDriver Support](../commands/web#webdriver-support) for more details.
- Supports tag-based locator using `tag=` prefix.
- Browser-specific support on "switch-window" capability. Currently Edge does not support "switch-window".
- `firefox` is set as default browser ONLY when a web command is invoked. This fixed some confusion regarding browser
  initialization in the context of iteration and plan.
- [`assertTextMatches(text,minMatch,scrollTo)`](../commands/web/assertTextMatches(text,minMatch,scrollTo)) - **NEW** 
  command to assert the minimum number of occurrence of `text` in current web page, and optionally scroll to the 
  specified instance.
- Fixed error when automating scrolling on an element that might not support scrolling (e.g. `window`, `document`, 
  `html`)
- Fixed missing byte array to string conversion in 
  [web &raquo; `savePageAs(var,sessionIdName,url)`](../commands/web/savePageAs(var,sessionIdName,url))
