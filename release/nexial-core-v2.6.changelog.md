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
- [`nexial.lastScreenshot`](../systemvars/index#nexial.lastScreenshot): now resolve to the fully qualified path 
  (not just the filename as previously the case). Also, this System variable will resolve to the appropriate URL if 
  [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) is set to `true`.

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


### [image commands](../commands/image)
- [`colorbit(source,bit,saveTo)`](../commands/image/colorbit(source,bit,saveTo)): now support `source` as URL. Nexial 
  will automatically download image content and save it to temporary location (System/OS -specific). Use `saveTo` to 
  determine the location of the processed file.
- [`convert(source,format,saveTo)`](../commands/image/convert(source,format,saveTo)): now support `source` as URL. 
  Nexial will automatically download image content and save it to temporary location (System/OS -specific). Use 
  `saveTo` to determine the location of the processed file.
- [`crop(image,dimension,saveTo)`](../commands/image/crop(image,dimension,saveTo)): now support `image` as URL. 
  Nexial will automatically download image content and save it to temporary location (System/OS -specific). Use 
  `saveTo` to determine the location of the processed file.
- [`resize(image,width,height,saveTo)`](../commands/image/resize(image,width,height,saveTo)): now support `image` as 
  URL. Nexial will automatically download image content and save it to temporary location (System/OS -specific). Use 
  `saveTo` to determine the location of the processed file.
- [`saveDiff(var,baseline,actual)`](../commands/image/saveDiff(var,baseline,actual)): now support both `baseline` and 
  `actual` as URL. Nexial will automatically download image content and save it to temporary location (System/OS 
  -specific). Use `saveTo` to determine the location of the processed file.


### [json commands](../commands/json)


### [localdb commands](../commands/localdb)
- [`importCSV(var,csv,table)`](../commands/localdb/importCSV(var,csv,table)): code fix to support columns with spaces 
  or commas


### [number commands](../commands/number)


### [ws commands](../commands/ws)


### [web commands](../commands/web)
- [`saveTableAsCsv(locator,nextPageLocator,file)`](../commands/web/saveTableAsCsv(locator,nextPageLocator,file)) and
  [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)):
  - automatically replace newline, carriage return and tab character with a space so that the generated CSV would be
    usable.
  - Use [`nexial.web.saveGrid.data.trim`](../systemvars/index#nexial.web.saveGrid.data.trim) to trim leading and 
    trailing spaces of each cell.
  - Use [`nexial.web.saveGrid.end.trim`](../systemvars/index#nexial.web.saveGrid.data.trim) to remove the trailing
    line feed at the end of the CSV file.
  - Use [`nexial.web.saveGrid.deepScan`](../systemvars/index#nexial.web.saveGrid.deepScan) to control how Nexial should
    handle form input and image elements found in target `<TABLE>` or `<DIV>` elements. 
  - Use [`nexial.web.saveGrid.header.input`](../systemvars/index#nexial.web.saveGrid.header.input) to determine what
    metadata of a form input element in the header to save to CSV. Possible choices: `name`, `type`, `value`, `id`, 
    `state`. 
  - Use [`nexial.web.saveGrid.header.image`](../systemvars/index#nexial.web.saveGrid.header.image) to determine what
    metadata of an image element in the header to save to CSV. Possible choices: `type`, `alt`, `id`, `filename`. 
  - Use [`nexial.web.saveGrid.data.input`](../systemvars/index#nexial.web.saveGrid.data.input) to determine what
    metadata of a form input element in the data section to save to CSV. Possible choices: `name`, `type`, `value`, 
    `id`, `state`. 
  - Use [`nexial.web.saveGrid.data.image`](../systemvars/index#nexial.web.saveGrid.data.image) to determine what 
    metadata of an image element in the data section to save to CSV. Possible choices: `type`, `alt`, `id`, `filename`.
- System variable [`nexial.screenshotAsDesktop`](../systemvars/index#nexial.screenshotAsDesktop): **NEW** System
  variable to allow for desktop screen capturing instead of browser-scoped screen capturing.
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](../commands/web/saveDivsAsCsv(headers,rows,cells,nextPage,file)):
  support non-XPATH locators.
- [`updateAttribute(locator,attrName,value)`](../commands/web/updateAttribute(locator,attrName,value)): support to 
  update the attribute of an element with given value for a specified locator.
- [`assertMultiSelect(locator)`](../commands/web/assertMultiSelect(locator)): use to assert the select element support 
  multiple select options.
- [`assertSingleSelect(locator)`](../commands/web/assertSingleSelect(locator)): use to assert the select element 
  support single select option.
