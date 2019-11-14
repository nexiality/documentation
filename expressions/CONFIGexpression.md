---
layout: default
title: CONFIG expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
The CONFIG files are simple text files with key/value pairs. The general format of the properties CONFIG file is as 
explained below:

Generally expected to be a single line of the form, one of the following:<br/>
- `property-bame=property-value`
- `property-name:property-value`

White space that appears between the property name and property value is ignored, so the following are equivalent.
1. `name=Stephen`
2. `name = Stephen`

Also:
- White space at the beginning of the line is also ignored.
- Lines that start with the comment character `!` or `#` are ignored. Blank lines are also ignored.
- The property value is generally terminated by the end of the line. White space following the property value is not 
  ignored, and is treated as part of the property value.

  
### Operations

- Let's consider we have a properties file in the data directory, as in 
  **`C:\Projects\MyFirstProject\artifact\data\file.properties`**.<br/>
  ![](image/CONFIGexpression_01.png)

#### `ascending()`
Sorts the key-value pairs in ascending order of the keys. Can also be used to sort the keys themselves. 

**Example**<br/>
**Config File:** file.properties <br/>
![](image/CONFIGexpression_01.png)

**Script:**<br/>
![](image/CONFIGexpression_17.png)

**Output:**<br/>
![](image/CONFIGexpression_18.png)

-----

#### `descending()`
Sorts the key-value pairs in descending order of the keys. Can also be used to sort the keys themselves.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

**Script:**
![](image/CONFIGexpression_19.png)

**Output:**<br/>
![](image/CONFIGexpression_20.png)

#### `keys()`
Returns all the key names as [LIST](LISTexpression).

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_02.png)

Output<br/>
![](image/CONFIGexpression_03.png)

-----

#### `remove(key)`
removes the `key` and returns the updated CONFIG data.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_04.png)

Output<br/>
![](image/CONFIGexpression_05.png)

-----

#### `save(filePath)`
saves the current state of this CONFIG as a "properties" file to `filePath`.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_06.png)

Output<br/>
![](image/CONFIGexpression_06.png)

-----

#### `set(key, value)`
sets `value` to the given `key` and returns the updated CONFIG data.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_08.png)

Output<br/>
![](image/CONFIGexpression_09.png)

out.properties<br/>
![](image/CONFIGexpression_16.png)

-----

#### `store(var)`
save current CONFIG expression to a data variable.  If the specified `var` exists, its value will be overwritten. 
Using this operation, one can put an expression on pause and resume it at a later time.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_10.png)

Output<br/>
![](image/CONFIGexpression_11.png)

-----

#### `text()`
returns the content of the CONFIG data as text.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_12.png)

Output<br/>
![](image/CONFIGexpression_13.png)

-----

#### `value(key)`
returns the corresponding value as text.

**Example**<br/>
**Config File:** file.properties<br/>
![](image/CONFIGexpression_01.png)

Script<br/>
![](image/CONFIGexpression_14.png)

Output<br/>
![](image/CONFIGexpression_15.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>

