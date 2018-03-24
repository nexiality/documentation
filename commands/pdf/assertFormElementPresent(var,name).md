{% include_relative _breadcrumb.html current="assertFormElementPresent(var,name)" %}


### Description
This command asserts the form element is present in the pdf document.   

{% include_relative _form_parsing.md %}


### Parameters
- **var** \- is the variable that was used to store the form data from the pdf document
- **name** \- is the form element name


### Example
**Script**:<br/>
![script](image/assertFormElementPresent_01.png)

**Result**:<br/>
![](image/assertFormElementPresent_02.png)


### See Also
- [`saveFormValues(pdf,var,pageAndLineStartEnd,strategy)`](saveFormValues(pdf,var,pageAndLineStartEnd,strategy))
- [`assertFormValue(var,name,expected)`](assertFormValue(var,name,expected))
- [`assertFormValues(var,name,expectedValues,exactOrder)`](assertFormValues(var,name,expectedValues,exactOrder))
