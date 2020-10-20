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

#### Improvements


### [System Variable](../systemvars)


### [Nexial Interactive](../interactive)


### [Expression](../expressions)

 
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


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)
