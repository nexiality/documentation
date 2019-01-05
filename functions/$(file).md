---
layout: default
title: $(file)
parent: Built-in Functions
tags: file $(file)
comments: true
---


### Description
This built-in function provides various file related operations.


### Available Functions
- **`$(file|append|file|content)`** - append `content` to `file` and return the full path of `file`.
- **`$(file|asList|file)`** - read the content of `file` as a list where each line of the content is a list item. The 
  return value is a list separated by [`nexial.textDelim`](../systemvars/index#nexial.textDelim). 
- **`$(file|content|file)`** - read and return the content of `file`.
- **`$(file|copy|file|target)`** - copy `file` to `target` and return the full path of `target`.
- **`$(file|delete|file)`** - delete `file` and return its full path.
- **`$(file|dir|file)`** - return the parent directory of `file`.
- **`$(file|lastmod|file)`** - return the last modified timestamp (
  <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_link">epoch</a>) of `file`.
- **`$(file|move|file|target)`** - move `file` to `target` and return the full path of `target`.
- **`$(file|name|file)`** - return the file name of `file`.
- **`$(file|overwrite|file|content)`** - overwrite the content of `file` with `content` and return the full path of 
  `file`.  `file` is created if need be.
- **`$(file|prepend|file|content)`** - prepend (add to the beginning of file) `content` to `file` and return the full
  path of `file`.
- **`$(file|size|file)`** - return the size of `file`.


### Example


### See Also
