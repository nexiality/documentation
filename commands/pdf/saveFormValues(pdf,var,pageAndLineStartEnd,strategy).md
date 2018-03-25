{% include_relative _breadcrumb.html current="saveFormValues(pdf,var,pageAndLineStartEnd,strategy)" %}


### Description
This command saves the form values from the pdf document and store the data in the given variable name.

{% include_relative _form_parsing.md %}


### Parameters
- **pdf** \- the PDF file to validate
- **var** \- variable name to store the form data
- **pageAndLineStartEnd** \- identify the starting page number, start line and end line. All the three values to be 
  given with comma separated
- **strategy** \- the strategy to read the pdf form. Following strategies are supported to read the data. 

|Strategy|Description|
|---|---|
|ALTERNATING_ROW|This is to be applied when the PDF form has the headers in one row and the values are followed in the next row. And the headers are being repeated in the alternate rows.|
|ALTERNATING_CELL|This is to be applied when the PDF form has the headers in one cell and the values are followed in the next cell. And the headers are being repeated in the alternate cells.|
|SHARED_CELL|This is to be applied when the PDF form has the headers and the values are shared in one cell.|

<br/>

### Example
**Script**:<br/>
![script](image/saveFormValues_01.png)

**Result**:<br/>
![output](image/saveFormValues_02.png)


### See Also
- [`assertFormValue(var,name,expected)`](assertFormValue(var,name,expected))
- [`assertFormValues(var,name,expectedValues,exactOrder)`](assertFormValues(var,name,expectedValues,exactOrder))
- [`assertFormElementPresent(var,name)`](assertFormElementPresent(var,name))
