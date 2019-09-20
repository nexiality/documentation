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
- after importing desktop recording file to cloud ([`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) 
  is set to `true`), Nexial will remove local video file to help keep local diskspace under control.

#### Improvements
- added checks to ensure that read-only variables aren't overwritten via commands affect data variables


### [System Variable](../systemvars)
- [`nexial.resolveTextAsURL`](../systemvars/index#nexial.resolveTextAsURL): **NEW** System variable to detect if a text 
  parameter is a valid URL and if so, to download the content of that URL (GET) automatically. This supersedes the 
  now-deprecated System variable [`nexial.expression.resolveURL`](../systemvars/index#nexial.expression.resolveURL) and
  applies beyond [TEXT expression](../expressions/TEXTexpression) to areas such as [`ws`](../commands/ws), 
  [`csv`](../commands/csv), [`io`](../commands/io), [`json`](../commands/json), 
  [`web` >> `executeScript(var,script)`](../commands/web/executeScript(var,script)) and [`xml`](../commands/xml) 
  commands. The default for this System variable is `false`.
- [`nexial.resolveTextAsIs`](../systemvars/index#nexial.resolveTextAsIs): **NEW** System variable to disable the 
  automatic data variable substitution on the text file it reads. Default value is `false` - this means Nexial by default
  will automatically perform data variable substitution after it reads in the text file. This System variable supersedes
  the now-deprecated [`nexial.expression.OpenFileAsIs`](../systemvars/index#nexial.expression.OpenFileAsIs) System
  variable since it is no longer limited to [Expression](../expressions) only.


### [Nexial Interactive](../interactive)
- [Inspection](../interactive/index#inspection) now supports `SAVE(var)` and `CLEAR(vars)` functionality.
- support desktop recording from within Interactive session.
- Inspection supports the clearing of all user data variables (`CLEAR(*)`)
- new option to reload both data file and `project.properties` (option `L`)


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- fix code to support negative number parsing
- [TEXT expression](../expressions/TEXTexpression): code fix to handle escaped delimiter (meaning same character as 
  [`nexial.textDelim`](../systemvars/index#nexial.textDelim))
- [`nexial.expression.resolveUrl`](../systemvars/index#nexial.expression.resolveUrl): change its default value to
  `false` to minimize impact to existing automation. This will impact some (likely small subset) of automation that
  utilize [TEXT expression](../expressions/TEXTexpression) to automate the fetching of HTTP-based resources.
- [TEXT &raquo; `xml`](../expressions/TEXTexpression#xml): **NEW** operation to transform a 
  [TEXT expression](../expressions/TEXTexpression) to a [XML expression](../expressions/XMLexpression).
- [TEXT &raquo; `json`](../expressions/TEXTexpression#json): **NEW** operation to transform a 
  [TEXT expression](../expressions/TEXTexpression) to a [JSON expression](../expressions/JSONexpression).
- [CSV &raquo; `replaceColumnRegex(searchFor,replaceWith,columnNameOrIndices`](../expressions/CSVexpression#replacecolumnregexsearchforreplacewithcolumnnameorindices):
  - the parameter `columnNameOrIndices` now can be expressed as `*` to indicate **ALL** columns.
  - fixed error when working on a file with columns wrapped in double quotes.
- [CSV &raquo; `saveRowData(rowIndex)`](../expressions/CSVexpression.md#saveRowData(rowIndex)): save a row of CSV data
  as data variable by using the corresponding CSV header name as data variable name.


### [aws.vision commands](../commands/aws.vision)


### [base commands](../commands/base)
- [`stopRecording`](../commands/base/stopRecording()): after video file is saved either to local path or cloud, its 
  location is exposed as [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink).


### [csv commands](../commands/csv)
- [`compareExtended`](../commands/csv/compareExtended(var,profile,expected,actual)): fix code to support negative 
  number parsing


### [desktop commands](../commands/desktop)


### [external commands](../commands/external)
- [`runProgram(programPathAndParams)`](../commands/external/runProgram(programPathAndParams)): support the execution 
  of sub-shell with parameterized commands (*NIX and Mac only). The parameterized command should be wrapped with single 
  quotes.
- [`runProgramNoWait(programPathAndParams)`](../commands/external/runProgramNoWait(programPathAndParams)): support 
  the execution of sub-shell with parameterized commands (*NIX and Mac only). The parameterized command should be 
  wrapped with single quotes.


### [image commands](../commands/image)
- [`nexial.image.trimColor`](../systemvars/index#nexial.image.trimColor):  Now supports RGB color code instead of color
  names.
 

### [json commands](../commands/json)


### [localdb commands](../commands/localdb)


### [ws commands](../commands/ws)
- [`nexial.ws.requestPayloadAsRaw`](../systemvars/index#nexial.ws.equestPayloadAsRaw): **NEW** System variable to 
  treat request payload as binary content.


### [web commands](../commands/web)
- [web &raquo; `closeAll`](../commands/web/closeAll()): A **NEW** System variable  
  [`nexial.browser.electron.forceTerminate`](../systemvars/index#nexial.browser.electron.forceTerminate) to forcefully 
  terminate the AUT executable - i.e. the electron application as specified via 
  [`nexial.browser.electron.appLocation`](../systemvars/index#nexial.browser.electron.appLocation) - after the 
  underlying chromedriver shuts down or when [web &raquo; `closeAll`](../commands/web/closeAll()) is invoked.
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)):
  enable the use of `(null)`, `(empty)` or `(blank)` for `headers` and `nextPage` to omit the use of these parameters.
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)):
  enable the use of `(null)`, `(empty)` or `(blank)` for `nextPage` to omit the use of this parameter.
- [`saveInfiniteDivsAsCsv(config,file)`](../commands/web/saveInfiniteDivsAsCsv(config,file)):
  enable the use of `(null)`, `(empty)` or `(blank)` for `header-cell` to omit the use of this `config`.
- [`saveInfiniteTableAsCsv(config,file)`](../commands/web/saveInfiniteTableAsCsv(config,file)):
  enable the use of `(null)`, `(empty)` or `(blank)` for `header-cell` to omit the use of this `config`.
- [`nexial.web.highlight`](../systemvars/index#nexial.web.highlight): fixed error when target element doesn't have any 
  `style` attribute