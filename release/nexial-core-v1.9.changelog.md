---
layout: default
title: nexial-core 1.9 (2019-02-04)
parent: release
tags: release nexial-core 1.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.9_0399" class="external-link" target="_nexial_link">Release 1.9</a>
2019-02-04


### General
#### Fixes:
- open execution output doesn't create new command console.
- code fix to ensure `nexial.scenarioRef` data variables do not taint subsequent scenarios.
- code fix to ensure execution metadata is generated when `nexial.outputToCloud` is set to true. This is needed to 
  update Execution Dashboard.
- code fix JUnit XML generation for edge case where reference data is defined with no value.
- code fix for logic error when reading project.properties during Nexial execution startup.
- code fix to ensure in-place data variable updates (i.e. changes to data variable via script, such as using 
  [base &raquo; `save(var,value)`](../commands/base/save(var,value))) also updates System properties, if such data 
  variable was initially defined as a System property.
- fixes to execution output (HTML) to omit empty reference data. 


#### Improvements:
- generates JUnit-compatible XML at the end of execution. This file is **ALWAYS** named as `junit.xml` and placed in
  the output directory.
- console output now includes additional information useful for CI/CD.
- execution output (HTML) now includes links to script, data and output files.
- generated JUnit XML now contains additional execution metadata regarding script, data, and iteration.


### [System Variables](../systemvars/index):
- [`nexial.web.dragFrom`](../systemvars/index#nexial.web.dragFrom): **NEW** determine where the "drag" action on a web 
  element should start from.
- [`nexial.desktop.table.clickBeforeEdit`](../systemvars/index#nexial.desktop.table.clickBeforeEdit): **NEW** determine 
  if editing a row of a table/grid component of a desktop application would require an initial click. Default is `true`, 
  which means Nexial will always click on the row prior to editing. Applicable to desktop automation only.
- [`nexial.json.treatJsonAsIs`](../systemvars/index#nexial.json.treatJsonAsIs): **NEW** System variable to control
  how Json fragments extracted via JsonPath should be treated. If set to false, then the double quotes around text data
  will be removed (note: Json standards require text data to be wrapped in double quotes). This may simplify automation
  by eliminating the need to remove double quotes. The default is to leave the Json fragment as is (i.e. double quotes 
  stay). 


### [Nexial Expression](../expression)
- [JSON &raquo; `beautify`](../expressions/JSONexpression): **NEW** beautify `json` to improve readability.
- [JSON &raquo; `minify`](../expressions/JSONexpression): **NEW** minify `json` to improve data transfer efficiency.
- [XML &raquo; `beautify`](../expressions/XMLexpression): **NEW** beautify `xml` to improve readability.
- [XML &raquo; `minify`](../expressions/XMLexpression): **NEW** minify `xml` to improve data transfer efficiency.
- code fix to enable the use of `]` character as part of operation parameter.
- **NEW**: 1st phase of [JSON function](../jsonpath/index.html#jsonpath-function) now available.
- [NUMBER &raquo; `average`](../expressions/JSONexpression): **NEW** calculate the average of a list of numbers.
- [JSON &raquo; `select`](../expressions/JSONexpression): **NEW** using multiple jsonpath to "extract" out of a JSON
  document into [CSV](../expressions/CSVexpression) expression.
- [CSV &raquo; `replaceColumnRegx`](../expressions/CSVexpression): now supports regex replacement on multi-line text. 


### [aws.s3 commands](../commands/aws.s3)
- [`copyFrom(var,profile,remote,local)`](../commands/aws.s3/copyFrom(var,profile,remote,local)): allow copy of S3 
  resource to a local file with a different name. Note that this file must exist prior to this command being invoked.


### [desktop commands](../commands/desktop)
- code fix to ensure that user input is selected from combo box.
- code fix to retrieve text from TextArea element.
- code fix to avoid unnecessarily "double" typing via 
  [desktop &raquo; `typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4)),
  [desktop &raquo; `typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4)),
  and [desktop &raquo; `sendKeysToTextBox(name,text1,text2,text3,text4)`](../commands/desktop/sendKeysToTextBox(name,text1,text2,text3,text4)))
- code fix to resolve focus issue when multiple [desktop &raquo; `clickMenu(menu)`](../commands/desktop/clickMenu(menu))
  are executed consecutively.


### [external commands](../commands/external)
- code fix to support the invocation of external program/batch that contains spaces in either file name or directory name.
- [`runProgramNoWait()`](../commands/external/runProgramNoWait(programPathAndParams)): **NEW** command to execute
  external program without waiting for it to terminate. Basically, fire-and-forget on external program.


### [excel commands](../commands/excel)
- automatically create missing Excel files when using any of the `write*()` commands.
- allow the reading of an empty cell range follow by other Excel operations such as `transpose()`.
- [`clear(file,worksheet,range)`](../commands/excel/clear(file,worksheet,range)): now clearing a non-existent file or 
  worksheet would not throw any error.


### [json command](../commands/json)
- [`beautify(json,var)`](../commands/json/beautify(json,var)): **NEW** beautify `json` to improve readability.
- [`minify(json,var)`](../commands/json/minify(json,var)): **NEW** minify `json` to improve data transfer efficiency.
- **NEW**: 1st phase of [JSON function](../jsonpath/index.html#jsonpath-function) now available.
- [`storeValue(json,jsonpath,var)`](../commands/json/storeValue(json,jsonpath,var)): now support extraction of Json 
  fragments as is or remove double quotes around text to ease parsing and comparison tasks. See 
  [nexial.json.treatJsonAsIs](../systemvars/index#nexial.json.treatJsonAsIs) for more details.
- [`storeValues(json,jsonpath,var)`](../commands/json/storeValues(json,jsonpath,var)): now support extraction of Json 
  fragments as is or remove double quotes around text to ease parsing and comparison tasks. See 
  [nexial.json.treatJsonAsIs](../systemvars/index#nexial.json.treatJsonAsIs) for more details.


### [web commands](../commands/web)
- [`dragTo(fromLocator,xOffset,yOffset)`](../commands/web/dragTo(fromLocator,xOffset,yOffset)): **NEW** automates the
  "drag" action on a web element.
- fixed issue when running different browser between iterations or scripts (within plan).
- code fix to recover from current active window being no longer available.
- code fix to update execution result in CBT before clearing out execution-bound reference data.
- [`clickOffset(locator,x,y)`](../commands/web/clickOffset(locator,x,y)): **NEW** command to click on a target web 
  element by its offset.


### [xml commands](../commands/xml)
- [`beautify(xml,var)`](../commands/xml/beautify(xml,var)): **NEW** beautify `xml` to improve readability.
- [`minify(xml,var)`](../commands/xml/minify(xml,var)): **NEW** minify `xml` to improve data transfer efficiency.
