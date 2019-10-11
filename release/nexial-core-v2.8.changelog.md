---
layout: default
title: nexial-core 2.8 (2019-11-??)
parent: release
tags: release nexial-core 2.8
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.8_????" class="external-link" target="_nexial_link">Release 2.8</a>
2019-11-??


### General
#### Fixes
- [`nexial-project-inspector`](../userguide/BatchFiles#nexial-project-inspector): code fix to consider encrypted data 
  variables. Also minor update to inspector report (HTML).

#### Improvements
- Code change to omit the writing or creation of cells when there isn't data to display. In other words, display 
as much of the actual content as possible in output file.

### [System Variable](../systemvars)


### [Nexial Interactive](../interactive)


### [Built-in Functions](../functions)
- [`$(execution|plan|name)`](../functions/$(execution)#): **NEW** function to reveal the plan file name currently in 
  execution.
- [`$(execution|plan|fullpath)`](../functions/$(execution)#): **NEW** function to reveal the fully qualified path for 
  the plan currently in execution.
- [`$(execution|plan|index)`](../functions/$(execution)#): **NEW** function to reveal the plan step (i.e. row number) 
  of the plan currently in execution.


### [Nexial Expression](../expressions)
- [JSON &raquo; `keys(jsonpath)`](../expressions/JSONexpression#keysjsonpath): code fix to extract JSON keys correctly. 
- [JSON &raquo; `pack`](../expressions/JSONexpression#pack): code fix to enforce JSON beautification after "packing".

### [base commands](../commands/base)


### [csv commands](../commands/csv)


### [external commands](../commands/external)


### [image commands](../commands/image)
 

### [io commands](../commands/io)


### [json commands](../commands/json)


### [rdbms commands](../commands/rdbms)


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- [Browser Performance Metrics](../commands/web/browsermetrics): *NEW** option to create chart.