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
- [FIXED] typos in error messages.

#### Improvements
- added Nexial version to initial banner at the start of a Nexial execution


### [Batch Files](../userguide/BatchFiles)


### [Expression](../expression)
- [TEXT &raquo; json(text)](../expressions/TEXTexpression#json): now also sanitize data so that the resulting JSON is 
  properly converted and OWASP-safe.


### [Nexial Function](../functions)


### [Nexial Interactive](../interactive)


### [desktop commands](../commands/desktop)


### [json commands](../commands/json)
- [`sanitize(var,json)`](../commands/json/sanitize(var,json)): sanitize data so that the resulting JSON is properly 
  converted and OWASP-safe.


### [mobile commands](../commands/mobile)


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
