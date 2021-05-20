---
layout: default 
title: check(name)
parent: desktop 
tags: command desktop checkbox
comments: true
---

### Description
This command instructs Nexial to click on a CheckBox component on the current [form](useForm(formName)) 
**ONLY IF IT IS CURRENTLY UNCHECKED**. Using this command, one can ensure that the target checkbox will be checked after
this command is executed.

If the specified `name` does not match a CheckBox component, the corresponding step will FAIL.


### Parameters
- **name** - this parameter is the name of the CheckBox element.


### Example


### See Also
- [`checkByLocator(locator)`](checkByLocator(locator))
- [`uncheckByLocator(locator)`](uncheckByLocator(locator))
- [`uncheck`](uncheck(name))
