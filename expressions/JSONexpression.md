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
> 
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
capabilities as XML.  Via Nexial expression for JSON, one can process JSON documents as part of automation using Nexial [`jsonpath`](../jsonpath).  Such capability is useful towards REST api testing and processing.

To manipulate JSON document, check out [`Nexial jsonpath`](../jsonpath) for more details.


### Operations
- **`count(jsonpath)`** \- counts the number of nodes present that matched with specified `jsonpath`.
- **`extract(jsonpath)`** \- extract a portion of the JSON document based on the specified [`jsonpath`](../jsonpath).  
  Depending on the JSON in question and the specified JSON path, the result could either be `null` (none matched), 
  text (matched to a textual value), JSON object or JSON array.
- **`list`** \- transform a JSON Array or text to a [`LIST`](LISTexpression). Works best with JSON Array that contains 
  single text value (e.g. `["apple","orange","banana"]`).  Does not work with a JSON object.
- **`pack`** \- remove any `null` JSON node (essentially JSON node without value); akin to _compacting_ a document.
- **`remove(jsonpath)`** \- deletes JSON nodes that matched to the specified `jsonpath`.
- **`replace(jsonpath,replaceWith)`** \- replace the first match of the JSON in question based on the specified 
  `jsonpath` with the specified `replaceWith`.  Depending on the JSON in question and the specified JSON path, the 
  match could either be `null` (none matched), text (matched to a textual value), JSON object or JSON array.  Since 
  `replaceWith` is treated as text, the end result of the JSON document in question could become structurally different. 
- **`save(path)`** \- save current JSON document to file represented by `path`.
- **`store(var)`** \- save current JSON expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **`text`** \- transform a JSON document to its textual representation.  JSON object will be enclosed in `{...}`, 
  JSON array in `[...]`, and all else in its native textual representation.


### Example
**Script**:<br/>
![script](image/JSONexpression_01.png)

**Output**:<br/>
![output](image/JSONexpression_02.png)

