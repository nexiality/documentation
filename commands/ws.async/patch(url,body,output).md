---
layout: default
title: patch(url,body,output)
parent: ws.async
tags: command ws async asynchronous api patch
comments: true
---


### Description
> This command is similar to [its `ws` counterpart](../ws/patch(url,body,var)), except for the asynchronous HTTP 
invocation and response handling. 

This command is used to send a HTTP PATCH request to the given endpoint url with the given request payload. The 
response will be saved to `output`. To learn about how to manipulate the response returned from the target URL, 
visit [HTTP Response](index#http-response).


### Parameters
- **url** - the target URL
- **body** - the request payload, or `(empty)` if none needed
- **output** - the file to save the [request and response information](index.html#http-response)


### See Also
- [`delete(url,body,output)`](delete(url,body,output))
- [`get(url,queryString,output)`](get(url,queryString,output))
- [`head(url,output)`](head(url,output))
- [`post(url,body,output)`](post(url,body,output))
- [`put(url,body,output)`](put(url,body,output))
