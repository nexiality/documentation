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

#### `$(array|append|myarray|item)`
Add an element (`item`) to the beginning of the target array (`myarray`), and then render the resulting array.

**Example**<br/>
Script<br/>
![](image/$(array)_03.png)

Output<br/>
![](image/$(array)_04.png)

-----

#### `$(array|ascending|myarray)`
Renders the target array (`myarray`) in ascending order. The order is determined lexicographically via the ASCII values 
of the array elements.

**Example**<br/>
Script<br/>
![](image/$(array)_05.png)

Output<br/>
![](image/$(array)_06.png)

-----

#### `$(array|descending|myarray)`
Renders the target array (`myarray`) in descending order. The order is determined lexicographically via the ASCII values 
of the array elements.

**Example**<br/>
Script<br/>
![](image/$(array)_07.png)

Output<br/>
![](image/$(array)_08.png)

-----

#### `$(array|distinct|myarray)`
Renders the target array (`myarray`) by removing duplicated elements.

**Example**<br/>
Script<br/>
![](image/$(array)_09.png)

Output<br/>
![](image/$(array)_10.png)

-----

#### `$(array|index|myarray|item)`
Renders the position within the target array (`myarray`) where the first occurrence of a specified element (`item`) is 
found.  For example, `$(array|index|Apple,Orange,Banana|Orange)` would return `1`.  
Note that Nexial is zero-based.

**Example**<br/>
Script<br/>
![](image/$(array)_11.png)

Output<br/>
![](image/$(array)_12.png)

-----

#### `$(array|insert|myarray|index|item)`
Add an element (`item`) into the target array (`myarray`), at the specified position (`index`), and then render the 
resulting array.

**Example**<br/>
Script<br/>
![](image/$(array)_13.png)

Output<br/>
![](image/$(array)_14.png)

-----

#### `$(array|item|myarray|index)`
Renders the element (`item`) of the specified position (`index`, zero-based) in the target array (`myarray`).  
For example, `$(array|item|Salt,Pepper,Sugar,Cheese|3)` would render `Cheese`. 

**Example**<br/>
Script<br/>
![](image/$(array)_15.png)

Output<br/>
![](image/$(array)_16.png)

-----

#### `$(array|length|myarray)`
Renders the length of the target array (`myarray`).  An empty array would render `0`.

**Example**<br/>
Script<br/>
![](image/$(array)_17.png)

Output<br/>
![](image/$(array)_18.png)

-----

#### `$(array|pack|myarray)`
Remove all empty or null items in the array.

**Example**<br/>
Script<br/>
![](image/$(array)_27.png)

Output<br/>
![](image/$(array)_28.png)

-----

#### `$(array|prepend|myarray|item)`
Add an element (`item`) to the end of the target array (`myarray`), and then render the resulting array.

**Example**<br/>
Script<br/>
![](image/$(array)_19.png)

Output<br/>
![](image/$(array)_20.png)

-----

#### `$(array|remove|myarray|index)`
Remove an element (`item`) from the array (`myarray`), at the specified position (`index`), and then render the 
resulting array.

**Example**<br/>
Script<br/>
![](image/$(array)_21.png)

Output<br/>
![](image/$(array)_22.png)

-----

#### `$(array|replica|myarray|count)`
Transform the current array to multiple copies of itself (append the array to itself).  The 
`count` is used to specify the number of times to repeat.  For example, `$(array|replica|a,b,c|2)` would yield a 
array of `a,b,c,a,b,c`.

**Example**<br/>
Script<br/>
![](image/$(array)_29.png)

Output<br/>
![](image/$(array)_30.png)

-----

#### `$(array|replicaUntil|myarray|size)`
Transform the current array to multiple copies of itself (append the array to itself), 
until the length of the array is the same as `size`.  For example, `$(array|replicaUntil|a,b,c|7)` would yield 
a list of `a,b,c,a,b,c,a`.

**Example**<br/>
Script<br/>
![](image/$(array)_31.png)

Output<br/>
![](image/$(array)_32.png)

-----

#### `$(array|reverse|myarray)`
Renders the array (`myarray`) in its reversed order.

**Example**<br/>
Script<br/>
![](image/$(array)_23.png)

Output<br/>
![](image/$(array)_24.png)

-----

#### `$(array|subarray|myarray|start|end)`
Renders a portion of the target array (`myarray`), based on the specified `start` and `end` positions. One may specify
`end` as `-1` to signify the last position of the target array.

**Example**<br/>
Script<br/>
![](image/$(array)_25.png)

Output<br/>
![](image/$(array)_26.png)
 
-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>
