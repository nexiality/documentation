---
layout: default
title: removeProtection(file)
parent: word
tags: command word password protection
comments: true
---


### Description
This command instructs Nexial to remove update restriction on the specified Word `file`.


### Parameters
- **file** - the fully qualified path of the target Word document.


### Example
Suppose we have a Word document that is currently protected from direct editing:<br/>
![](image/readOnly_03.png)

With this command we can remove the protection:<br/>
![](image/removeProtection_01.png)<br/>

This file is no longer protected:<br/>
![](image/readOnly_01.png)<br/>


### See Also
- [`assertNotReadOnly(file)`](assertNotReadOnly(file))
- [`assertReadOnly(file)`](assertReadOnly(file))
- [`readOnly(file,password)`](readOnly(file,password))