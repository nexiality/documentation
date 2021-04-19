---
layout: minified
title: addOrReplace(jsonpath,input)
parent: JSONexpression
---

Reference a specific position or element in current JSON via `jsonpath`, and then add or replace it with `input`. 
The end result would be the modified JSON document/array. Refer to 
[json &raquo; `addOrReplace(json,jsonpath,input,var)`](https://nexiality.github.io/documentation/commands/json/addOrReplace(json,jsonpath,input,var)#rules) 
for additional details and the rules of adding or replacing element in an existing JSON document.

**Example**
- Note: While entering the json input, each comma should be preceded by a backslash (`\`). Also, empty `jsonpath` or
 `input` is represented using space. 
 
**Adding input values to the JSON**<br/>

**Script**: Adding to an empty json using empty jsonpath<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_01.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_02.png)

**Script**: Adding to a json using empty jsonpath<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_03.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_04.png)

**Script**: Adding to an existing node<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_05.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_06.png)

**Script**: Adding a json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_07.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_08.png)

**Script**: Adding more values to an existing json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_09.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_10.png)

**Script**: Adding a name-value pair and a json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_11.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_12.png)

**Script**: Adding a json object to an existing json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_13.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_14.png)

**Replacing portions of the JSON file with input values**<br/>

**Script**: Replacing a json array with `null`<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_15.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_16.png)

**Script**: Replacing an existing json array with another json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_17.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_18.png)

**Script**: Replacing a json object in a json array with another json object<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_19.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_20.png)

**Script**: Replacing an existing json object with another json object<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_21.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_22.png)

**Script**: Replacing an element in a json array with another json array (nested json array)<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_23.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_24.png)

**Trying to add/replace values at non existing nodes**<br/>

**Script**: Adding/Replacing at non existing node in a json document<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_25.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_26.png)

**Script**: Adding/Replacing at non existing node in a json array<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_27.png)
**Output**:<br/>
![](https://nexiality.github.io/documentation/expressions/image/JSONexpression_28.png)

-----