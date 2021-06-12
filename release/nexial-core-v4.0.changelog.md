---
layout: default
title: nexial-core 4.0 (2021-06-12)
parent: release
tags: release nexial-core 4.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.0_1200" class="external-link" target="_nexial_link">Release 4.0</a>
2021-06-12


### General
#### Fixes
- FIXED: screen recording (i.e. [base &raquo; `startRecording()`](../commands/base/startRecording())) now accurately 
  determine the screen resolution of the active monitor during recording.
- minor improvements on execution output (HTML) to remove unnecessary escaping of double quotes.
#### Improvements
- console output margin changed from 80 to 100 characters to reduce line wrapping, possibly improve readability.


### [Interactive](../interactive)
- Option 1 (`1 <script>`) now supports loading of test script without path. Assume such script is located in the 
  `artifact/script` directory of the current project.
- Option 2 (`2 <data>`) now supports data file without path. Assume such data file is located in the `artifact/data`
  directory of the current project.
- increase current display margin from 80 characters to 100 characters to reduce line wrapping occurrence, and thus
  possibly improve readability
- activity listing now merged into single line to reduce generating too many lines on console.


### [System Variables](../systemvars)
- [`nexial.desktop.explicitWait`](../systemvars/index.html#nexial.desktop.explicitWait): **NEW** System variable to
  support explicit wait for desktop automation. Currently, only supports the `**Locator()` desktop commands.
  - added optimistic retry logic during explicit waits to reduce test flakiness.
- [`nexial.desktop.simulateClick`](../systemvars/index.html#nexial.desktop.simulateClick): **NEW** System variable to
  simulate mouse click rather than using actual one. Such feature allows for one to automate clicks without waiting for
  the target component to complete the corresponding event handling.
- [`nexial.web.explicitWait`](../systemvars/index.html#nexial.web.explicitWait): **NEW** System variable to replace
  now-deprecated `nexial.web.alwaysWait` System variable. Both serves the same purpose except that
  `nexial.web.explicitWait` defaults to `true.
- [`nexial.browser.chrome.enableExtension`](../systemvars/index.html#nexial.browser.chrome.enableExtension): **NEW**
  System variable to allow chrome extensions to be installed during automation. Installation of a chrome extension must
  be performed manually at this time.


### [base commands](../commands/base)
- [`assertEqual(expected,actual)`](../commands/base/assertEqual(expected,actual)): avoid long-running comparison between 
  text with regex-typed characters.
- [`assertContains(text,substring)`](../commands/base/assertContains(text,substring)): properly consider empty text 
  comparison.


### [desktop commands](../commands/desktop)
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): 
  - performance improvement when target combo element contains no selection.
  - collapse dropdown after the appropriate selection is made.
- #### Table/Grid improvements:
  - [`clickTableRow(row)`](../commands/desktop/clickTableRow(row)): 
    - stability improvement when requested row does not exist in the current table component.
    - accuracy improvement by considering `[COLUMN].format` information in the `"extra"` section of the "autoscanned" JSON 
      file.
  - [`clickFirstMatchRow(nameValues)`](../commands/desktop/clickFirstMatchRow(nameValues)): performance improvement to
    find matching row over multiple column criterion.
  - [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv)): improve accuracy by 
    omitting the last/not-yet-exist row.
  - [`assertTableCell(row,column,contains)`](../commands/desktop/assertTableCell(row,column,contains)): code fix to
    properly consider empty text comparison.
  - [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)):
    - fixed logical error when editing an empty table with no rows created.
    - when the last column is provided by some shortcuts as the last keystroke sequence, Nexial will perform the
      shortcut keystrokes but will not forward to the subsequent column even if `nexial.desktop.table.tabAfterEdit`
      is set to `true`
    - performance improvement during editing of data grid cells, when the target cell contains the same data as in the
      parameter
    - special handling of checkboxes, especially when they are placed at the end of a row.
    - improvement on checkbox fields to eliminate unnecessary clicks and mouse movements.
    - account for row(s) that are not currently visible within the bounds of the corresponding table.
  - performance improvement during scanning or fetching data from a data grid when it contains no rows:
    - [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv))
    - [`assertTableColumnContains(column,contains)`](../commands/desktop/assertTableColumnContains(column,contains))
    - [`saveAllTableRows(var,csv)`](../commands/desktop/saveAllTableRows(var,csv))
    - [`assertTableContains(contains)`](../commands/desktop/assertTableContains(contains))
  - [`focusFirstTableRow`](../commands/desktop/focusFirstTableRow): **NEW** command to put focus on and select the first
    row of the current table.
  - [`focusLastTableRow`](../commands/desktop/focusLastTableRow): **NEW** command to put focus on and select the last
    row of the current table.
- #### Checkbox improvements:
  - [`check(name)`](../commands/desktop/check(name)): *NEW* command to check a Checkbox component only if it is 
    currently unchecked.
  - [`uncheck(name)`](../commands/desktop/uncheck(name)): *NEW* command to uncheck a Checkbox component only if it is 
    currently checked.
  - [`checkByLocator(locator)`](../commands/desktop/checkByLocator(locator).md): *NEW* command to check a Checkbox 
    component only if it is currently unchecked.
  - [`uncheckByLocator(locator)`](../commands/desktop/uncheckByLocator(locator)): *NEW* command to uncheck a Checkbox 
    component only if it is currently checked.
- #### Improved support on autoscanned JSON via the "`extra`" section:
  - support the use of `nexial.desktop.useTypeKeys` for any TextBox element; this configuration should be set in the 
    `"extra"` section of the corresponding JSON document.
  - [`assertText(name,expected)`](../commands/desktop/assertText(name,expected)): handling of combo element when no
    selection is made.
  - FIX: properly translate newline characters so that they are reflected in the type* commands:
    - [`typeAppendTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextArea(name,text1,text2,text3,text4))
    - [`typeAppendTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextBox(name,text1,text2,text3,text4))
    - [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
    - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - support the reformatting of component value via the "`extra`" section of the corresponding JSON configuration.
    - for example, the following reformat a "number with the thousand separator" to a plain number:
  ```json
      "Field 1": {
        "type": "DesktopElement",
        "xpath": "/*[... ...]",
        ... ...
        "extra": {
          "format": "[#,###,##0.00],[0.00]"
        },... ...
      }, ... ...
  ```
    - for example, the following reformat a "date with time" to just date:
  ```json
      "Field 12: {
        "type": "DesktopElement",
        "xpath": "/*[... ...]",
        ... ...
        "extra": {
          "format": "[M/d/yyyy h:m:s a],[MM/dd/yyyy]"
        },... ...
      }, ... ...
  ```
  - support the clicking of an input element prior to typing on it via [`nexial.desktop.clickBeforeEdit`], which can
    either be configured as part of the target element's `extra` section, or as a System variable. Impacted commands are:
    - [`sendKeysToTextBox(name,text1,text2,text3,text4)`](../commands/desktop/sendKeysToTextBox(name,text1,text2,text3,text4))
    - [`typeAppendTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextArea(name,text1,text2,text3,text4))
    - [`typeAppendTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextBox(name,text1,text2,text3,text4))
    - [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
    - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`nexial.desktop.explicitWait`](../systemvars/index.html#nexial.desktop.explicitWait): **NEW** System variable to 
    support explicit wait for desktop automation. Currently, only supports the `**Locator()` desktop commands.
    - added optimistic retry logic during explicit waits to reduce test flakiness.
  - [`nexial.desktop.simulateClick`](../systemvars/index.html#nexial.desktop.simulateClick): **NEW** System variable to 
    simulate mouse click rather than using actual one. Such feature allows for one to automate clicks without waiting for 
    the target component to complete the corresponding event handling.
- implemented auto-retries for both implicit and explicit wait scenarios to reduce occurrence of flaky tests.
  - [`clickByLocator(locator)`](../commands/desktop/clickByLocator(locator)) 
  - [`typeByLocator(locator,text)`](../commands/desktop/typeByLocator(locator,text))


### [web commands](../commands/web)
- [`openInTab(name,url)`](../commands/web/openInTab(name,url)): **NEW** command to open an `url` in another tab.
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): fixes for switching between multiple 
  headless browsers.
- minor logging improvements.
- reduce logging during webdriver initialization.
- browser performance metrics:
  - upgrade to ChartJS 3.3: vulnerability fix
  - realign the commands from which browser performance tracking should be made
- [`clickByLabel(label)`](../commands/web/clickByLabel(label)): improved implementation by supporting case-insensitive 
  matching.
- remove commands due to unsupported/non-working underlying JavaScript:
  - `web.scrollElement(locator,xOffset,yOffset)`: use [`scrollTo(locator)`](../commands/web/scrollTo(locator)) or 
    [`scrollPage(xOffset,yOffset)`](../commands/web/scrollPage(xOffset,yOffset)) instead
  - `web.scrollLeft(locator,pixel)`: use [`scrollTo(locator)`](../commands/web/scrollTo(locator)) or 
    [`scrollPage(xOffset,yOffset)`](../commands/web/scrollPage(xOffset,yOffset)) instead
  - `web.scrollRight(locator,pixel)`: use [`scrollTo(locator)`](../commands/web/scrollTo(locator)) or 
    [`scrollPage(xOffset,yOffset)`](../commands/web/scrollPage(xOffset,yOffset)) instead
- [`nexial.web.explicitWait`](../systemvars/index.html#nexial.web.explicitWait): **NEW** System variable to replace
  now-deprecated `nexial.web.alwaysWait` System variable. Both serves the same purpose except that 
  `nexial.web.explicitWait` defaults to `true.
- [`nexial.browser.chrome.enableExtension`](../systemvars/index.html#nexial.browser.chrome.enableExtension): **NEW**
  System variable to allow chrome extensions to be loaded during automation. Setting 
  `nexial.browser.chrome.enableExtension` to `true` will enable the installation and loading Chrome extensions.


### [webmail commands](../commands/webmail)
- [`read(var,profile,id)`](../commands/webmail/read(var,profile,id)): fix minor runtime errors when automating 
  mailinator webmail service.
- improved extraction of "clickable" links on mailinator mails.
- improved/reduced harvested text content from webmail.
- [`search(var,profile,searchCriteria,duration)`](../commands/webmail/search(var,profile,searchCriteria,duration)): 
  support the search of all messages via setting `searchCriteria` as `(empty)`.


### [ws commands](../commands/ws)
- enable custom HTTP response handling to support the fetching of response content even when the corresponding status 
  code is 204 or 205. Useful for testing non-conformant API endpoint.
- [`oauth(var,url,auth)`](../commands/ws/oauth(var,url,auth)): add URL encoding to request parameters during OAUTH token
  exchange.
