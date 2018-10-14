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


### [Nexial Filter](../flowcontrols/filter)
- fixed rare condition where Winium is invoked where it should not.


### [Built-in Function](../functions)


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


### [desktop commands](../commands/desktop)


### [excel commands](../commands/excel)


### [io commands](../commands/io)


### [json command](../commands/json)
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder)): code
  fix to properly consider null values.


### [rdbms command](../commands/rdbms)


### [step commands](../commands/step)


### [web commands](../commands/web)
- update code to support mobile web testing via browserstack.
- support autodownload and execution of BrowserStackLocal, if 
  [`nexial.browserstack.enablelocal`](../systemvars/index#nexial.browserstack.enablelocal) or `browserstack.local` is
  set to `true`
- support auto download/start/shut down of 
  <a href="https://www.browserstack.com/local-testing#configuration" class="external-link" target="nexial_target">BrowserStackLocal</a>, 
  which is needed to test corporate's private and internal servers, alongside public URLs, using the BrowserStack 
  cloud, which has support for firewalls, proxies and Active Directory.
- support configuration to request browser to accept invalid SSL certificate (might be useful for intranet testing).
- turn off "page source support" mode for browser stack automation to speed up execution.
- support the toggling of "real_mobile" for browser stack automation via `browserstack.real_mobile`
- disable browser window maximizing for mobile web automation
