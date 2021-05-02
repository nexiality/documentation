---
layout: default
title: screenshot(file,locator,removeFixed)
parent: web
tags: command web locator values
comments: true
---

### Description
This command automates the screen capture (to `file`) of a Web element denoted by `locator`. If the `locator` resolves
to multiple web element, then only the first one is considered. 

Some web pages might contain persistent (_"sticky"_) navigation elements on the top or bottom of a page. While Nexial 
is scrolling the target web element during screenshot capturing, the persistent element would continue to appear. To 
circumvent such issue, one can specify the `removeFixed` parameter as `true` to activate additional automation in
Nexial. When `removeFixed` parameter is set to `true`, Nexial will attempt to find any existing persistent navigation
(either top or bottom of the page) and disable its positional persistence. After screenshot capturing is complete,
Nexial will restore the page navigation's positional persistence.

If [`nexial.outputToCloud`](../../systemvars/index.html#nexial.outputToCloud) System variable is set to `true`, then the 
captured image will be uploaded to the cloud as well.


### Parameters
- **file** - the screen capture saved as a file.
- **locator** - this parameter is the locator of the element.
- **removeFixed** - `true` if Nexial should temporarily disable persistent navigation placements while performing 
  screen capturing.


### Example
Suppose we want to capture element image from acousticguitar.com:<br/>
![](image/screenshot_03.png)

**Script**:<br/>
![](image/screenshot_01.png)

**The captured image**:<br/>
![](image/screenshot_02_1.png)


### See Also
- [`screenshotInFull(file,locator,removeFixed)`](screenshotInFull(file,timeout,removeFixed))