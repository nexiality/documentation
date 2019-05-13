---
layout: default
title: assertFormElementPresent(var,name)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command asserts the form element is present in the pdf document.   

{% include_relative _form_parsing.md %}


### Parameters
- **var** - the variable that stores previously parsed PDF form data
- **name** - the form element name to check


### Example
**Script**:<br/>
![script](image/assertFormElementPresent_01.png)

**Output**:<br/>
![](image/assertFormElementPresent_02.png)


### See Also
- [`saveFormValues(pdf,var,pageAndLineStartEnd,strategy)`](saveFormValues(pdf,var,pageAndLineStartEnd,strategy))
- [`assertFormValue(var,name,expected)`](assertFormValue(var,name,expected))
- [`assertFormValues(var,name,expectedValues,exactOrder)`](assertFormValues(var,name,expectedValues,exactOrder))
