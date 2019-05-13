---
layout: default
title: get(url,queryString,output)
parent: ws.async
tags: command ws async asynchronous api get
comments: true
---


### Description
> This command is similar to [its `ws` counterpart](../ws/get(url,queryString,var)), except for the asynchronous HTTP 
invocation and response handling. 

This command sends a GET request to the specified `url`. The response will be saved to `output`. To learn about how to 
manipulate the response returned from the target URL, visit [HTTP Response](index#http-response).

### Parameters
- **url** - the target URL
- **queryString** - query string for the specified URL. Use `(empty)` to indicate no query string to send
- **output** - the file to save the [request and response information](index.html#http-response)


### See Also
- [`delete(url,body,output)`](delete(url,body,output))
- [`head(url,output)`](head(url,output))
- [`patch(url,body,output)`](patch(url,body,output))
- [`post(url,body,output)`](post(url,body,output))
- [`put(url,body,output)`](put(url,body,output))
