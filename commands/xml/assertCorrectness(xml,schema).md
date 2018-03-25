{% include_relative _breadcrumb.html current="assertCorrectness(xml,schema)" %}

### Description
This command is used to assert the correctness of the xml against the given schema definition.

### Parameters
- **xml** - the XML content or file
- **schema** \- the schema definition (xsd) file to validate against specified `xml`


### Example
Script:<br/>
![](image/assertCorrectness_01.png)

Result:<br/>
![](image/assertCorrectness_02.png)


### See Also
- [`assertElementCount(xml,xpath,count)`](assertElementCount(xml,xpath,count))
