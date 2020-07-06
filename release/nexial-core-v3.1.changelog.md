---
layout: default
title: nexial-core 3.1 (2020-07-06)
parent: release
tags: release nexial-core 3.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.1_852" class="external-link" target="_nexial_link">Release 3.1</a>
2020-07-06


### General
#### Fixes
- fixed email notification template when execution terminates too abruptly.
- fixed SES-based email notification; possible SSL cert conflict with DocumentDB automation. 
- nexial.cmd needs to handle spaces in the directory name.
- ensure Nexial doesn't write too much data into a output excel cell (should be less than 32k).
- fixed issue of skipping the section command which has nested section.
#### Improvements
- Execution output will now show user response & comments provided in [`step`](../commands/step) and 
  [`step.inTime`](../commands/step.inTime) commands.
- Support for accessing response and comments within script execution using System variables 
  [`nexial.step.response`](../systemvars/index.html#nexial.step.response) and 
  [`nexial.step.comment`](../systemvars/index.html#nexial.step.comment) respectively.
- Support for chrome/firefox web driver auto update when browser updated to lower version (i.e. not latest).
- If a [section](../commands/base/section(steps)) has inner section then inner steps will no longer needed to be 
  counted towards the outer section step count. This will make one's script authoring easier to maintain.
- Support for AWS SQS and S3 alternative such as LocalStack and MinIO.
- [Standard log](../userguide/ExecutionLogs#standard-log) files will now automatically rollover at midnight. 
- Additional Jenkins-specific information added to email notification, making it more useful.
- Make the timestamp on log files be more consistent. The unified format is now `yyyy-MM-dd HH:mm:ss.SSSS`.


### [Batch Files](../userguide/BatchFiles)
- [`nexial-temp-clean.cmd|sh`](../userguide/BatchFiles#nexial-temp-clean): fix logic to evaluate temp folders that 
  are more than a day old.


### [System Variable](../systemvars)
- new variable `nexial.step.comment` added.
- [nexial.trackErrors](../systemvars/index#nexial.trackErrors): **NEW** System variable to enable the explicit tracking
  of step failures into a designated log file (`logs/nexial-execution-errors.log`).
- [nexial.lastError](../systemvars/index#[nexial.lastError): **NEW** System variable store the last FAIL message.


### [Nexial Filter](../flowcontrols/filter)
- `is readable-file`: **NEW** filter to check for valid, readable file.
- `is not readable-file`: **NEW** filter to check for non-existent file.
- `is readable-path`: **NEW** filter to check for valid, readable path.
- `is not readable-path`: **NEW** filter to check for invalid or unreadable path.
- `is empty-path`: **NEW** filter to check for empty path (without files or sub-directories).
- `is not empty-path`: **NEW** filter to check for non-empty path (some either files or sub-directories).


[Built-In Function]
- [`$(projectfile|executionErrorsAsHtml|tableOnly)`](../function/projectfile/index.html#project.executionErrorsAsHtml): 
  **NEW** function to convert the "execution-failure" logs into an HTML.


### [base commands](../commands/base)
- **NEW** clipboard-related commands has been added to copy to/from clipboard:
  - [`clearClipboard()`](../commands/base/clearClipboard()) - clear from current clipboard.
  - [`copyFromClipboard(var)`](../commands/base/copyFromClipboard(var)) - copy from current clipboard.
  - [`copyIntoClipboard(text)`](../commands/base/copyIntoClipboard(text)) - copy/override into current clipboard.


### [localdb commands](../commands/localdb)
- [`queryAsCSV(var,sql)`](../commands/localdb/queryAsCSV(var,sql)): **NEW** command to transform query result to CSV.


### [rdbms commands](../commands/rdbms)
- supports `EXEC ` and `CALL ` SQL keywords.
- improve console logs to aid in troubleshooting.
- [`assertResultMatch(var,columns,search)`](../commands/rdbms/assertResultMatch(var,columns,search)) - **NEW** command 
  to verify that a query result contains certain data. `search` parameter can be prefixed with `REGEX:` for regular 
  expression check, `CONTAIN:` for substring check, or "as is" for equality check.
- [`assertResultNotMatch(var,columns,search)`](../commands/rdbms/assertResultNotMatch(var,columns,search)) - **NEW** 
  command to verify that a query result DOES NOT contains certain data. `search` parameter can be prefixed with 
  `REGEX:` for regular expression check, `CONTAIN:` for substring check, or "as is" for equality check. 


### [ssh](../commands/ssh)
- [`sftpMoveFrom(var,profile,remote,local)`](../commands/ssh/sftpMoveFrom(var,profile,remote,local)): supports 
  wildcard moves (not recursive).
- [`sftpMoveTo(var,profile,local,remote)`](../commands/ssh/sftpMoveTo(var,profile,local,remote)): supports wildcard 
  moves (not recursive).
- [`sftpCopyFrom(var,profile,remote,local)`](../commands/ssh/sftpCopyFrom(var,profile,remote,local)): supports wildcard 
  copy (not recursive) .
- [`sftpCopyTo(var,profile,local,remote)`](../commands/ssh/sftpCopyTo(var,profile,local,remote)): supports wildcard 
  copy (not recursive).
- [`sftpDelete(var,profile,remote)](../commands/ssh/sftpDelete(var,profile,remote)): supports wildcard delete and 
  deleting a remote directory. 


### [web commands](../commands/web)
- [`checkAll(locator,waitMs)`](../commands/web/checkAll(locator,waitMs)): **NEW** command to allow the checking of all 
  checkbox elements that matched the specified `locator` and that are not yet "checked". This is a modification to
  the previous [`checkAll(locator)`](../commands/web/checkAll(locator)) command (now removed).
  - minor script tweaked to improve stability.
- [`uncheckAll(locator,waitMs)`](../commands/web/uncheckAll(locator,waitMs)): **NEW** command to allow the unchecking of 
  all checkbox elements that matched the specified `locator` and that are "checked". This is a modification to
  the previous [`uncheckAll(locator)`](../commands/web/checkAll(locator)) command (now removed).
  - minor script tweaked to improve stability.
- [`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator)): **NEW** command to check if a web
  element is disabled for interaction.
- apply "preemptive JavaScript dialog check" prior to executing:
  - [`assertElementByAttributes(nameValues)`](../commands/web/assertElementByAttributes(nameValues))
  - [`assertElementByText(locator,text)`](../commands/web/assertElementByText(locator,text))
  - [`assertElementCount(locator,count)`](../commands/web/assertElementCount(locator,count))
  - [`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator))
  - [`assertElementEnabled(locator)`](../commands/web/assertElementEnabled(locator))
  - [`assertElementPresent(locator)`](../commands/web/assertElementPresent(locator))
  - [`saveAttribute(var,locator,attrName)`](../commands/web/saveAttribute(var,locator,attrName))
  - [`saveCount(var,locator)`](../commands/web/saveCount(var,locator))
  - [`saveElement(var,locator)`](../commands/web/saveElement(var,locator))
  - [`type(locator,value)`](../commands/web/type(locator,value))
  - [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator))
  - [`waitForElementsPresent(locators)`](../commands/web/waitForElementsPresent(locators))
  - [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs))
  - [`waitForTextPresent(text)`](../commands/web/waitForTextPresent(text))
- [`nexial.browser.postCloseWaitMs`](../systemvars/index#nexial.browser.postCloseWaitMs): logical change; now this 
  System variable is only applicable when closing the last browser window, for performance reason.
- [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator)): changed to 
  [`waitForElementPresent(locator,waitMs)`](../commands/web/waitForElementPresent(locator,waitMs)) to improve control 
  and flexibility.
- [`waitUntilVisible(locator,waitMs)`](waitUntilVisible(locator,waitMs)): **NEW** command to wait until a web element 
  because visible.
- [`waitUntilHidden(locator,waitMs)`](waitUntilHidden(locator,waitMs)): **NEW** command to wait until a web element 
  becomes hidden.
- [`waitUntilEnabled(locator,waitMs)`](waitUntilEnabled(locator,waitMs)): **NEW** command to wait until a web element 
  becomes enabled.
- [`waitUntilDisabled(locator,waitMs)`](waitUntilDisabled(locator,waitMs)): **NEW** command to wait until a web element 
  becomes disabled.


### [webalert](../commands/webalert)
- code fix to improve handling of stale web elements or window.
