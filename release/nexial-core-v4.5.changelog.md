---
layout: default
title: nexial-core 4.5 (2022-01-16)
parent: release
tags: release nexial-core 4.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.5_1534" class="external-link" target="_nexial_link">Release 4.5</a>
2023-01-16


### General
#### Fixes
- minor fixes to Windows batch files; mostly for code consistency
- fixed error when running in Nexial Interactive
- fixed Excel cell value retrieval logic during the output generation process

#### Improvements


### [Nexial Interactive](../interactive)
- fixed data loading inconsistencies when changing iteration within Nexial Interactive
- reduce abrupt termination due to errors or failure to (re)load project artifacts

### [io commands](../commands/io)
- [assertFileContent(file,match,asLines)](../commands/io/assertFileContent(file,match,asLines)): **NEW** command to
  automate the assertion of file content.

### [ws commands](../commands/ws)
- properly handle HTTP 204 condition where response payload is to be expected
