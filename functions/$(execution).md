---
layout: default
title: $(execution)
parent: Built-in Functions
tags: date $(execution)
comments: true
---


### Description
This built-in function expose the execution-level metadata, both the runtime and design-time information.


### Available Functions

#### `$(execution|step|index)`
Display the row number of the step currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}. In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_01.png)

The notification email would appear as like<br/>
![](image/$(execution)_02.png)

-----

#### `$(execution|step|name)`
Display the step currently in execution, in the format of <br/>
  `[ script name ][ scenario name ][ activity name ][ row number ]`

**Example**<br/>
{% include_relative example_execution.md  %} In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

Input datasheet<br/>
![](image/$(execution)_03.png)

The notification email would appear as like<br/>
![](image/$(execution)_04.png)

-----

#### `$(execution|step|script)`
Display the script name (without file extension) currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_05.png)

The notification email would appear as like<br/>
![](image/$(execution)_06.png)

-----

#### `$(execution|step|scenario)`
Display the scenario currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In data sheet<br/>
![](image/$(execution)_07.png)

The notification email would appear as like<br/>
![](image/$(execution)_08.png)

-----

#### `$(execution|step|activity)`
Display the activity currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_09.png)

The notification email would appear as like<br/>
![](image/$(execution)_10.png)

-----

#### `$(execution|step|iteration)`
Display the iteration index currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_11.png)

The notification email would appear as like<br/>
![](image/$(execution)_12.png)

-----

#### `$(execution|step|command)`
Display the command currently being executed

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_13.png)

The notification email would appear as like<br/>
![](image/$(execution)_14.png)

-----

#### `$(execution|step|description)`
Display the description of the step currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use this function in combination with email 
notification to expose the step that had failed during execution. 

In datasheet<br/>
![](image/$(execution)_15.png)

The notification email would appear as like<br/>
![](image/$(execution)_16.png)

-----

#### `$(execution|activity|name)`
Display the activity currently in execution

**Example**<br/>
Here we are using [io &raquo; `writeFile(file,content,append)`](../commands/io/writeFile(file,content,append)) in 
conjunction with this function to write custom log files containing the details of the activity under execution.  

Input function<br/>
![](image/$(execution)_17.png)

Output<br/>
![](image/$(execution)_18.png)

-----

#### `$(execution|activity|script)`
Display the script name currently in execution

**Example**<br/>
Here we are using [io &raquo; `writeFile(file,content,append)`](../commands/io/writeFile(file,content,append)) in 
conjunction with this function to write custom log files containing the details of the activity under execution.  

Input function<br/>
![](image/$(execution)_19.png)

Output<br/>
![](image/$(execution)_20.png)

-----

#### `$(execution|activity|iteration)`
Display the iteration index currently in execution

**Example**<br/>
Here we are using [io &raquo; `writeFile(file,content,append)`](../commands/io/writeFile(file,content,append)) in 
conjunction with this function to write custom log files containing the details of the activity under execution.  

Input function<br/>
![](image/$(execution)_21.png)

Output<br/>
![](image/$(execution)_22.png)

-----

#### `$(execution|activity|scenario)`
Display the scenario currently in execution

**Example**<br/>
Here we are using [io &raquo; `writeFile(file,content,append)`](../commands/io/writeFile(file,content,append)) in 
conjunction with this function to write custom log files containing the details of the activity under execution.  

In script file<br/>
![](image/$(execution)_23.png)

Log File<br/>
![](image/$(execution)_24.png)

-----

#### `$(execution|scenario|name)`
Display the scenario currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use an event notification in the form of an email to 
expose the details of the scenario which has just started execution. 

Input function<br/>
![](image/$(execution)_25.png)

Output<br/>
![](image/$(execution)_26.png)

-----

#### `$(execution|scenario|script)`
Display the script name currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use an event notification in the form of an email to 
expose the details of the scenario which has just started execution. 

Input function<br/>
![](image/$(execution)_27.png)

Output<br/>
![](image/$(execution)_28.png)

-----

#### `$(execution|scenario|iteration)`
Display the iteration index currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use an event notification in the form of an email to 
expose the details of the scenario which has just started execution. 

In datasheet<br/>
![](image/$(execution)_29.png)

The notification email will appear as like.<br/>
![](image/$(execution)_30.png)

-----

#### `$(execution|iteration|index)`
Display the iteration index currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use these functions in combination with `console` 
event notification to find out which iteration has started execution. 

In datasheet<br/>
![](image/$(execution)_31.png)

The console will appear like so<br/>
![](image/$(execution)_32.png)<br/>
![](image/$(execution)_33.png)<br/>
![](image/$(execution)_34.png)<br/>

-----

#### `$(execution|iteration|script)`
Display the script name currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use these functions in combination with `console` 
event notification to find out which iteration has started execution. 

In datasheet<br/>
![](image/$(execution)_35.png)

The console will appear like so<br/>
![](image/$(execution)_36.png)

-----

#### `$(execution|script|name)`
Display the script name (without file extension) currently in execution

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use an event notification in the form of an email to 
expose details of a script that has just completed its execution.

In datasheet<br/>
![](image/$(execution)_37.png)

The notification email will appear as like<br/>
![](image/$(execution)_38.png)

-----

#### `$(execution|script|fullpath)`
Display the fullpath of the script currently in execution.<br/>
**Note**: The script used during execution is the output file created at the start of execution. Not to be confused 
with `artifact/script/script-file.xlsx`. 

**Example**<br/>
{% include_relative example_execution.md  %}  In this example, we use an event notification in the form of an email to 
expose details of a script that has just completed its execution.

In datasheet<br/>
![](image/$(execution)_39.png)

The notification email will appear as like<br/>
![](image/$(execution)_40.png)

-----

#### `$(execution|meta|nexial)`
Display the current Nexial version.

**Example**<br/>
{% include_relative example_execution.md  %}  Here, we are using this function in combination with `sms` event notification
to expose metadata about the the nexial version used for the execution.

Input function<br/>
![](image/$(execution)_41.png)

Output<br/>
![](image/$(execution)_42.png)

-----

#### `$(execution|meta|java)`
Display the current Java version.

**Example**<br/>
{% include_relative example_execution.md  %}  Here, we are using this function in combination with `sms` [Event Notification](../userguide/EventNotification.md)
 to expose metadata about the the java version used for the execution.

Input function<br/>
![](image/$(execution)_43.png)

Output<br/>
![](image/$(execution)_44.png)

-----

#### `$(execution|meta|user)`
Display the username of the current Nexial execution.

**Example**<br/>
{% include_relative example_execution.md  %}  Here, we are using this function in combination with `sms` [Event Notification](../userguide/EventNotification.md)
 to expose metadata about the username which carried out the execution.
 
Input function<br/>
![](image/$(execution)_45.png)

Output<br/>
![](image/$(execution)_46.png)

-----

### See Also
- [userguide &raquo; `EventNotification`](../userguide/EventNotification)

-----
<script>jQuery(document).ready(function () { newOperationSelect(); });</script>


