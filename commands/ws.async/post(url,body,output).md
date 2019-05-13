---
layout: default
title: post(url,body,output)
parent: ws.async
tags: command ws async asynchronous api post
comments: true
---


### Description
> This command is similar to [its `ws` counterpart](../ws/post(url,body,var)), except for the asynchronous HTTP 
invocation and response handling. 

This command is used to send POST request to the given endpoint URL. This could be used for both SOAP and RESTful 
Services. The response will be saved to `output`. To learn about how to manipulate the response returned from the 
target URL, visit [HTTP Response](index#http-response).


### Parameters
- **url** - the target URL
- **body** - the payload to send, or `(empty)` if none is to be send
- **output** - the file to save the [request and response information](index.html#http-response)


### See Also
- [`delete(url,body,output)`](delete(url,body,output))
- [`get(url,queryString,output)`](get(url,queryString,output))
- [`head(url,output)`](head(url,output))
- [`patch(url,body,output)`](patch(url,body,output))
- [`put(url,body,output)`](put(url,body,output))
