---
layout: default
title: nexial-core 3.4 (2020-10-??)
parent: release
tags: release nexial-core 3.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.4_????" class="external-link" target="_nexial_link">Release 3.4</a>
2020-10-??


### General
#### Fixes
- fixed runtime error when checking for Nexial Installer and Nexial version
- fixed issue for windows while executing script/plan when `USER_HOME` has spaces.
- fixed the issue where an expression is sometime evaluated twice.

#### Improvements
- Enhanced `nexial-artifact-repair` to retain specific data format (date format, background and border colors mainly).


### [System Variable](../systemvars)
- [`nexial.mailSubject.withSynopsis`](../systemvars/index.html#nexial.mailSubject.withSynopsis): **NEW** System variable
  to support to inclusion of a "PASS" or "FAIL" postfix at the end of an execution notification email.

### [Nexial Interactive](../interactive)
- added some helpful hints on how to use "Inspect" within Nexial Interactive
- fixed defect to support iteration in Nexial Interactive. Now one can change iteration scope 
  (i.e. [`nexial.scope.iteration`](../systemvars/index.html#nexial.scope.iteration)) between the reload of test artifacts.


### [Expression](../expressions)
- [`BINARY`](../expressions/BINARYexpression): **NEW** expression to support binary data type.
- [`SQL => cell(resultName,row,column)`](../expressions/SQLexpression.md#cellresultnamerowcolumn): **NEW** operation
  to retrieve a specific column of a specific row from a specific query result (referenced by name). Depending on the
  underlying data type, the resulting expression could be a [`NUMBER`](../expressions/NUMBERexpression), 
  [`BINARY`](../expressions/BINARYexpression), or [`TEXT`](../expressions/TEXTexpression) expression.
- [`SQL`](../expressions/SQLexpression): support binary or byte-array data type
- [`TEXT => binary`](../expressions/TEXTexpression#binary): **NEW** operation to convert text into its binary form


### [Filter](../flowcontrols/filter)
     
 
### [base commands](../commands/base)


### [external commands](../commands/external)
- [`nexial.external.workingDirectory`](../systemvars/index#nexial.external.workingDirectory): supports the use of a 
  "working directory" when running an external program. This will affect the starting directory of an external program.


### [image commands](../commands/image)


### [io commands](../commands/io)


### [json commands](../commands/json)


### [localdb commands](../commands/localdb)
- support binary or byte-array data types


### [number commands](../commands/number)


### [rdbms commands](../commands/rdbms)
- support binary or byte-array data types


### [web commands](../commands/web)


### [ws commands](../commands/ws)


### [xml commands](../commands/xml)


## [tn.5250 commands]
