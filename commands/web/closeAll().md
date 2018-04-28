---
layout: default
title: closeAll()
parent: web
tags: command web
comments: true
---

### Description
This command closes the current browser instance, effectively closing all open windows/tabs.  Note that all browser 
related operations will likely result in error after this command is executed – except for [`open(url)`](open(url)) 
or [`openAndWait(url,waitMs)`](openAndWait(url,waitMs)), which will in turn create new browser instance as a result.

Closing a browser instance **DOES NOT** necessarily terminate any running web sessions on the corresponding server 
application.  Some cookies are created as 
<a href="http://www.webopedia.com/TERM/P/persistent_cookie.html" class="external-link" target="_nexial_target">persistent</a> 
and will remain as is between browser sessions.  Hence one should not rely on closing browser tab/window/instance as 
a guarantee to terminate or abandon web sessions.  Check [`webcookie`](../webcookie) page for available commands 
regarding cookies.


### Parameters
- NONE


### Example


### See Also
- [`close()`](close())