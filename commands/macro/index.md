---
layout: default
title: macro
tags: command macro
comments: true
---

The concept of "macro" is explained in the [macro(file,sheet,name)](../base/macro(file,sheet,name)) page. To better 
support the implementation and the use of macros, Nexial provides a set of commands designed specifically clarify the
intent of each macros:
1. Use specialized command to clarify the intent of a macro, much akin to documentation.
2. Use specialized command to clarify the input expected by a macro.
2. Use specialized command to clarify the output produced by a macro.

In addition to macro-focused commands, Nexial also ships with an utility batch script to generate documentation (HTML)
for macros. Check [nexial-project-inspector](../../userguide/BatchFiles#nexial-project-inspectorcmd--nexial-project-inspectorsh)
for more details of this batch file. Here's an example of the generated documentation (part of Project Inspector):<br/>
![](image/macro_01.png)

The screenshot shows that the generated document contains a macro, its description, the data variables it expects and
the data variable it generates. The clipboard icon next to the macro name allows one to copy the macro reference and
paste it directly into a test script of the same project.

With some effort to properly implemented these macro-focused commands, the corresponding macros would be easier to 
find, to understand and to use.


### Available Commands
- [`description()`](description())
- [`expects(var,default)`](expects(var,default))
- [`produces(var,value)`](produces(var,value))
