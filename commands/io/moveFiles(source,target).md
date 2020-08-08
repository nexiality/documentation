---
layout: default
title: moveFiles(source,target)
parent: io
tags: command io
comments: true
---


### Description
This command moves the file(s)s from one location (`source`) to other (`target`). Th `target` parameter can be 
a file or directory. If the specified `target` does not exist and it ends with either `/` or '\' - indicating that it 
is a directory - then Nexial will attempt to create such directory before moving `source` to `target`. 

{% include _overrides_mode.md %}


### Parameters
- **source** - the source location of the file to be moved
- **target** - the target location to move to


### Example
**Script**:<br/>
![script](image/moveFiles_01.png)

**Output**:<br/>
![output](image/moveFiles_02.png)


### See Also
- [`makeDirectory(source)`](makeDirectory(source))
- [`moveFilesByRegex(sourceDir,regex,target)`](moveFilesByRegex(sourceDir,regex,target))
- [`copyFiles(source,target)`](copyFiles(source,target))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`saveFileMeta(var,file)`](saveFileMeta(var,file))
