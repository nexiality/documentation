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


### [JSONPath](../jsonpath)
- code fix: `[] => count` now correctly returns `0` instead of `1`.
- code fix: extract against an empty JSON array now returns `[]` rather than `null`.


### [Nexial Interactive](../interactive)
- clear off any "end immediate" or "fail immediate" flags before commencing any execution. This is necessary so that 
  error or failure from any preceding executions won't affect current execution.


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- [JSON &raquo; `list`](../expressions/JSONexpression#list): code fix to enforce the use of 
 [`nexial.textDelim`](../systemvars/index#nexial.textDelim) for converting JsonArray to list.
- [CONFIG &raquo; `keys`](../expressions/CONFIGexpression#keys): code fix to ensure proper textual output.
- [CONFIG &raquo; `keys`](../expressions/CONFIGexpression#keys): code fix to ensure order as found in source.


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


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- browser metrics: minor typo fix
- browser metrics: fixed timing calculation to avoid negative time.
- browser metrics: address Electron issue where browser signature cannot be properly derived
- browser metrics: address exception condition when the target browser window is no longer available for inspection.
- firefox: turn on automatic download and point the download directory to current output directory.
- chrome: point default download directory to current output directory.

