{% include_relative _breadcrumb.html current="assertValue(xml,xpath,expected)" %}


### Description
This command is used to assert the value of the element at the given xpath in the given xml file.


### Parameters
- **xml** - the XML content or file
- **xpath** \- the xpath to extract value of target element
- **expected** \- the expected value


### Example
In the given xml file, asserting the value of the element `BaseRate`:<br/>
![](image/assertValue_01.png)

Script:<br/>
![](image/assertValue_02.png)

Result:<br/>
![](image/assertValue_03.png)


### See Also
- [`assertValues(xml,xpath,array,exactOrder)`](assertValues(xml,xpath,array,exactOrder))
