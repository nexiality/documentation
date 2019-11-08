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


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- [JSON &raquo; `list`](../expressions/JSONexpression#list): code fix to enforce the use of 
 [`nexial.textDelim`](../systemvars/index#nexial.textDelim) for converting JsonArray to list.


### [base commands](../commands/base)


### [csv commands](../commands/csv)


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
