---
layout: default
title: nexial-core 4.1 (2021-07-??)
parent: release
tags: release nexial-core 4.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.1_????" class="external-link" target="_nexial_link">Release 4.1</a>
2021-07-??


### General
#### Fixes
- minor console logging formatting

#### Improvements
- support Java 16
  - adjustments for older Java (pre Java 11)
- enhancements to Execution Summary to show/hide timing and pass/fail information.
- minor stylesheet update for email notification template.


### [Interactive](../interactive)
- minor adjustment to render activity listing correctly


### [System Variables](../systemvars)


### [Expressions](../expressions)
- [WEB &raquo; `check(locator)`](../expressions/WEBexpression#checklocator): **NEW** operation to ensure a checkbox is 
  checked
- [WEB &raquo; `uncheck(locator)`](../expressions/WEBexpression#unchecklocator):  **NEW** operation to ensure a 
  checkbox is unchecked
- rewrote parsing logic for expression in order to support parameter values that contains `(`, `)`, `[`, and `]`.
  - it is now possible to nest parenthesis (`(` and `)`) and square brackets (`[` and `]`) within expression operations.
- implemented special parameter delimiter - ` %% ` - to handle situations where comma (`,`) is used as part of the 
  parameter itself. This special parameter delimiter allows user to use commas freely as part of the parameter value.


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- added more meaningful error messages for explicit wait
- added auto-retry logic
  - [`assertLocatorPresent(locator)`](../commands/desktop/assertLocatorPresent(locator))
  - [`clickMenuByLocator(locator,menu)`](../commands/desktop/clickMenuByLocator(locator,menu))
- [autoscanning](../commands/desktop/configureDesktopApplication): code fixes to continue with autoscanning when an 
  error occurred due to component not bing active or mis-configured.
- remove _over-zealous_ trimming of component text during editing of a textbox/textarea component.
  - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
  - [`typeAppendTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextBox(name,text1,text2,text3,text4))
  - [`typeAppendTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextArea(name,text1,text2,text3,text4))
- HierTable support:
  - auto scrolling for HierTable to bring offscreen rows into view (currently only support Infragistics4 UI):
    - [`assertHierCells(matchBy,column,expected,nestedOnly)`](../commands/desktop/assertHierCells(matchBy,column,expected,nestedOnly))
    - [`assertHierRow(matchBy,expected)`](../commands/desktop/assertHierRow(matchBy,expected))
    - [`editHierCells(var,matchBy,nameValues)`](../commands/desktop/editHierCells(var,matchBy,nameValues))
    - [`saveHierCells(var,matchBy,column,nestedOnly)`](../commands/desktop/saveHierCells(var,matchBy,column,nestedOnly))
    - [`saveHierRow(var,matchBy)`](../commands/desktop/saveHierRow(var,matchBy))
  - allow "extra" section of a HierTable element to be loaded more dynamically
  - reformat multi-line column headers as single line to better support assertions and data comparison
    - [`assertHierCells(matchBy,column,expected,nestedOnly)`](../commands/desktop/assertHierCells(matchBy,column,expected,nestedOnly))
    - [`assertHierRow(matchBy,expected)`](../commands/desktop/assertHierRow(matchBy,expected))
    - [`saveHierCells(var,matchBy,column,nestedOnly)`](../commands/desktop/saveHierCells(var,matchBy,column,nestedOnly))
    - [`saveHierRow(var,matchBy)`](../commands/desktop/saveHierRow(var,matchBy))
- code fix to eliminate unwanted exceptions


### [macro commands](../commands/macro)
- [`produce`](../commands/macro/produces(var,value)): allow a data variable generated in within a macro to be exposed to
  the calling script directly via its data variable name.


### [mobile commands](../commands/mobile)
- alpha build for local mobile test automation support. Currently supports only Android, with iOS soon to follow.
- documentation forthcoming (please be patient).
- current implementation requires user to install android studio, android sdk, platform-tools, AVD manager, any Android 
  emulators, and Appium Desktop *BEFORE* using Nexial's mobile automation feature.
- additional profile configuration for added:
  - `.orientation`
  - `.geoLocation`
  - `.server.url`
  - `.server.address`
  - `.server.logging`
- fix the shutdown sequence of appium server when Nexial is terminating execution
- support externalizing the Appiums log during execution (`log/appium.log` under the output directory)
- support both external appium server integration and auto-start appium server during Nexial execution
- improved Android setup script to install Android SDK and emulators
  - alpha-ready: Android setup script will now 
    1. install Android SDK to `~/.nexial/android/sdk`
    2. install Android system images (user selects)
    3. install Android emulators with skins (user selects)
    4. create batch files to start emulators
- [`saveCount(var,locator)`]: **NEW** command to save the number of matching elements to `var`.
- [`type(locator,text)`]: fix code to allow time for the onscreen keyboard to render.
- [`scroll(locator,direction)`]: fix code to properly scroll in all 4 directions.
- [`waitForElement(locator,waitMs)`]: wait until the target element is found before continuing execution.


### [sound commands](../commands/sound)
- [`play(audio)`](../commands/sound/play(audio)): update all sound files to MP3 (instead of WAV) to reduce footprint


### [ws commands](../commands/ws)
- [`upload(url,body,fileParams,var)`](../commands/ws/upload(url,body,fileParams,var)): 
  - additional logging enabled via the `nexial.verbose` System variable. 
  - honoring the Content-Type header defined in preceding [`header(name,value)`](../commands/ws/header(name,value)) command(s).
  - support content type with charset


### [web commands](../commands/web)
- [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs)): FIXED to support both window name and 
  window index. Also, the target window will be selected (meaning: switched to) when it is detected within the specified 
  max time.
- added more meaningful error messages for explicit wait
- [`click(locator)`](../commands/web/click(locator)): better "find element" strategy for click target
- avoid "double-highlighting" caused by nested command calls
- highlighting improvement made to reduce styling conflicting against AUT
- [`type(locator,value)`](../commands/web/type(locator,value)): minor logging improvements for clarity
- Support `SELECT` element on extracting the text of the selected option.
  - [`assertText(locator,text)`](../commands/web/assertText(locator,text))
  - [`assertNotText(locator,text)`](../commands/web/assertNotText(locator,text))
  - [`assertTextContains(locator,text)`](../commands/web/assertTextContains(locator,text))
  - [`assertTextNotContain(locator,text)`](../commands/web/assertTextNotContain(locator,text))
  - [`saveText(var,locator)`](../commands/web/saveText(var,locator))
- [`close`](../commands/web/close()): also shut down underlying webdriver if the last browser window is closed.
- [`selectDropdown(locator,optLocator,optText)`](../commands/web/selectDropdown(locator,optLocator,optText)): *NEW* 
  command to select an option from a dropdown component.
- [`waitForElementTextPresent(locator,text)`](../commands/web/waitForElementTextPresent(locator,text)): *NEW* command 
  to wait for the presence of an element that matches both the specified `locator` and specified `text`.
- disable native screenshot when executing under headless environment (not supported)
- disable native DnD when executing under headless environment (not supported)


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
