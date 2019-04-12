---
layout: default
title: copyFiles(source,target)
parent: io
tags: command io
comments: true
---


### Description
This command copies files from one location to other.

If file is already present at the target location, Nexial provides following modes for copying file:-
- don't copy file(default behaviour)
- override existing file
- taking backup of existing file and copy new file

To set one of the above modes, Nexial use [`nexial.io.copyConfig`](../../systemvars/index#nexial.io.copyConfig) variable.
Nexial expects one of these modes  [`backup`,`override`,`keepOriginal`] for above variable. Default value is `keepOriginal`.

### Parameters
- **source** : Full path of the files to copy
- **target** : Full path of the destination

### Example
**Script**:<br/>
![script](image/copyFiles_01.png)

**Output**:<br/>
![output](image/copyFiles_02.png)
