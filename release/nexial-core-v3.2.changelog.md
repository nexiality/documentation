---
layout: default
title: nexial-core 3.2 (2020-08-05)
parent: release
tags: release nexial-core 3.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.2_0887" class="external-link" target="_nexial_link">Release 3.2</a>
2020-08-04


### General
#### Fixes
- Fix issue with Excel parsing where `_x[NUMBER]_` is treated as `UTF` decoding and thus translated into `UTF` character.
  Code fix circumvented the `UTF` translation.
- Fix code to read from multiple datasheets with respect to change of iteration configuration between data sheets.
- minor adjustments to the data file in `template/` directory to improve performance.
#### Improvements
- [ErrorTracker](../userguide/ExecutionLogs#errortracker-error-only-log-file): **New** feature to trap all step-wise errors
  into a separate log file so that we can streamline root cause analysis.
  - minor HTML-level changes to improve the display of ErrorTracker logs (in email notification).
- Ensure Nexial (re)reads datasheets per plan step to ensure the latest information being parsed for execution. This 
  enhancement supports the scenario where preceding plan step would modify data sheets for subsequent plan steps.
- Added logic for opening report file in linux machine after execution.
- Execution output generation:
  - line breaks in [base &raquo; `verbose(text)`](../commands/base/verbose(text)) are now preserved
  - skipped steps are no longer evaluated for data variable, function or expression expansions. This will speed up 
    execution and avoid unwanted side effects.


### [System Variable](../systemvars)
- [`nexial.screenshotInFull`](../systemvars/index#nexial.screenshotInFull): **New** system variable to capture 
entire web page screen. Default value for this variable is `false`.
- [`nexial.screenshotInFullTimeout`](../systemvars/index#nexial.screenshotInFullTimeout): **New** system variable 
to provide time before scrolling down while capturing entire web page. Default value of this variable is `5000` milliseconds.


### [Nexial Interactive](../interactive)
- Minor improvement on console output


### [Expression](../expressions)
- [WEB](../expressions/WEBexpression): Slight output improvement (shorter)


### [Built-In Function](../functions)
- [`$(format|fileURI)`](../functions/$(format)#formatfileuritext): **NEW** function to convert local file path into a 
  `file://` type URL.
- [`$(projectfile|macro)`](../functions/$(projectfile)#projectfilemacrofilesheetname)): **NEW** function to provides
  macro details such as macro file, sheet and macro name mainly to be referred to invocation of 
  macro from **[base &raquo; `macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)))**.


### [base commands](../commands/base)
- [`macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)): **NEW** command as extension to 
[`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name))` with functionality of providing inputs and 
extracting outputs during invocation.


### [io commands](../commands/io)
- [`waitForFile(file,minFileSize,waitMs,maxWaitMs)`](../commands/io/waitForFile(file,minFileSize,waitMs,maxWaitMs)):
  **NEW** command to wait until a file is stabilized in terms of file size and last modification date.


### [localdb commands](../commands/localdb)
- Added code to handle the use of `"reserved"` words in column names.


### [pdf commands](../commands/pdf)
- [`combine(path,fileFilter,saveTo)`](../commands/pdf/combine(path,fileFilter,saveTo)) - **NEW** combining multiple PDF 
  files into a single PDF file.


### [rdbms commands](../commands/rdbms)
- [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output)): A query of zero row will no longer be 
  considered as `FAIL` 
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): Queries of zero row will no 
  longer be considered as `FAIL` 
- Fixed error when handling the execution of stored procedures which might contain multiple results (result set and 
  possibly update row count). 
- For executing stored procedure, both the `{CALL ...(...)}` and `EXEC ... ...` forms are supported now.


### [web commands](../commands/web)
- Create default `waitMs` for the following `waitFor...` commands:
  - [`waitForElementPresent(locator,waitMs)`](../commands/web/waitForElementPresent(locator,waitMs))
  - [`waitUntilVisible(locator,waitMs)`](waitUntilVisible(locator,waitMs))
  - [`waitUntilHidden(locator,waitMs)`](waitUntilHidden(locator,waitMs))
  - [`waitUntilEnabled(locator,waitMs)`](waitUntilEnabled(locator,waitMs))
  - [`waitUntilDisabled(locator,waitMs)`](waitUntilDisabled(locator,waitMs)) 
  - The default `waitMs` (if not specified) is the same as `${nexial.pollWaitMs}`.
- [`nexial.web.unfocusAfterType`](../systemvars/index.html#nexial.web.unfocusAfterType): Added a slight wait between 
  _typing_ and _tabbing_ out of current web element.
- Added error handling when Nexial timed out during the execution of a `wait...` commands.
- [`screenshotInFull(file,timeout)`](../commands/web/screenshotInFull(file,timeout)): **NEW** command to capture entire 
  web page screenshot with scrolling timeout.
- Added more leniency in terms of exception handling when executing the `waitUntil...` and the `assert...` commands.
  This results in more robust handling of slower or unreliable application response during automation.
- [`nexial.browser.downloadTo`](../systemvars/index#nexial.browser.downloadTo): Determine the target location to 
  download files during browser automation.
- [`nexial.browser.downloadPdf`](../systemvars/index#nexial.browser.downloadPdf): Determine if any PDF document  
  encountered during browser automation should be displayed (default) or downloaded.
- [`nexial.browser.windowPosition`](../systemvars/index#nexial.browser.windowPosition): Allow user to set the initial
  position of the target browser window. Default is `0,0`, meaning top-left position of the current desktop.
- [`moveTo(x,y)`](../commands/web/moveTo(x,y)): **NEW** command to move current browser window to another position.
- Failure to download the web driver will no longer `FAIL` execution.
