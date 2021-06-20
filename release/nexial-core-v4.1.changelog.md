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


### [Interactive](../interactive)
- minor adjustment to render activity listing correctly


### [System Variables](../systemvars)


### [Expressions](../expressions)
- [WEB &raquo; `check(locator)`](../expressions/WEBexpression#checklocator): **NEW** operation to ensure a checkbox is checked
- [WEB &raquo; `uncheck(locator)`](../expressions/WEBexpression#unchecklocator):  **NEW** operation to ensure a checkbox is unchecked


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- added more meaningful error messages for explicit wait
- [`assertLocatorPresent(locator)`](../commands/desktop/assertLocatorPresent(locator)): added auto-retry logic


### [macro commands](../commands/macro)
- [`produce`](../commands/macro/produces(var,value)): allow a data variable generated in within a macro to be exposed to
  the calling script directly via its data variable name.
  

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


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
