---
layout: default
title: saveFormValues(pdf,var,pageAndLineStartEnd,strategy)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command saves the form values from the pdf document and store the data in the given variable name.

{% include_relative _form_parsing.md %}


### Parameters
- **pdf** - the PDF file to validate
- **var** - variable name to store the form data
- **pageAndLineStartEnd** - identify the starting page number, start line and end line. All the three values to be 
  given with comma separated
- **strategy** - the strategy to read the pdf form. See [Form Data Extraction](index.md#pdf-form-data-extraction) for 
  more details.

### Example
**Script**:<br/>
![script](image/saveFormValues_01.png)

**Output**:<br/>
![output](image/saveFormValues_02.png)


### See Also
- [`assertFormValue(var,name,expected)`](assertFormValue(var,name,expected))
- [`assertFormValues(var,name,expectedValues,exactOrder)`](assertFormValues(var,name,expectedValues,exactOrder))
- [`assertFormElementPresent(var,name)`](assertFormElementPresent(var,name))
