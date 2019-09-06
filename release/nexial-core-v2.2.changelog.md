---
layout: default
title: nexial-core 2.2 (2019-05-08)
parent: release
tags: release nexial-core 2.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.2_0488" class="external-link" target="_nexial_link">Release 2.2</a>
2019-05-08


### General
#### Fixes
- code fix to support project.properties that contains key with multiple spaces.
 
#### Improvements
- improved the handling of _crypt_ data variable during output generation.
- enhance the display of execution output (Excel) to aid with readability (each row should now be a bit taller).
- minor adjustment to the output of the _skipped_ steps where the corresponding "description" field is styled 
  differently as a visual indication.
- fixed code so that `${list}.[${index}]` syntax can be supported to access an item in a list data variable.
- support "crypt" data entered directly into script.


### [Nexial Installer](https://github.com/nexiality/nexial-installer)
- [v1.4.1](https://github.com/nexiality/nexial-installer/releases/tag/nexial-installer-v1.4.1) released: Added the 
  setting of permission bits on shell scripts/batch files during installation. This would be most useful to 
  *NIX/MacOSX users. Windows users wouldn't see any benefit in this case.


### System Variables
- [`nexial.scope.isLastIteration`](../systemvars/index#nexial.scope.isLastIteration): is current iteration the last 
  iteration for this script?
- [`nexial.scope.isFirstIteration`](../systemvars/index#nexial.scope.isFirstIteration): is current iteration the 
  first iteration for this script?
- [`nexial.scope.currentIterationId`](../systemvars/index#nexial.scope.currentIterationId): the iteration ID 
  (corresponds to the column index on the datasheet) of current iteration.


### Nexial Expression
- fix the storage of large decimal numbers when using `[NUMBER(...) => ...]` expression. The previous scientific 
  representation has been replaced with plain numeric representation.
- [`CSV(...) => sortAscending`](../expressions/CSVexpression#sortascendingcolumn) and 
  [`CSV(...) => sortDescending`](../expressions/CSVexpression#sortdescendingcolumn) now supports both numeric and 
  textual sorting, depending on the target column data.
- [EXCEL expression](../expressions/EXCELexpression) now accepts Excel files of any size.
- [NUMBER expression](../expressions/NUMBERexpression) now supports numbers with currency symbol or thousand separators.
- support the change of method parameter delimiter from the default `,` to the value of [`nexial.textDelim`](../systemvars/index#nexial.textDelim).


### Built-in Function
- [`$(date|diff|date1|date2|precision)`](../functions/$(date)): **NEW** function to derive the date-level 
  difference between 2 dates (assume in standard format, `MM/dd/yyyy HH:mm:ss`). Use `precision` to control the return 
  value.


### [base commands](../commands/base)
- [`assertArrayNotContain(array,unexpected)`](../commands/base/assertArrayNotContain(array,unexpected)): 
  now consider empty array as `SUCCESS`, since such array/list contains nothing.
- [`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)): code update to support use of macro within 
  repeat-until block.


### [csv commands](../commands/csv)
- [CSV &raquo; `toExcel`](../commands/csv/toExcel(csvFile,excel,worksheet,startCell)): **NEW** command to export CSV 
  content into new/existing Excel file.


### [desktop commands](../commands/desktop)
- [clickElementOffset(name,xOffset,yOffset)](../commands/desktop/clickElementOffset(name,xOffset,yOffset)): **NEW** 
  command to enable clicking on an interactive element (such as textbox or toolbar) with custom `x` an `y` offsets.
- [saveTextByLocator(var,locator)](../commands/desktop/saveTextByLocator(var,locator)): **NEW** command to save the
  text content of the specified locator to `var`.
- [saveTextByLocator(var,locator)](../commands/desktop/saveTextByLocator(var,locator)): now supports more element types.
- [saveText(var,name)](../commands/desktop/saveText(var,name)): no longer FAIL test step when no text is found in
  specified desktop element. Instead Nexial will remove the specified `var` when no text is found.


### [localdb commands](../commands/localdb)
- **NEW** command type to create, maintain and manipulate a local-only relational database. One can use such facility
  to collect execution-bound data over multiple executions, or use the SQL capability to manipulate structured data set 
  of any conceivable size.
- minor adjustments to the generated SQL and console output.


### [web commands](../commands/web)
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): improved logging.
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): fix runtime error when not all 
  the data variables under the same `prefix` has the `.locator` suffix.
- [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator)): code fix to "wait" correctly and 
  not exceed [`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) value.
- [`scrollLeft(locator,pixel)`](../commands/web/scrollLeft(locator,pixel)): deprecated in favor of the new 
  [`scrollElement(locator,xOffset,yOffset)`] command
- [`scrollRight(locator,pixel)`](../commands/web/scrollRight(locator,pixel)): deprecated in favor of the new 
  [`scrollElement(locator,xOffset,yOffset)`] command
- [`scrollElement(locator,xOffset,yOffset)`](../commands/web/scrollElement(locator,xOffset,yOffset)): **NEW** command 
  to scroll left/right/top/bottom (relatively) on a web element.
- [`scrollPage(xOffset,yOffset)`](../commands/web/scrollPage(xOffset,yOffset)): **NEW** command to scroll 
  left/right/top/bottom (relatively) on the current web page.
