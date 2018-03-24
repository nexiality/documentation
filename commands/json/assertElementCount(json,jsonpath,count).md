{% include_relative _breadcrumb.html current="assertElementCount(json,jsonpath,count)" %}


### Description
This command asserts the number of elements in `json` that match the specified `jsonpath`.


### Parameters
- **json**\- is the json source file path
- **jsonpath** \- is the jsonpath (Refer below example for syntax usage)
- **count** \- is the expected count


### Example
**Book Store Data in JSON**<br/>
![bookStoreData](image/bookStoreData.png)

Use dot (.) notation to navigate to the child element. See the below example for syntax usage:

Script:<br/>
![script](image/assertElementCount_02.png)

Result:<br/>
![output](image/assertElementCount_03.png)
