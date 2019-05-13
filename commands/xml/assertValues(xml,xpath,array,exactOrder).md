---
layout: default
title: assertValues(xml,xpath,array,exactOrder)
parent: xml
tags: command xml
comments: true
---


### Description
This command is used to assert the values of the xml elements are in the exact order as expected.


### Parameters
- **xml** - the XML content or file
- **xpath** - the xpath to extract value of interested XML elements
- **array** - the expected list of values
- **exactOrder** - `true` if the extracted values (via `xpath`) is expected to be in the same order as `array`


### Example
Below is the xml file used for example:<br/>
![](image/assertValues_01.png)


**Script**:<br/>
![](image/assertValues_02.png)

**Output**:<br/>
![](image/assertValues_03.png)


### See Also
- [`assertValue(xml,xpath,expected)`](assertValue(xml,xpath,expected))
