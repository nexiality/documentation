---
layout: default
title: assertFormValues(var,name,expectedValues,exactOrder)
parent: pdf
tags: command pdf
comments: true
---

### Description
This command asserts the array of values in the form are present and in the same order as expected.

{% include_relative _form_parsing.md %}


### Parameters
- **var** - the variable that stores previously parsed PDF form data
- **name** - the name of the form element to validate
- **expectedValues** - expected values
- **exactOrder** - `true` if the referenced form values should match the exact order of `expectedValues`.


### See Also
- [`saveFormValues(pdf,var,pageAndLineStartEnd,strategy)`](saveFormValues(pdf,var,pageAndLineStartEnd,strategy))
- [`assertFormValue(var,name,expected)`](assertFormValue(var,name,expected))
- [`assertFormElementPresent(var,name)`](assertFormElementPresent(var,name))
