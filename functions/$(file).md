---
layout: default
title: $(file)
parent: Built-in Functions
tags: file $(file)
comments: true
---


### Description
This built-in function provides various file related operations.


### Available Functions

#### `$(file|append|file|content)`
Append `content` to `file` and return the full path of `file`.

**Example**<br/>
Our file looks like this.<br/>
![](image/$(file)_01.png)

Script<br/>
![](image/$(file)_02.png)

Output<br/>
![](image/$(file)_03.png)

-----

#### `$(file|asList|file)`
Read the content of `file` as a list where each line of the content is a list item. The 
  return value is a list separated by [`nexial.textDelim`](../systemvars/index#nexial.textDelim). 

**Example**
Input File<br/>
![](image/$(file)_04.png)

Script<br/>
![](image/$(file)_05.png)

Output<br/>
![](image/$(file)_06.png)

-----

#### `$(file|content|file)`
Read and return the content of `file`.

**Example**
Input File<br/>
![](image/$(file)_04.png)

Script<br/>
![](image/$(file)_07.png)

Output<br/>
![](image/$(file)_08.png)

-----

#### `$(file|copy|file|target)`
Copy `file` to `target` and return the full path of `target`.

**Example**
Script<br/>
![](image/$(file)_09.png)

Output File<br/>
![](image/$(file)_10.png)

-----

#### `$(file|delete|file)`
Delete `file` and return its full path.

**Example**
Script<br/>
![](image/$(file)_11.png)

Output<br/>
![](image/$(file)_12.png)

-----

#### `$(file|dir|file)`
Return the parent directory of `file`.

**Example**
Script<br/>
![](image/$(file)_13.png)

Output<br/>
![](image/$(file)_14.png)

-----

#### `$(file|lastmod|file)`
Return the last modified timestamp (
  <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_link">epoch</a>) of `file`.

**Example**
Script<br/>
![](image/$(file)_15.png)

Output<br/>
![](image/$(file)_16.png)

-----

#### `$(file|move|file|target)`
Move `file` to `target` and return the full path of `target`.

**Example**
Script<br/>
![](image/$(file)_17.png)

Output<br/>
![](image/$(file)_18.png)

File moved from `data` directory to `output` directory.<br/>
![](image/$(file)_19.png)<br/>
![](image/$(file)_20.png)

-----

#### `$(file|name|file)`
Return the file name of `file`.

**Example**
Script<br/>
![](image/$(file)_21.png)

Output<br/>
![](image/$(file)_22.png)

-----

#### `$(file|overwrite|file|content)`
Overwrite the content of `file` with `content` and return the full path of 
  `file`.  `file` is created if need be.

**Example**
Input File<br/>
[](image/$(file)_04.png)

Script<br/>
![](image/$(file)_23.png)

Output File<br/>
![](image/$(file)_24.png)

Output<br/>
![](image/$(file)_25.png)

-----

#### `$(file|prepend|file|content)`
Prepend (add to the beginning of file) `content` to `file` and return the full
  path of `file`.

**Example**
Script<br/>
![](image/$(file)_26.png)

Output File<br/>
![](image/$(file)_27.png)

Output<br/>
![](image/$(file)_28.png)

-----

#### `$(file|size|file)`
Return the size of `file`.

**Example**<br/>
Size of DataFile.txt<br/>
![](image/$(file)_29.png)

Script<br/>
![](image/$(file)_30.png)

Output<br/>
![](image/$(file)_31.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>
