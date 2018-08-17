---
layout: default
title: nexial-core 1.5 (2018-09-??)
parent: release
tags: release nexial-core 1.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.5" class="external-link" target="_nexial_link">Release 1.5</a>
2018-09-??


### General
- supports replacing multiple `(empty)`, `(blank)`, `(tab)` and `(eol)` with the appropriate values in the parameter. 
  For example, `(blank)(blank)(blank)` will now be replaced as `   ` (3 spaces).
- `nexial-variable-update.cmd|sh`: Added new command line option (`-p`) to preview variable updates. It won't update 
  variables just showcase which variables will be updated. 
- `nexial-variable-update.cmd|sh`: fixed wrong verbiage for option `-p`.
- `nexial-script-update.cmd|sh`: minor updates to output to improve clarity.
- `nexia.cmd|sh`: minor command line option help regarding multi-plan support.


### Flow Control


### Event Notification


### Nexial Expression  
- [CSV `excel(file,sheet,startCell)`](../expressions/CSVexpression.md#excel): **NEW** operation to import CSV into
  a Excel worksheet. By default, `startCell` is set to `A1`.


### [base commands](../commands/base)
- [`clear(vars)`](../commands/base/clear(vars)): improve output/console messages. No change in functionality/logic.


### [io commands](../commands/io)
- file validation support to give a choice to the user to define record spec configuration for any one record type or
  for a combination of the record types(file header, section header, section body, section footer, file footer).


### [csv commands](../commands/csv)
- [`fromExcel(excel,worksheet,csvFile`]: **NEW** command to replace the deprecated convertExcel() command.
  

### [number commands](../commands/number)


### [json command](../commands/json)
- [`fromCsv(csv,header,jsonFile)`](../commands/json/fromCsv(csv,header,jsonFile)): **NEW** command to convert CSV to 
  JSON.


#### [web commands](../commands/web)
- honor [`nexial.browser.forceJSClick`](../systemvars/index#nexial.browser.forceJSClick) so that if it is set to 
  `false` then Nexial will not automate `click` event via JavaScript. This might slightly improve execution performance
  and possibly reduce some flakiness.
- enable web element highlight during the execution of `assert`* commands. Note that [`nexial.highlight`] must be set
  to `true` to activate web element highlighting.
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)): 
  **NEW** command to automate the collection of HTML table data into a CSV file.
- added firefox-specific fix for selecting option from a <SELECT> element. Only tested on single-option <SELECT> so far.
- [`assertTable(locator,row,column,text)`](../commands/web/assertTable(locator,row,column,text)): fixed internal
  locator to find cell data with more coverage.
- [`savePageAsFile(sessionId,url,file)`](../commands/web/savePageAsFile(sessionId,url,file)): shorten parameter 
  `fileName` to just `file`.
- [`dragAndDrop(fromLocator,toLocator)`](../commands/web/dragAndDrop(fromLocator,toLocator)): **NEW** command to
  support drag-and-drop automation from one element to another on the same page.
- [`nexial.web.unfocusAfterType`](../systemvars/index#nexial.web.unfocusAfterType): support automation to blur the
  target web element after entering input.
- [`checkAll(locator)`](../commands/web/checkAll(locator)): **NEW** command to "check" all matching CheckBox web 
  elements.
- [`uncheckAll(locator)`](../commands/web/uncheckAll(locator)): **NEW** command to "uncheck" all matching CheckBox web 
  elements.
