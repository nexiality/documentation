---
layout: default
title: nexial-core 3.2 (2020-08-??)
parent: release
tags: release nexial-core 3.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.2_???" class="external-link" target="_nexial_link">Release 3.2</a>
2020-08_??


### General
#### Fixes
- Fix issue with Excel parsing where `_x[NUMBER]_` is treated as UTF decoding and thus translated into UTF character.
  Code fix circumvented the UTF translation.
#### Improvements
- [ErrorTracker](../userguide/ExecutionLogs#errortracker-error-only-log-file): new feature to trap all step-wise errors
  into a separate log file so that we can streamline root cause analysis.
  - minor HTML-level changes to improve the display of ErrorTracker logs (in email notification).


### [Batch Files](../userguide/BatchFiles)


### [System Variable](../systemvars)
- [`nexial.screenshotInFull`](../systemvars/index#nexial.screenshotInFull): **New** system variable to capture 
entire web page screen. Default value for this variable is `false`.
- [`nexial.screenshotInFullTimeout`](../systemvars/index#nexial.screenshotInFullTimeout): **New** system variable 
to provide time before scrolling down while capturing entire web page. Default value of this variable is `5000` milliseconds.

### [Nexial Interactive](../interactive)
- minor improvement on console output


### [Nexial Filter](../flowcontrols/filter)


### [Expression](../expressions)
- [WEB](../expressions/WEBexpression): slight output improvement (shorter)


### [Built-In Function](../functions)
- [`$(format|fileURI)`](../functions/$(format)#formatfileuritext): **NEW** function to convert local file path into a 
  `file://` type URL.


### [base commands](../commands/base)


### [localdb commands](../commands/localdb)
- added code to handle the use of "reserved" words in column names.


### [pdf commands](../commands/pdf)
- [`combine(path,fileFilter,saveTo)`](../commands/pdf/combine(path,fileFilter,saveTo)) - **NEW** combining multiple PDF 
  files into a single PDF file.


### [rdbms commands](../commands/rdbms)
- [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output)): a query of zero row will no longer be 
  considered as FAIL 
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): queries of zero row will no 
  longer be considered as FAIL 


### [ssh](../commands/ssh)


### [web commands](../commands/web)
- create default `waitMs` for the following "waitFor" commands:
  - [`waitForElementPresent(locator,waitMs)`](../commands/web/waitForElementPresent(locator,waitMs)).
  - [`waitUntilVisible(locator,waitMs)`](waitUntilVisible(locator,waitMs)).
  - [`waitUntilHidden(locator,waitMs)`](waitUntilHidden(locator,waitMs)).
  - [`waitUntilEnabled(locator,waitMs)`](waitUntilEnabled(locator,waitMs)).
  - [`waitUntilDisabled(locator,waitMs)`](waitUntilDisabled(locator,waitMs)). 
  - the default `waitMs` (if not specified) is the same as `${nexial.pollWaitMs}`.
- [`nexial.web.unfocusAfterType`](../systemvars/index.html#nexial.web.unfocusAfterType): added slight wait between 
  typing and "tabbing" out of current web element.
- added error handling when Nexial timed out during the execution of a `wait...` command.
- [`screenshotInFull(file,timeout)`](../commands/web/screenshotInFull(file,timeout)): **NEW** command to capture entire 
  web page screenshot with scrolling timeout.
- added more leniency in terms of exception handling when executing the `waitUntil...` and the `assert...` commands.
  This results in more robust handling of slower or unreliable application response during automation.

### [webalert](../commands/webalert)
