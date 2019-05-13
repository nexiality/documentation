---
layout: default
title: jwtParse(var,token,key)
parent: ws
tags: command ws web_service api
comments: true
---


### Description
This command parses the JWT Token to get the payload with provided digitally signed key, and stores it to `var`.


### Parameters
- **var** - the data variable to hold the parsed JWT Token
- **token** - the JWT Token for the content that is to parsed
- **key** - JWT secret key


### Example
**Script**:<br/>
![](image/jwtParse_01.png)

**Output**:<br/>
![](image/jwtParse_02.png)


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`put(url,body,var)`](put(url,body,var))