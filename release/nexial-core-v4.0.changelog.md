---
layout: default
title: nexial-core 4.0 (2021-06-??)
parent: release
tags: release nexial-core 4.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.0_????" class="external-link" target="_nexial_link">Release 4.0</a>
2021-06-??


### General
#### Fixes

#### Improvements


### [Expression](../expressions)


### [System Variables](../systemvars)


### [base commands](../commands/base)
- [`assertEqual(expected,actual)`](../commands/base/assertEqual(expected,actual)): code fix to avoid long-running 
  comparison between text with regex-typed characters.


### [desktop commands](../commands/desktop)
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): 
  - performance improvement when target combo element contains no selection.
  - collapse dropdown after the appropriate selection is made.
- [`clickTableRow(row)`](../commands/desktop/clickTableRow(row)): 
  - stability improvement when requested row does not exist in the current table component.
  - accuracy improvement by considering `[COLUMN].format` information in the `"extra"` section of the autoscan JSON 
    file.
- [`clickFirstMatchRow(nameValues)`](../commands/desktop/clickFirstMatchRow(nameValues)): performance improvement to
  find matching row over multiple column criterion.
- [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv)): improve accuracy by 
  omitting the last, not-yet-exist row
- [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)): fixed logical error when 
  editing an empty table with no rows created.
- [`check(name)`](../commands/desktop/check(name)): *NEW* command to check a Checkbox component only if it is 
  currently unchecked.
- [`uncheck(name)`](../commands/desktop/uncheck(name)): *NEW* command to uncheck a Checkbox component only if it is 
  currently checked.
- [`checkByLocator(locator)`](../commands/desktop/checkByLocator(locator).md): *NEW* command to check a Checkbox 
  component only if it is currently unchecked.
- [`uncheckByLocator(locator)`](../commands/desktop/uncheckByLocator(locator)): *NEW* command to uncheck a Checkbox 
  component only if it is currently checked.
- support the use of `nexial.desktop.useTypeKeys` for any TextBox element; this configuration should be set in the 
  `"extra"` section of the corresponding JSON document.
- [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)): 
  - when the last column is provided by some shortcuts as the last keystroke sequence, Nexial will perform the 
    shortcut keystrokes but will not forward to the subsequent column even if `nexial.desktop.table.tabAfterEdit` 
    is set to `true`
  - performance improvement during editing of data grid cells, when the target cell contains the same data as in the
    parameter
- performance improvement during scanning or fetching data from a data grid when it contains no rows:
  - [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv))
  - [`assertTableColumnContains(column,contains)`](../commands/desktop/assertTableColumnContains(column,contains))
  - [`saveAllTableRows(var,csv)`](../commands/desktop/saveAllTableRows(var,csv))
  - [`assertTableContains(contains)`](../commands/desktop/assertTableContains(contains))
- FIX: properly translate newline characters so that they are reflect in the type* commands:
  - [`typeAppendTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextArea(name,text1,text2,text3,text4))
  - [`typeAppendTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextBox(name,text1,text2,text3,text4))
  - [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
  - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))


### [image commands](../commands/image)


### [io commands](../commands/io)


### [mail commands](../commands/mail)


### [web commands](../commands/web)
- [`openInTab(name,url)`](../commands/web/openInTab(name,url)): **NEW** command to open an `url` in another tab.
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): fixes for switching between multiple 
  headless browsers.
- minor logging improvements.
- reduce logging during webdriver initialization.


### [webmail commands](../commands/webmail)
- [`read(var,profile,id)`](../commands/webmail/read(var,profile,id)): fix minor runtime errors when automating 
  mailinator webmail service.
- improved extraction of "clickable" links on mailinator mails.