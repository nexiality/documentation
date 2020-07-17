---
layout: default
title: combine(String path,fileFilter,saveTo)
parent: pdf
tags: command pdf
comments: true
---


### Description
This command instructs Nexial to find a list of PDF files in `path` that matches the specified `fileFilter`, and then
combine these PDF files into a single PDF file named as `saveTo`.
 
{% include _fileFilter.md %}

The `saveTo` parameter should be a fully qualified location of the combined PDF file.


### Parameters
- **path** - the location to scan for PDF files
- **fileFilter** - the filter to apply on `path` when searching for candidate PDF files.
- **saveTo** - the location to save the combined PDF file.


### Example


### See Also
