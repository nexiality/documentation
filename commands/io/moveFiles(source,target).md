---
layout: default
title: moveFiles(source,target)
parent: io
tags: command io
comments: true
---


### Description
This command moves the files from one location to other. The user need to provide `source` and `destination`.

If file matching regex is already present at the target location, Nexial provides following modes for moving file:-
- don't move file(default behaviour)
- override existing file
- taking backup of existing file and then move new file

To set one of the above modes, Nexial use [`nexial.io.copyConfig`](../../systemvars/index#nexial.io.copyConfig) variable.
Nexial expects one of these value [`backup`,`override`,`keepOriginal`] for above variable. Default value is `keepOriginal`.

### Parameters
- **source** \- the source location of the file to be moved
- **target** \- the target location to move to

### Example
**Script**:<br/>
![script](image/moveFiles_01.png)

**Output**:<br/>
![output](image/moveFiles_02.png)


### See Also
- [`makeDirectory(source)`](makeDirectory(source))
- [`copyFiles(source,target)`](copyFiles(source,target))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`saveFileMeta(var,file)`](saveFileMeta(var,file))
