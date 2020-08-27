---
layout: default
title: waitForFile(file,minFileSize,waitMs,maxWaitMs)
parent: io
tags: command io
comments: true
---


### Description
Instruct Nexial to wait for the specified `file` to "*stabilize*", which means that:
- such `file` is readable,
- such `file` has at least the file size greater or equal to `minFileSize`,
- such `file` has a file size and last-modified timestamp that remains unchanged between `waitMs` millisecond,

Nexial will continuously change for the above-mentioned conditions until `maxWaitMs` time is reached. After `maxWaitMs`
time, if the specified `file` still does not satisfy all the conditions, then Nexial will consider this command
as **FAIL**.


### Parameters
- **file** - the file to inspect for stabilization
- **minFileSize** - the minimum file size the specified `file` should have
- **waitMs** - the number of milliseconds to wait before checking for file stabilization
- **maxWaitMs** - the maximum amount of time to wait before this command is deemed as "UNSTABLE"


### Example


### See Also
