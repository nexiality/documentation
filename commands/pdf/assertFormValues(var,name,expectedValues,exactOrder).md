{% include_relative _breadcrumb.html current="assertFormValues(var,name,expectedValues,exactOrder)" %}

### Description
This command asserts the array of values in the form are present and in the same order as expected.

{% include_relative _form_parsing.md %}


### Parameters
- **var** \- is the variable name in which the form data is stored
- **name** \- is the name of the form element
- **expectedValues** \- is the array of expected text values
- **exactOrder** \- `true` the referenced form values should match the exact order of `expectedValues`.

