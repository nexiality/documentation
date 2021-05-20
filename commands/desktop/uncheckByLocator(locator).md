---
layout: default 
title: uncheck(name)
parent: desktop 
tags: command desktop checkbox
comments: true
---


### Description
This command instructs Nexial to click on a CheckBox component based on its `locator` **ONLY IF IT IS CURRENTLY
CHECKED**. Using this command, one can ensure that the target checkbox will be unchecked after this command is executed.

If the specified `locator` does not resolve to a CheckBox component, the corresponding step will FAIL.

### Parameters
- **locator** - the locator of the target CheckBox component.


### Example


### See Also
- [`check(name)`](check(name))
- [`checkByLocator(locator)`](checkByLocator(locator))
- [`uncheckByLocator(locator)`](uncheckByLocator(locator))
