---
title: INI expression
parent: expressions
tags: command expressions
comments: true
---


### Description
The [**INI** file format](https://en.wikipedia.org/wiki/INI_file) is an informal standard for configuration files for 
some platforms or software. INI files are simple text files with a basic structure composed of sections, properties, 
and values.  Here are some examples:

![](image/INIexpression_01.png)

![](image/INIexpression_02.png)


### Operations
- **`comment`** - returns the comment from the INI configuration data
- **`merge(mergeFileOrContent)`** - merges the content to the INI data
- **`newComment(comment)`** - adds the given comment to the INI data
- **`remove(section,key)`** - removes the key from the given section and returns the INI data
- **`save(filepath)`** - saves the INI data to the given file path
- **`set(section,key,value)`** - sets the key and value in the given section. If section is not available, creates 
  the section and sets the key and value.
- **`store(var)`** - save current INI expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **`text`** - returns the content of the INI data as text
- **`value(section,key)`** - gets the value of corresponding key from the given section
- **`values(section)`** - gets all the values available in the given section


###Example
**script:**<br/>
![script](image/INIexpression_03.png)

**Result:**<br/>
![output](image/INIexpression_04.png)