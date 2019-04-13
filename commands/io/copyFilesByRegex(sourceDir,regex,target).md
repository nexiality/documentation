---
layout: default
title: copyFilesByRegex(sourceDir,regex,target)
parent: io
tags: command io
comments: true
---


### Description
This command copies all files matching the specified regex from one directory to other. This will always search 
files recursively and copy matched files to given target location.

{% include _overrides_mode.md %}


### Parameters
- **sourceDir** : Full path of the directory to match files from.
- **regex** : Regex to match with the file.
- **target** : Full path of the destination file/directory.


### Example
**Script**:<br/>
![script](image/copyFilesByRegex_01.png)

**Output**:<br/>
![output](image/copyFilesByRegex_02.png)


### See Also
- [`copyFilesByRegex(sourceDir,regex,target)`](copyFilesByRegex(sourceDir,regex,target))
