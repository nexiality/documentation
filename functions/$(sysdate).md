{% include_relative _breadcrumb.html current="$(sysdate)" %}


### Description
This built-in function focuses on system dates, from the perspective of the test harness (where tests are executed).  
Not to be confused with another built-in function, $(date), which can be used to manipulate dates and time 
(i.e _date_ math).  

##### About `format`:
This built-in function uses the system date of the test harness (i.e. where the test is executed) to render other 
relative date information such as `yesterday`, `tomorrow`, `next quarter`, `first day of the month`, etc.  For 
date/time formatting (denoted below as `format`), use 
<a href="http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html" class="external-link">the standard Java date/time convention</a>.  
In some case where only year and quarter information can be considered, use `y`for year and `q` for quarter 
information.  See Example section below for example.

Also, there's an option to format the date/time into its 
<a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link">epoch</a> equivalent.  Instead of using the 
format as laid out in 
<a href="http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html" class="external-link">the standard Java date/time convention</a>, 
one can use `epoch` to signify that the date/time value should be displayed in its epoch value.  For example: 
`$(sysdate|now|**epoch**)`, `$(sysdate|firstDOM|**epoch**)`, etc.


### Available Functions
- **$(sysdate|now|format)** \- render the current date/time using the specified `format`. 
- **$(sysdate|today|format)** \- same as `$(sysdate|now|format)`, kept alive for backward compatibility.
- **$(sysdate|yesterday|format)** \- render yesterday (more precisely, exactly 24 hours ago) using the specified format.
- **$(sysdate|tomorrow|format)** \- render tomorrow (more precisely, exactly 24 hours later) using the specified format.  
- **$(sysdate|currentQtr|format)** \- render the current quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.
- **$(sysdate|lastQtr|format)** \- render the last quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.
- **$(sysdate|nextQtr|format)** \- render the next quarter using the specified `format`.  Only year and quarter 
  information would be rendered here.  
- **$(sysdate|firstDOM|format)** \- render the first day of the month using specified `format`. 
- **$(sysdate|lastDOM|format)** \- render the last day of the month using specified `format`.  
- **$(sysdate|firstDOW|format)** \- render the first day of the week using specified `format`. 
- **$(sysdate|lastDOW|format)** \- render the last day of the week using specified `format`. 


### Example
Below is a sample test script that uses the `$(sysdate)` function (highlighted in **red**).<br/>
![script](image/$(sysdate)_01.png)

The output of this script looks something like this:<br/>
![output](image/$(sysdate)_02.png)


### See Also
- [`$(format)`]($(format)) 
- [`$(date)`]($(date))