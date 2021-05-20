---
layout: default 
title: checkByLocator(locator)
parent: desktop 
tags: command desktop checkbox
comments: true
---

### Description
This command instructs Nexial to click on a CheckBox component based on its `locator` **ONLY IF IT IS CURRENTLY 
UNCHECKED**. Using this command, one can ensure that the target checkbox will be checked after this command is executed.

If the specified `locator` does not resolve to a CheckBox component, the corresponding step will FAIL.

### Parameters
- **locator** - the locator of the target CheckBox component.


### Example


### See Also
- [`check(name)`](check(name))
- [`uncheckByLocator(locator)`](uncheckByLocator(locator))
- [`uncheck`](uncheck(name))
