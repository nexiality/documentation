{% include_relative _breadcrumb.html current="assertFormValue(var,name,expected)" %}


### Description
This command asserts the form value in the pdf document is as `expected`.

{% include_relative _form_parsing.md %}


### Parameters
- **var**\- is the variable name in which the form data was stored
- **name**\- is the name of the form element
- **expected** \- is the expected value of that form element


### Example
**Script:**<br/>
![script](image/assertFormValue_01.png)

**Result:**<br/>
![output](image/assertFormValue_02.png)
