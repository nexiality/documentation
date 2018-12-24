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
- **`attribute(xpath,name)`** - retrieves the value of `name` attribute from the element(s) that matched the specified
  `xpath`. If exactly one match is found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than
  one matches are found, a [`LIST`](LISTexpression) data type is returned instead.
- **`content(xpath)`** - retrieves the content of the element(s) that matched the specified `xpath`. If exactly one 
  match is found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, 
  a [`LIST`](LISTexpression) data type is returned instead.
- **`count(xpath)`** - counts the number of elements present at the specified `xpath`.
- **`extract(xpath)`** - transform current XML document using `xpath`.
- **`remove(xpath)`** - remove from the source XML the element(s) that matches the specified `xpath`.
- **`save(path,append)`** - save current expression content to `path`. If `path` resolves to an existing file, `append` 
  set as `true` will append current expression content to the said file. `append` is optional and defaults to `false`.
- **`store(var)`** - save current XML expression to a data variable.  If the specified `var` exists, its value will 
  be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **`text`** - transform current XML document into its textual representation.
- **`updateAttribute(xpath,name,value)`** - also known as **`update-attribute(xpath,name,value)`**. This operation 
  updates the attribute of all matched elements based on `name` and `value`. If `value` is empty, then the target 
  attributes are effectively removed. 
- **`updateContent(xpath,content)`** - also known as **`update-content(xpath,content)`**. This operation updates (
  technically speaking, replace) the content of the matched elements with the specified `content`. `content` may be 
  text or XML nodes. If `content` is empty, then the content of the target elements are effectively removed. 
