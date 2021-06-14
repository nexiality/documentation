---
layout: default
title: nexial-core 4.1 (2021-07-??)
parent: release
tags: release nexial-core 4.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.1_????" class="external-link" target="_nexial_link">Release 4.1</a>
2021-07-??


### General
#### Fixes
#### Improvements


### [Interactive](../interactive)
- minor adjustment to render activity listing correctly


### [System Variables](../systemvars)


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- added more meaningful error messages for explicit wait


### [web commands](../commands/web)
- [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs)): FIXED to support both window name and 
  window index. Also the target window will be selected (meaning: switched to) when it is detected within the specified 
  max time.
- added more meaningful error messages for explicit wait
- [`click(locator)`](../commands/web/click(locator)): better "find element" strategy for click target


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
