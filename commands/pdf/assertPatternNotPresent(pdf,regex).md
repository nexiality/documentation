---
layout: default
title: assertPatternNotPresent(pdf,regex)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command asserts the given text pattern (`regex`) is **NOT** present in `pdf`.


### Parameters
- **pdf** - the PDF file to validate
- **regex** - regular expression to validate if `pdf` DOES NOT contain expected text pattern


### Example
**Script**:<br/>
![script](image/assertPatternNotPresent_01.png)

**Output**:<br/>
![output](image/assertPatternNotPresent_02.png)


### See Also
- [`assertPatternPresent(pdf,regex)`](assertPatternPresent(pdf,regex))
- [`assertTextPresent(pdf,text)`](assertTextPresent(pdf,text))
- [`assertTextNotPresent(pdf,text)`](assertTextNotPresent(pdf,text))
