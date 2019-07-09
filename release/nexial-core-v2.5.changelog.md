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
- clarify error message when Nexial Expression cannot be properly evaluated due to data error.

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
- [`typeKeys(os,keystrokes)`](../commands/desktop/typeKeys(os,keystrokes)): _EXPERIMENTAL_ speeding up key-typing by
  removing any between-keys delay and waits.


### [io commands](../commands/io)


### [image commands](../commands/image)


### [json commands](../commands/json)


### [web commands](../commands/web)
- [`saveText(var,locator)`](../commands/web/saveText(var,locator)): clarify output message when no text is saved due 
  to invalid or missing locator.
- Selenium-backed error messages are shorten to just the first line when possible to streamline error messages.



### [xml commands](../commands/xml)
