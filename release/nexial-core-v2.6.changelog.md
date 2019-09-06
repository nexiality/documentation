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
- Fixed `concurrentModificationException` while shutdown the winium driver.

#### Improvements
- [`nexial.lastElapsedTime`](../systemvars/index#nexial.lastElapsedTime): record the elapsed time (in ms) for the last
  executed step (regardless of its PASS or FAIL status).
- [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud): now support other file-based resources so that
  when `nexial.outputToCloud` is set to true, file-based resources will be pushed to the Cloud automatically (and its 
  link on the output will be updated as well.)
- Added new column for plan detail and more summerized result in email notification html.
- minor updates to [`nexial-project`](../userguide/BatchFiles#nexial-projectcmd--nexial-projectsh) batch files to reduce
  output
- minor improvement to trim directory name before validating its existence or usefulness.


### [Nexial Interactive](../interactive)
- support "range" specification for activity


### [Built-in Functions](../functions)
- [`$(array)`](../functions/$(array)): fixed previous erroneous parsing where surrounding `{...}` and `[...]` characters 
  are removed necessarily.
- [`$(array)`](../functions/$(array)): fixed ascending and descending sorting of numbers.


### [Nexial Expression](../expressions)
- for TEXT expression, a new System variable, [`nexial.expression.resolveUrl`](../systemvars/index#nexial.expression.resolveUrl),
  is defined to disable the automatic content resolution of HTTP-based resource.
- [`CSV &raquo; parse(config)`](../expressions/CSVexpression#parseconfig): use 
  [`nexial.textDelim`](../systemvars/index#nexial.textDelim) as CSV delimiter when none is explicitly specified.
- [`CSV &raquo; merge(var,keycolumn)`](../expressions/CSVexpression#mergevarkeycolumn): avoid merging empty or blank rows.
- [LIST expression](../expressions/LISTexpression): fixed previous erroneous parsing where surrounding `{...}` and 
  `[...]` characters are removed necessarily.
- [EXCEL &raquo; `firstCell(column,regex,maxRow)`](../expressions/EXCELexpression#firstcellcolumnregexmaxrow): **NEW** 
  operation to find the first cell in the specified `column` that satisfies `regex`.
- [LIST &raquo; `ascending` and LIST &raquo; `descending`](../expressions/LISTexpression): fixed ascending and 
  descending sorting of list of numbers.


### [Flow Control](../flowcontrols)


### [aws.vision commands](../commands/aws.vision)
- [`saveText(profile,image,var)`](../commands/aws.vision/saveText(profile,image,var)): **NEW** command to extract text
  from an image file. Supports JPG, PNG and GIF at this time. No animated GIF support for now.
  - support 'system' profile to simplify scripting for users using team-wide or company-wide 
    [setup](../userguide/BatchFiles#nexial-setupcmd--nexial-setupsh)


### [base commands](../commands/base)
- [`outputToCloud(resource)`](../commands/base/outputToCloud(resource)): fix path resolution to S3 so that the target 
  location mimics local directory structure
- [`nexial.assert.lenient`](../systemvars/index#nexial.assert.lenient): join multiple lines into one before text 
  assertion. Default is `true`.
- [`nexial.assert.asNumber`](../systemvars/index#nexial.assert.asNumber): assert text numerically so that `1` is the 
  same as `1.0`. Default is `true`.
- [`nexial.assert.useTrim`](../systemvars/index#nexial.assert.useTrim): trim text before assertion. Default is `false`.
- [`nexial.assert.caseInsensitive`](../systemvars/index#nexial.assert.caseInsensitive): assert text case-insensitively. 
  Default is `false`.
- [`assertNotContain(text,substring)`](../commands/base/assertNotContain(text,substring)):
  - renamed from `assertNotContains(text,substring)` (grammatically displeasing)

### [desktop commands](../commands/desktop)
- [`assertElementNotPresent(name)`](../commands/desktop/assertElementNotPresent(name)): Assert absence of given desktop 
  element.
- [`nexial.desktop.useTypeKeys`](../systemvars/index#nexial.desktop.useTypeKeys): convert winium shortcut keys to 
  native keystrokes so that the `typeTextBox(...)` and `typeTextArea(...)` commands can be implemented via 
  [`typeKeys(os,keystrokes)`](../commands/desktop/typeKeys(os,keystrokes)) internally.


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
- [`saveDiff(var,baseline,actual)`](../commands/image/saveDiff(var,baseline,actual)): added new System variable to 
   support trimming off empty spaces from images before comparing.
   - [`nexial.image.trimBeforeDiff`](../systemvars/index#nexial.image.trimBeforeDiff): `true` (default is `false`)
      to trim off spaces before comparing. 
   - [`nexial.image.trimColor`](../systemvars/index#nexial.image.trimColor): empty space color to trim off. 
     (default is `white`). Available colors for trimming are `red`, `yellow`, `blue`, `green`, `black`, `white`.


### [json commands](../commands/json)
- [`assertEquals(expected,actual)`](../commands/json/assertEqual(expected,actual)): fixed inefficient and confusing
  comparison logic when `expected` and `actual` do not have the same nodes or node names.
- [`assertEquals(expected,actual)`](../commands/json/assertEqual(expected,actual)): add new System variable to support
  CSV and HTML report format:
  - [`nexial.json.compareResultsAsJSON`](../systemvars/index#nexial.json.compareResultsAsJSON): `true` (default) to generate 
    comparison result as JSON.
  - [`nexial.json.compareResultsAsCSV`](../systemvars/index#nexial.json.compareResultsAsCSV): `true` (default is `false`)
    to generate comparison result as CSV.
  - [`nexial.json.compareResultsAsHTML`](../systemvars/index#nexial.json.compareResultsAsHTML): `true` (default is `false`)
    to generate comparison result as HTML.


### [localdb commands](../commands/localdb)
- [`importCSV(var,csv,table)`](../commands/localdb/importCSV(var,csv,table)): code fix to support columns with spaces 
  or commas
  - also fixed to support `(` and `)` characters in column name.


### [ws commands](../commands/ws)
- fixed: handle url that contains "percent-encoding" by avoiding double-encoding error.


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
  - code fix to properly handle data cell that contains a mix of cell text and form element.
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
- [`saveISTDivsAsCsv`]: 
  - **NEW** command to export data from an Infinite Scroll Table (IST) to CSV. This is initial implementation and 
    further testing is yet to complete. Documentation forthcoming.
  - improved on scanning and data collection logic. Now works reliably over 500 rows of infinite scroll table.
  - improved on usability by allowing for configurable "waitBetweenScroll" value.
- [`saveInfiniteTableAsCsv`]: **NEW** command to harvest data from a Infinite Scrolling Table as CSV
- [`saveInfiniteTableAsCsv`] and [`saveInfiniteDivsAsCsv`]: supports long running headers that are rendered off-screen
- [`screenshot(file,locator`](../commands/web/screenshot(file,locator)): **NEW** command to capture the graphical 
  rendering of a Web element based on specified `locator`.
- [`assertAttributeContains(locator,attrName,contains)`](../commands/web/assertAttributeContains(locator,attrName,contains)):
  - support `REGEX:` in `contains` to trigger regular expression matching.
- [`assertAttributeNotContain(locator,attrName,contains)`](../commands/web/assertAttributeNotContain(locator,attrName,contains)):
  - renamed from `assertAttributeNotContains(locator,attrName,contains)` (grammatically displeasing)
  - support `REGEX:` in `contains` to trigger regular expression matching.
- [`assertTextNotContain(locator,text)`](../commands/web/assertTextNotContain(locator,text)):
  - renamed from `assertTextNotContains(locator,text)` (grammatically displeasing)
