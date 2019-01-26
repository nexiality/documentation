---
layout: default
title: nexial-core 1.9 (2019-02-??)
parent: release
tags: release nexial-core 1.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.9" class="external-link" target="_nexial_link">Release 1.9</a>
2019-02-??


### General
#### Fixes:
- open execution output doesn't create new command console.
- code fix to ensure `nexial.scenarioRef` data variables do not taint subsequent scenarios.
- code fix to ensure execution metadata is generated when `nexial.outputToCloud` is set to true. This is needed to 
  update Execution Dashboard.
- code fix JUnit XML generation for edge case where reference data is defined with no value.

#### Improvements:
- generates JUnit-compatible XML at the end of execution. This file is **ALWAYS** named as `junit.xml` and placed in
  the output directory.
- console output now includes additional information useful for CI/CD.
- execution output (HTML) now includes links to script, data and output files.
- generated JUnit XML now contains additional execution metadata regarding script, data, and iteration.

#### New:


### [System Variables](../systemvars/index):
- [`nexial.web.dragFrom`](../systemvars/index#nexial.web.dragFrom): **NEW** determine where the "drag" action on a web 
  element should start from.
- [`nexial.desktop.table.clickBeforeEdit`](../systemvars/index#nexial.desktop.table.clickBeforeEdit): **NEW** determine 
  if editing a row of a table/grid component of a desktop application would require an initial click. Default is `true`, 
  which means Nexial will always click on the row prior to editing. Applicable to desktop automation only.

### [Event Notification](../userguide/EventNotification)


### [Nexial Expression](../expression)
- [JSON &raquo; `beautify`](../expressions/JSONexpression): **NEW** beautify `json` to improve readability.
- [JSON &raquo; `minify`](../expressions/JSONexpression): **NEW** minify `json` to improve data transfer efficiency.
- [XML &raquo; `beautify`](../expressions/XMLexpression): **NEW** beautify `xml` to improve readability.
- [XML &raquo; `minify`](../expressions/XMLexpression): **NEW** minify `xml` to improve data transfer efficiency.
- code fix to enable the use of `]` character as part of operation parameter.
- **NEW**: 1st phase of [JSON function](../jsonpath/index.html#jsonpath-function) now available.
- [NUMBER &raquo; `average`](../expressions/JSONexpression): **NEW** calculate the average of a list of numbers.


### [Nexial Interactive](../interactive)


### [Nexial Filter](../flowcontrols/filter)


### [Built-in Function](../functions)


### [aws.s3 commands](../commands/aws.ses)


### [aws.ses commands](../commands/aws.ses)


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- code fix to ensure that user input is selected from combo box


### [external commands](../commands/external)
- code fix to support the invocation of external program/batch that contains spaces in either file name or directory name.
- [`runProgramNoWait()`](../commands/external/runProgram(programPathAndParms).md)


### [excel commands](../commands/excel)
- automatically create missing Excel files when using any of the `write*()` commands.
- allow the reading of an empty cell range follow by other Excel operations such as `transpose()`.
- [`clear(file,worksheet,range)`](../commands/excel/clear(file,worksheet,range)): now clearing a non-existent file or 
  worksheet would not throw any error.


### [image commands](../commands/image)


### [io commands](../commands/io)


### [json command](../commands/json)
- [`beautify(json,var)`](../commands/json/beautify(json,var)): **NEW** beautify `json` to improve readability.
- [`minify(json,var)`](../commands/json/minify(json,var)): **NEW** minify `json` to improve data transfer efficiency.
- **NEW**: 1st phase of [JSON function](../jsonpath/index.html#jsonpath-function) now available.


### [web commands](../commands/web)
- [`dragTo(fromLocator,xOffset,yOffset)`](../commands/web/dragTo(fromLocator,xOffset,yOffset)): **NEW** automates the
  "drag" action on a web element.
- fixed issue when running different browser between iterations or scripts (within plan).
- code fix to recover from current active window being no longer available.


### [xml commands](../commands/xml)
- [`beautify(json,var)`](../commands/json/beautify(json,var)): **NEW** beautify `xml` to improve readability.
- [`minify(json,var)`](../commands/json/minify(json,var)): **NEW** minify `xml` to improve data transfer efficiency.
