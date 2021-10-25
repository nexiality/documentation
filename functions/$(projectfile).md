---
layout: default
title: $(projectfile)
parent: Built-in Functions
tags: projectfile $(projectfile)
comments: true
---


### Description
This built-in function provides reference to the files in the project directory of the running script. File reference 
will be relative to the project directory.

For example,<br/>
&nbsp; &nbsp; &nbsp; suppose the running script is **/project/MyProject/artifact/script/MyTestScript.xlsx**,<br/>
&nbsp; &nbsp; &nbsp; then based on standard Nexial project structure, the project directory is **/projects/MyProject**.
<br/>
&nbsp; &nbsp; &nbsp; Hence file reference will be relative to **/projects/MyProject**.


### Available Functions

#### `$(projectfile|text|file)`
Retrieve the content of a project file specified as `file`. Assumes that the target file has "text" content (not binary).

### Example
Suppose we have the following test **Script**:<br/>
![script](image/$(projectfile)_01.png)

Column **param1** of row 7 shows that we are instructing Nexial to retrieve the text content of a project file
under **artifact/data/myfile.txt** and print it in the output. Similar in row 9, column "param 2", the same
built-in function is used again for file content comparison.

Here's the **output**:<br/>
![output](image/$(projectfile)_02.png)

Notice that the output at row 7 is the same as the "text" property printed on row 9.

-----

#### `$(projectfile|executionErrorsAsHtml|tableOnly)`
Specialized built-in function to convert [execution errors] into HTML. Use `true` for `tableOnly` parameter to generate
only the HTML table. See [ErrorTracker](../userguide/ExecutionLogs#errortracker-error-only-log-file) for more details. 

-----

#### `$(projectfile|projectProperty|name)`
Display the value of a data variable specified in `project.properties`. For environment-specific properties file, such
as `project.QA.properties`, prepend the data variable `name` with `::{ENV}::`. For example,

- `$(projectfile|projectProperty|username)` reads the `username` data variable defined in `project.properties` 
- `$(projectfile|projectProperty|::QA::username)` reads the `username` data variable defined in `project.QA.properties` 

Note that this function reads **_specifically_** from the `project.properties` file only.

-----

#### `$(projectfile|projectProperty|name|value)`
Create or update the value of a data variable in `project.properties`. For environment-specific properties file, such
as `project.QA.properties`, prepend the data variable `name` with `::{ENV}::`. For example,

- `$(projectfile|projectProperty|username|Admin)` create or update the `username` data variable  defined in 
  `project.properties` with the value `Admin`.
- `$(projectfile|projectProperty|::QA::username|Admin)` create or update the `username` data variable defined in 
  `project.QA.properties` with the value `Admin`.

Note that this function will impact **_specifically_** the `project.properties` file only. If the specified data 
variable `name` already exists in the target `project.properties` file, the value will be updated in place (same line).
If the specified data variable `name` is a new one, it will be added to the end of the file.

The original `project.properties` file will be backed up in the output directory. For clarity, the backup file name 
will contain timestamp.

-----

#### `$(projectfile|macro|file|sheet|name)`
This specialized built-in function provides macro details such as macro file, sheet and macro name. These details mainly
needed to be referred to invocation of macro from **[base &raquo; `macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)))**.
In this case, `file` can be relative path or absolute path of macro excel. For more details about parameters, go through
**[base &raquo; `macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)))**.<br/>
In following example, first parameter of **[base &raquo; `macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)))**
command is the `$(projectfile)` built-in function which is used to invoke macro.<br/>
![script](image/$(projectfile)_03.png)

-----
### See Also
- [`$(syspath)`]($(syspath))


<script>jQuery(document).ready(function () { newOperationSelect(); });</script>