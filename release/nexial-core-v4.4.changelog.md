---
layout: default
title: nexial-core 4.4 (2022-01-??)
parent: release
tags: release nexial-core 4.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.4_????" class="external-link" target="_nexial_link">Release 4.4</a>
2022-01-??


### General

#### Fixes
- [FIXED] patched [log4j zero-day vulnerability CVE-2021-44228](https://unit42.paloaltonetworks.com/apache-log4j-vulnerability-cve-2021-44228/).
- [FIXED] patched [log4j vulnerability CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046)
- [FIXED] patched [log4j vulnerability CVE-2021-44832](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44832)
- [FIXED] patched log4j vulnerability CVE-2022-23305, CVE-2022-23302, CVE-2022-23221, CVE-2021-42550, CVE-2021-4104, CVE-2019-17571
- [FIXED] typos in error messages.
- [FIXED] fixed erroneous library file found.
- [FIXED] Windows batch (`.cmd`) files to properly handle `USER_HOME` that contains space.
- [FIXED] excel Report cell tainted value for the original value
- [FIXED] issue while opening Execution Report for WPS using `nexial.openResult=true`

#### Improvements
- added Nexial version to initial banner at the start of a Nexial execution
- now recognize "executing under AzureDevOps" condition
- improved usage description of Nexial via commandline
- refactor batch files and shell scripts in `$NEXIAL_HOME/bin` with better naming convention and consistencies
- added keygen capability for nexial-specific SSL certificate (for upcoming features).
- better "temp" directory creation strategy to reduce collisions over time.
- code refactoring to reduce duplication.
- Execution Summary now enhanced with charts to aid in post-execution visualization.
  - added minor UI improvements.
  - added drill down chart. 
  - added Skip Count
  - improved visibility of test artifact links
  - added screenshots generated for test steps during execution
  - added errors with description for failed test steps
  - improved the Web Filters functionality where user can search API results based on the methods or return codes
- Fixed step counting in dealing with skipped steps.
- support Java 18
- support newer version of gecko driver (firefox)
- update nexial-lib to [1.3](https://github.com/nexiality/fixes/releases/download/nexial-lib-1.3/nexial-lib-1.3.zip)
- enforce Java 17 as the minimum required Java version; helps to improve runtime stability and performance, and enable
  future enhancements.
- fix output message formatting on *NIX/MacOs shell scripts.


### [System Variables](../systemvars)
- [`nexial.generateReport`](../systemvars/index.md#nexial.generateReport) - Changed default to true, meaning the 
  JSON-based report will be generated (by default) after each execution.


### [Expression](../expression)
- [TEXT &raquo; json(text)](../expressions/TEXTexpression#json): now also sanitize data so that the resulting JSON is 
  properly converted and OWASP-safe.
- [CONFIG](../expressions/CONFIGexpression): now supports keys with spaces and tabs; as well as using both equal sign 
  (`=`) and colon (`:`) as key-value separator.


### [Nexial Function](../functions)


### [Nexial Interactive](../interactive)
- slightly improved console menu display
- default to "AutoRun"


### [JSONPath](../jsonpath)
- fix special character substitution when dealing with RegEx.


### [desktop commands](../commands/desktop)
- [`saveLocatorCount(var,locator)`](../commands/desktop/saveLocatorCount(var,locator)): Previously using a hardcoded 
  2.5 second, now this command uses [`nexial.pollWaitMs`](../systemvars/index.html#nexial.pollWaitMs) as time out 
  value when waiting for target `locator` to appear. This is now consistent with another similar command 
  [`saveElementCount(var,name)`](../commands/desktop/saveElementCount(var,name)) in terms of waiting.


### [json commands](../commands/json)
- [`sanitize(var,json)`](../commands/json/sanitize(var,json)): sanitize data so that the resulting JSON is properly 
  converted and OWASP-safe.


### [mobile commands](../commands/mobile)


### [rdbms commands](../commands/rdbms)
- update Mongodb JDBC support to wisecoder's `mongojdbc4.1`


### [web commands](../commands/web)
- [web &raquo; typeKeys(locator,value)](../commands/web/typeKeys(locator,value)): add support for `{ESC}` 
  (same as `{ESCAPE}`).
- better support for CORS security bypass via automated chrome browser options
- added additional configurations on chromedriver (for chrome browser) to ease security restriction for testing:
  - allow to run "insecure" (http) content locally
  - allow access to local files
  - allow for auth prompt when crossing site origin
  - enable input event handling by the window manager
- restore `chrome.embedded` support (unintended missed in previous build)
- disable `nexial.browser.windowsSize` and `nexial.browser.windowPosition` for embedded Chrome, Electron and mobile
  browser automation (since they don't make sense in those scenario).
- disable automatic checking of webdriver updates for `chrome.embedded`, since embedded driver rarely updates.
- silenced "session exception" when terminating webdriver instance.
- fix webdriver auto-download logic; now with consideration with Apple M1 architecture
- [web &raquo; saveTableAsCsv(locator,nextPageLocator,file)](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)):
  fixed error when target TABLE element becomes stale or invalid after paging.
- [web &raquo; saveTableAsCsv(locator,nextPageLocator,file)](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)):
  fixed error when target "Next Page" element becomes stale or invalid after clicking.
- [web &raquo; select(locator,text)](../commands/web/select(locator,text).html#supporting-index-based-selection):
  support selecting by index (instead of text) via prefix `INDEX:`. The specified index is 0-based. For example, 
  - `INDEX:1` would select the second `OPTION` element.
  - `INDEX:last` would select the last `OPTION` element.
- fix visibility assertion for radio and checkbox elements, which will have impact to the following commands:
  - [assertElementsVisible(prefix)](../commands/web/assertElementsVisible(prefix))
  - [assertNotVisible(locator)](../commands/web/assertNotVisible(locator))
  - [assertVisible(locator)](../commands/web/assertVisible(locator))
  - [waitUntilVisible(locator,waitMs)](../commands/web/waitUntilVisible(locator,waitMs))
- [saveDivsAsCsv(headers,rows,cells,nextPage,file)](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)): 
  added highlighting (if enabled) during data collection; added implicit wait during pagination to reduce flaky tests.


### [webmail commands](../commands/webmail)
- [`search(var,profile,searchCriteria,duration)`](../commands/webmail/search(var,profile,searchCriteria,duration)): 
  supports the initialization of a "temporary-mail" inbox when `duration` is set to `0`.
- improved email content parsing logic for Mailinator emails.
- avoid closing browser, and thus the underlying driver, after scanning for incoming emails.
- fixed the logic to harvest link and link labels for Mailinator mails.


### [ws commands](../commands/ws)
- [ws &raquo; upload(url,body,fileParams,var)](../commands/ws/upload(url,body,fileParams,var)): enforces that multi-file 
  upload request **MUST** be a multipart request.
- [ws &raquo; upload(url,body,fileParams,var)](../commands/ws/upload(url,body,fileParams,var)): support setting 
  `Content-Type` for the target file(s) other than the default `application/octet-stream`. One should use the 
  [ws &raquo; header(name,value)](../commands/ws/header(name,value)) command to specify the `Content-Type` value 
  **PRIOR** to invoking the target API.
- [ws &raquo; upload(url,body,fileParams,var)](../commands/ws/upload(url,body,fileParams,var)): support variable
  substitution in uploaded file. Use `nexial.ws.requestPayloadAsRaw` to control this behavior (`false` means activate 
  variable substitution).
- [ws &raquo; post(url,body,var)](../commands/ws/post(url,body,var).md): support `(IGNORE)` content type 
  while uploading files using multipart.