## <span class="command-type">base</span> :: <span class="command">startRecording()</span>

#### Description
This command is used to screening recording an execution.  The recording will capture the entire 
primary desktop. 

This command can be used at any step. Recording will be started from the point this command is 
invoked until [`stopRecording()`](stopRecording().html) is invoked.  It is saved as a MP4 file 
in the **output** directory under `captures` folder.

#### Example
Script:
![script](image/startRecording_02.png)

This command is used in conjunction with [`stopRecording()`](stopRecording().html) command. Using 
this command will stop all future:
![](image/startRecording_03.png)

#### See Also
* [`stopRecording()`](stopRecording().html)