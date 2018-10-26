---
layout: default
title: base64(var,file)
parent: io
tags: command io
comments: true
---


### Description
This command reads the content of `file` as byte array, then encodes it as in base64, and finally store the base64 
sequence a data variable (`var`). This command does not read the content of `file` as text. In fact any file will be 
read in the respective binary form, thus allowing the base64 encoding to be file-type independent.


### Parameters
- **var** - the variable to store the encoded base64 text
- **file** - the file from which to read and encode as base64 text


### Example


### See Also
- [`base64encode`](../../expressions/TEXTexpression)
