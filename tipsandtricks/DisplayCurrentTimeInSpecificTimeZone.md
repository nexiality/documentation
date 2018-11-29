---
layout: default
title: Display current date-time in specific timezone
parent: Tips and Tricks
tags: command tipsandtricks
comments: true
---

### Description
Nexial supports to display date-time in specified timezones. Nexial user need to provide timezone information as system 
variable during execution before executing the script. Specifying it in the data file will have no effect. User can specify
this from command line like following:<br>
**```set JAVA_OPT=-Duser.timezone=America/Los_Angeles```** where `America/Los_Angeles` is Timezone Id.

For all the TimeZone Ids, please refer [Java Timezone Ids.](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/)

**This will not change the timezone of your local or remote workstation. It will only change the timezone within Nexial during that execution.**

### Example
Execute scripts through command line like this:-<br>
![](image/DisplayCurrentTimeInSpecificTimeZone_01.png)

Script:-<br>
![](image/DisplayCurrentTimeInSpecificTimeZone_02.png)

Output:-<br>
![](image/DisplayCurrentTimeInSpecificTimeZone_03.png)