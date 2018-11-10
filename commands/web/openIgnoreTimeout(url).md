---
layout: default
title: openIgnoreTimeout(url)
parent: web
tags: command web url open timeout
comments: true
---


### Description
This command will open the specified `url` with higher tolerance against timeout. In most case, Nexial won't time out 
at all while the requested `url` or any included web resources are being fulfilled. This command is ideal for situation 
where the target `url` sits behind a slower or unpredictable compute resource, or the requested `url` includes 
significant amount of external resources, such as web ads or trackers, that adversely impact overall response time.


### Parameters
- **url** - this parameter is the URL to be opened.


### Example


### See Also
- [`open(url)`](open(url))
- [`openAndWait(url,waitMs)`](openAndWait(url,waitMs))
- [`openHttpBasic(url,username,password)`](openHttpBasic(url,username,password))
