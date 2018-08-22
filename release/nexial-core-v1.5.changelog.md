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
- upgraded to nexial-seeknow 1.1. Supports reading text pane with two gray variants of background colors.
- supports replacing multiple `(empty)`, `(blank)`, `(tab)` and `(eol)` with the appropriate values in the parameter. 
  For example, `(blank)(blank)(blank)` will now be replaced as `   ` (3 spaces).
- `nexial-variable-update.cmd|sh`: Added new command line option (`-p`) to preview variable updates. It won't update 
  variables just showcase which variables will be updated. 
- `nexial-variable-update.cmd|sh`: fixed wrong verbiage for option `-p`.
- `nexial-script-update.cmd|sh`: minor updates to output to improve clarity.
- `nexial.cmd|sh`: minor command line option help regarding multi-plan support.
- [`nexial.pauseOnError`](../systemvars/index#nexial.pauseOnError): **NEW** System variable to enable the pausing of
  execution when a FAIL is encountered. Can be combined in use with 
  [`nexial.inspectOnPause`](../systemvars/index#nexial.inspectOnPause)


### Nexial Filter
- fixed logic error with the ` contain ` filter. The corrected code works as a "contains one of ..." match.
- fixed code to handle variable substitution when evaluating filter.


### Flow Control


### Built-in Function
- [`file`](../functions/$(file)): **NEW** built-in function to provide file-related functionality.


### Event Notification


### Nexial Expression  
- [CSV `excel(file,sheet,startCell)`](../expressions/CSVexpression.md#excel): **NEW** operation to import CSV into
  a Excel worksheet. By default, `startCell` is set to `A1`.


### [base commands](../commands/base)
- [`clear(vars)`](../commands/base/clear(vars)): improve output/console messages. No change in functionality/logic.


### [io commands](../commands/io)
- file validation support to give a choice to the user to define record spec configuration for any one record type or
  for a combination of the record types(file header, section header, section body, section footer, file footer).
- fix file validation support, for huge data files efficiently.Improves performance in file parsing and validating.
- [io &raquo; `writeFile(file,content,append)`](../commands/io/writeFile(file,content,append)): now consider the 
  `content` parameter either as a file or text content.
- [io &raquo; `writeFileAsIs(file,content,append)`](../commands/io/writeFileAsIs(file,content,append)): **NEW** commands
  to write to file without data variable substitution.


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
- enable web element highlight during the execution of `assert`* commands. Note that [`nexial.web.highlight`] must be 
  set to `true` to activate web element highlighting.
- [`nexial.web.highlight`](../systemvars/index#nexial.web.highlight): renamed from the previous `nexial.highlight`
  System variable (which is still working) for consistency and clearer namespacing.
- [`nexial.web.highlight.waitMs`](../systemvars/index#nexial.web.highlight.waitMs): renamed from the previous 
  `nexial.highlightWaitMs` (which is still working) for consistency and clearer namespacing.
- [`nexial.web.highlight.style`](../systemvars/index#nexial.web.highlight.styl): **NEW** System variable to allow for
  customization of web element highlighting, which is assumed as CSS style. The default is `background:#faf557;`.
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
- [web &raquo; `checkAll(locator)`](../commands/web/checkAll(locator)): fixed code so that multiple matching web 
  elements are refetched after each `check`. This prevents the element staleness issue.
- [web &raquo; `uncheckAll(locator)`](../commands/web/uncheckAll(locator)): fixed code so that multiple matching web 
  elements are refetched after each `uncheck`. This prevents the element staleness issue.
- minor perf. improvement for type() and click() commands.
- [web &raquo; `saveText(var,locator)`](../commands/web/saveText(var,locator)): fixed code from throwing error when the 
  target locator did not resolve to a valid web element.
- [web &raquo; `assertText(locator,text)`](../commands/web/assertText(locator,text)): fixed code from throwing error 
  when the target locator did not resolve to a valid web element.
