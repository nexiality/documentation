---
layout: default
title: $(syspath)
parent: Built-in Functions
tags: syspath $(syspath)
comments: true
---


### Description
This built-in function provides the resolution of the physical location of your project artifacts, ie. test scripts, 
test data, etc. By using this function, one can keep the test project more portable. Instead of specifying the fully 
qualified path, such as `C:\projects\MyProject` or 
`/Users/user123/projects/MyApplication/artifact/script/TEST-1234.xlsx`, one can specify `$(syspath|project|fullpath)` 
or `$(syspath|script|fullpath)/TEST-1234.xlsx` instead. During execution, Nexial will resolve the appropriate 
physical path, thus your script is guarded against location or even OS changes.For using this built-in function a proper
[`Nexial Project Structure`](../userguide/UnderstandingProjectStructure) must be followed.

For each of the following options, one can add a second parameter as followed:
- **name** - the (directory) name of the target location
- **fullpath** - the fully qualified location of the target location
- **base** - the parent location of the target location


### Available Functions

#### `$(syspath|project|...)`
The location of the target project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_01.png)

Output:<br/>
![output](image/$(syspath)_02.png)

-----

#### `$(syspath|script|...)`
The standard location where Nexial scripts (Excel) are stored. This is usually the 
[`artifact/script`](../userguide/UnderstandingProjectStructure#artifactscript) directory under the target 
project.
        
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_03.png)

Output:<br/>
![output](image/$(syspath)_04.png)

-----

#### `$(syspath|data|...)` 
The standard location where Nexial test data (Excel) are stored. This is usually the 
[`artifact/data`](../userguide/UnderstandingProjectStructure#artifactdata) directory under the target project, but 
can be overridden via the `-data` command line argument.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_05.png)

Output:<br/>
![output](image/$(syspath)_06.png)

-----
 
#### `$(syspath|plan|...)`
The standard location where Nexial plans (Excel) are stored. This is usually the
[`artifact/plan`](../userguide/UnderstandingProjectStructure#artifactplan) directory under the target project.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_07.png)

Output:<br/>
![output](image/$(syspath)_08.png)

-----
 
#### `$(syspath|out|...)`
The output directory for the current execution. This would be a directory named 
[`output`](../userguide/UnderstandingProjectStructure#output) under the target project, or whatever specified via
the `-output` command line argument.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_09.png)

Output:<br/>
![output](image/$(syspath)_10.png)

-----

#### `$(syspath|screenshot|...)`
The standard location where screen captures are stored. This is usually a directory named  `captures` under the 
output directory.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_11.png)

Output:<br/>
![output](image/$(syspath)_12.png)

-----

#### `$(syspath|log|...)`
The standard location where logs are being kept. This is usually a directory named `logs` under the output directory.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_13.png)

Output:<br/>
![output](image/$(syspath)_14.png)

-----

#### `$(syspath|temp|...)`
The standard temporary storage location as defined via `java.io.tempdir` environment variable, which is often 
mapped to the `%TEMP%` or `$TMP` system variable.
    
**Example**<br/>
Script:<br/>
![script](image/$(syspath)_15.png)

Output:<br/>
![output](image/$(syspath)_16.png)

-----


For each of these functions, one would add a secondary parameter as listed in the **Description** section. For 
example,
- `$(syspath|project|name)` would render the directory name of the current project
- `$(syspath|out|base)` would render the parent directory (full path) of the output directory
- `$(syspath|temp|fullpath)` would render the full path of the temp. directory


**Note**: When this function needs to be used around the text that may contain path separator `/`, for e.g. `XML`
or `HTML` ending tags like `<file>$(syspath|data|fullpath)/mydata.txt</file>`, in such a case, it is recommended to
first assign the path value to a variable and then use that variable to resolve the target text. For e.g. in a
data file, first assign the path value to a variable `mydatafile` and the value as `$(syspath|data|fullpath)/mydata.txt`
and then in the target text as `<file>${mydatafile}</file>`.


### See Also
- [`$(projectfile)`]($(projectfile))

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>