---
layout: default
title: JSON expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
JSON provides transformational operations on a 
<a href="http://json.org/" class="external-link" target="_nexial_external">JSON document</a>, which can be a JSON 
object or JSON array.

A word on JSON object and JSON array:

Here's an excerpt from <a href="http://json.org/" class="external-link" target="_nexial_external">http://json.org</a>

> JSON is built on two structures:
> -  **A collection of name/value pairs**. In various languages, this is realized as an _object_, record, struct, 
     dictionary, hash table, keyed list, or associative array.
> -  **An ordered list of values**. In most languages, this is realized as an _array_, vector, list, or sequence.

A JSON object can be loosely defined as a collection of name-value pairs whose value may be another collection of 
name-value pairs.  For example,
```json
{
   "red": "#f00",
   "green": "#0f0",
   "blue": "#00f",
   "cyan": "#0ff",
   "magenta": "#f0f",
   "yellow": "#ff0",
   "black": "#000"
}
```

A JSON array, in contract, is a list of values which can be collection of name/value pairs, primitives or even more 
array.  Here's an example:
```json
{
   "palette": [
      { "colorName": "red", "hexValue": "#f00" },
      { "colorName": "green", "hexValue": "#0f0" },
      { "colorName": "blue", "hexValue": "#00f" },
      { "colorName": "cyan", "hexValue": "#0ff" },
      { "colorName": "magenta", "hexValue": "#f0f" },
      { "colorName": "yellow", "hexValue": "#ff0" },
      { "colorName": "black", "hexValue": "#000" }
   ]
}
```
JSON is a very popular document format, especially with the advent of 
<a href="https://en.wikipedia.org/wiki/Representational_state_transfer" class="external-link" target="_nexial_target">REST</a> 
(also see <a href="http://www.restapitutorial.com/lessons/whatisrest.html" class="external-link" target="_nexial_target">this</a>).  
It is considered as _lighter_, easier to read and to manage than XML while, in many ways, providing the same 
capabilities as XML.  Via Nexial expression for JSON, one can process JSON documents as part of automation using 
Nexial [`jsonpath`](../jsonpath).  Such capability is useful towards REST api testing and processing.

To manipulate JSON document, check out [`Nexial jsonpath`](../jsonpath) for more details.


### Operations

