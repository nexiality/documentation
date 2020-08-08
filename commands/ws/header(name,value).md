---
layout: default
title: header(name,value)
parent: ws
tags: command ws web_service api
comments: true
---


### Description
This command is used to add the header before making any Web Service request. Like setting
up request header's **Content-Type, Accept, etc..**

For more information about HTTP Headers:
- https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/bb802855(v=office.14)
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
- https://www.whatismybrowser.com/detect/client-hints
- https://www.oreilly.com/library/view/restful-web-services/9780596529260/apc.html

### Parameters
- **name** - the name of the header to set
- **value** - the corresponding value of the specified header `name`


### Example
![](image/header_01.png)


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`put(url,body,var)`](put(url,body,var))