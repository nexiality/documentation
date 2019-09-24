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

#### Date Format
{% include_relative _dateformat.md %}


### Available Functions

#### `$(date|stdFormat|date|fromFormat)`
Convert a `date` from `fromFormat` to the standard format (i.e. `MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_01.png)

Output:<br/>
![output](image/$(date)_02.png)

-----

#### `$(date|format|date|fromFormat|toFormat)`
Convert a `date` from the specified `fromFormat` to the specified 
  `toFormat`.  Check out above links for date format.

**Example**<br/>
Script:<br/>
![script](image/$(date)_03.png)

Output:<br/>
![output](image/$(date)_04.png)

-----

#### `$(date|addYear|date|years)`
Add `years` to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_05.png)

Output:<br/>
![output](image/$(date)_06.png)

-----

#### `$(date|addMonth|date|months)`
Add `months` to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_07.png)

Output:<br/>
![output](image/$(date)_08.png)

-----

#### `$(date|addDay|date|days)`
Add days to `date`. Use negative value to denote the "subtract" intent. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`.
 
**Example**<br/>
Script:<br/>
![script](image/$(date)_09.png)

Output:<br/>
![output](image/$(date)_10.png)

-----

#### `$(date|addHour|date|hours)`
Add hours to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_11.png)

Output:<br/>
![output](image/$(date)_12.png)

-----

#### `$(date|addMinute|date|minutes)`
Add minutes to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
 
**Example**<br/>
Script:<br/>
![script](image/$(date)_13.png)

Output:<br/>
![output](image/$(date)_14.png)

-----

#### `$(date|addSecond|date|seconds)`
Add seconds to `date`. Use negative value to denote the "subtract" intent. The 
  specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_15.png)

Output:<br/>
![output](image/$(date)_16.png)

-----

#### `$(date|diff|date1|date2|precision)`
Find the absolute difference between 2 dates (`date1` and `date2`) and return such value in the specified date 
`precision`.  The possible values of `precision` are `YEAR`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND` and 
`MILLISECOND`. The specified dates (`date1` and `date2`) are assumed in standard format (`MM/dd/yyyy HH:mm:ss`).

**Example**<br/>
Script:<br/>
![script](image/$(date)_17.png)

Output:<br/>
![output](image/$(date)_18.png)

-----

#### `$(date|setYear|date|year)` 
Set the year portion of `date` to the specified `years`. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_19.png)

Output:<br/>
![output](image/$(date)_20.png)

-----

#### `$(date|setMonth|date|month)`
Set the month portion of `date` to the specified months. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_21.png)

Output:<br/>
![output](image/$(date)_22.png)

-----

#### `$(date|setDay|date|day)`
Set the day portion of `date` to the specified days. The specified `date` is assumed 
  in standard format (`MM/dd/yyyy HH:mm:ss`).  
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_23.png)

Output:<br/>
![output](image/$(date)_24.png)

-----

#### `$(date|setHour|date|hours)`
Set the hour portion of `date` to the specified hours. The specified `date` is 
  assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_25.png)

Output:<br/>
![output](image/$(date)_26.png)

-----

#### `$(date|setMinute|date|minutes)`
Set the minute portion of `date` to the specified minutes. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_27.png)

Output:<br/>
![output](image/$(date)_28.png)

-----
  
#### `$(date|setSecond|date|seconds)`
Set the second portion of `date` to the specified seconds. The specified 
  `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss`).
  
**Example**<br/>
Script:<br/>
![script](image/$(date)_29.png)

Output:<br/>
![output](image/$(date)_30.png)

-----
 
#### `$(date|setDOW|date|day)`
Derive the "day of the week" for a given date. The specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss` 
or `MM/dd/yyyy`). Use the `days` parameter to set the day of the week. As a convenience, both `0` and `7` represent 
Sunday, while `6` represents Saturday. Since there are only 7 days in a week, any integer value outside the range of 0 
through 7 would be considered as value. For example, March 21th 2013 is a Thursday. `$(date|setDOW|03/21/2013|1)` would 
yield  `03/18/2013`, which is a Monday.

**Example**<br/>
Script:<br/>
![script](image/$(date)_31.png)

Output:<br/>
![output](image/$(date)_32.png)

-----
 
### See Also
- [`$(sysdate)`]($(sysdate))

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>