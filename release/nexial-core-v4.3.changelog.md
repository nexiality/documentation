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
- fixed runtime error when a condition within a flow control resolved to null

#### Improvements
- minor batch and shell script changes to support Java 17.
- [`nexial.disableCriticalCommands`](../systemvars/index.html#nexial.disableCriticalCommands): **NEW** System variable
  to temporarily disable critical command failure check.
- [`nexial.inspectOnPause`](../systemvars/index.html#nexial.inspectOnPause): now support "end immediate" via `:end`.
- [`nexial.recordingAutostart`](../systemvars/content.html#nexial.recordingAutoStart): **NEW** System variable to 
  automatically start desktop (main screen) recording when execution starts. Future Nexial releases will support 
  automatic screen recording at the start of a script, an iteration or a scenario. _Stay tuned!!_
- [`execution-output.html`](../userguide/UnderstandingProjectStructure.html#output):
  - added screen recording as videos in execution report.
  - added web service summary and detail logs in execution report for interactive analysis. 


### [Batch Files](../userguide/BatchFiles)
- [`nexial-swagger`](../userguide/BatchFiles#nexial-swagger): command that generates an automation script and corresponding
  artifacts to validate the Restful API operations defined in the Swagger file passed in as input.

### [Expression](../expression)
- [WEB &rauoq; `check(locator,waitMs)`](../expressions/WEBexpression.md#checklocatorwaitms): support customized time out
- [WEB &rauoq; `uncheck(locator,waitMs)`](../expressions/WEBexpression.md#unchecklocatorwaitms): support customized time out
- [LIST &raquo; `findFirst(match)`](../expressions/LISTexpression#findfirstmatch): find first matching item. 
  PolyMatcher supported
- [LIST &raquo; `retain(match)`](../expressions/LISTexpression#findfirstmatch): filter current LIST via `match` 
  criteria. PolyMatcher supported
- [WEB &raquo; `jsClick(locator)`](../expressions/WEBexpression#jsclicklocator): **NEW** operation to forcefully 
  click via JavaScript instead of WebDriver click.
- [`nexial.expression.web.alwaysNew`](../systemvars/index.html#nexial.expression.web.alwaysNew): **NEW** System 
  variable to ensure each use of WEB expression clear off outcome from the WEB operations from previous use.


### [external commands](../commands/external)


### [javaui commands](../commands/javaui)


### [mobile commands](../commands/mobile)
- [`selectLocalFile(device,folder,filename)`](../commands/mobile/selectLocalFile(device,folder,filename)): 
  - handle different types of file display (grid vs list) during automation.
  - minor fixes for an edge condition.
- [`type(locator,text)`](../commands/mobile/type(locator,text)): avoid clearing text boxes when it contains no text.
- [`home()`](../commands/mobile/home()): fixed issue with iOS device


### [web commands](../commands/web)
- [`type(locator,text)`](../commands/web/type(locator,value)): 
  - performance improvement when clearing out existing text in React-like text boxes or text areas.
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): fixed issue with selecting data 
  variables from the same prefix while running macro
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): fixed error when switching back to
  DEFAULT (without `profile` value).
- [`text=...` locator](../commands/web/index#locators): **NEW** locator to simplify the referencing of text-centric web 
  elements.
- [`layer=...` locator](../commands/web/index#locators): **NEW** locator to optimize the use of existing locators 
  across multiple DOM layers.
  - minor fixes
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): force target browser instance to be focused.


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
- [`oauthProfile(var,profile)`](../commands/ws/oauthProfile(var,profile)): add missing implementation to set auth 
  token to HTTP header
