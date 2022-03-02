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
- [FIXED] typos in error messages.
- [FIXED] fixed erroneous library file found.

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


### [Batch Files](../userguide/BatchFiles)


### [Expression](../expression)
- [TEXT &raquo; json(text)](../expressions/TEXTexpression#json): now also sanitize data so that the resulting JSON is 
  properly converted and OWASP-safe.
- [CONFIG](../expressions/CONFIGexpression): now supports keys with spaces and tabs; as well as using both equal sign 
  (`=`) and colon (`:`) as key-value separator.


### [Nexial Function](../functions)


### [Nexial Interactive](../interactive)


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


### [web commands](../commands/web)
- [web &raquo; typeKeys(locator,value)](../commands/web/typeKeys(locator,value)): add support for `{ESC}` 
  (same as `{ESCAPE}`).
- better support for CORS security bypass via automated chrome browser options
- added additional configurations on chromedriver (for chrome browser) to ease security restriction for testing:
  - allow to run "insecure" (http) content locally
  - allow access to local files
  - allow for auth prompt when crossing site origin
  - enable input event handling by the window manager


### [webmail commands](../commands/webmail)


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
