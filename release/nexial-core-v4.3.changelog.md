---
layout: default
title: nexial-core 4.3 (2021-10-??)
parent: release
tags: release nexial-core 4.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.3_????" class="external-link" target="_nexial_link">Release 4.3</a>
2021-10-??


### General

#### Fixes
- fixed issue with selecting data variables from the same prefix while running macro

#### Improvements
- minor batch and shell script changes to support Java 17.


### [Batch Files](../userguide/BatchFiles)


### [Expression](../expression)
- [WEB &rauoq; `check(locator,waitMs)`](../expressions/WEBexpression.md#checklocatorwaitms): support customized time out
- [WEB &rauoq; `uncheck(locator,waitMs)`](../expressions/WEBexpression.md#unchecklocatorwaitms): support customized time out
- [LIST &raquo; `findFirst(match)`](../expressions/LISTexpression#findfirstmatch): find first matching item. 
  PolyMatcher supported
- [LIST &raquo; `retain(match)`](../expressions/LISTexpression#findfirstmatch): filter current LIST via `match` 
  criteria. PolyMatcher supported


### [external commands](../commands/external)


### [javaui commands](../commands/javaui)


### [mobile commands](../commands/mobile)
- [`selectLocalFile(device,folder,filename)`](../commands/mobile/selectLocalFile(device,folder,filename)): 
  - handle different types of file display (grid vs list) during automation.
  - minor fixes for an edge condition.


### [web commands](../commands/web)
- [`type(locator,text)`](../commands/web/type(locator,value)): 
  - performance improvement when clearing out existing text in React-like text boxes or text areas.
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): fixed issue with selecting data 
  variables from the same prefix while running macro
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): fixed error when switching back to
  DEFAULT (without `profile` value).


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
