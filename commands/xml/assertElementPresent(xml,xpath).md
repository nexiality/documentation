{% include_relative _breadcrumb.html current="assertElementPresent(xml,xpath)" %}

### Description


- This command is to verify the element in xml file.
- In other words this method will try to find the expected content of the xml file and pass if found or else fail otherwise.

### Parameters


- **xml** \- this parameter is to provide full path of xml file.
- **xpath** \- this parameter is to provide the content of the element to be verified.

### Example


**Script:**

![](image/assertElementPresent_01.png)

**Data File:**

**![](image/assertElementPresent_03.png)**

**Output:**

**![](image/assertElementPresent_02.png)**

### See Also


- [`assertElementNotPresent(xml,xpath)`](assertElementNotPresent(xml,xpath))