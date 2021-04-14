---
layout: default
title: nexial-core 3.9 (2021-05-??)
parent: release
tags: release nexial-core 3.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.9_????" class="external-link" target="_nexial_link">Release 3.9</a>
2021-05-??


### General
#### Fixes

#### Improvements
- [`nexial.projectProperties.trimKey`](../systemvars/index.html#nexial.projectProperties.trimKey): support 
  leading/trailing spaces in data variable names in the `project.properties`, for aligning variable values to improve 
  readability.


### [Flow Control](../flowcontrols)


### [Nexial Interactive](../interactive)


### [Expression](../expressions)


### [desktop commands](../commands/desktop)


### [excel commands](../commands/excel)


### [mail commands](../commands/mail)
- [`sendComposed(profile,var)`](../commands/mail/sendComposed(profile,var)): failure condition now generate error log to aid in RCA


### [pdf commands](../commands/pdf)


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)
- [`screenshot(file,locator,removeFixed)`](../commands/web/screenshot(file,locator,removeFixed)): additional wait time 
  to offset any visual effect caused by [`nexial.web.highlight`](../systemvars/index.html#nexial.web.highlight)


### [ws commands](../commands/ws)


### [tn.5250 commands](../commands/tn.5250)
