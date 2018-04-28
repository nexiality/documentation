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

The above script defines an array of 2 elements ( `Smith, John` and `Appleseed, Johnny`) \- the delimiter defined on 
the first row is the pipe character (`|`), not comma.

By default, [`nexial.textDelim`](../systemvars/index#nexial.textDelim) has the value of a comma (`,`).


### Available Functions
- **`$(array|length)`** \- renders the length of the target array.  An empty array would render `0`.
- **`$(array|index)`** \- renders the position within the target array where the first occurrence of a specified 
  element is found.  For example, `$(array|Apple,Orange,Banana|Orange)` would return `1`.  Note that Nexial is 
  zero-based.
- **`$(array|item)`** \- renders the element of the specified position (zero-based) in the target array.  For example, 
  `$(array|Salt,Pepper,Sugar,Cheese|3)` would render `Cheese`. 
- **`$(array|subarray)`** \- renders a portion of the target array, based on the specified `start` and `end` positions.
- **`$(array|distinct)`** \- renders the target array by removing duplicated elements.
- **`$(array|ascending)`** \- renders the target array in ascending order.  The order is determined lexicographically 
  via the ASCII values of the array elements.
- **`$(array|descending)`** - renders the target array in descending order.  The order is determined lexicographically 
  via the ASCII values of the array elements.
- **`$(array|reverse)`** \- renders the array in its reversed order.
- **`$(array|insert)`** \- add an element into the target array, at the specified position, and then render the 
  resulting array.
- **`$(array|prepend)`** \- add an element to the end of the target array, and then render the resulting array.
- **`$(array|append)`** - add an element to the beginning of the target array, and then render the resulting array.
- **`$(array|remove)`** \- remove an element from the array, at the specified position, and then render the result 
  array.


### Example
Here are some examples on how to use this built-in function:<br/>
![script](image/$(array)_03.png)

... and the **output**:<br/>
![output](image/$(array)_04.png)
