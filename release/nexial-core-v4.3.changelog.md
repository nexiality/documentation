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
- [FIXED] issue with selecting data variables from the same prefix while running macro
- [FIXED] runtime error when a condition within a flow control resolved to null
- [FIXED] issuing of a `:end` command during Inspect to end repeat-until loop and macro
- [FIXED] gracefully handle invalid crypt

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
  - added web service summary and detail logs in execution report for interactive analysis
  - fresh redesign of execution summary for improved dashboard view.


### [Batch Files](../userguide/BatchFiles)
- [`nexial-swagger`](../userguide/BatchFiles#nexial-swagger): command that generates an automation script and 
  corresponding artifacts to validate the Restful API operations defined in the Swagger file passed in as input.


### [Expression](../expression)
- [WEB &rauoq; `check(locator,waitMs)`](../expressions/WEBexpression#checklocatorwaitms): support customized time out
- [WEB &rauoq; `uncheck(locator,waitMs)`](../expressions/WEBexpression#unchecklocatorwaitms): support customized time out
- [LIST &raquo; `findFirst(match)`](../expressions/LISTexpression#findfirstmatch): find first matching item. 
  PolyMatcher supported
- [LIST &raquo; `retain(match)`](../expressions/LISTexpression#findfirstmatch): filter current LIST via `match` 
  criteria. PolyMatcher supported
- [WEB &raquo; `jsClick(locator)`](../expressions/WEBexpression#jsclicklocator): **NEW** operation to forcefully 
  click via JavaScript instead of WebDriver click.
- [`nexial.expression.web.alwaysNew`](../systemvars/index.html#nexial.expression.web.alwaysNew): **NEW** System 
  variable to ensure each use of WEB expression clear off outcome from the WEB operations from previous use.
- [TEXT &raquo; `list(delim)`](../expressions/TEXTexpression#listdelim): support auto-resolving delimiter, if not provided.
- [TEXT &raquo; `list(data)`](../expressions/TEXTexpression#listdelim): convert `null` into empty list for simpler 
  automation experience.


[Nexial Function](../functions)
- [`$(projectfile|projectProperty|name)`](../functions/$(projectfile)#projectfileprojectpropertyname): *NEW* function 
  to read project property `name` from `project.properties`
- [`$(projectfile|projectProperty|name|value)`](../functions/$(projectfile)#projectfileprojectpropertynamevalue): *NEW* 
  function to write project property `name` with `value` into `project.properties`


[Nexial Interactive](../interactive)
- reset screenshot capability when switching scenario to avoid the wrong type of screenshot capturing
- added new functionality to (1) clear out temp files, and (2) open output directory
- slightly improved menu to reduce visual footprint on console 
- remove functionality no longer needed


### [desktop commands](../commands/desktop)
- [FIXED] avoid capturing screenshot when underlying driver is not available or ready for use
- [`contextMenu(name,menu,xOffset,yOffset)`](../commands/desktop/contextMenu(name,menu,xOffset,yOffset)): support 
  keystroke between menu selection
- [`contextMenuByLocator(locator,menu,xOffset,yOffset)`](../commands/desktop/contextMenuByLocator(locator,menu,xOffset,yOffset)): 
  support keystroke between menu selection


### [external commands](../commands/external)


### [javaui commands](../commands/javaui)


### [mobile commands](../commands/mobile)
- [`selectLocalFile(device,folder,filename)`](../commands/mobile/selectLocalFile(device,folder,filename)): 
  - handle different types of file display (grid vs list) during automation.
  - minor fixes for an edge condition.
- [`type(locator,text)`](../commands/mobile/type(locator,text)): avoid clearing text boxes when it contains no text.
- [`home()`](../commands/mobile/home()): fixed issue with iOS device
- [FIXED]: avoid capturing screenshot when underlying driver is not available or ready for use
- [`click(locator)`](../commands/mobile/click(locator)): deliberately click on or very near the center of the specified 
  `locator`
- initial support for BrowserStack integration completed. To enable, set `ios@browserstack` or `android@browserstack` 
  as `profile`.type. At a minimum, `profile`.browserstack.username and `profile`.browserstack.automatekey are required 
  to enable BrowserStack integration.  
- [FIXED] for BrowserStack automation, avoid unnecessarily relaunching target application


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
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): force target browser instance to be 
  focused
- [`nexial.web.useComputedCss`](../systemvars/index.html#nexial.web.useComputedCss): **NEW** System variable to support
  the discovery of computed CSS value rather than the declared CSS values (default).
- [`assertCssPresent(locator,property,value)`](../commands/web/assertCssPresent(locator,property,value)): now supports
  validation of computed CSS rather than just declared values. Also support automatically color value conversion for 
  more accurate comparison.
  - also handle named color and special color name `transparent`.
- [`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator)): circumvent Selenium's limitation 
  by adding JavaScript check on whether an element is disabled or not.
- [`waitUntilDisabled(locator,waitMs)`](../commands/web/waitUntilDisabled(locator,waitMs)): circumvent Selenium's 
  limitation by adding JavaScript check on whether an element is disabled or not.
- [FIXED] avoid capturing screenshot when underlying driver is not available or ready for use
- [FIXED] address issue with invalid intermediate locator for the `layer` locator
- [`clickByLabel(label)`](../commands/web/clickByLabel(label)): click on first matching label without requiring that 
  there is exactly 1 match
- [`clickByLabelAndWait(label,waitMs)`](../commands/web/clickByLabelAndWait(label,waitMs)): click on first matching 
  label without requiring that there is exactly 1 match
- BrowserStack:
  - update BrowserStack URL from `http` to `https`
  - [`nexial.web.secureBrowserStack`](../systemvars/index.html#nexial.web.secureBrowserStack): **NEW** System variable to
    enable/disable SSL connection to BrowserStack (default is enabled).
- CrossBrowserTesting:
  - update CrossBrowserTesting URL from `http` to `https`
  - [`nexial.web.secureCrossBrowserTesting`](../systemvars/index.html#nexial.web.secureCrossBrowserTesting): **NEW** 
    System variable to enable/disable SSL connect to CrossBrowserTesting (default is enabled).
  - minor logging improvements


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
- [`oauthProfile(var,profile)`](../commands/ws/oauthProfile(var,profile)): add missing implementation to set auth 
  token to HTTP header
- [`upload(url,body,fileParams,var)`](../commands/ws/upload(url,body,fileParams,var)): support multiple HTTP methods and
  toggling of multipart via the [`nexial.ws.upload.method`] and [`nexial.ws.upload.multipart`] System variables 
  respectively. Note that both of these System variables must be specified as part of the `body` parameter.
- [FIXED] detail log missing response return code
