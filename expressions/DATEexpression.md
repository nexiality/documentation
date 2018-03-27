---
title: DATE expression
parent: expressions
tags: command expressions
comments: true
---


### Description
DATE provides operations related to formatting or manipulating a date.  To use this Nexial expression, one would start 
by specifying a **DATE** instance with one of the following:

- **`[DATE({date}) => ... ...]`** \- start a new **DATE** instance using standard date format **`MM/dd/yyyy HH:mm:ss`**.
  For example, `[DATE(04/01/2017 05:43:11) => ...])` starts a Nexial expression on a date of April 1st, 2017 5:43:11 AM. 
- **`[DATE(now) => ... ...]`** or **`[DATE(right now) => ... ...]`** \- start a new **DATE** instance assuming 
  standard date format **`MM/dd/yyyy HH:mm:ss`** and using current date/time.
- **`[DATE({date},{format}) => ... ...]`** \- start a new **DATE** instance using the specified date format.  The 
  date/time formatting follows 
  <a href="http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html" class="external-link" target="_nexial_external">the standard Java date/time convention</a>. 
  For example, `[DATE(2017/04/01,yyyy/MM/dd) => ...]` starts a Nexial expression on a date of April 1st, 2017.  
  Technically such date is implicitly set to a time of 00:00:00.
- **`[DATE({date},epoch) => ... ...]`** \- start a new **DATE** instance assuming the specified date value is an 
  <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_external">epoch</a> 
  (or timestamp). 


### Operations
- **addDay(days)** \- add `days` to the current _day_ part of the date instance.
- **addHour(hours)** \- add `hours` to the current _hour_ part of the date instance.  Note that the value represents 
  the 24-hour system (i.e. 22 means 10 p.m.).
- **addMinute(minutes)** \- add `minutes` to the current _minute_ part of the date instance.
- **addMonth(months)** \- add months to the current _month_ part of the date instance.
- **addSecond(second)** \- add `seconds` to the current _second_ part of the date instance.
- **addYear(years)** \- add `years` to the current _year_ part of the date instance.
- **format(targetFormat)** \- transform the same date instance into another textual form, using the specified 
  `targetFormat.`
- **setDay(days)** \- set the `day` part of the date instance.
- **setDOW(days)** \- set the `day of the week` part of the date instance.  Use the numeric value mapped to the day 
  of the week: `1=SUNDAY, 2=MONDAY, 3=TUESDAY, 4=WEDNESDAY, 5=THURSDAY, 6=FRIDAY, 7=SATURDAY`.
- **setHour(hours)** \- set the `hour` part of the date instance.  Note that the value represents the 24-hour system 
  (i.e. 22 means 10 p.m.).
- **setMinute(minutes)** \- set the `minute` part of the date instance.
- **setMonth(months)** \- set the `month` part of the date instance.
- **setSecond(seconds)** \- set the `second` part of the date instance.
- **setYear(years)** \- set the `year` part of the date instance.
- **store(var)** \- save current DATE expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **text** \- transform the date instance to its textual form, which would most likely be the way it was initially 
  specified.


### Example
**script:**<br/>
![script](image/DATEexpression_01.png)

**Result:**<br/>
![output](image/DATEexpression_02.png)

