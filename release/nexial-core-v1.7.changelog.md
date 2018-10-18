---
layout: default
title: nexial-core 1.7 (2018-11-??)
parent: release
tags: release nexial-core 1.7
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.7" class="external-link" target="_nexial_link">Release 1.7</a>
2018-11-??


### General
- enhancement to Nexial's screen capturing capability. Now screenshot can be taken even if the current command is not
  one dealing with UI. Previously only [web](../commands/web) and [desktop](../commands/desktop) commands can be used to
  capture screenshot (of the current test step). With this new change, Nexial will use the latest UI-related command
  as reference point to capture screenshot. 
- enhancement to how Nexial resolves scripts and data files both for script and plan execution. Alos, better error
  messages are now in place.
- code fix to honor fail-immediate on critical commands such as [web &raquo; `open(url)`](../commands/web/open(url)).


### [Nexial Filter](../flowcontrols/filter)
- fixed rare condition where Winium is invoked where it should not.


### [Built-in Function](../functions)
- [`$(date|format|date|fromDate|toDate)`](../functions/$(date)): **NEW** time format - `base10time` - to support 
  conversion of time to/from an existing time format, such as `HH:mm:ss`, to/from `base10time` format. As such we can
  convert time information from the conventional `HH:mm:ss` into a base-10 decimal number.

### [Nexial Expression](../expressions)  


### [base commands](../commands/base)
- [`assertArrayContain(array,expected)`](../commands/base/assertArrayContain(array,expected)): **NEW** command to assert
  that all the items in `expected` exists in `array`. `expected` can either be a single item or multiple items separated
  by [`nexial.textDelim`](../systemvars/index#nexial.textDelim), as the case for `array`.  The items in `expected` need
  not be of the same order as those in `array`.
- [`assertArrayNotContain(array,unexpected)`](../commands/base/assertArrayNotContain(array,unexpected)): **NEW** command 
  to assert that all the items in `unexpected` DO NOT exist in `array`. `unexpected` can either be a single item or 
  multiple items separated by [`nexial.textDelim`](../systemvars/index#nexial.textDelim), as the case for `array`.
- code fix: consider "null=null" and "empty=empty" when comparing arrays
- reduce some of more "cryptic" console output passed down from Selenium 2 implementation.

### [desktop commands](../commands/desktop)


### [excel commands](../commands/excel)


### [io commands](../commands/io)


### [json command](../commands/json)
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder)): code
  fix to properly consider null values.
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder)): 
  enhanced to support better comparison-equivalent logic (like that of 
  [`assertEqual(expected,actual)`](../commands/json/assertEqual(expected,actual))).


### [rdbms command](../commands/rdbms)


### [ssh commands](../commands/ssh)
- support empty password (use `(empty)`) for cases where the target SSH server allows for it.


### [step commands](../commands/step)
- update console display of command prompt across all step commands to improve readability.


### [web commands](../commands/web)
- support configuration to request browser to accept invalid SSL certificate (might be useful for intranet testing).
- support screenshot when JavaScript dialog (modal) is present. When JavaScript dialog is found, instead of Selenium's screenshot capability, Nexial will resort to Java's fullscreen capture.
- initial support for CrossBrowserTesting (alternative to BrowserStack). Note: **Not all functionality are tested yet.**
- disable the checking of browser stability via page source when JavaScript dialog is present.
- BrowserStack support:
  - disable browser window maximizing for mobile web automation
  - update code to support mobile web testing via browserstack.
  - support autodownload and execution of BrowserStackLocal, if 
    [`nexial.browserstack.enablelocal`](../systemvars/index#nexial.browserstack.enablelocal) or `browserstack.local` is
    set to `true`
  - support auto download/start/shut down of 
    <a href="https://www.browserstack.com/local-testing#configuration" class="external-link" target="nexial_target">BrowserStackLocal</a>, 
    which is needed to test corporate's private and internal servers, alongside public URLs, using the BrowserStack 
    cloud, which has support for firewalls, proxies and Active Directory.
  - turn off "page source support" mode for browser stack automation to speed up execution.
  - support the toggling of "real_mobile" for browser stack automation via `browserstack.real_mobile`
  - default to `nexial.browser.windowSize` when `browserstack.resolution` data variable is not available.
  - automatic download/install/invocation of BrowserStackLocal executable when `browserstack.local` is set to `true`
  - automatic termination of BrowserStackLocal when execution ends.
  - disabling the setting of browser window size if mobile web testing is in effect.
- Safari support:
  - prior to highlighting, scroll the target element so that it is visible
  - handle UnhandledAlertException when a JavaScript dialog is present during automation.
  - fixed error when setting browser window size
- remove scrollbar during screenshots for chrome headless. Chrome browser still exhibit scrollbar during screen capturing.
- [`select(locator,text)`](../commands/web/select(locator,text)): now supports selection based on regular expression. 
  Use `REGEX:` as prefix to enable regex-based text selection. Note that for SELECT element that supports only single
  selection, only the first match will be selected.
- [`deselect(locator,text)`](../commands/web/deselect(locator,text)): **NEW** command to deselect (unselect?) from a
  SELECT element based on `text`. For regex-based deselect, add `REGEX:` prefix to `text`.

