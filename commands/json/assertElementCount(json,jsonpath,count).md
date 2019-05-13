---
layout: default
title: assertElementCount(json,jsonpath,count)
parent: json
tags: command json
comments: true
---


### Description
This command asserts the number of elements in `json` that match the specified `jsonpath`.


### Parameters
- **json** - the JSON content or JSON file to validate for correctness
- **jsonpath** - the jsonpath to reference JSON element of interest (Refer below example for syntax usage)
- **count** - the expected count


### Example
**Book Store Data in JSON**<br/>
![bookStoreData](image/bookStoreData.png)

Use dot (.) notation to navigate to the child element. See the below example for syntax usage:

**Script**:<br/>
![script](image/assertElementCount_02.png)

**Output**:<br/>
![output](image/assertElementCount_03.png)
