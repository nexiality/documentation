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
- fix error when retrieving profile-based variable set from a macro 

#### Improvements
- support Java 16
  - adjustments for older Java (pre Java 11)
- enhancements to Execution Summary to show/hide timing and pass/fail information.
- minor stylesheet update for email notification template.
- Nexial build size has been reduced by extracting some jars into nexial-lib-1.0.zip
  this will be downloaded by nexial automatically.
- Batch file `nexial-lib-downloader` has been added to download nexial-lib-x.x.zip file manually.
  - minor fixes applied to ensure successful downloading of support lib zip file.


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
- [TEXT &raquo; `swapCases`](../expressions/TEXTexpression#swapcases): **NEW** operation to swap letter cases.


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
  - added support for MacOS shell scripts
  - added common utility batch files to `${NEXIAL_HOME}/bin/mobile`
- [`saveCount(var,locator)`](../commands/mobile/saveCount(var,locator)): **NEW** command to save the number of matching 
  elements to `var`.
- [`type(locator,text)`](../commands/mobile/type(locator,text)): fix code to allow time for the onscreen keyboard to 
  render.
- [`scroll(locator,direction)`](../commands/mobile/scroll(locator,direction)): fix code to properly scroll in all 4 
  directions.
- [`waitForElement(locator,waitMs)`](../commands/mobile/waitForElementPresent(locator,waitMs)): wait until the target 
  element is found before continuing execution.
- auto-resolves the location of Appium Server startup script (`main.js`)
- auto-resolves the location of NodeJS executable (`node`)
- [`hideKeyboard`](../commands/mobile/hideKeyboard()): **NEW** command to key on-screen keyboard
- add auto-hiding of on-screen keyboard via [`nexial.mobile.hideKeyboard`](../systemvars/index.html#nexial.mobile.hideKeyboard)
  System variable.
- correctly sending the correct time unit for `newCommandTimeout` capability.
- [`assertTextPresent(locator,text)`](../commands/mobile/assertTextPresent(locator,text)): **NEW** command to assert 
  that an element contains the specified text.
- [`clickByDisplayText(text)`](../commands/mobile/clickByDisplayText(text)): **NEW** command to click an element based
  on its text.
- [`longClick(locator,waitMs)`](../commands/mobile/longClick(locator,waitMs)): **NEW** command to simulate long-click
  action on a device; generally used to evoke context menu or popup menu.
- [`doubleClick(locator,xOffset,yOffset)`](../commands/mobile/doubleClick(locator,xOffset,yOffset)): **NEW** command to
  simulate double-click action on specified locator.
- [`shake()`](../commands/mobile/shake()): **NEW** command to simulate shaking the current device (iOS only), which could 
  trigger other event. 
- [`lock()`](../commands/mobile/lock()): **NEW** command to lock current device.
- [`unlock()`](../commands/mobile/unlock()): **NEW** command to unlock current device. By default no password is placed 
  on emulator. For unlocking a device with passcode or pattern, visit 
  [Appium Desired Capability](https://appium.io/docs/en/writing-running-appium/caps/#appium-desired-capabilities) and
  search for `unlockType` and `unlockKey`.
- [`assertLocked()`](../commands/mobile/assertLocked()): **NEW** command to assert that the target device is currently 
  locked. 
- [`saveLockStatus(var)`](../commands/mobile/saveLockStatus(var)): **NEW** command to save current device lock status
  (`LOCKED` or `UNLOCKED`) to `var`.
- [`sendSms(phone,message)`](../commands/mobile/sendSms(phone,message)): **NEW** command to send SMS `message` to
  specified `phone` number.
- [`home()`](../commands/mobile/home()): **NEW** command to navigate to current device's "HOME" screen. 
- [`back()`](../commands/mobile/back()): **NEW** command to navigate back to previous screen. 
- [`forward()`](../commands/mobile/forward()): **NEW** command to navigate forward from current screen (after 
  navigated back to previous screen) 
- [`recentApps`](../commands/mobile/recentApps()): **NEW** command to show recently opened (and still running) apps on
  current device.
- [`closeApp()`](../commands/mobile/closeApp()): implementation change to **ONLY** close the specified application of 
  current mobile profile.
- [`shutdown(profile)`](../commands/mobile/shutdown(profile)): **NEW** command to shut down any running emulator and
  Appium server instance.
- [`screenshot(file,locator)`](../commands/mobile/screenshot(file,locator)): now support "output-to-cloud" functionality,
  which is toggled via the [`nexial.outputToCloud`](../systemvars/index.html#nexial.outputToCloud) System variable. 
- [`type(locator,text)`](../commands/mobile/type(locator,text)): now supports clearing out text (if `text` is `(empty)`).
- [`type(locator,text)`](../commands/mobile/type(locator,text)): improved stability and performance.
- [`scroll(locator,direction)`](../commands/mobile/scroll(locator,direction)): added more fine-grained scroll increments
- [`assertElementVisible(locator)`](../commands/mobile/assertElementVisible(locator)): **NEW** command to assert that the
  element referenced by the specified `locator` is both present and visible on current screen.
- [`saveText(var,locator)`](../commands/mobile/saveText(var,locator)): **NEW** command to save the text of the referenced
  element to `var`.
- [`saveTextArray(var,locator)`](../commands/mobile/saveTextArray(var,locator)): **NEW** command to save the text of
  all matching elements as an array (or list) to `var`.
- [`assertElementsPresent(prefix)`](../commands/mobile/assertElementsPresent(prefix)): **NEW** command to assert the 
  presence of a series of locators.
- [`screenshot9file,locator)`]: improved stability and performance.
- now supports a variety of locators via unique prefixes:
  - `id=...`: ID-based locator.
  - `xpath=...`: XPATH-based locator. Note that the `xpath=` prefix not required since XPATH locators are fairly easy to recognize
  - `a11y=...`: accessbility id-based locator.
  - `class=...`: class-based locator.
  - `res=...`: resource id-based locator, which is an alias to ID-based locator.
  - `predicate=...`: predicate-based locator. Note that this is for iOS device only.
  - `cc=...`: class chain-based locator. Note that this is for iOS device only.
  - `name=...`: name-based locator, which is an alias to ID-based locator. Note that this is for iOS device only.
- [`select(locator,item)`](../commands/mobile/select(locator,item)): **NEW** command to select an item from a dropdown.
- fix code to support both implicit and explicit wait strategy.
- [`text=...`](../commands/mobile/index.html#locators): **NEW** locator type to simplify automation.
- [`select(locator,item)`](../commands/mobile/select(locator,item)): code fix to accurately select items that are not 
  immediately visible on-screen.
- [`assertTextPresent(locator,text)`](../commands/mobile/assertTextPresent(locator,text)): scan across all matching 
  elements (not just the 1st one) for text content assertion.
- [`clickByDisplayText(text)`](../commands/mobile/clickByDisplayText(text)): improved implementation to handle text 
  with single and/or double quotes.
- [`nearby=...`](../commands/mobile/index.html#locators): **NEW** locator type to simplify the task of identifying 
  elements that are adjacent to label or text element.
- automatically add [`scenarioRef`](../systemvars/index.html#nexial.scenarioRef) for the mobile device used in automation.


### [rdbms commands](../commands/rdbms)
- update multiple database drivers to newer version for better product support


### [localdb commands](../commands/localdb)
- localdb driver (sqlite) configuration has been removed from `build.gradle` and it has been 
  configured to download it automatically while using localdb command for the first time


### [sound commands](../commands/sound)
- [`play(audio)`](../commands/sound/play(audio)): update all sound files to MP3 (instead of WAV) to reduce footprint
- [`play(audio)`](../commands/sound/play(audio)): it will download and play the audio files from `${user.home}/.nexial/sound/`


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
- [`waitWhileElementNotPresent(locator,waitMs)`](../commands/web/waitWhileElementNotPresent(locator,waitMs)): **NEW**
  command to ensure that a specific element is not present within a fixed amount of time.
  - code fix to prefer the `waitMs` parameter over `nexial.pollWaitMs` value.
- additional settings to speed up and stabilize chrome browser during automation, esp. in headless mode.
- [`assertElementNotPresent(locator,maxWaitMs)`](../commands/web/assertElementNotPresent(locator,maxWaitMs)): added 
  `maxWaitMs` to custom amount of time to wait.


### [webmail commands](../commands/webmail)
- [`attachment(profile,id,attachment,saveTo)`](../commands/webmail/attachment(profile,id,attachment,saveTo)): **NEW** 
  command to download an attachment associated with an email identified by `id` and save it locally to `saveTo`.
- [`attachments(profile,id,saveDir)`](../commands/webmail/attachments(profile,id,saveDir)): **NEW** command to download 
  all the attachments associated with an email identified by `id` and save them locally to `saveDir` (directory).
- code fix for the obscure condition where the attachment file name contains path information.


### [ws commands](../commands/ws)
- [`upload(url,body,fileParams,var)`](../commands/ws/upload(url,body,fileParams,var)):
  - additional logging enabled via the `nexial.verbose` System variable.
  - honoring the Content-Type header defined in preceding [`header(name,value)`](../commands/ws/header(name,value))
    command(s).
  - support content type with charset.
  - further customization and control via [`nexial.ws.multipart.charset`](../systemvars/index.html#nexial.ws.multipart.charset)
    and [`nexial.ws.multipart.spec`](../systemvars/index.html#nexial.ws.multipart.spec) System variables.
- [`graphql(url,body,var)`](../commands/ws/graphql(url,body,var)): **NEW** command to support GraphQA request automation
- code fix to stabilize and enhance web service logging.
- prevent default content type to be sent as a part of a GET request header; GET request, per spec, does not require 
  any `Content-Type` header.
