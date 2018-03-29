---
title: web &raquo; closeAll()
parent: web
tags: command web
comments: true
---

### Description

- This command will close the current browser instance, effectively closing all open windows/tabs.  Note that all browser related operations will likely result in error after this command is executed – except for [`open(url)`](open(url)) or [`openAndWait(url,waitMs)`](openAndWait(url,waitMs)), which will in turn create new browser instance as a result.
- Closing a browser instance **DOES NOT** necessarily terminate any running web sessions on the corresponding server application.  Some cookies are created as [persistent](http://www.webopedia.com/TERM/P/persistent_cookie.html) and will remain as is between browser sessions.  Hence one should not reply on closing browser tab/window/instance as a guarantee to terminate or abandon web sessions.  Check [`webcookie`](../webcookie) page for available commands regarding cookies.

### Parameter(s)

- NONE

### Example

### See Also

- [`close()`](close())