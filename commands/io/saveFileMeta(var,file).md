---
title: io &raquo; saveFileMeta(var,file)
parent: io
tags: command io
comments: true
---


### Description
This command will save the meta data in the file.This will read the content of the file and store into variable.
The data can be stored into variable and can be used for further testing requirement.


### Parameters
- **var** \- this parameter is used to store the data of the file into this variable
- **file** \- this parameter is location of the file and filename from where the data needs to be read


### Example
script:<br/>
![script](image/saveFileMeta_01.png)

output:<br/>
![output](image/saveFileMeta_02.png)


### See Also
- [`readFile(var,file)`](readFile(var,file))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`copyFiles(source,target)`](copyFiles(source,target))
