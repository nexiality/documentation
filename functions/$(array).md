---
layout: default
title: $(array)
parent: Built-in Functions
tags: array $(array)
comments: true
---


### Description
This built-in function provides various capabilities regarding array (ie. a list of _things_).  Note that in Nexial 
there really isn't a prescriptive way of defining an array.  It is simply a string, or a contiguous character, 
separated by _delimiter_ that is defined via the`nexial.textDelim` predefined variable.  For example,<br/>
![](image/$(array)_01.png)

The above script defines an array of 6 elements (`icon`, `picture`, `diagram`, `chart`, `screen`, and `image`), and 
this array is referenced by a variable named `array1`.<br/>
![](image/$(array)_02.png)

The above script defines an array of 2 elements ( `Smith, John` and `Appleseed, Johnny`) - the delimiter defined on 
the first row is the pipe character (`|`), not comma. As pipe character (`|`) is separator for built-in function 
parameters, we have to escape pipe character for array. As you can show in above image, array1 has value 
`Smith, John\|Appleseed, Johnny` with pipe character escaped.

By default, [`nexial.textDelim`](../systemvars/index#nexial.textDelim) has the value of a comma (`,`).


### Available Functions
- **`$(array|append|myarray|item)`** - add an element (`item`) to the beginning of the target array (`myarray`), and 
  then render the resulting array.
- **`$(array|ascending|myarray)`** - renders the target array (`myarray`) in ascending order.  The order is determined 
  lexicographically via the ASCII values of the array elements.
- **`$(array|descending|myarray)`** - renders the target array (`myarray`) in descending order.  The order is determined 
  lexicographically via the ASCII values of the array elements.
- **`$(array|distinct|myarray)`** - renders the target array (`myarray`) by removing duplicated elements.
- **`$(array|index|myarray|item)`** - renders the position within the target array (`myarray`) where the first 
  occurrence of a specified element (`item`) is found.  For example, `$(array|index|Apple,Orange,Banana|Orange)` would 
  return `1`.  Note that Nexial is zero-based.
- **`$(array|insert|myarray|index|item)`** - add an element (`item`) into the target array (`myarray`), at the specified 
  position (`index`), and then render the resulting array.
- **`$(array|item|myarray|index)`** - renders the element (`item`) of the specified position (`index`, zero-based) in 
  the target array (`myarray`).  For example, `$(array|item|Salt,Pepper,Sugar,Cheese|3)` would render `Cheese`. 
- **`$(array|length|myarray)`** - renders the length of the target array (`myarray`).  An empty array would render `0`.
- **`$(array|prepend|myarray|item)`** - add an element (`item`) to the end of the target array (`myarray`), and then 
  render the resulting array.
- **`$(array|remove|myarray|index)`** - remove an element (`item`) from the array (`myarray`), at the specified 
  position (`index`), and then render the resulting array.
- **`$(array|reverse|myarray)`** - renders the array (`myarray`) in its reversed order.
- **`$(array|subarray|myarray|start|end)`** - renders a portion of the target array (`myarray`), based on the 
  specified `start` and `end` positions.


### Example
Here are some examples on how to use this built-in function:<br/>
![script](image/$(array)_03.png)

... and the **output**:<br/>
![output](image/$(array)_04.png)