##### **`addOrReplace(jsonpath,input)`**
Reference a specific position or element in current JSON via `jsonpath`, and then add or replace it with `input`. 
The end result would be the modified JSON document/array. Refer to 
[json &raquo; `addOrReplace(json,jsonpath,input,var)`](../commands/json/addOrReplace(json,jsonpath,input,var)#rules) 
for additional details and the rules of adding or replacing element in an existing JSON document.

-----

##### **`beautify`**
"pretty" formatting on current JSON document to improve readability.

-----

##### **`compact(removeEmpty)`**
Remove all null or empty (i.e. empty string) elements from current JSON. When `removeEmpty` is set to `true`, this 
operation will remove any node with only empty text (like `{ "name": "" }`). This operation is functionally equivalent
to the [JSON &raquo; `compact(var,json,removeEmpty)`](../commands/json/compact(var,json,removeEmpty)) command. Check
the command page for more details and examples.

-----

##### **`count(jsonpath)`**
Counts the number of nodes present that matched with specified `jsonpath`. This effectively also transforms the current
expression to [NUMBER](NUMBERexpression).

-----

##### **`extract(jsonpath)`**
Extract a portion of the JSON document based on the specified [`jsonpath`](../jsonpath). Depending on the JSON in 
question and the specified JSON path, the result could either be `null` (none matched), text (matched to a textual 
value), JSON object or JSON array.

-----

##### **`keys(jsonpath)`**
Extract the immediate keys of the resolved JSON object matching the specified [`jsonpath`](../jsonpath). This operation
first reduces the current JSON document to its fragment that match the specified [`jsonpath`](../jsonpath). Then if the 
resolved JSON fragment is a valid JSON object, it returns a list of the immediate keys (meaning current level only) to 
such JSON fragment. If the specified [`jsonpath`](../jsonpath) does not resolve to a JSON object (such as JSON array or 
single value), then this operation resolves to an empty list. Either way this operation transform the current `JSON`
data type to a [`LIST`](LISTexpression) data type.

For example, suppose we have the following JSON document assigned to a data variable named `json`:
```json
{
  "shipping_address": [
    {
      "street_address": "1600 Pennsylvania Avenue NW",
      "city": "Washington",
      "state": "DC",
      "labels": [
        "east coast",
        {
          "residents": [
            { "name": "Mr. President", "gender": "M" },
            { "name": "Mrs. President", "gender": "F" },
            { "name": "First Dog", "gender": "F" },
            null
          ]
        },
        null,
        "gated"
      ]
    },
    {
      "country": "USA",
      "street_address": "1733 Washington Avenue",
      "city": "Glenoak",
      "state": "CA"
    }
  ],
  "billing_address": {
    "address1": "1st Street SE",
    "address2": null,
    "city": "Seeti",
    "county": "Abrehiban",
    "state": "DC",
    "zipcode": "10541",
    "country": "USA"
  },
  "tags": [ "electronics", "hi-tech", "android" ]
}
```

Here are some possible use of this operations:

| expression                                                    | result            | comments                         |
|:--------------------------------------------------------------|:------------------|:---------------------------------|
|`[JSON(${json}) => keys(shipping_address.labels.residents[2])]`|`LIST(name,gender)`|keys of the 3rd JSON fragment under `residents`|
|`[JSON(${json}) => keys(shipping_address.labels.residents[3])]`|`LIST()`           |keys of the 4th JSON fragment under `residents`, which has no keys|
|`[JSON(${json}) => keys(shipping_address.labels[1])]`          |`LIST(residents)`  |keys of the 2nd JSON fragment under `labels`|
|`[JSON(${json}) => keys(shipping_address[1])]`                 |`LIST(country,street_address,city,state)`|keys of the 2nd JSON fragment under `shipping_address`|
|`[JSON(${json}) => keys(billing_address)]`                     |`LIST(address1,address2,city,county,state,zipcode,country)`|keys of `billing_address` JSON fragment|

**Note**:
1. The resolved JSON keys do not necessarily render in the same order as found in the originating JSON document. You may 
   want to consider [LIST &raquo; `ascending`](LISTexpression#ascending) or 
   [LIST &raquo; `descending`](LISTexpression#descending) to re-order the keys.
2. The same functionality is also available as a command - 
   [json &raquo; `storeKeys(json,jsonpath,var)`](../commands/json/storeKeys(json,jsonpath,var))

-----

##### **`list`**
Transform a JSON Array or text to a [`LIST`](LISTexpression). Works best with JSON Array that contains single text 
value (e.g. `["apple","orange","banana"]`). Does not work with a JSON object.

-----

##### **`minify`** - compressed current JSON document; suitable for efficient data transfer.

-----

##### **`pack`** - remove any `null` JSON node (essentially JSON node without value); akin to _compacting_ a document. 
  Consequently, this operation also "beautifies" the current JSON document.

-----

##### **`remove(jsonpath)`**
Deletes JSON nodes that matched to the specified `jsonpath`.

-----

##### **`replace(jsonpath,replaceWith)`**
Replace the first match of the JSON in question based on the specified `jsonpath` with the specified `replaceWith`.  
Depending on the JSON in question and the specified JSON path, the match could either be `null` (none matched), text 
(matched to a textual value), JSON object or JSON array.  Since `replaceWith` is treated as text, the end result of 
the JSON document in question could become structurally different. 

-----

##### **`save(path,append)`**
Save current JSON content to `path`. If `path` resolves to an existing file, `append` set as `true` will append 
current JSON content to the said file. `append` is optional and defaults to `false`.

-----

##### **`select(jsonpaths)`**
Performs multiple JSON path extractions and transforms the result into [CSV](CSVexpression) with the JSON path as the 
first column and the corresponding result as the second column. For example, suppose we have the following JSON document
(_Marketing data_):<br/>

```json
[
  {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
  },
  {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
  },
  {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
  },
  {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
  }
]
```

And, we want to extract the following information:
1. A unique list of last names in ascending order 
2. All US government email addresses in descending order
3. A count of all female customers

Using a combination of [JSONPath](../jsonpath/index) and [JSONPath Function](../jsonpath/index#jsonpath-function),
we can achieve the above requirement:
```
1. last_name => distinct ascending
2. email[REGEX:.+\(\.gov|\.us\)] => descending
3. [gender=Female] => count
```

Now, instead of executing these JSONPaths one-by-one with 
[json &raquo; `storeValues(json,jsonpath,var)`](../commands/json/storeValues(json,jsonpath,var)) or
`extract(jsonpath)` (see above), we can fulfill all the 3 requirements with 1 `select` operation:

![](image/JSONexpression_03.png)

The last step utilizes the `select` operation to perform multiple JSONPath extraction (`jsonpaths`). The output
is as follows:

![](image/JSONexpression_04.png)

Note that any extraction that results in a list of values, such will be enclosed between `[...]`

-----

##### **`store(var)`**
Save current JSON expression to a data variable. If the specified `var` exists, its value will be overwritten. 
Using this operation, one can put an expression on pause and resume it at a later time.

-----

##### **`text`**
Transform a JSON document to its textual representation. JSON object will be enclosed in `{...}`, JSON array in `[...]`, 
and all else in its native textual representation.


### Example
**Script**:<br/>
![script](image/JSONexpression_01.png)

**Output**:<br/>
![output](image/JSONexpression_02.png)

