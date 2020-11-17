---
layout: default
title: nexial-core 3.5 (2020-11-??)
parent: release
tags: release nexial-core 3.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.5_????" class="external-link" target="_nexial_link">Release 3.5</a>
2020-11-??


### General
#### Fixes
- code fix to improve support on saving array to data variable.
- code fix to accurately skip over a repeat-until block that is embedded within a "skipped" section.
- code fix to accurately skip over section block that is embedded within a macro, which is called from another section.
#### Improvements


### [System Variable](../systemvars)
- [`nexial.version`](../systemvars/index.html#nexial.version): expose the version information of currently-running Nexial.
- [`nexial.browser`](../systemvars/index#nexial.browser): Supports new browser type `edgechrome` for chromium based 
  edge browser.

### [Nexial Interactive](../interactive)


### [Expression](../expressions)
- [`[TEXT(...) => if-contain(test,match,notMatch)]`](../expressions/TEXTexpression#ifcontaintestmatchnotmatch): **NEW**
  operation to support the "if contains ... then replace with ... else with ..." operation.
- [`[TEXT(...) => if-equal(test,match,notMatch)]`](../expressions/TEXTexpression#ifequaltestmatchnotmatch): **NEW**
  operation to support the "if equal ... then replace with ... else with ..." operation.
- [`[TEXT(...) => if-match(regex,match,notMatch)]`](../expressions/TEXTexpression#ifmatchregexmatchnotmatch): **NEW**
  operation to support the "if match regex ... then replace with ... else with ..." operation.
- [`[TEXT(...) => repeat(count)]`](../expressions/TEXTexpression#repeattimes): **NEW** repeat current text by number 
  of `times.
- [`[LIST(...) => index(item)]`](../expressions/LISTexpression#indexitem): support `CONTAIN:` and `REGEX:` prefixes for 
  improved expressiveness.
 
 
### [base commands](../commands/base)


### [external commands](../commands/external)


### [pdf commands](../commands/pdf)
- [`savePageCount(pdf,var)`](../commands/pdf/savePageCount(pdf,var)): **NEW** command to extract the page count for a 
  given `pdf` file. 
- [`split(pdf,saveTo)`](../commands/pdf/split(pdf,saveTo)): **NEW** command to split a given `pdf` file into single 
  page PDF files.
- [`ocr(pdf,saveTo)`](../commands/pdf/ocr(pdf,saveVar)): **NEW** command to perform OCR on a PDF file. Internally 
  invokes the [image &raquo; `ocr(image,saveVar)`](../commands/image/ocr(image,saveVar)) command.


### [image commands](../commands/image)
- [`ocr(image,saveVar)`](../commands/image/ocr(image,saveVar)): supports PDF file.


### [io commands](../commands/io)


### [localdb commands](../commands/localdb)


### [mail commands](../commands/mail)
- [`compose(var,config,value)`](../commands/mail/compose(var,config,value)): support externalized file/template for 
  mail content.


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)
- [`saveTextArray(var,locator)`](../commands/web/saveTextArray(var,locator)): honor the use of `nexial.textDelim`.
- Added *NEW* webdriver for chromium based edge browser.


### [word commands](../commands/word)
- [`extractText(var,file)`](../commands/word/extractText(var,file)): **NEW** command to extract text from a Word 
  document.
- [`readOnly(file,password)`](../commands/word/readOnly(file,password)): **NEW** command to restrict update access on a 
  Word document.
- [`removeProtection(file)`](../commands/word/removeProtection(file)): **NEW** command to remove update restriction from
  a Word document.
- [`assertContains(file,text)`](../commands/word/assertContains(file,text)): **NEW** command to verify if `text` can be 
  found in a Word `file`.
- [`assertNotContain(file,text)`](../commands/word/assertNotContain(file,text)): **NEW** command to verify if `text` is 
  absent from a Word `file.
- [`assertNotReadOnly(file)`](../commands/word/assertNotReadOnly(file)): **NEW** command to verify a Word `file` is not 
  password-protected.
- [`assertPassword(file,password)`](../commands/word/assertPassword(file,password)): **NEW** command to verify 
  `password` for a given Word `file`.
- [`assertReadOnly(file)`](../commands/word/assertReadOnly(file).md): **NEW** command to verify that a Word `file is 
  currently password protected. 


## [tn.5250 commands](../commands/tn.5250)
- [`saveTableAsCSV(csv,maxPage)`](../commands/tn.5250/saveTableAsCSV(csv,maxPage)): 
  - enhance tracking of last table page and added additional logs to improve RCA.
  - support saving of table data into CSV in "page-up" or reverse order by specifying the `maxPage` as a negative number.
    For example, `saveTableAsCSV(csv,maxPage) | myCSV.csv | -3`
- [`inspectScreen()`](../commands/tn.5250/inspectScreen()): fixed the inspection of table that uses spaces to delineate 
  columns (instead of using the `0` character).
- support use of secondary table (instead of the first) during screen inspection
- support data matching across ANY column of the current table. Use `*` for `column` to denote any column. Affected commands:
  - [`assertTableMatch(column,text)`](../commands/tn.5250/assertTableMatch(column,text))
  - [`assertTableNotMatch(column,text)`](../commands/tn.5250/assertTableNotMatch(column,text))
  - [`saveTableMatchCount(column,text)`](../commands/tn.5250/saveTableMatchCount(column,text))
  - [`typeOnMatchedRow(column,match,keystrokes)`](../commands/tn.5250/typeOnMatchedRow(column,match,keystrokes))
- [`typeOnMatchedColumns(matches,keystrokes)`](../commands/tn.5250/typeOnMatchedColumns(matches,keystrokes)): **NEW** 
  command to allow the matching of table row based on multiple columns (each filter separated by new line).
