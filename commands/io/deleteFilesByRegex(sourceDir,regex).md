---
layout: default
title: deleteFilesByRegex(sourceDir,regex)
parent: io
tags: command io
comments: true
---

### Description
This command deletes all files matching the specified regex from specified source directory.  This will always 
search files recursively and delete matched files.


### Parameters
- **sourceDir** - Full path of the directory to match files from. Note this can't be file path.
- **regex** - Regex to match with the file.


### Example
**Script**:<br/>
![script](image/deleteFilesByRegex_01.png)

**Output**:<br/>
![output](image/deleteFilesByRegex_02.png)


### See Also
- [`deleteFiles(location,recursive)`](deleteFiles(location,recursive))
