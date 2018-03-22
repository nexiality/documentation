include_relative _breadcrumb.html current="startRecording"


### Description
This command is used to screen record an execution.  The recording will capture the entire primary desktop (and thus 
will not work in a headless mode). 

The screen recording can start within any part of a script file.  It will be start recording from the point this 
command is invoked until [`stopRecording()`](stopRecording().html) is invoked _WITHIN THE SAME SCRIPT_.  The recording 
is saved as a MP4 in the **output** directory under `captures` folder.


### Example
Script:
![script](image/startRecording_02.png)

This command is used in conjunction with [`stopRecording()`](stopRecording().html) command. Using 
this command will stop all future:
![](image/startRecording_03.png)


### See Also
- [`stopRecording()`](stopRecording().html)
