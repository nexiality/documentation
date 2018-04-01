---
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

Also:<br/>
- White space at the beginning of the line is also ignored.
- Lines that start with the comment character `!` or `#` are ignored. Blank lines are also ignored.
- The property value is generally terminated by the end of the line. White space following the property value is not 
  ignored, and is treated as part of the property value.

  
### Operations
- **keys()** \- returns all the key names as [LIST](LISTexpression).
- **remove(key)** \- removes the `key` and returns the updated CONFIG data.
- **save(filePath)** \- saves the current state of this CONFIG as a "properties" file to `filePath`.
- **set(key, value)** \- sets `value` to the given `key` and returns the updated CONFIG data.
- **store(var)** \- save current CONFIG expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **text()** \- returns the content of the CONFIG data as text.
- **value(key)** - returns the corresponding value as text.


### Examples
For this example, let's consider we have a properties file in the data directory, as in 
**`C:\Projects\MyFirstProject\artifact\data\file.properties`**.<br/>
![](image/CONFIGexpression_01.png)

**script:**<br/>
Here the script will read some property keys from the target properties file, remove and update some keys, and finally
save the changes to another properties file (`x.properties`)<br/>
![](image/CONFIGexpression_02.png)

**Result**:<br/>
![](image/CONFIGexpression_03.png)

![](image/CONFIGexpression_04.png)

The generated `x.properties` looks like this:<br/>
![](image/CONFIGexpression_05.png)

