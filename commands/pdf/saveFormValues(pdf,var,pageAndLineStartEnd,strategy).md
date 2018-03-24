{% include_relative _breadcrumb.html current="saveFormValues(pdf,var,pageAndLineStartEnd,strategy)" %}


### Description
This command saves the form values from the pdf document and store the data in the given variable name.

{% include_relative _form_parsing.md %}


### Parameters
- **pdf**\- is the pdf file path
- **var** \- is the variable name to store the form data
- **pageAndLineStartEnd** \- is the values to identify the page number, start line and end line. All the three values to be given with comma separated
- **strategy** \- is the strategy to read the pdf form. Following strategies are supported to read the data. 

|Strategy|Description|
|---|---|
|ALTERNATING_ROW|This is to be applied when the PDF form has the headers in one row and the values are followed in the next row. And the headers are being repeated in the alternate rows.|
|ALTERNATING_CELL|This is to be applied when the PDF form has the headers in one cell and the values are followed in the next cell. And the headers are being repeated in the alternate cells.|
|SHARED_CELL|This is to be applied when the PDF form has the headers and the values are shared in one cell.|


### Example
**Script**:<br/>
![script](image/saveFormValues_01.png)

**Result**:<br/>
![output](image/saveFormValues_02.png)