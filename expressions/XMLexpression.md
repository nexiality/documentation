---
layout: default
title: XML expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
XML Expression provides transformational operations on a XML document.


### Operations
#### **`append(xpath,content)`**
search against specified `xml` via `xpath`, and append `content` to all matching instances. 

-----

#### **`attribute(xpath,name)`**
Retrieves the value of `name` attribute from the element(s) that matched the specified `xpath`. If exactly one match is 
found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, a 
[`LIST`](LISTexpression) data type is returned instead.

-----

#### **`content(xpath)`**
Retrieves the content of the element(s) that matched the specified `xpath`. If exactly one match is found, this 
operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, a [`LIST`](LISTexpression) 
data type is returned instead.

-----

#### **`beautify`**
"Pretty" formatting on current XML document to improve readability.

-----

#### **`clear(xpath)`**
Search against specified `xml` via `xpath` and clear content of all matching instances.  

-----

#### **`count(xpath)`**
Counts the number of elements present at the specified `xpath`.

-----

#### **`delete(xpath)`**
Search against specified `xml` via `xpath` and delete xml node of all matching instances  

-----

#### **`extract(xpath)`**
Transform current XML document using `xpath`.

-----

#### **`insertAfter(xpath,content)`**
Search against specified `xml` via `xpath`, and insert `content` after all matching instances. 

-----

#### **`insertBefore(xpath,content)`**
Search against specified `xml` via `xpath`, and insert `content` before all matching instances. 

-----

#### **`minify`**
Compressed current XML document which are suitable for effecient data transfer.

-----

#### **`prepend(xpath,content)`**
Search against specified `xml` via `xpath`, and prepend `content` to all matching instances. 

-----

#### **`remove(xpath)`**
Remove from the source XML the element(s) that matches the specified `xpath`.

-----

#### **`replace(xpath,content)`**
Search against specified `xml` via `xpath`, and replace `content` against all matching instances. 

-----

#### **`replaceIn(xpath,content)`**
Search against specified `xml` via `xpath`, and replace inside content of all matching instances. 

-----

#### **`save(path,append)`**
Save current expression content to `path`. If `path` resolves to an existing file, `append` set as `true` will append 
current expression content to the said file. `append` is optional and defaults to `false`.

-----

#### **`store(var)`**
Save current XML expression to a data variable.  If the specified `var` exists, its value will be overwritten. Using 
this operation, one can put an expression on pause and resume it at a later time.

-----

#### **`text`**
Transform current XML document into its textual representation.

-----

#### **`updateAttribute(xpath,name,value)`**
Also known as **`update-attribute(xpath,name,value)`**. This operation updates the attribute of all matched elements 
based on `name` and `value`. If `value` is empty, then the target attributes are effectively removed. 

-----

#### **`updateContent(xpath,content)`**
Also known as **`update-content(xpath,content)`**. This operation updates (technically speaking, replace) the content 
of the matched elements with the specified `content`. `content` may be text or XML nodes. If `content` is empty, then 
the content of the target elements are effectively removed. 

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>

