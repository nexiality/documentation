---
layout: default
title: nexial-core 3.8 (2021-03-??)
parent: release
tags: release nexial-core 3.8
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.8_????" class="external-link" target="_nexial_link">Release 3.8</a>
2021-03-?


### General
#### Fixes

#### Improvements
- PolyMatcher: **NEW** matchers added
  - [`LENGTH:`]: check that the target value contains specified length. For example, `LENGTH:5` means to 
    check that the target value has a length of 5. One may prefix with a numeric comparator for added expressiveness. 
    For example, `LENGTH: >5` means to check that the target value has a length greater than 5.
  - [`NUMERIC:`]: perform numeric comparison so that `100` would be considered the same as `100.00`. For example, 
    `NUMERIC:100.0` means to check that the target value has a numerical value of `100`. One may prefix with a numeric 
    comparator for added expressiveness. For example, `NUMERIC: >= -5.01` means to check that the target value has a 
    numerical value greater or equal to `-5.01`.
  - [`EMPTY:`]: check that the target value is empty (`EMPTY:true`) or not (`EMPTY:false`).
  - [`BLANK:`]: check that the target value is blank (`BLANK:true`) or not (`BLANK:false`). Note that an empty value is
    considered as blank as well (however, not the other way around).


### [System Variable](../systemvars)


### [Nexial Interactive](../interactive)


### [Expression](../expressions)


### [desktop commands](../commands/desktop)
- fix image capturing error when the target image spans beyond the dimension of current screen resolution:
  - [`screenshot(name,file)`](../commands/desktop/screenshot(name,file))
  - [`screenshotByLocator(locator,file)`](../commands/desktop/screenshotByLocator(locator,file))
- [`screenshot(name,file)`](../commands/desktop/screenshot(name,file)): allow screenshot to be taken against a form 
  (as well as UI component)
- update logic to determine "FormattedTextBox".
- automate the clearing of existing content before entering specified content:
  - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text))
- update the handling of masked textbox and "date/time combo" with regards to clearing its content
- bypassing automation when the intended content is already present/selected on the target component (performance improvements):
  - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text))
- reduce clicks during automation (performance improvements):
  - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text))
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): update logic to select from "SingleSelectCombo"
- [`useTable(var,name)`](../commands/desktop/useTable(var,name)): code update to determine headers when scanning a 
  TreeView table
- [`saveTableRowsRange(var,beginRow,endRow,csv)`](../commands/desktop/saveTableRowsRange(var,beginRow,endRow,csv)): 
  update logic to determine underlying locators for better performance.
- [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)): implemented retry logic when 
  creating new row.


### [excel commands](../commands/excel)


### [localdb commands](../commands/localdb)


### [web commands](../commands/web)
