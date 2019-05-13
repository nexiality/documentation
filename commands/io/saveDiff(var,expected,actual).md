---
layout: default
title: saveDiff(var,expected,actual)
parent: io
tags: command io
comments: true
---


### Description
This command compares the content represented by `expected` and `actual` and store the differences into a variable 
specified via `var`. Internally, this command applies the same algorithm as 
[io &raquo; `compare(expected,actual,failFast)`](compare(expected,actual,failFast)). The differences between 
`expected` and `actual` are stored as text - represented by a variable specified as `var`. Below is an example of 
such text:
![example](image/saveDiff_01.png)

The general format of the _diff_ is:<br/>
`line number | match result | \[ line content \] | additional details`


### Parameters
- **var** - this parameter will stored the different values of the files.
- **expected** - this parameter is the expected file.
- **actual** - this parameter is the actual file.


### Example
**Script**:<br/>
![script](image/saveDiff_02.png)

**Output**:<br/>
![output](image/saveDiff_03.png)


### See Also
- [`compare(expected,actual,failFast)`](compare(expected,actual,failFast))