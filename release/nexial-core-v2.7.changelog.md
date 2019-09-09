---
layout: default
title: nexial-core 2.7 (2019-10-??)
parent: release
tags: release nexial-core 2.7
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.7_0???" class="external-link" target="_nexial_link">Release 2.7</a>
2019-10-??


### General
#### Fixes
- fixed code to support intra-execution changes of `nexial.scriptRef.*` data variables.

#### Improvements
- added checks to ensure that read-only variables aren't overwritten via commands affect data variables


### [Nexial Interactive](../interactive)


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- fix code to support negative number parsing


### [aws.vision commands](../commands/aws.vision)


### [base commands](../commands/base)


### [csv commands](../commands/csv)
- [`compareExtended`](../commands/csv/compareExtended(var,profile,expected,actual)): fix code to support negative 
  number parsing


### [desktop commands](../commands/desktop)


### [image commands](../commands/image)


### [json commands](../commands/json)


### [localdb commands](../commands/localdb)


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- [web &raquo; `closeAll`](../commands/web/closeAll()): A **NEW** System variable  
  [`nexial.browser.electron.forceTerminate`](../systemvars/index#nexial.browser.electron.forceTerminate) to forcefully 
  terminate the AUT executable - i.e. the electron application as specified via 
  [`nexial.browser.electron.appLocation`](../systemvars/index#nexial.browser.electron.appLocation) - after the 
  underlying chromedriver shuts down or when [web &raquo; `closeAll`](../commands/web/closeAll()) is invoked.

