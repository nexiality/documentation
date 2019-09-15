---
layout: default
title: patch(url,body,var)
parent: ws
tags: command ws
comments: true
---


### Description
This command is used to send a HTTP PATCH request to the given endpoint url with the given request payload

To learn about how to utilize the response returned from the target URL, click [here](index.html#http-response).

{% include_relative _file.md %}


### Parameters
- **url** - the target URL
- **body** - the request payload, or `(empty)` if none needed
- **var** - the variable to hold the [response](index.html#http-response)


### Example


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`get(url,queryString,var)`](get(url,queryString,var))
- [`head(url,var)`](head(url,var))
- [`post(url,body,var)`](post(url,body,var))
- [`put(url,body,var)`](put(url,body,var))
