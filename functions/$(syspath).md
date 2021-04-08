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
qualified path, such as `C:\projects\MyProject` or 
`/Users/user123/projects/MyApplication/artifact/script/TEST-1234.xlsx`, one can specify `$(syspath|project|fullpath)` 
or `$(syspath|script|fullpath)/TEST-1234.xlsx` instead. During execution, Nexial will resolve the appropriate 
physical path, thus your script is guarded against location or even OS changes.For using this built-in function a proper
[`Nexial Project Structure`](../userguide/UnderstandingProjectStructure) must be followed.

For each of the following options, one can add a second parameter as followed:
- **name** - the (directory) name of the target location
- **fullpath** - the fully qualified location of the target location
- **base** - the parent location of the target location

To use one of the operations in `$(syspath)`, one would provide a secondary parameter as listed above. For example,
- `$(syspath|project|name)` would render the directory name of the current project
- `$(syspath|out|base)` would render the parent directory (full path) of the output directory
- `$(syspath|temp|fullpath)` would render the full path of the temp. directory

**Note**: When this function is used on text that may contain path separator `/`, such as the `XML` or `HTML` closing 
tags (i.e. `<file>$(syspath|data|fullpath)/mydata.txt</file>`), it is recommended to first assign the path value to a 
variable and then use that variable to resolve the target text. For example, assign the path value to a variable 
`mydatafile` in the data file, and its value as `$(syspath|data|fullpath)/mydata.txt` and then in the target text 
as `<file>${mydatafile}</file>`.

#### See Also
- [`$(projectfile)`]($(projectfile))

-----


### Available Functions

#### `$(syspath|project|base)`
The full path of the parent directory of the current project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_01.png)

Output:<br/>
![output](image/$(syspath)_02.png)

-----

#### `$(syspath|project|fullpath)`
The full path of the current project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_01.png)

Output:<br/>
![output](image/$(syspath)_02.png)

-----

#### `$(syspath|project|name)`
The directory name of the current project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_01.png)

Output:<br/>
![output](image/$(syspath)_02.png)

-----

#### `$(syspath|script|base)`
The standard location where Nexial scripts (Excel) are stored. This is usually the 
[`artifact/script`](../userguide/UnderstandingProjectStructure#artifactscript) directory under the target 
project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_03.png)

Output:<br/>
![output](image/$(syspath)_04.png)

-----

#### `$(syspath|script|fullpath)`
The fully qualified path of the script file under the project directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_03.png)

Output:<br/>
![output](image/$(syspath)_04.png)

-----

#### `$(syspath|script|name)`
The name of the script file stored under the project directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_03.png)

Output:<br/>
![output](image/$(syspath)_04.png)

-----

#### `$(syspath|data|base)` 
The standard location where Nexial test data (Excel) are stored. This is usually the 
[`artifact/data`](../userguide/UnderstandingProjectStructure#artifactdata) directory under the target project, but 
can be overridden via the `-data` command line argument.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_05.png)

Output:<br/>
![output](image/$(syspath)_06.png)

-----

#### `$(syspath|data|fullpath)`
The full path of the data file.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_05.png)

Output:<br/>
![output](image/$(syspath)_06.png)

-----

#### `$(syspath|data|name)`
The name of the date file.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_05.png)

Output:<br/>
![output](image/$(syspath)_06.png)

-----
 
#### `$(syspath|plan|base)`
The standard location where Nexial plans (Excel) are stored. This is usually the
[`artifact/plan`](../userguide/UnderstandingProjectStructure#artifactplan) directory under the target project.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_07.png)

Output:<br/>
![output](image/$(syspath)_08.png)

-----

#### `$(syspath|plan|fullpath)`
The fully qualified path of the plan file under the project directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_07.png)

Output:<br/>
![output](image/$(syspath)_08.png)

-----

#### `$(syspath|plan|name)`
The name of the plan file.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_07.png)

Output:<br/>
![output](image/$(syspath)_08.png)

-----
 
#### `$(syspath|out|base)`
The output directory for the current execution. This would be a directory named 
[`output`](../userguide/UnderstandingProjectStructure#output) under the target project, or whatever specified via
the `-output` command line argument.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_09.png)

Output:<br/>
![output](image/$(syspath)_10.png)

-----

#### `$(syspath|out|fullpath)`
The fully qualified path of the output for the current execution.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_09.png)

Output:<br/>
![output](image/$(syspath)_10.png)

-----

#### `$(syspath|out|name)`
The name of the output directory for the current execution.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_09.png)

Output:<br/>
![output](image/$(syspath)_10.png)

-----

#### `$(syspath|screenshot|base)`
The standard location where screen captures are stored. This is usually a directory named  `captures` under the 
output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_11.png)

Output:<br/>
![output](image/$(syspath)_12.png)

-----

#### `$(syspath|screenshot|fullpath)`
The fully qualified path of the standard location where screen captures are stored. This is usually a directory named  `captures` 
under the output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_11.png)

Output:<br/>
![output](image/$(syspath)_12.png)

-----

#### `$(syspath|screenshot|name)`
The directory name of the standard location where screen captures are stored. This is usually a directory named  `captures` 
under the output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_11.png)

Output:<br/>
![output](image/$(syspath)_12.png)

-----

#### `$(syspath|log|base)`
The standard location where logs are being kept. This is usually a directory named `logs` under the output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_13.png)

Output:<br/>
![output](image/$(syspath)_14.png)

-----

#### `$(syspath|log|fullpath)`
The fully qualified path of the standard location where logs are being kept. This is usually a directory named `logs` under the 
output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_13.png)

Output:<br/>
![output](image/$(syspath)_14.png)

-----

#### `$(syspath|log|name)`
The directory name standard location where logs are being kept. This is usually a directory named `logs` under the 
output directory.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_13.png)

Output:<br/>
![output](image/$(syspath)_14.png)

-----

#### `$(syspath|temp|base)`
The standard temporary storage location as defined via `java.io.tempdir` environment variable, which is often 
mapped to the `%TEMP%` or `$TMP` system variable.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_15.png)

Output:<br/>
![output](image/$(syspath)_16.png)

-----

#### `$(syspath|temp|fullpath)`
The fully qualified path of the standard temporary storage location as defined via `java.io.tempdir` environment variable, which 
is often mapped to the `%TEMP%` or `$TMP` system variable.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_15.png)

Output:<br/>
![output](image/$(syspath)_16.png)

-----

#### `$(syspath|temp|name)`
The directory name of the standard temporary storage location as defined via `java.io.tempdir` environment variable, 
which is often mapped to the `%TEMP%` or `$TMP` system variable.

**Example**<br/>
Script:<br/>
![script](image/$(syspath)_15.png)

Output:<br/>
![output](image/$(syspath)_16.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>