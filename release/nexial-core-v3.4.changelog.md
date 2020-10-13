---
layout: default
title: nexial-core 3.4 (2020-10-12)
parent: release
tags: release nexial-core 3.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.4_0987" class="external-link" target="_nexial_link">Release 3.4</a>
2020-10-12


### General
#### Fixes
- fixed runtime error when checking for Nexial Installer and Nexial version.
- fixed issue for windows while executing script/plan when `USER_HOME` has spaces.
- fixed the issue where an expression is sometimes evaluated twice.
- forcefully failed script where leading/trailing non-printable characters in Activity name is found; 
  necessary since such cases would likely cause execution failures.

#### Improvements
- [`bin/nexial-artifact-repair`](../userguide/BatchFiles#nexial-artifact-repair) enhanced to retain specific data format 
  (date format, background, and border colors mainly).
- [`bin/nexial-script-update`](../userguide/BatchFiles#nexial-script-update) enhanced to automatically trim any 
  leading/trailing whitespaces from scenario or activity name to avoid execution-time errors.
- updated to Spring 2.3.4, Kotlin 1.4.10.
- updated code to eliminate JVM warning on "illegal reflective access".


### [System Variable](../systemvars)
- [`nexial.mailSubject.withSynopsis`](../systemvars/index.html#nexial.mailSubject.withSynopsis): **NEW** System variable
  to support the inclusion of a "PASS" or "FAIL" postfix at the end of an execution notification email.


### [Nexial Interactive](../interactive)
- added helpful hints on how to use "Inspect" within [Nexial Interactive](../interactive).
- fixed defect to support the iteration in [Nexial Interactive](../interactive). Now one can change the iteration scope. 
  (i.e. [`nexial.scope.iteration`](../systemvars/index#nexial.scope.iteration)) between the test artifacts reloads.


### [Expression](../expressions)
- [`BINARY`](../expressions/BINARYexpression): **NEW** expression to support binary data type.
  - support the loading of binary data from an external file.
  - previous [`encodeBase64`] has been renamed as [`base64encode`](../expressions/BINARYexpression#base64encode) for 
    consistency.
- [`SQL => cell(resultName,row,column)`](../expressions/SQLexpression#cellresultnamerowcolumn): **NEW** operation
  to retrieve a specific column of a specific row from a specific query result (referenced by name). Depending on the
  underlying data type, the resulting expression could be a [`NUMBER`](../expressions/NUMBERexpression), 
  [`BINARY`](../expressions/BINARYexpression), or [`TEXT`](../expressions/TEXTexpression) expression.
- [`SQL`](../expressions/SQLexpression): added support for binary or byte-array data type.
- [`TEXT => binary`](../expressions/TEXTexpression#binary): **NEW** operation to convert text into its binary form.
- [`TEXT => removeLeft(length)`](../expressions/TEXTexpression#removeleftlength): **NEW** operation to remove characters 
  off the current text from the left (i.e. beginning). 
- [`TEXT => removeRight(length)`](../expressions/TEXTexpression#removerightlength): **NEW** operation to remove 
  characters off the current text from the right (i.e. end). 
- [`LIST => saveItems(indexAndVar)`](../expressions/LISTexpression#saveitemsindexandvar): **NEW** operation to save one
  or more items from a `LIST` as individual data variables.

 
### [base commands](../commands/base)
- [`assertMatch(text,regex)`](../commands/base/assertMatch(text,regex)): **NEW** command to check for text value via
  regular expression.


### [external commands](../commands/external)
- [`nexial.external.workingDirectory`](../systemvars/index#nexial.external.workingDirectory): supports the use of a 
  "working directory" when running an external program. This will affect the starting directory of an external program.
- [`openFile(filePath)`](../commands/external/openFile(filePath)): **NEW** command used to open any type of file like 
  pdf, excel, txt, png, etc.


### [image commands](../commands/image)
- [`ocr(source,saveVar)`](../commands/image/ocr(source,saveVar)): performance improvement to cache OCR text for 
  repeated use.


### [io commands](../commands/io)
- [`checksum(var,file)`](../commands/io/checksum(var,file)): **NEW** command to determine a file's checksum value.


### [localdb commands](../commands/localdb)
- support binary or byte-array data types. Query result set that is of type BINARY or ARRAY will be maintained as such. 
  One can use the [`BINARY`](../expressions/BINARYexpression) expression to save binary or byte array data to a file.


### [mail commands](../commands/mail)
- [`compose(var,config,value)`](../commands/mail/compose(var,config,value)): **NEW** command to allow for flexibility 
  in sending SMTP email. Currently, this command supports the adding of recipients in the TO, CC, and BCC list, the 
  adding of attachments, and the HTML content.
- [`clearComposed(var)`](../commands/mail/clearComposed(var)): **NEW** command to clear any previously configured 
  email composition.
- [`sendComposed(profile,var)`](../commands/mail/sendComposed(profile,var)): **NEW** command to send a composed email.


### [rdbms commands](../commands/rdbms)
- support binary or byte-array data types. Query result set that is of type BINARY or ARRAY will be maintained as such. 
  One can use the [`BINARY`](../expressions/BINARYexpression) expression or 
  [`SQL >> cell(resultname,row,column) save(file)`](../expressions/SQLexpression#cellresultnamerowcolumn) expression 
  to save binary or byte array data to a file.


### [web commands](../commands/web)
- [`clickAndWait(locator,waitMs)`](../commands/web/clickAndWait(locator,waitMs)): use `waitMs` as time out value to 
  wait for the completion of the page load event, which is triggered by this click event.
- [`clickByLabelAndWait(label,waitMs)`](../commands/web/clickByLabelAndWait(label,waitMs)): use `waitMs` as time out 
  value to wait for the completion of the page load event, which is triggered by this click event.
- [`doubleClickAndWait(locator,waitMs)`](../commands/web/doubleClickAndWait(locator,waitMs)): use `waitMs` as time 
  out value to wait for the completion of the page load event, which is triggered by this double-click event.
- [`doubleClickByLabelAndWait(label,waitMs)`](../commands/web/doubleClickByLabelAndWait(label,waitMs)): use `waitMs` 
  as time out value to wait for the completion of the page load event, which is triggered by this double-click event.
- [`doubleClick(locator)`](../commands/web/doubleClick(locator)): fixed erroneous code that attempts to perform triple 
  clicks (_yikes_...).
