---
layout: default
title: delete(url,body,var)
parent: ws
tags: command ws web_service api
comments: true
---


### Description
This command sends a HTTP DELETE request to perform delete operation with the given `url` and `body` (request payload).

To learn about how to utilize the response returned from the target URL, click [here](index.html#http-response).

{% include_relative _file.md %}


### Parameters
- **url** - the target URL
- **body** - the payload to be sent to target endpoint. If not required, use `(empty)` to denote no payload to 
  be sent.
- **var** - the variable to hold the [response](index.html#http-response)


### Example


### See Also
- [`get(url,queryString,var)`](get(url,queryString,var))
- [`head(url,var)`](head(url,var))
- [`patch(url,body,var)`](patch(url,body,var))
- [`post(url,body,var)`](post(url,body,var))
- [`put(url,body,var)`](put(url,body,var))
