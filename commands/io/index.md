---
layout: default
title: io
tags: command io
comments: true
---


The "io" command type represents a series of automation commands regarding io operations:


### Available Commands
- [`assertEqual(file1,file2)`](assertEqual(file1,file2))
- [`assertNotEqual(file1,file2)`](assertNotEqual(file1,file2))
- [`assertPath(path)`](assertPath(path))
- [`assertReadableFile(file,minByte)`](assertReadableFile(file,minByte))
- [`base64(var,file)`](base64(var,file))
- [`compare(expected,actual,failFast)`](compare(expected,actual,failFast)) 
- [`copyFiles(source,target)`](copyFiles(source,target))
- [`copyFilesByRegex(sourceDir,regex,target)`](copyFilesByRegex(sourceDir,regex,target))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`deleteFiles(location,recursive)`](deleteFiles(location,recursive))
- [`deleteFilesByRegex(sourceDir,regex)`](deleteFilesByRegex(sourceDir,regex))
- [`filter(source,target,matchPattern)`](filter(source,target,matchPattern))
- [`makeDirectory(source)`](makeDirectory(source))
- [`moveFiles(source,target)`](moveFiles(source,target))
- [`moveFilesByRegex(sourceDir,regex,target)`](moveFilesByRegex(sourceDir,regex,target))
- [`readFile(var,file)`](readFile(var,file))
- [`readProperty(var,file,property)`](readProperty(var,file,property))
- [`rename(target,newName)`](rename(target,newName))
- [`saveDiff(var,expected,actual)`](saveDiff(var,expected,actual))
- [`saveFileMeta(var,file)`](saveFileMeta(var,file))
- [`saveMatches(var,path,fileFilter,textFilter)`](saveMatches(var,path,fileFilter,textFilter))
- [`searchAndReplace(file,config,saveAs)`](searchAndReplace(file,config,saveAs))
- [`unzip(zipFile,target)`](unzip(zipFile,target))
- [`validate(var,profile,inputFile)`](validate(var,profile,inputFile))
- [`writeBase64decode(encodedSource,decodedTarget,append)`](writeBase64decode(encodedSource,decodedTarget,append))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`writeFileAsIs(file,content,append)`](writeFile(file,content,append))
- [`writeProperty(file,property,value)`](writeProperty(file,property,value))
- [`zip(filePattern,zipFile)`](zip(filePattern,zipFile))
