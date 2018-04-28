---
layout: default
title: close()
parent: web
tags: command web
comments: true
---

### Description
- Close the active browser tab/window.  This is usually the tab/window that was referenced in the preceding command.  
- If there is no more tab or window remain after the close operation, the browser instance will be terminated as well.  
  Otherwise, the previously opened tab/window will become the active tab/window after the close operation.
- In some instances, closing a tab/window would also trigger some "_clean up_" process internal to the target browser.  
  This is especially true for browsers with add-ons/plugins, as some add-ons have their own "shut down" process when 
  the attached browser tab/window is terminated.  For this reason, we have created a specific Nexial system variable - 
  [`nexial.browser.postCloseWaitMs`](../../systemvars/index.html#nexial.browser.postCloseWaitMs) - to provide some 
  "quiescent time" after a tab/window is closed.  This would allow the browser and affected add-ons to react to the 
  closing of a tab/window. This default "quiescent time" of 3 seconds can be modified via specifying a desired value 
  for [`nexial.browser.postCloseWaitMs`](../../systemvars/index.html#nexial.browser.postCloseWaitMs) in the corresponding data sheet.

### Parameters

- NONE

### Example

**Script**:<br/>
![](image/close_01.png)

**Output**:<br/>
![](image/close_02.png)

### See Also

- [`open(url)`](open(url))
- [`closeAll()`](closeAll())