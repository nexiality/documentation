---
layout: default
title: io
tags: command io
comments: true
---


The "io" command type represents a series of automation commands regarding io operations:

- [`assertEqual(file1,file2)`](assertEqual(file1,file2))
- [`assertNotEqual(file1,file2)`](assertNotEqual(file1,file2))
- [`assertReadableFile(file,minByte)`](assertReadableFile(file,minByte))
- [`compare(expected,actual,failFast)`](compare(expected,actual,failFast)) 
- [`copyFiles(source,target)`](copyFiles(source,target))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`deleteFiles(location,recursive)`](deleteFiles(location,recursive))
- [`filter(source,target,matchPattern)`](filter(source,target,matchPattern))
- [`makeDirectory(source)`](makeDirectory(source))
- [`moveFiles(source,target)`](moveFiles(source,target))
- [`readFile(var,file)`](readFile(var,file))
- [`readProperty(var,file,property)`](readProperty(var,file,property))
- [`saveDiff(var,expected,actual)`](saveDiff(var,expected,actual))
- [`saveFileMeta(var,file)`](saveFileMeta(var,file))
- [`saveMatches(var,path,filePattern)`](saveMatches(var,path,filePattern))
- [`unzip(zipFile,target)`](unzip(zipFile,target))
- [`validate(var,profile,inputFile)`](validate(var,profile,inputFile))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`writeProperty(file,property,value)`](writeProperty(file,property,value))
- [`zip(filePattern,zipFile)`](zip(filePattern,zipFile))
