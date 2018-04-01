---
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
For example, `${sysdate|lastQtr|yyyy-q}` will render the last quarter in the format of "4_digit_year-quarter".


### Available Functions
- **`$(sysdate|now|format)`** \- render the current date/time using the specified `format`. For formatting timestamp,
  use the format like this: **`$(sysdate|now|epoch)`**.
- **`$(sysdate|today|format)`** \- same as `$(sysdate|now|format)`, kept alive for backward compatibility.
- **`$(sysdate|yesterday|format)`** \- render yesterday (more precisely, exactly 24 hours ago) using the specified 
  format.
- **`$(sysdate|tomorrow|format)`** \- render tomorrow (more precisely, exactly 24 hours later) using the specified 
  format.  
- **`$(sysdate|currentQtr|format)`** \- render the current quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.
- **`$(sysdate|lastQtr|format)`** \- render the last quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.
- **`$(sysdate|nextQtr|format)`** \- render the next quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.  
- **`$(sysdate|firstDOM|format)`** \- render the first day of the month using specified `format`.  For formatting
  timestamp, use the format like this: **`$(sysdate|firstDOM|epoch)`**.
- **`$(sysdate|lastDOM|format)`** \- render the last day of the month using specified `format`.  
- **`$(sysdate|firstDOW|format)`** \- render the first day of the week using specified `format`. 
- **`$(sysdate|lastDOW|format)`** \- render the last day of the week using specified `format`. 


### Example
Below is a sample test script that uses the `$(sysdate)` function (highlighted in **red**).<br/>
![script](image/$(sysdate)_01.png)

The output of this script looks something like this:<br/>
![output](image/$(sysdate)_02.png)


### See Also
- [`$(format)`]($(format)) 
- [`$(date)`]($(date))
