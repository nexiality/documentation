---
layout: default
title: $(syspath)
parent: Built-in Functions
tags: syspath $(syspath)
comments: true
---


### Description
This built-in function provides the resolution of the physical location of your project artifacts, ie. test scripts, 
test data, etc.  By using this function, one can keep the test project more portable. Instead of specifying the fully 
qualified path, such as `C:\projects\MyProject` or 
`/Users/user123/projects/MyApplication/artifact/script/TEST-1234.xlsx`, one can specify `$(syspath|project|fullpath)` 
or `$(syspath|script|fullpath)/TEST-1234.xlsx` instead.  During execution, Nexial will resolve the appropriate 
physical path, thus your script is guarded against location or even OS changes.

For each of the following options, one can add a second parameter as followed:
- **name** \- the (directory) name of the target location
- **fullpath** \- the fully qualified location of the target location
- **base** \- the parent location of the target location


### Available Functions
- **`$(syspath|project|...)`** \- the location of the target project.
- **`$(syspath|script|...)`** \- the standard location where Nexial scripts (Excel) are stored.  This is usually the 
  `artifact/script` directory under the target project.
- **`$(syspath|data|...)`** \- the standard location where Nexial test data (Excel) are stored. This is usually the 
  `artifact/data`  directory under the target project, but can be overridden via the `-data` command line argument.
- **`$(syspath|out|...)`** \- the output directory for the current execution.  This would be a directory named `output` 
  under the target project, or whatever specified via the `-output` command line argument.
- **`$(syspath|screenshot|...)`** \- the standard location where screen captures are stored.  This is usually a 
  directory named  `captures` under the output directory.
- **`$(syspath|log|...)`** \- the standard location where logs are being kept.  This is usually a directory named 
  `logs` under the output directory.
- **`$(syspath|temp|...)`** \- the standard temporary storage location as defined via `java.io.tempdir` environment 
  variable, which is often mapped to the `%TEMP%` or `$TMP` system variable.

For each of these functions, one would add a secondary parameter as listed in the **Description** section.  For 
example,
- `$(syspath|project|name)` would render the directory name of the current project
- `$(syspath|out|base)` would render the parent directory (full path) of the output directory
- `$(syspath|temp|fullpath)` would render the full path of the temp. directory


### Example
Here are some examples of using this built-in function:<br/>
![script](image/$(syspath)_01.png)

... and the **output**:<br/>
![output](image/$(syspath)_02.png)

**Note**: When this function needs to be used around the text that may contain path separator `/`, for e.g. `XML`
or `HTML` ending tags like `<file>$(syspath|data|fullpath)/mydata.txt</file>`, in such a case, it is recommended to
first assign the path value to a variable and then use that variable to resolve the target text. For e.g. in a
data file, first assign the path value to a variable `mydatafile` and the value as `$(syspath|data|fullpath)/mydata.txt`
and then in the target text as `<file>${mydatafile}</file>`.


 ### See Also
- [`$(projectfile)`]($(projectfile))
