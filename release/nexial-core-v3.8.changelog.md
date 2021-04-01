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
- better console output for failed actual-expected comparison, this impacts:
  - [base &raquo; `assertArrayEqual(array1,array2,exactOrder)`](../commands/base/assertArrayEqual(array1,array2,exactOrder))
  - [web &raquo; `assertText(locator,text)`](../commands/web/assertText(locator,text))
  - [web &raquo; `assertNotText(locator,text)`](../commands/web/assertNotText(locator,text))


### [System Variable](../systemvars)


### [Flow Control](../flowcontrols)
- *NEW* flow control to be evaluated *AFTER* the execution of a step. This guarantees that the current step will be 
  executed before any flow control is considered (for subsequent steps):
  - `EndAfterIf(filter)`: end current execution if the specified filter is matched. This flow control will not alter 
    the count of failed steps.
  - `EndLoopAfterIf(filter)`: end current loop (iteration or repeat-until) if the specified filter is matched. This 
    flow control will not alter the count of failed steps.
  - `FailAfterIf(filter)`: fail current execution if the specifie filter is matched. This flow control will result in 
    an additional count towards the total failed steps.


### [Nexial Interactive](../interactive)
- redesigned execution summary on console to reduce output and to improve readability.
- code fix to correctly update execution statistics (esp. on execution duration).
- simplify "Inspect" mode in Nexial Interactive to improve usability. Type `:HELP` to show usage.


### [Expression](../expressions)
- [NUMBER &raquo; `max(numbers)`](../expressions/NUMBERexpression#maxnumbers): **NEW** operation to replace current 
  expression value with the maximum value amongst current value and a list of `numbers`.
- [NUMBER &raquo; `min(numbers)`](../expressions/NUMBERexpression#minnumbers): **NEW** operation to replace current 
  expression value with the minimum value amongst current value and a list of `numbers`.


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
- support clicking on a offset with negative x or y value:
	- [`clickOffset(locator,xOffset,yOffset)`](../commands/desktop/clickOffset(locator,xOffset,yOffset))
	- [`clickElementOffset(name,xOffset,yOffset)`](../commands/desktop/clickElementOffset(name,xOffset,yOffset))
- [`clearCombo(name)`](../commands/desktop/clearCombo(name)): code fix to properly clear off selection in a 
  `SingleSelectCombo'.
- support editing of table with column name that contains newline or escaped character. 
- [`nexial.desktop.table.tabAfterEdit`](../systemvars/index.html#nexial.desktop.table.tabAfterEdit): *NEW* System 
  variable for [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)) to automatically 
  "tab" to the next column after the current column has been edited.
- to determine the text of the selected item from a Combo component, Nexial will now attempt to retrieve the text 
  value of the selected item instead of from the Combo component itself. This is more accurate, albeit with a slight 
  performance penalty. 
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): code fix for better handling of 
  _'Single Select'_ combo element that might contain multiple similar values. 
  - fix combo selection issue when the selection list is generated dynamically each time (in such case, Nexial resorts 
    to the classic "type-first-char" strategy, it's slow but should work)
- Improved support for Hierarchical Table (aka nested table) with added integration with Infragistics 4 TreeView components:
  - [`useHierTable(var,name)`](../commands/desktop/useHierTable(var,name))
  - [`assertHierRow(matchBy,expected)`](../commands/desktop/assertHierRow(matchBy,expected)) 
  - [`assertHierCells(matchBy,column,expected,nestedOnly)`](../commands/desktop/assertHierCells(matchBy,column,expected,nestedOnly))
  - [`editHierCells(var,matchBy,nameValues)`](../commands/desktop/assertHierCells(matchBy,column,expected,nestedOnly))
   - aggressively reformat numerical values from the "stored" format to its "displayed" format.


### [excel commands](../commands/excel)


### [localdb commands](../commands/localdb)


### [web commands](../commands/web)
- supports the automation of Edge browser embedded in another Windows application via the use of 
  `nexial.browser.embedded.appLocation` System variable. Note that this is only supported for Microsoft Edge v80 or 
  above (i.e. chromium).
- supports browser-level logging for Microsoft Edge browser via 
  [`nexial.browser.logEdge`](../systemvars/index.html#nexial.browser.logEdge) System variable. 
- code fix to prevent pre-emptive browser initialization (and opening) after initial scenario execution. 


### [tn.5250 commands](../commands/tn.5250)
- handle special case during "type key" when the input contains `[` without `]`.
- [`waitUntilProcessed(maxWaitMs)`](../commands/tn.5250/waitUntilProcessed(maxWaitMs)): **NEW** wait-until command to
  poll for the current TN5250 session to be unblocked from processing request. Usually, when a request is made to the 
  connected TN5250 session, the server will need some time to completed the requested command/transaction. This command
  the automation to pause (and poll) until the request is completed and the session is "unblocked" from further 
  interaction.
- reduce poll time from 1000ms to 200ms to improve overall performance.
- code fix to parse correctly TN5250 table with overrun cell data (cell data that is longer than the associated header).
- implemented "automatic break-message detection and dismissal" via System variables:
  - `nexial.tn5250.detectBroadcastTitle`
  - `nexial.tn5250.detectBroadcastText` and 
  - `nexial.tn5250.dismissBroadcastMessage` (required).
  - reference: https://www.ibm.com/support/knowledgecenter/ssw_ibm_i_74/cl/sndbrkmsg.htm
- improved the handling of table data in nested screen (AS/400's pop-up screen).
- improved the parsing of table data esp. when the data of 1 cell extends beyond its bound (into the adjacent cell).
- improved table automation when saving table data to CSV. When PAGE-UP or PAGE-DOWN is required, Nexial performs 
  additional checks to ensure that the status message remains unchanged.
- when inspecting a nested screen, an extra `{TAB}` character is issued to ensure keyboard focus on the nested screen.
