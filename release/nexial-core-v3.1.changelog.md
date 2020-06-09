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
#### Improvements
  
   
### [Batch Files](../userguide/BatchFiles)


### [Nexial Interactive](../interactive)


### [System Variable](../systemvars)


### [Flow Control](../flowcontrols)


### [Nexial Expression](../expressions)


### [base commands](../commands/base)


### [csv commands](../commands/csv)


### [excel commands](../commands/excel)


### [desktop commands](../commands/desktop)


### [localdb commands](../commands/localdb)
- [`queryAsCSV(var,sql)`](../commands/localdb/queryAsCSV(var,sql)): **NEW** command to transform query result to CSV.


### [image commands](../commands/image)


### [pdf commands](../commands/pdf)


### [rdbms commands](../commands/rdbms)


### [step.inTime](../commands/step.inTime) 


### [web commands](../commands/web)
- [`checkAll(locator,waitMs)`](../commands/web/checkAll(locator,waitMs)): **NEW** command to allow the checking of all 
  checkbox elements that matched the specified `locator` and that are not yet "checked". This is a modification to
  the previous [`checkAll(locator)`](../commands/web/checkAll(locator)) command (now removed).
- [`uncheckAll(locator,waitMs)`](../commands/web/uncheckAll(locator,waitMs)): **NEW** command to allow the unchecking of 
  all checkbox elements that matched the specified `locator` and that are "checked". This is a modification to
  the previous [`uncheckAll(locator)`](../commands/web/checkAll(locator)) command (now removed).
- [`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator)): **NEW** command to check if a web
  element is disabled for interaction.
- apply "preemptive JavaScript dialog check" prior to executing:
  - [`type(locator,value)`](../commands/web/type(locator,value))
  - [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator))
  - [`waitForElementsPresent(locators)`](../commands/web/waitForElementsPresent(locators))
  - [`waitForTextPresent(text)`](../commands/web/waitForTextPresent(text))
  - [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs))


### [webalert](../commands/webalert)


### [webcookie commands](../commands/webcookie)


### [ws commands](../commands/ws)
