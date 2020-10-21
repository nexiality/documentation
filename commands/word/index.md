---
layout: default
title: word
tags: command word microsft-word ms-word
comments: true
---


### Introduction
This set of commands provide a set of automation related to Microsoft Word documents. Please note that only the 
<a href="https://en.wikipedia.org/wiki/Microsoft_Word#XML_Document_(Word_2003)" class="external-link" 
target="_nexial_link">Word 2003 or later</a>, otherwise known as  `docx`, file type is supported at this time. 
Macro-enabled document (`.docm`) file type is also supported for text extraction, but the embedded macro(s) would likely
not execute due to underlying security restriction.


### Available Commands
- [`assertContains(file,text)`](assertContains(file,text))
- [`assertNotContain(file,text)`](assertNotContain(file,text))
- [`assertNotReadOnly(file)`](assertNotReadOnly(file))
- [`assertPassword(file,password)`](assertPassword(file,password))
- [`assertReadOnly(file)`](assertReadOnly(file))
- [`extractText(var,file)`](extractText(var,file))
- [`readOnly(file,password)`](readOnly(file,password))
- [`removeProtection(file)`](removeProtection(file))
