---
layout: default
title: put(url,body,var)
parent: ws
tags: command ws
comments: true
---


### Description
This command sends a HTTP PUT request to the given `url` with the given request `body`. The 
[response](index#http-response) is captured and stored as `var`.

To learn about how to utilize the response returned from the target URL, click [here](index.html#http-response).

{% include_relative _file.md %}


### Parameters
- **url** - the target URL
- **body** - the payload to send, or `(empty)` if none is to be send
- **var** - the variable to hold the [response](index.html#http-response)


### Example


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`get(url,queryString,var)`](get(url,queryString,var))
- [`head(url,var)`](head(url,var))
- [`patch(url,body,var)`](patch(url,body,var))
- [`post(url,body,var)`](post(url,body,var))
