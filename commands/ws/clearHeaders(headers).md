---
layout: default
title: clearHeaders(headers)
parent: ws
tags: command ws web_service api
comments: true
---


### Description
This command is used to clear the HTTP request headers which were set previously. The `headers` parameter can either be 
`ALL` (meaning [all the HTTP headers set](header(name,value)) so far) or a list of headers (separated by 
[`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim)) to be cleared.


### Parameters
- **headers** - `ALL` or a list of HTTP headers separated by [`nexial.textDelim`](../../systemvars/index.html#nexial.textDelim.


### Example
There are two activities in the example shown in the screenshot. In the first Activity `COMMA SEPARATED`, the headers
`x`, `z` are cleared. Since these headers are mandatory, when the method is invoked the response body message 
turns out to be *Missing required request parameters: [x, z].*

In the second Activity named `ALL`, all the headers are cleared. So when the method is invoked the response body message
turns out to be *Missing required request parameters: [x, y, z]*.

**Script**:<br/>
![](image/clearHeaders_01.png)


### See Also
- [`header(name,value)`](header(name,value))
- [`headerByVar(name,var)`](headerByVar(name,var))