---
layout: default
title: nexial-core 1.4 (2018-08-??)
parent: release
tags: release nexial-core 1.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.4" class="external-link" target="_nexial_link">Release 1.4</a>
2018-08-??

### General


#### [web commands](../commands/web)
- implemented auto download of Edge webdriver in order to support multiple builds of Windows 10.
- preliminary support for Microsoft Edge browser for Windows 10. 
  - **Note**: XPATH locator is not supported in the 10240 build of Windows 10/Edge/webdriver
- supports tag-based locator using `tag=` prefix
- browser-specific support on "switch-window" capability. Currently Edge does not support "switch-window".
