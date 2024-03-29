---
layout: default
title: nexial-core 3.9 (2021-05-17)
parent: release
tags: release nexial-core 3.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.9_1163" class="external-link" target="_nexial_link">Release 3.9</a>
2021-05-17


### General
#### Fixes
- fixed data type conversion issue when generating execution result after execution.

#### Improvements
- [`nexial.projectProperties.trimKey`](../systemvars/index.html#nexial.projectProperties.trimKey): support 
  leading/trailing spaces in data variable names in the `project.properties`, for aligning variable values to improve 
  readability.
- implemented auto-retry when Nexial fails to retrieve content from a URL. This can impact (hopefully positively) many
  functionalities where a URL is referenced (for remote content) instead of a local file path.
- Default [`nexial.enforcePageSourceStability`](../systemvars/index.html#nexial.enforcePageSourceStability) to `false`
  to improve overall execution performance.
- consider Nexial installer directory case-insensitively for Windows system.


### [Expression](../expressions)
- [TEXT &raquo; `number`](../expressions/TEXTexpression#number): "optimistically" converts text to number by _gently_ 
  removing non-numeric characters.
- [CSV &raquo; `reorder`](../expressions/CSVexpression#reordercolumnnamesorindices): rearrange the column order.
- [LIST](../expressions/LISTexpression): allows the creation of a `LIST` expression with no data (a list of size 0).


### [System Variables](../systemvars)
- [`nexial.desktop.simulateClick`](../systemvars/index.html#nexial.desktop.simulateClick): **NEW** System variable to 
  support "simulated" click which might provides more stability in automation.
- [`nexial.screenshotEnabled`](../systemvars/index.html#nexial.screenshotEnabled): **NEW** System variable to 
  enable/disable screen capturing across an entire execution. By default, this is set to `true`. Setting it `false` will
  disable screen capturing for all steps and the "screenshot"-related commands.


### [base commands](../commands/base)
- [`assertVarsPresent(vars)`](../commands/base/assertVarsPresent(vars)): check that all the specified data variables 
  exist in the current execution.
- [`assertVarsNotPresent(vars)`](../commands/base/assertVarsNotPresent(vars)): check that none of the specified data 
  variables exist in the current execution.


### [desktop commands](../commands/desktop)
- improved support on grid cell data by making special treatment for combo box embedded within a grid cell.
- improved accuracy and performance of fetching cell data from a datagrid component (Infragistics 4).
- implemented `nexial.desktop.simulateClick` configuration in the "`extra" section of a component configuration. This
  configuration supports the clicking of a button, checkbox or radio button via simulated click.
- implement cell-specific value formatting for data grid cells. Add formatting rules in the `"extra"` fields of the 
  JSON configuration, like this: `"extra": { "Column Name.format": "old_format,new_format" }`.
- [`clickMenuByLocator(locator,menu)`]: fixed automation for index-based menu.
- [`rightClickElementOffset(name,xOffset,yOffset)`](../commands/desktop/rightClickElementOffset(name,xOffset,yOffset)): 
  **NEW** command to support right click.
- [`rightClickOffset(locator,xOffset,yOffset)`](../commands/desktop/rightClickOffset(locator,xOffset,yOffset)): 
  **NEW** command to support right click.
- update both "contextMenu" commands to support x/y offsets:
  - [`contextMenu(name,menu,xOffset,yOffset)`](../commands/desktop/contextMenu(name,menu,xOffset,yOffset))
  - [`contextMenuByLocator(locator,menu,xOffset,yOffset)`](../commands/desktop/contextMenuByLocator(locator,menu,xOffset,yOffset))
- speed up the initialization of winium driver.
- reduce winium driver's internal logging
- [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)): 
  - fixed the handling of checkbox in data grid cell. Faster and more stable now.
  - avoid unintended clicking of a checkbox-cell during the initial focus on the target data grid component. 


### [image commands](../commands/image)
- [`saveDiff(var,baseline,actual)`](../commands/image/saveDiff(var,baseline,actual)): improved image comparison 
  algorithm for more accurate and meaningful result.


### [io commands](../commands/io)
- [`saveMatches(var,path,fileFilter,textFilter)`](../commands/io/saveMatches(var,path,fileFilter,textFilter)):
  - Use [`nexial.io.matchIncludeDirectories`](../systemvars/index.html#nexial.io.matchIncludeDirectories) to include
    subdirectories in the match.
  - fix logical inclusion issue when mixed with [`nexial.io.matchRecursive`](../systemvars/index.html#nexial.io.matchRecursive)
  - fixed `UnsupportedOperationException` due to the use of singleton list


### [mail commands](../commands/mail)
- [`sendComposed(profile,var)`](../commands/mail/sendComposed(profile,var)): failure condition now generate error log 
  to aid in RCA


### [web commands](../commands/web)
- [`screenshot(file,locator,removeFixed)`](../commands/web/screenshot(file,locator,removeFixed)): additional wait time 
  to offset any visual effect caused by [`nexial.web.highlight`](../systemvars/index.html#nexial.web.highlight)
- [`assertLocation(search)`](../commands/web/assertLocation(search)): **NEW** command to assert the current URL with 
  PolyMatcher.
- fixed a "circular reference" issue with collection browser performance metrics over JQuery-laden web page.
- improve screenshot support on headless automation by automatically dismissing any JS alert/confirm dialogs before 
  taking screenshots.
- [`selectText(locator)`](../commands/web/selectText(locator)): improved approach to select text on a page; no longer 
  required ID on the target element.
- support downloading multiple files at once on Chrome and Firefox browser.
- [`nexial.browser.downloadPdf`](../systemvars/index.html#nexial.browser.downloadPdf): now default to `true`, which 
  means Nexial will download PDF instead of opening it by default; seems to be a useful default.


### [webmail commands](../commands/webmail)
- First release of Nexial's support for webmail services (web-based email service suitable to SMTP testing). 
  - Currently supports [Mailinator](https://www.mailinator.com) and [Temporary-Mail](https://temporary-mail.net).
  - FYI: [_we take request!_](https://github.com/nexiality/nexial-core/issues/new?assignees=&labels=&template=feature_request.md) :-)
  - Documentation forthcoming
  - [`search(var,profile,searchCriteria,duration)`](../commands/webmail/search(var,profile,searchCriteria,duration)): 
    search through available emails for the email specified in `profile` and store the corresponding email id in `var`.
    These email id's can be used to retrieve email detail and to delete email.
  - [`read(var,profile,id)`](../commands/webmail/read(var,profile,id)): retrieve email details via the corresponding
    profile and email id
  - [`delete(profile,id)`](../commands/webmail/delete(profile,id)): delete email via the corresponding profile and email 
    id
