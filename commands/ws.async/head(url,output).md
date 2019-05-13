---
layout: default
title: head(url,output)
parent: ws.async
tags: command ws async asynchronous api head
comments: true
---


### Description
> This command is similar to [its `ws` counterpart](../ws/head(url,var)), except for the asynchronous HTTP 
invocation and response handling. 

This command is identical to GET except that the server MUST NOT return a message-body in the response. The meta 
information contained in the HTTP headers in response to a HEAD request SHOULD be identical to the information sent 
in response to a GET request. This command can be used for obtaining meta information about the entity implied by the 
request without transferring the entity-body itself. This command is often used for testing hypertext links for 
validity, accessibility, and recent modification. The response will be saved to `output`. To learn about how to 
manipulate the response returned from the target URL, visit [HTTP Response](index#http-response).


### Parameters
- **url** - the target URL
- **output** - the file to save the [request and response information](index.html#http-response)


### See Also
- [`delete(url,body,output)`](delete(url,body,output))
- [`get(url,queryString,output)`](get(url,queryString,output))
- [`patch(url,body,output)`](patch(url,body,output))
- [`post(url,body,output)`](post(url,body,output))
- [`put(url,body,output)`](put(url,body,output))
