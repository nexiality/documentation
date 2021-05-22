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
- [`check(name)`]: *NEW* command to check a Checkbox component only if it is currently unchecked.
- [`uncheck(name)`]: *NEW* command to uncheck a Checkbox component only if it is currently checked.
- [`checkByLocator(locator)`]: *NEW* command to check a Checkbox component only if it is currently unchecked.
- [`uncheckByLocator(locator)`]: *NEW* command to uncheck a Checkbox component only if it is currently checked.
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


### [image commands](../commands/image)


### [io commands](../commands/io)


### [mail commands](../commands/mail)


### [web commands](../commands/web)


### [webmail commands](../commands/webmail)
