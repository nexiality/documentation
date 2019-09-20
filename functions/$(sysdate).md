---
layout: default
title: $(sysdate)
parent: Built-in Functions
tags: sysdate $(sysdate)
comments: true
---


### Description
Not to be confused with another built-in function, $(date), which can be used to manipulate dates and time 
(i.e _date_ math).  This built-in function focuses on system dates, from the perspective of the test machine 
(where tests are executed).  It also use test machine system date to render other relative date information such as 
`yesterday`, `tomorrow`, `next quarter`, `first day of the month`, etc.  

##### Date Format
{% include_relative _dateformat.md %}

In cases where only year and quarter information should be considered, use `y`for year and `q` for quarter information. 
For example, `$(sysdate|lastQtr|yyyy-q)` will render the last quarter in the format of "4_digit_year-quarter".


### Available Functions

#### `$(sysdate|now|format)`
Render the current date/time using the specified `format`. For formatting timestamp, use the format like 
this: **`$(sysdate|now|epoch)`**.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_01.png)<br/>
![](image/$(sysdate)_03.png)

Output<br/>
![](image/$(sysdate)_02.png)
![](image/$(sysdate)_04.png)  
  
-----

#### `$(sysdate|today|format)`
same as `$(sysdate|now|format)`, kept alive for backward compatibility.

**Example**<br/>
- Script<br/>
![](image/$(sysdate)_05.png)
- Output<br/>
![](image/$(sysdate)_06.png)

-----

#### `$(sysdate|yesterday|format)`
Render yesterday (more precisely, exactly 24 hours ago) using the specified 
format.

**Example**
- Script<br/>
![](image/$(sysdate)_07.png)
- Output<br/>
![](image/$(sysdate)_08.png)

-----

#### `$(sysdate|tomorrow|format)`
Render tomorrow (more precisely, exactly 24 hours later) using the specified format.  

**Example**
- Script<br/>
![](image/$(sysdate)_09.png)
- Output<br/>
![](image/$(sysdate)_10.png)

-----

#### `$(sysdate|currentQtr|format)`
Render the current quarter using the specified `format`.  Only year and quarter information would be rendered here.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_11.png)

Output<br/>
![](image/$(sysdate)_12.png)

-----

#### `$(sysdate|lastQtr|format)`
Render the last quarter using the specified `format`.  Only year and quarter information would be rendered here.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_13.png)

Output<br/>
![](image/$(sysdate)_14.png)

-----

#### `$(sysdate|nextQtr|format)`
Render the next quarter using the specified `format`.  Only year and quarter information would be rendered here.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_15.png)

Output<br/>
![](image/$(sysdate)_16.png)

-----

#### `$(sysdate|firstDOM|format)`
Render the first day of the month using specified `format`.  For formatting timestamp, use the format like 
this: **`$(sysdate|firstDOM|epoch)`**.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_17.png)

Output<br/>
![](image/$(sysdate)_18.png)

-----

#### `$(sysdate|lastDOM|format)`
render the last day of the month using specified `format`.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_19.png)

Output<br/>
![](image/$(sysdate)_20.png)

-----

#### `$(sysdate|firstDOW|format)`
render the first day of the week using specified `format`.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_21.png)

Output<br/>
![](image/$(sysdate)_22.png)

-----

#### `$(sysdate|lastDOW|format)`
render the last day of the week using specified `format`.

**Example**<br/>
Script<br/>
![](image/$(sysdate)_23.png)

Output<br/>
![](image/$(sysdate)_24.png)

-----

### See Also
- [`$(format)`]($(format)) 
- [`$(date)`]($(date))

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>
