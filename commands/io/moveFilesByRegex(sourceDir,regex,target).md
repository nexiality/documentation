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

If file matching regex is already present at the target location, Nexial provides following modes for moving file:-
- don't move file(default behaviour)
- override existing file
- taking backup of existing file and then move new file

To set one of the above modes, Nexial use [`nexial.io.copyConfig`](../../systemvars/index#nexial.io.copyConfig) variable.
Nexial expects one of these value [`backup`,`override`,`keepOriginal`] for above variable. Default value is `keepOriginal`.

### Parameters
- **sourceDir** : Full path of the directory to match files from.
- **regex** : Regex to match with the file.
- **target** : Full path of the destination file/directory.

### Example
**Script**:<br/>
![script](image/moveFilesByRegex_01.png)

**Output**:<br/>
![output](image/moveFilesByRegex_02.png)
