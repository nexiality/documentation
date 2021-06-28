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


### [Interactive](../interactive)
- minor adjustment to render activity listing correctly


### [System Variables](../systemvars)


### [Expressions](../expressions)
- [WEB &raquo; `check(locator)`](../expressions/WEBexpression#checklocator): **NEW** operation to ensure a checkbox is checked
- [WEB &raquo; `uncheck(locator)`](../expressions/WEBexpression#unchecklocator):  **NEW** operation to ensure a checkbox is unchecked


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- added more meaningful error messages for explicit wait
- added auto-retry logic
  - [`assertLocatorPresent(locator)`](../commands/desktop/assertLocatorPresent(locator))
  - [`clickMenuByLocator(locator,menu)`](../commands/desktop/clickMenuByLocator(locator,menu))
- [autoscanning](../commands/desktop/configureDesktopApplication): code fixes to continue with autoscanning when an 
  error occurred due to component not bing active or misconfigured.


### [macro commands](../commands/macro)
- [`produce`](../commands/macro/produces(var,value)): allow a data variable generated in within a macro to be exposed to
  the calling script directly via its data variable name.


### [mobile commands](../commands/mobile)
- alpha build for local mobile test automation support. Currently supports only Android, with iOS soon to follow.
- documentation forthcoming (please be patient).
- current implementation requires user to install android studio, android sdk, platform-tools, AVD manager, any Android 
  emulators, and Appium Desktop *BEFORE* using Nexial's mobile automation feature.


### [sound commands](../commands/sound)
- [`play(audio)`](../commands/sound/play(audio)): update all sound files to MP3 (instead of WAV) to reduce footprint


### [web commands](../commands/web)
- [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs)): FIXED to support both window name and 
  window index. Also the target window will be selected (meaning: switched to) when it is detected within the specified 
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


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
