---
layout: default
title: nexial-core 2.9 (2019-12-??)
parent: release
tags: release nexial-core 2.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.9_????" class="external-link" target="_nexial_link">Release 2.9</a>
2019-12-??


### General
#### Fixes
- fix output excel so that verbose statement would merge `param1` through `param5` cells.
- Project Inspector:
  - registered previously missed System variables for better project inspection; otherwise project inspector would report valid System variables as "unknown".
  - fixed incorrect test step row number reported in project inspector HTML.

#### Improvements
- [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink): update this System variable for files being 
  generated locally in a "output-to-cloud" execution (which subsequently transferred such file to the cloud).
- generate dedicated error log file for error or failure that occurred during execution.
  - generated error log will be linked to the execution output (excel).
- first rendition of pause-and-inspect detection.
  - renamed to On-Demand Inspection.
- added shutdown hook to terminate any processes/programs initialized during execution (such as webdriver or browser). 
  This will not work if Nexial is terminated forcefully via Task Manager or [`SIGKILL`](http://en.wikipedia.org/wiki/SIGKILL).


### [JSONPath](../jsonpath)
- code fix: `[] => count` now correctly returns `0` instead of `1`.
- code fix: extract against an empty JSON array now returns `[]` rather than `null`.


### [Nexial Interactive](../interactive)
- clear off any "end immediate" or "fail immediate" flags before commencing any execution. This is necessary so that 
  error or failure from any preceding executions won't affect current execution.


### [System Variable](../systemvars)
- [`nexial.scope.required.variables`](../systemvars/index#nexial.scope.required.variables): **NEW** System variable to 
  specify required variables for each iteration. If these variables are undefined, user will get console prompt to assign
  value to missing variable. This variable is disabled by design, when Nexial is executing in the CI/CD environment.


### [Built-in Functions](../functions)
- [`$(array|subarray|myarray|start|end)`](../functions/$(array)): supports the use of `-1` for `end` to signify the last
  position of the target array.


### [Nexial Expression](../expressions)
- [JSON &raquo; `list`](../expressions/JSONexpression#list): code fix to enforce the use of 
 [`nexial.textDelim`](../systemvars/index#nexial.textDelim) for converting JsonArray to list.
- [CONFIG &raquo; `keys`](../expressions/CONFIGexpression#keys): code fix to ensure proper textual output.
- [CONFIG &raquo; `keys`](../expressions/CONFIGexpression#keys): code fix to ensure order as found in source.
- [LIST &raquo; `sublist`](../expressions/LISTexpression#subliststartend): supports the use of `-1` for the end range to
  signify the last position of the target list.


### [base commands](../commands/base)


### [csv commands](../commands/csv)
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): code
  fix to support large file (> 200MB) processing.
  - [`....compareExt.expected.readAsIs`]: **NEW** configuration to enforce that the `expected` should be read as is.
  - [`....compareExt.actual.readAsIs`]: **NEW** configuration to enforce that the `actual` should be read as is.
- support CSV content line longer than the default 4096 via [`nexial.csv.maxColumnWidth`](../systemvars/index#nexial.csv.maxColumnWidth) 
  System variable.


### [excel commands](../commands/excel)
- [`columnarCsv(file,worksheet,ranges,output)`](../commands/excel/columnarCsv(file,worksheet,ranges,output)): support 
  columns more than the default 512 via [`nexial.csv.maxColumns`](../systemvars/index#nexial.csv.maxColumns) System 
  variable, and column length longer than the default 4096 character via 
  [`nexial.csv.maxColumnWidth`](../systemvars/index#nexial.csv.maxColumnWidth)  System variable.


### [external commands](../commands/external)


### [json commands](../commands/json)


### [image commands](../commands/image)


### [rdbms commands](../commands/rdbms)
- correctly capture rollback statements/events. 
- replace deprecated DBCP API code
- forced single-query transaction to close connection after execution; required to avoid resource contention.
- remove double-commit scenario to avoid unnecessary error condition.
- allow for non-standard or non-CRUD statements.


### [sound commands](../commands/sound)
- code fix: escape special characters to avoid "sound" API error


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- browser metrics: minor typo fix
- browser metrics: fixed timing calculation to avoid negative time.
- browser metrics: address Electron issue where browser signature cannot be properly derived
- browser metrics: address exception condition when the target browser window is no longer available for inspection.
- firefox: turn on automatic download and point the download directory to current output directory.
- chrome: point default download directory to current output directory.
- [`saveBrowserVersion(var)`](../commands/web/saveBrowserVersion(var)): **NEW** command to current browser version (
  along with browser name) to `var`.
- add [browser metadata](../commands/web/index#browser-metadata) as System variable `nexial.browser.meta`.