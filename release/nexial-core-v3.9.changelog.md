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
- fixed data type conversion issue when generating execution result after execution.

#### Improvements
- [`nexial.projectProperties.trimKey`](../systemvars/index.html#nexial.projectProperties.trimKey): support 
  leading/trailing spaces in data variable names in the `project.properties`, for aligning variable values to improve 
  readability.
- implemented auto-retry when Nexial fails to retrieve content from a URL. This can impact (hopefully positively) many
  functionalities where a URL is referenced (for remote content) instead of a local file path.


### [Flow Control](../flowcontrols)


### [Nexial Interactive](../interactive)


### [Expression](../expressions)
- [TEXT &raquo; `number`](../expressions/TEXTexpression#number): "optimistically" converts text to number by _gently_ 
  removing non-numeric characters.


### [desktop commands](../commands/desktop)
- improved support on grid cell data by making special treatment for combo box embedded within a grid cell.
- improved accuracy and performance of fetching cell data from a datagrid component (Infragistics 4).


### [excel commands](../commands/excel)


### [mail commands](../commands/mail)
- [`sendComposed(profile,var)`](../commands/mail/sendComposed(profile,var)): failure condition now generate error log to aid in RCA


### [io commands](../commands/io)
- [`saveMatches(var,path,fileFilter,textFilter)`](../commands/io/saveMatches(var,path,fileFilter,textFilter)): Use
  [`nexial.io.matchIncludeDirectories`](../systemvars/index.html#nexial.io.matchIncludeDirectories) to include 
  subdirectories in the match.


### [pdf commands](../commands/pdf)


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)
- [`screenshot(file,locator,removeFixed)`](../commands/web/screenshot(file,locator,removeFixed)): additional wait time 
  to offset any visual effect caused by [`nexial.web.highlight`](../systemvars/index.html#nexial.web.highlight)
- [`assertLocation(search)`](../commands/web/assertLocation(search)): **NEW** command to assert the current URL with PolyMatcher.
- fixed a "circular reference" issue with collection browser performance metrics over JQuery-laden web page.


### [ws commands](../commands/ws)


### [tn.5250 commands](../commands/tn.5250)
