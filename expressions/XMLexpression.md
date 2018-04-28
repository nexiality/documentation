---
layout: default
title: XML expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
XML provides transformational operations on a XML document.


### Operations
- **`count(xpath)`** \- counts the number of elements present at the specified `xpath`.
- **`extract(xpath)`** \- transform current XML document using `xpath`.
- **`store(var)`** \- save current EXCEL expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **`text`** \- transform current XML document into its textual representation.
