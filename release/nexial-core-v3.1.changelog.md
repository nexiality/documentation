---
layout: default
title: nexial-core 3.1 (2020-07-0?)
parent: release
tags: release nexial-core 3.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.1_???" class="external-link" target="_nexial_link">Release 3.1</a>
2020-07-??


### General
#### Fixes
- fixed email notification template when execution terminates too abruptly
- fixed SES-based email notification; possible SSL cert conflict with DocumentDB automation 
- nexial.cmd needs to handle spaces in the directory name
- ensure Nexial doesn't write too much data into a output excelc cell (should be less than 32k)
- fixed issue of skipping the section command which has nested section.
#### Improvements
- Execution Report will now show user response & comments provided in `step` and `step.inTime` commands.
- Support for accessing response and comments within script execution using System variables `nexial.step.response` and `nexial.step.comment` respectively.
- Support for chrome/firefox web driver auto update when browser updated to lower version (not latest).
- If section has inner section then inner steps will not be considered in outer section step count.

### [Batch Files](../userguide/BatchFiles)
- [`nexial-temp-clean.cmd|sh`](../userguide/BatchFiles#nexial-temp-clean): fix logic to evaluate temp folders that 
  are more than a day old.


### [Nexial Interactive](../interactive)


### [System Variable](../systemvars)
- new variable `nexial.step.comment` added


### [Flow Control](../flowcontrols)


### [Nexial Expression](../expressions)


### [base commands](../commands/base)
new clipboard commands has been added to copy from/into clipboard.
- [`clearClipboard()`](../commands/base/clearClipboard())
- [`copyFromClipboard(var)`](../commands/base/copyFromClipboard(var))
- [`copyIntoClipboard(text)`](../commands/base/copyIntoClipboard(text))

### [csv commands](../commands/csv)


### [excel commands](../commands/excel)


### [desktop commands](../commands/desktop)


### [localdb commands](../commands/localdb)
- [`queryAsCSV(var,sql)`](../commands/localdb/queryAsCSV(var,sql)): **NEW** command to transform query result to CSV.


### [image commands](../commands/image)


### [pdf commands](../commands/pdf)


### [rdbms commands](../commands/rdbms)
- supports `EXEC ` and `CALL ` keywords
- improve console logs to aid in troubleshooting
- [`assertResultMatch(var,columns,search)`](../commands/rdbms/assertResultMatch(var,columns,search)) - **NEW** command 
  to verify that a query result contains certain data. `search` parameter can be prefixed with `REGEX:` for regular 
  expression check, `CONTAIN:` for substring check, or "as is" for equality check.
- [`assertResultNotMatch(var,columns,search)`](../commands/rdbms/assertResultNotMatch(var,columns,search)) - **NEW** 
  command to verify that a query result DOES NOT contains certain data. `search` parameter can be prefixed with 
  `REGEX:` for regular expression check, `CONTAIN:` for substring check, or "as is" for equality check. 


### [step](../commands/step) 


### [step.inTime](../commands/step.inTime) 


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



### [webalert](../commands/webalert)


### [webcookie commands](../commands/webcookie)


### [ws commands](../commands/ws)
