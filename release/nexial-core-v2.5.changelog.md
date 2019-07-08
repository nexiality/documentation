---
layout: default
title: nexial-core 2.5 (2019-08-??)
parent: release
tags: release nexial-core 2.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.4_???" class="external-link" target="_nexial_link">Release 2.5</a>
2019-08-??


### General
#### Fixes
- clarify error message when screenshot cannot be taken.

#### Improvements


### [System Variables](../systemvars/)


### [Nexial Expression](../expressions)


### [Flow Control](../flowcontrols)


### [base commands](../commands/base)


### [csv commands](../commands/csv)


### [desktop commands](../commands/desktop)
- [`typeKeys(locator,value)`](../commands/desktop/typeKeys(os,keystrokes)): fixed the simulation of certain "symbol" 
  keystrokes. This enables the typing of fully qualified file path that contains slashes (`\` or `/`) and colons (`:`).
- ensure Winium driver and `notifu.exe` are not executed in non-Windows environment.
- [`typeKeys(os,keystrokes)`](../commands/desktop/typeKeys(os,keystrokes)): support UPPERCASE typing.
- [`typeKeys(os,keystrokes)`](../commands/desktop/typeKeys(os,keystrokes)): support non-alphanumeric symbol typing.


### [io commands](../commands/io)


### [image commands](../commands/image)


### [json commands](../commands/json)


### [web commands](../commands/web)


### [xml commands](../commands/xml)
