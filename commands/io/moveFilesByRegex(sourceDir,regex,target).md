---
layout: default
title: moveFilesByRegex(sourceDir,regex,target)
parent: io
tags: command io
comments: true
---


### Description
This command moves all files matching the specified regex from one directory to other. This will always search 
files recursively and move matched files to given target location.

{% include _overrides_mode.md %}


### Parameters
- **sourceDir** : Full path of the directory to match files from.
- **regex** : Regex to match with the file.
- **target** : Full path of the destination file/directory.


### Example
**Script**:<br/>
![script](image/moveFilesByRegex_01.png)

**Output**:<br/>
![output](image/moveFilesByRegex_02.png)


### See Also
- [`moveFiles(source,target)`](moveFiles(source,target))
