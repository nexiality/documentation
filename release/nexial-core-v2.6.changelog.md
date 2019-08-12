---
layout: default
title: nexial-core 2.6 (2019-09-??)
parent: release
tags: release nexial-core 2.6
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.6_???" class="external-link" target="_nexial_link">Release 2.6</a>
2019-09-??


### General
#### Fixes

#### Improvements


### [Nexial Interactive](../interactive)
- support "range" specification for activity


### [Nexial Expression](../expressions)
- for TEXT expression, a new System variable, [`nexial.expression.resolveUrl`](../systemvars/index#nexial.expression.resolveUrl),
  is defined to disable the automatic content resolution of HTTP-based resource.
- [`CSV &raquo; parse(config)`](../expressions/CSVexpression#parseconfig): use 
  [`nexial.textDelim`](../systemvars/index#nexial.textDelim) as CSV delimiter when none is explicitly specified.
- [`CSV &raquo; merge(var,keycolumn)`](../expressions/CSVexpression#mergevarkeycolumn): avoid merging empty or blank rows.


### [Flow Control](../flowcontrols)


### [base commands](../commands/base)
- [`outputToCloud(resource)`](../commands/base/outputToCloud(resource)): fix path resolution to S3 so that the target 
  location mimics local directory structure


### [desktop commands](../commands/desktop)


### [json commands](../commands/json)


### [localdb commands](../commands/localdb)


### [number commands](../commands/number)


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)):
  automatically replace newline, carriage return and tab character with a space so that the generated CSV would be
  usable. Use [`nexial.web.csv.trim`](../systemvars/index#nexial.web.csv.trim) to trim leading and trailing spaces of 
  each cell.
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)):
  automatically replace newline, carriage return and tab character with a space so that the generated CSV would be
  usable. Use [`nexial.web.csv.trim`](../systemvars/index#nexial.web.csv.trim) to trim leading and trailing spaces of 
  each cell.
- System variable [`nexial.screenshotAsDesktop`](../systemvars/index#nexial.screenshotAsDesktop): **NEW** System
  variable to allow for desktop screen capturing instead of browser-scoped screen capturing.