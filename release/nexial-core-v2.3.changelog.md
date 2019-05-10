---
layout: default
title: nexial-core 2.3 (2019-06-??)
parent: release
tags: release nexial-core 2.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.3" class="external-link" target="_nexial_link">Release 2.3</a>
2019-06-??


### General
#### Fixes
- fixed error when dynamic data cannot be resolved during the initialization of an execution. This fix stabilize the 
  execution.

#### Improvements
- omit the creation of hyperlink on path longer than 254 characters; Excel doesn't support long path.


### [Nexial Installer](https://github.com/nexiality/nexial-installer)


### System Variables


### Nexial Expression


### Built-in Function


### [base commands](../commands/base)


### [csv commands](../commands/csv)


### [desktop commands](../commands/desktop)


### [localdb commands](../commands/localdb)


### [io commands](../commands/io)
- [`saveMatches(var,path,filePattern)`](../commands/io/saveMatches(var,path,filePattern)): now support muti-criteria 
  filtering using Nexial Filter syntax on file `name`, `size` and `lastMod`.


### [web commands](../commands/web)
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)): fix 
  data collection logic to consider boh `TD` and `TH` data found under a `TBODY` container.
  

