---
layout: default
title: nexial-core 2.9 (2019-12-15)
parent: release
tags: release nexial-core 2.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.9_735" class="external-link" target="_nexial_link">Release 2.9</a>
2019-12-15


### General
#### Fixes
- fix execution output so that the result of [base &raquo; `verbose(text)`](../commands/base/verbose(text)) command 
  merges cells from `param1` through `param5`.
- [Project Inspector](../userguide/BatchFiles#nexial-project-inspector):
  - registered previously missed System variables for better project inspection; otherwise project inspector would 
    report valid System variables as "unknown".
  - fixed incorrect test step row number reported in project inspector HTML.

#### Improvements
- [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink): now reflect cloud location (url) when 
  [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) is set to `true`. 
- generate dedicated error log file for error or failure that occurred during execution.
  - generated error log will be linked to the `#summary` tab of the execution output (excel).
- first version of [On-Demand Inspection](../userguide/RealtimeInspectionOfDataVariables#on-demand-inspection).
- added shutdown hook to terminate any processes/programs initialized during execution (such as webdriver or browser). 
  This will not work if Nexial is terminated forcefully via Task Manager or 
  [`SIGKILL`](http://en.wikipedia.org/wiki/SIGKILL).


### [JSONPath](../jsonpath)
- code fix: `count` operation now correctly returns `0` instead of `1`. Affected expression: 
  - [JSON](../expressions/JSONexpression)
  - [LIST](../expressions/LISTexpression)
  - [TEXT](../expressions/TEXTexpression)
  - [XML](../expressions/XMLexpression)
- [JSON](../expressions/JSONexpression): fix to extract an empty JSON array as `[]` rather than `null`.


### [Nexial Interactive](../interactive)
- clear off any "end immediate" or "fail immediate" flags before commencing any execution. This is necessary so that 
  error or failure from any preceding executions won't affect subsequent execution.


### [System Variable](../systemvars)
- [`nexial.scope.required.variables`](../systemvars/index#nexial.scope.required.variables): **NEW** System variable to 
  specify required variables for each iteration. If these variables are undefined, user will get console prompt to 
  assign value to missing variable. This variable is disabled by design, when Nexial is executing in the CI/CD 
  environment.


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


### [csv commands](../commands/csv)
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): code
  fix to support large file (> 200MB) processing.
  - [`[profile].compareExt.expected.readAsIs`]: **NEW** configuration to enforce that the `expected` should be read 
     as is.
  - [`[profile].compareExt.actual.readAsIs`]: **NEW** configuration to enforce that the `actual` should be read as is.
- support CSV content line longer than the default 4096 via 
  [`nexial.csv.maxColumnWidth`](../systemvars/index#nexial.csv.maxColumnWidth) System variable.


### [excel commands](../commands/excel)
- [`columnarCsv(file,worksheet,ranges,output)`](../commands/excel/columnarCsv(file,worksheet,ranges,output)): support 
  columns more than the default 512 via [`nexial.csv.maxColumns`](../systemvars/index#nexial.csv.maxColumns) System 
  variable, and column length longer than the default 4096 character via 
  [`nexial.csv.maxColumnWidth`](../systemvars/index#nexial.csv.maxColumnWidth) System variable.


### [rdbms commands](../commands/rdbms)
- correctly capture rollback statements/events. 
- replace deprecated DBCP (3rd-party library from Apache Commons) related code.
- forced single-query transaction to close connection after execution; required to avoid resource contention.
- remove double-commit scenario to avoid unnecessary error condition.
- allow for non-standard or non-CRUD statements.
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): code fix to ensure all output 
  are listed in execution output (Excel) and uploaded to the cloud when `nexial.outputToCloud` is set to `true`.
- [`saveResult(db,sqls,outputDir)`](../commands/rdbms/saveResult(db,sqls,outputDir)): code fix to ensure all output 
  are listed in execution output (Excel) and uploaded to the cloud when `nexial.outputToCloud` is set to `true`.


### [sound commands](../commands/sound)
- code fix: escape special characters to avoid "sound" API error.


### [web commands](../commands/web)
- [browser metrics](../commands/web/index#browser-performance-metrics): 
  - minor typo fix.
  - fixed timing calculation to avoid negative time.
  - address Electron issue where browser signature cannot be properly derived.
  - address exception condition when the target browser window is no longer available for inspection.
  - code fix to ensure browser metrics report is uploaded to cloud when `nexial.outputToCloud` to set to `true`.
- firefox: turn on automatic download and point the download directory to current output directory.
- chrome: point default download directory to current output directory.
- [`saveBrowserVersion(var)`](../commands/web/saveBrowserVersion(var)): **NEW** command to current browser version (
  along with browser name) to `var`.
- add [browser metadata](../commands/web/index#browser-metadata) as System variable `nexial.browser.meta`.
