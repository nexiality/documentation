---
layout: default
title: nexial-core 1.7 (2018-11-13)
parent: release
tags: release nexial-core 1.7
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.7_0318" class="external-link" target="_nexial_link">Release 1.7</a>
2018-11-13


### General
- enhancement to Nexial's screen capturing capability. Now screenshot can be taken even if the current command is not
  one dealing with UI. Previously only [web](../commands/web) and [desktop](../commands/desktop) commands can be used to
  capture screenshot (of the current test step). With this new change, Nexial will use the latest UI-related command
  as reference point to capture screenshot. 
- enhancement to how Nexial resolves scripts and data files both for script and plan execution. Also better error
  messages are now in place.
- enhance execution output to "paint" description column as red if the corresponding step fails.
- optimization of Nexial internal processing and revamp Excel handling to improve performance.
- further reducing startup time by moving some Excel style initialization towards later
- minor reduction of console logging to improve readability
- enhancement to console logging - reduce verbosity to improve readability
- enhancement to console logging - WE'VE GOT COLORS!
- enhancement to console logging - log FAIL steps as ERROR level
- code fix to include data variables from project.properties and System properties to execution output
- code fix against edge cases on infinite loop; now both `null` and `(null)` values are treated as `NULL` values.
- fixed overflow condition when generating new command-listing JSON that has more than 26 command types.
- code fix to restore smtp capability
- enhanced nexial mailer to handle inflight mail configuration changes (e.g. between iterations) and to support AWS SES.


### [Nexial Interactive](../interactive)
- 1st version of Nexial Interactive now available! Only basic functionality tested; please kindly 
  <a href="https://github.com/nexiality/nexial-core/issues/new/choose" class="external-link" target="_nexial_link">report issues on GitHub</a>.
- added color output on console for Nexial Interactive; more to come.
- support options to assign all steps
- support options to open script and data file
- support reading of scenario from command line


### [Built-in Function](../functions)
- [`$(date|format|date|fromDate|toDate)`](../functions/$(date)): **NEW** time format - `base10time` - to support 
  conversion of time to/from an existing time format, such as `HH:mm:ss`, to/from `base10time` format. As such we can
  convert time information from the conventional `HH:mm:ss` into a base-10 decimal number.
- [`$(execution|meta|nexial)`](../functions/$(execution)): display current Nexial version.
- [`$(execution|meta|java)`](../functions/$(execution)): display current Java version.


### [System variables](../systemvars)
- [`nexial.imageDiffColor`](../systemvars/index#nexial.imageDiffColor): **NEW** System variable to define color for 
  highlighting difference when comparing two images.
- [`nexial.printErrorDetails`](../systemvars/index#nexial.printErrorDetails) - **NEW** System variable to control the 
  printing of underlying Java exception when such is thrown.
- [`nexial.var.defaultAsIs`](../systemvars/index#nexial.var.defaultAsIs) - **NEW** System variable to control 
  unresolved data variable during substitution.


### [aws.ses commands](../commands/aws.ses)
- [`sendHtmlMail(profile,to,subject,body)`](../commands/aws.ses/sendHtmlMail(profile,to,subject,body)): **NEW** command 
  to send email via AWS SES.
- [`sendTextMail(profile,to,subject,body)`](../commands/aws.ses/sendTextMail(profile,to,subject,body)): **NEW** command 
  to send email via AWS SES.


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
- fixed rare condition where Winium is invoked where it should not.


### [image commands](../commands/image)
-[`compare(baseline,actual)`](../commands/image/compare(baseline,actual)): modified command to compare two images and 
highlighting difference with rectangle in new image.
-[`colorbit(source,bit,saveTo)`](../commands/image/colorbit(source,bit,saveTo)): **NEW** command to convert image color bit.


### [io commands](../commands/io)
- [`base64(var,file)`](../commands/io/base64(var,file)): read and encode file content as base64.


### [json command](../commands/json)
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder)): code
  fix to properly consider null values.
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder)): 
  enhanced to support better comparison-equivalent logic (like that of 
  [`assertEqual(expected,actual)`](../commands/json/assertEqual(expected,actual))).
- [`assertEqual(expected,actual)`](../commands/json/assertEqual(expected,actual))): enhanced with better message to aid
  in troubleshooting.


### [ssh commands](../commands/ssh)
- support empty password (use `(empty)`) for cases where the target SSH server allows for it.


### [step commands](../commands/step)
- update console display of command prompt across all step commands to improve readability.
- [`validate(prompt,responses,passResponses)`](../commands/step/validate(prompt,responses,passResponses)): enhanced to 
  capture user's comment (optional) after providing validation response.
- [`perform(instructions)`](../commands/step/perform(instructions)): enhanced to capture user's comment (optional) 
  after the instructed actions are performed.


### [web commands](../commands/web)
- support configuration to request browser to accept invalid SSL certificate (might be useful for intranet testing).
- support screenshot when JavaScript dialog (modal) is present. When JavaScript dialog is found, instead of Selenium's 
  screenshot capability, Nexial will resort to Java's fullscreen capture.
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
  - avoid setting empty or invalid browser when executing mobile web testing; device default (iOS->Safari, 
    Android->Chrome, etc.) will be enforced during mobile web testing. 
  - fixed window positioning issue when running Safari.
  - forcefully delay window resizing on Safari until after a URL is invoked; this fixed the error "A request to use a 
    window could not be satisfied because the window could not be found."
  - enable network and console logging on BrowserStack when `browserstack.debug` is set to `true`.
  - support execution status reporting back to BrowserStack when a script has completed.
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
- [`clickWithKeys(locator,keys)`](../commands/web/clickWithKeys(locator,keys)): **NEW** command to click on target with 
  the keystrokes like `{CONTROL}`, `{SHIFT}` specified via `keys`.
- update to <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG" class="external_link" 
  target="_nexial_link">Selenium 3.141.0</a> 
  (should be 3.14.1?). Significant changes include:
  - Beta commands in SafariDriver for opening a new window or tab.
  - Clean up of internal of `Select` element wrapper (#6501)
  - Acknowledge that Mojave is a `Platform` (#6552)
  - Fixed WebDriverBackedSelenium servlet by registering a session finalization listener.
  - Prepended command names in https error response reports (#6321)
  - Removed the apache-backed httpclient.
  - Added a basic ServiceBuilder for Internet Explorer (#6181)
- [web &raquo; `open(url)`](../commands/web/open(url)): code fix to honor fail-immediate condition.
- [`openIgoreTimeout(url)`](../commands/web/openIgoreTimeout(url)): **NEW** command to open to a URL and tolerate page 
  load that might extent between defined timeout 
  (i.e. [`nexial.web.pageLoadWaitMs`](../systemvars/index#nexial.web.pageLoadWaitMs)).


### [ws commands](../commands/ws)
- [`upload(url,body,fileParams,var)`](../commands/ws/upload(url,body,fileParams,var)): **NEW** command to upload one or
  more files as multipart-data, along with other request parameters, to specified endpoint (`url`).

