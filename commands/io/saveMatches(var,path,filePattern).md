---
layout: default
title: saveMatches(var,path,filePattern)
parent: io
tags: command io
comments: true
---


### Description
This command search through a directory denoted by `path` for files that matches the specified `filePattern`, and 
save the list of such files as an array (list) to the variable `var`. 

Note that this command **DOES NOT** search for matches recursively - i.e. no subdirectory.  Also, special care has 
been given to MS Office documents so that the working documents (such as `~myFile.xlsx`) will be ignored.


### Parameters
- **var** - the variable to store the matches
- **path** - the target path to be searched.  Note that this command does not search recursively
- **filePattern** - the file pattern to match.  To activate regular expression, prefix this parameter with 
  **`REGEX:`**.  For example, `*.json`, `project*.xlsx`, `REGEX:a.{2,5}\-\d{4}\.txt`. <br>
  Now we are also supporting multi-criteria filtering using [Nexial Filter](../../flowcontrols/filter) syntax on file 
  `name`, `size` and `lastMod` .For example `name end with saveMatches4.json & size = 0 & lastMod >= 0`.<br/>
  
**Note**: File pattern should contain space between file meta and Nexial filters otherwise Nexial treats the file 
pattern as old one.<br>
 For example,`name = saveMatches4.json` will return files with name `saveMatches4.json` while `name=saveMatches4.json` 
 will return files with name `name=saveMatches4.json`
 


### Example
**Script**:<br/>
![script](image/saveMatches_01.png)<br/>
**Script**:<br/>
![script](image/saveMatches_02.png)