---
layout: default
title: assertPatternPresent(pdf,regex)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command asserts the text with the given pattern (`regex`) is present in `pdf`.


### Parameters
- **pdf** - the PDF file to validate
- **regex** - regular expression to validate if `pdf` contains expected text pattern


### Example
Use regular expression to define the pattern. With the given pattern, search for text that matches with text in the 
pdf document.

**Script**:<br/>
![script](image/assertPatternPresent_01.png)

**Output**:<br/>
![output](image/assertPatternPresent_02.png)


### See Also
- [`assertPatternNotPresent(pdf,regex)`](assertPatternNotPresent(pdf,regex))
- [`assertTextPresent(pdf,text)`](assertTextPresent(pdf,text))
- [`assertTextNotPresent(pdf,text)`](assertTextNotPresent(pdf,text))
