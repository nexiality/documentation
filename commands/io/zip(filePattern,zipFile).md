---
layout: default
title: zip(filePattern,zipFile)
parent: io
tags: command io
comments: true
---


### Description
This command is to zip all files or folder, based on specified `filePattern`.


### Parameters
- **filePattern** - this parameter is the files or folder which need to be zipped
- **zipFile** - this parameter is the location of file where zip file need to be created


### Example
**Script**:<br/>
![script](image/zip_01.png)

**Output**:<br/>
![output](image/zip_02.png)

Location of the zip file created:<br/>
![location](image/zip_03.png)


### See Also
- [`unzip(zipFile,target)`](unzip(zipFile,target))
- [`writeProperty(file,property,value)`](writeProperty(file,property,value))
- [`saveDiff(var,expected,actual)`](saveDiff(var,expected,actual))
- [`compare(expected,actual,failFast) - io`](compare(expected,actual,failFast))
