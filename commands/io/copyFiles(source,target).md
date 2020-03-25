---
layout: default
title: copyFiles(source,target)
parent: io
tags: command io
comments: true
---


### Description
This command copies files from one location to other.

{% include _overrides_mode.md %}

At its simplest form, one can use this command to copy a file to another location:<br/>
![](image/copyFiles_03.png)<br/>

Another use of this command is to copy the same file to the same location under a different name:<br/>
![](image/copyFiles_05.png)<br/>

One can also use this command to copy multiple files to another directory:<br/>
![](image/copyFiles_04.png)<br/>

Note that if the target location does not exist, Nexial will attempt to create it on the fly.


### Parameters
- **source** : Full path of the files to copy
- **target** : Full path of the destination


### Example
**Script**:<br/>
![script](image/copyFiles_01.png)

**Output**:<br/>
![output](image/copyFiles_02.png)


### See Also
- [`copyFilesByRegex(sourceDir,regex,target)`](copyFilesByRegex(sourceDir,regex,target))
- [`moveFiles(source,target)`](moveFiles(source,target))
- [`moveFilesByRegex(sourceDir,regex,target)`](moveFilesByRegex(sourceDir,regex,target))
- [`rename(target,newName)`](rename(target,newName))
