{% include_relative _breadcrumb.html current="moveFiles(source,target)" %}


### Description
This command will move the files from one location to other. The user need to provide `source` and 
`destination`.


### Parameters
- **source** \- this parameter is the source location of the file to be picked.
- **target** \- this parameter is the target location of the file to be moved


### Example
Script:<br/>
![script](image/moveFiles_01.png)

Output:<br/>
![output](image/moveFiles_02.png)


### See Also
- [`makeDirectory(source)`](makeDirectory(source))
- [`copyFiles(source,target)`](copyFiles(source,target))
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`count(var,path,pattern)`](count(var,path,pattern))
- [`saveFileMeta(var,file)`](saveFileMeta(var,file))