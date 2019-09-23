---
layout: default
title: $(date)
parent: Built-in Functions
tags: date $(date) format
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

#### `$(date|format|date|fromFormat|toFormat)`
Convert a `date` from the specified `fromFormat` to the specified  `toFormat`.  Check out above links for date format.

#### `$(date|addYear|date|years)`
Add `years` to `date`. Use negative value to denote the "subtract" intent. The specified `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`).

#### `$(date|addMonth|date|months)`
Add `months` to `date`. Use negative value to denote the "subtract" intent. The specified `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`).

#### `$(date|addDay|date|days)`
Add days to `date`. Use negative value to denote the "subtract" intent. The specified  `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`).

#### `$(date|addHour|date|hours)`
Add hours to `date`. Use negative value to denote the "subtract" intent. The specified `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss`).

#### `$(date|addMinute|date|minutes)`
Add minutes to `date`. Use negative value to denote the "subtract" intent. The specified `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss`).

#### `$(date|addSecond|date|seconds)`
Add seconds to `date`. Use negative value to denote the "subtract" intent. The specified `date` is assumed in standard 
format (`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`).

#### `$(date|diff|date1|date2|precision)`
Find the absolute difference between 2 dates (`date1` and `date2`) and return such value in the specified date 
`precision`. The possible values of `precision` are `YEAR`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND` and 
`MILLISECOND`. The specified dates (`date1` and `date2`) are assumed in standard format (`MM/dd/yyyy HH:mm:ss` or 
`MM/dd/yyyy`).

For example,<br/>
![](image/$(date)_03.png)

The first `verbose()` would print out `17.91` while the second `2.6`.

#### `$(date|setYear|date|year)` 
Set the year portion of `date` to the specified `years`. The specified `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`). Note that the year specified should not be less than 1970.

#### `$(date|setMonth|date|month)`
Set the month portion of `date` to the specified months. The specified `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`). The `month` parameter is expected to be 1-based. Meaning: `1` represents 
January and `12` represents December.

#### `$(date|setDay|date|day)`
Set the day portion of `date` to the specified days. The specified `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss` or `MM/dd/yyyy`). In some cases, this function will cause the date to forward to next month. 
For example `$(date|setDay|02/18/2013|31)` would yield `03/03/2013`.

#### `$(date|setHour|date|hours)`
Set the hour portion of `date` to the specified hours (24-hour format). The specified `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss`).

#### `$(date|setMinute|date|minutes)`
Set the minute portion of `date` to the specified minutes. The specified `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss`).

#### `$(date|setSecond|date|seconds)`
Set the second portion of `date` to the specified seconds. The specified  `date` is assumed in standard format 
(`MM/dd/yyyy HH:mm:ss`).

#### `$(date|setDOW|date|day)`
Derive the "day of the week" for a given date. The specified `date` is assumed in standard format (`MM/dd/yyyy HH:mm:ss` 
or `MM/dd/yyyy`). Use the `days` parameter to set the day of the week. As a convenience, both `0` and `7` represent 
Sunday, while `6` represents Saturday. Since there are only 7 days in a week, any integer value outside the range of 0 
through 7 would be considered as value. For example, March 21th 2013 is a Thursday. `$(date|setDOW|03/21/2013|1)` would 
yield  `03/18/2013`, which is a Monday.


### Example
Here are some examples on how to use this built-in function:<br/>
![script](image/$(date)_01.png)

and the **output**:<br/>
![output](image/$(date)_02.png)


### See Also
- [`$(sysdate)`]($(sysdate))
