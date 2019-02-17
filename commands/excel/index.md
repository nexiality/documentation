---
layout: default
title: excel 
tags: command excel
comments: true
---


The "excel" command type represents a series of automation commands regarding excel files and excel contents:


### Available Commands
- [`assertPassword(file)`](assertPassword(file))
- [`clear(file,worksheet,range)`](clear(file,worksheet,range))
- [`clearPassword(file,password)`](clearPassword(file,password))
- [`columnarCsv(file,worksheet,ranges,output)`](columnarCsv(file,worksheet,ranges,output))
- [`csv(file,worksheet,range,output)`](csv(file,worksheet,range,output))
- [`json(file,worksheet,range,header,output)`](json(file,worksheet,range,header,output))
- [`saveData(var,file,worksheet,range)`](saveData(var,file,worksheet,range))
- [`saveRange(var,file,worksheet,range)`](saveRange(var,file,worksheet,range))
- [`setPassword(file,password)`](setPassword(file,password))
- [`write(file,worksheet,startCell,data)`](write(file,worksheet,startCell,data))
- [`writeAcross(file,worksheet,startCell,array)`](writeAcross(file,worksheet,startCell,array))
- [`writeDown(file,worksheet,startCell,array)`](writeDown(file,worksheet,startCell,array))
- [`writeVar(var,file,worksheet,startCell)`](writeVar(var,file,worksheet,startCell))