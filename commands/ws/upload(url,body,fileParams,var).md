---
layout: default
title: upload(url,body,fileParams,var)
parent: ws
tags: command ws web_service api upload post
comments: true
---


### Description
This command is used to upload one or more files (i.e. multipart-data) to the target endpoint (denoted by `url`). This
command inherently issues a POST request, but with multipart support. The `body` parameter contains either the text or
file request parameters where each is kept as a separate line. The `fileParams` is a list of the request parameters 
that should be considered as files (i.e. the files to upload). See the following example:



### Parameters
- **url** - the target URL
- **body** - query string for the specified URL.  Use `(empty)` to indicate no query string to send
- **fileParams** - the location to save the downloaded file
- **var** - the variable to capture the upload response


### Example


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`put(url,body,var)`](put(url,body,var))
- [`download(url,queryString,saveTo)`](download(url,queryString,saveTo))
