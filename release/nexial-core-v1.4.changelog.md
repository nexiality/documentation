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
- preliminary support for Microsoft Edge browser for Windows 10. 
  - **Note**: XPATH locator is not supported in the 10240 build of Windows 10/Edge/webdriver
- implemented auto download of Edge webdriver in order to support multiple builds of Windows 10.
  - Nexial no longer shipped with any Edge webdriver. Instead now it automatically downloads one that is appropriate
    for the version of Windows 10 running the execution.
- supports tag-based locator using `tag=` prefix
- browser-specific support on "switch-window" capability. Currently Edge does not support "switch-window".
