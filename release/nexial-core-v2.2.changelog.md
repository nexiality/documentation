---
layout: default
title: nexial-core 2.2 (2019-05-??)
parent: release
tags: release nexial-core 2.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.2" class="external-link" target="_nexial_link">Release 2.2</a>
2019-05-??


### General
#### Fixes
 
#### Improvements
- improved the handling of _crypt_ data variable during output generation.
- enhance the display of execution output (Excel) to aid with readability (each row should now be a bit taller).
- minor adjustment to the output of the _skipped_ steps where the corresponding "description" field is styled 
  differently as a visual indication.
- fixed code so that `${list}.[${index}]` syntax can be supported to access an item in a list data variable.
- support "crypt" data entered directly into script.

### Project Inspector


### System Variables


### Nexial Expression
- fix the storage of large decimal numbers when using `[NUMBER(...) => ...]` expression. The previous scientific 
  representation has been replaced with plain numeric representation.
- [`CSV(...) => sortAscending`](../expressions/CSVexpression#sortascendingcolumn) and 
  [`CSV(...) => sortDescending`](../expressions/CSVexpression#sortdescendingcolumn) now supports both numeric and 
  textual sorting, depending on the target column data.
- [EXCEL expression](../expressions/EXCELexpression) now accepts Excel files of any size.
- [NUMBER expression](../expressions/NUMBERexpression) now supports numbers with currency symbol or thousand separators.


### [base commands](../commands/base)
- [base &raquo; `assertArrayNotContain(array,unexpected)`](../commands/base/assertArrayNotContain(array,unexpected)): 
  now consider empty array as `SUCCESS`, since such array/list contains nothing.


### [csv commands](../commands/csv)
- [CSV &raquo; `toExcel`](../commands/csv/toExcel): **NEW** command to export CSV content into new/existing Excel file.


### [desktop commands](../commands/desktop)
- [clickElementOffset(name,xOffset,yOffset)](../commands/desktop/clickElementOffset(name,xOffset,yOffset)): **NEW** 
  command to enable clicking on an interactive element (such as textbox or toolbar) with custom `x` an `y` offsets.
- [saveTextByLocator(var,locator)](../commands/desktop/saveTextByLocator(var,locator)): **NEW** command to save the
  text content of the specified locator to `var`.
- [saveText(var,locator)](../commands/desktop/saveText(var,name)): now supports more element types.


### [io commands](../commands/io)


### [rdbms commands](../commands/rdbms)


### [number commands](../commands/number)


### [web commands](../commands/web)
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): improved logging.
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): fix runtime error when not all 
  the data variables under the same `prefix` has the `.locator` suffix.


### [xml commands](../commands/xml)
