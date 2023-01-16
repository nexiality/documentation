---
layout: default
title: nexial-core 4.4 (2022-12-04)
parent: release
tags: release nexial-core 4.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.5_????" class="external-link" target="_nexial_link">Release 4.5</a>
2023-01-??


### General

#### Fixes
- minor fixes to Windows batch files; mostly for code consistency
- fixed error when running in Nexial Interactive
- fixed Excel cell value retrieval logic during the output generation process

#### Improvements


### [System Variables](../systemvars)


### [Expression](../expression)


### [Nexial Function](../functions)


### [Nexial Interactive](../interactive)
- fixed data loading inconsistencies when changing iteration within Nexial Interactive
- reduce abrupt termination due to errors or failure to (re)load project artifacts


### [JSONPath](../jsonpath)


### [desktop commands](../commands/desktop)


### [io commands](../commands/io)
- [assertFileContent(file,match,asLines)](../commands/io/assertFileContent(file,match,asLines)): **NEW** command to
  automate the assertion of file content.


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)


### [webmail commands](../commands/webmail)


### [ws commands](../commands/ws)
- properly handle HTTP 204 condition where response payload is to be expected