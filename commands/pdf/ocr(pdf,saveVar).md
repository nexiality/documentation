---
layout: default
title: ocr(pdf,saveVar)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command instructs Nexial to perform OCR on specified `pdf` file. Internally this command will redirect the 
automation to [image &raquo; `ocr(image,saveVar)`](../image/ocr(image,saveVar)) command. For more details, visit the 
[image &raquo; `ocr(image,saveVar)`](../image/ocr(image,saveVar)) command.

Note that at this time, this command will only support PDF with 3 pages or less. 


### Parameters
- **pdf** - The fully qualified path for the PDF to scan.
- **saveVar** - The data variable to save the recognized text.

### See Also
- [image &raquo; `ocr(image,saveVar)`](../image/ocr(image,saveVar))
