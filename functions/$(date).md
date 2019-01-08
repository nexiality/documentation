---
layout: default
title: $(date)
parent: Built-in Functions
tags: date $(date)
comments: true
---


### Description
This built-in function provides basic operation to manipulate date such add "adding day", "setting hour".  This 
built-in function assumes the `date` parameter in the standard US date format (i.e. `MM/dd/yyyy HH:mm:ss`).  You might 
want to consider using `$(date|stdFormat|date|fromFormat)` or `$(date|format|date|fromFormat|toFormat)` functions to 
derive the appropriate format first before invoking other date-operational functions.

##### Date Format
{% include_relative _dateformat.md %}


### Available Functions
- **`$(date|stdFormat|date|fromFormat)`** \- convert a `date` from `fromFormat` to the standard format (i.e. 
  `MM/dd/yyyy HH:mm:ss`).    
- **`$(date|format|date|fromFormat|toFormat)`** - convert a `date` from the specified `fromFormat` to the specified 
  `toFormat`.  Check out above links for date format.
- **`$(date|addYear|date|years)`** \- add `years` to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|addMonth|date|months)`** - add `months` to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|addDay|date|days)`** - add days to `date`. Use negative value to denote the "subtract" intent. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|addHour|date|hours)`** - add hours to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|addMinute|date|minutes)`** - add minutes to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|addSecond|date|seconds)`** - add seconds to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setYear|date|year)`** \- set the year portion of `date` to the specified `years`. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setMonth|date|month)`** \- set the month portion of `date` to the specified months. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setDay|date|day)`** \- set the day portion of `date` to the specified days. The specified `date` is assumed 
  in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setHour|date|hours)`** \- set the hour portion of `date` to the specified hours. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setMinute|date|minutes)`** \- set the minute portion of `date` to the specified minutes. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setSecond|date|seconds)`** \- set the second portion of `date` to the specified seconds. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
- **`$(date|setDOW|date|day)`** \- derive the "day of the week" for a given date.   The specified `date` is assumed in 
  standard format (`MM/dd/yyyy HH:mm:ss`). Use the `days` parameter to set the day of the week.  0 means Sunday.  For 
  example, March 21th 2013 is a Thursday.  `$(date|setDOW|03/21/2013|1)` would yield `30/18/2013`, which is a Monday.   


### Example
Here are some examples on how to use this built-in function:<br/>
![script](image/$(date)_01.png)

and the **output**:<br/>
![output](image/$(date)_02.png)


### See Also
- [`$(sysdate)`]($(sysdate))
