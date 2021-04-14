---
layout: default
title: assertLocation(search)
parent: web
tags: command web
comments: true
---

### Description
This command instructs Nexial to check the current URL (of current window or tab) against the specified `search` 
parameter. If the specified `search` parameter is not found in the current URL, then the corresponding step will FAIL. 
This command supports PolyMatcher (see below).

{% include _polymatcher.md %}


### Parameters
- **search** - specify what information to assert on the current URL. PolyMatcher is supported here.


### Example

| cmd type | command                  | param 1               |
|:---------|:-------------------------|:----------------------|
| `web`    | `assertLocation(search)` | CONTAIN:`search.html` |

<br/>


### See Also
- [`open(url)`](open(url))
- [`openAndWait(url,waitMs)`](openAndWait(url,waitMs))
- [`saveLocation(var)`](saveLocation(var))
