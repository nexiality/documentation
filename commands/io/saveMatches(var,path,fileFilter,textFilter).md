---
layout: default
title: saveMatches(var,path,fileFilter,textFilter)
parent: io
tags: command io
comments: true
---


**This command was previously `saveMatches(var,path,filePattern)`.**

### Description
This command search through a directory denoted by `path` for files that matches the specified `fileFilter` and (optional) 
the specified `textFilter`, and save the list of such files as an array (list) to the variable `var`. The main goal of
this command is to automate the collection of files from a given location (`path`) that match the specified filter(s). 

{% include _fileFilter.md %}

In addition to file name, size and last-modification filter, this command also support content filtering (`textFilter`). 
This parameter is optional and may be omitted. When used in combination with `fileFilter` this can be a powerful way
to filtering files. `textFilter` supports regular expression as well. At this time, this command supports content 
filtering on all text-based files, PDF and XLSX. For both PDF and XLSX files, Nexial will extract text for content 
filtering automatically. 

Note that:
1. This command WILL automatically scan the specified `path` recursively. Use 
   [`nexial.io.matchRecursive`](../../systemvars/index.html#nexial.io.matchRecursive) to alter this behavior.
2. This command by default scans only files under the specified `path`. Set
   [nexial.io.matchIncludeDirectories`](../../systemvars/content.html#nexial.io.matchIncludeDirectories) true to 
   instruct Nexial to include subdirectories as well.
2. Special care has been given to MS Office documents so that the working documents (such as `~myFile.xlsx`) will be 
   ignored.


### Parameters
- **var** - the variable to store the matches
- **path** - the target path to be searched. Note that this command does not search recursively
- **fileFilter** - the file pattern to match. See above for further details
- **textFilter** - (optional) the content (text) pattern to match. See above for further details


### Example
**Script**:<br/>
![script](image/saveMatches_01.png)<br/>

**Script**:<br/>
![script](image/saveMatches_02.png)

