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
- forcefully failed script where leading/trailing non-printable characters in Activity name is found; 
  necessary since such cases would likely cause execution failures.

#### Improvements
- Enhanced `nexial-artifact-repair` to retain specific data format (date format, background and border colors mainly).
- [`nexial-script-update`](../userguide/BatchFiles#nexial-script-update): automatically trim scenario names and activity
  with leading/trailing whitespaces to avoid execution-time errors.


### [System Variable](../systemvars)
- [`nexial.mailSubject.withSynopsis`](../systemvars/index.html#nexial.mailSubject.withSynopsis): **NEW** System variable
  to support to inclusion of a "PASS" or "FAIL" postfix at the end of an execution notification email.


### [Nexial Interactive](../interactive)
- added some helpful hints on how to use "Inspect" within Nexial Interactive
- fixed defect to support iteration in Nexial Interactive. Now one can change iteration scope 
  (i.e. [`nexial.scope.iteration`](../systemvars/index.html#nexial.scope.iteration)) between the test artifacts reloads.


### [Expression](../expressions)
- [`BINARY`](../expressions/BINARYexpression): **NEW** expression to support binary data type.
  - support loading of binary data from external file.
  - previous [`encodeBase64`] has been renamed as [`base64encode`](../expressions/BINARYexpression#base64encode) for 
    consistency.
- [`SQL => cell(resultName,row,column)`](../expressions/SQLexpression.md#cellresultnamerowcolumn): **NEW** operation
  to retrieve a specific column of a specific row from a specific query result (referenced by name). Depending on the
  underlying data type, the resulting expression could be a [`NUMBER`](../expressions/NUMBERexpression), 
  [`BINARY`](../expressions/BINARYexpression), or [`TEXT`](../expressions/TEXTexpression) expression.
- [`SQL`](../expressions/SQLexpression): support binary or byte-array data type
- [`TEXT => binary`](../expressions/TEXTexpression#binary): **NEW** operation to convert text into its binary form.
- [`TEXT => removeLeft(length)`]: **NEW** operation to remove characters off the current text from the left (i.e. beginning).
- [`TEXT => removeRight(length)`]: **NEW** operation to remove characters off the current text from the right (i.e. end).
- [`LIST => saveItems(indexAndVar)`](../expressions/LISTexpression#saveitemsindexandvar): **NEW** operation to save one
  or more items from a `LIST` as individual data variables.


### [Filter](../flowcontrols/filter)
     
 
### [base commands](../commands/base)
- [`assertMatch(text,regex)`](../commands/base/assertMatch(text,regex)): **NEW** command to check for text value via
  regular expression.


### [external commands](../commands/external)
- [`nexial.external.workingDirectory`](../systemvars/index#nexial.external.workingDirectory): supports the use of a 
  "working directory" when running an external program. This will affect the starting directory of an external program.
- [`openFile(filePath)`](../commands/external/openFile(filePath)): **NEW** command used to 
   open any type of file like pdf, excel, txt, png etc.


### [image commands](../commands/image)


### [io commands](../commands/io)


### [json commands](../commands/json)


### [localdb commands](../commands/localdb)
- support binary or byte-array data types

### [mail commands](../commands/mail)
- support for adding recipients in the TO, CC and BCC list.
- support for adding attachments to the email.
- support for appending the body to email at different steps.

### [number commands](../commands/number)


### [rdbms commands](../commands/rdbms)
- support binary or byte-array data types


### [web commands](../commands/web)
- [`clickAndWait(locator,waitMs)`](../commands/web/clickAndWait(locator,waitMs)): use `waitMs` to as time out value to 
  wait for the completion of the page load event, which is triggered from this click event.
- [`clickByLabelAndWait(label,waitMs)`](../commands/web/clickByLabelAndWait(label,waitMs)): use `waitMs` to as time out 
  value to wait for the completion of the page load event, which is triggered from this click event.
- [`doubleClickAndWait(locator,waitMs)`](../commands/web/doubleClickAndWait(locator,waitMs)): use `waitMs` to as time 
  out value to wait for the completion of the page load event, which is triggered from this double-click event.
- [`doubleClickByLabelAndWait(label,waitMs)`](../commands/web/doubleClickByLabelAndWait(label,waitMs)): use `waitMs` to 
  as time out value to wait for the completion of the page load event, which is triggered from this double-click event.
- [`doubleClick(locator)`](../commands/web/doubleClick(locator)): fixed erroneous code that attempts to perform triple 
  clicks (yikes...).

### [ws commands](../commands/ws)


### [xml commands](../commands/xml)


## [tn.5250 commands]
