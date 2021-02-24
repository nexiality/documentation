---
layout: default
title: saveText(var,name)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to save the text of the target element (denoted as `name`) into a variable named as `var`.

Depending on the type of the target element, the capturing of "text" will differ:
- if the target element is a dropdown (a.k.a. pick list), the selected option will be captured.
- if the target element is a textbox or textarea (supports multi-line input), the current text input will be captured.
- if the target element is a label or other non-interactive element, the current displayed text will be captured.
- if the target element is a checkbox, then the captured value potentially may be `True` (checked), `False` (unchecked)
  or none (indeterminate). For the last case, the specified `var` will be removed since there's no value was captured.
  Note that not all checkbox components support the _"tri-state"_ behavior.

If no text is found, the specified `var` will be removed to avoid any confusion.


### Parameters
- **var** - this parameter is the variable where the value is stored.
- **name** - this parameter is the name of the target element.


### Example


### See Also
- [`saveTextByLocator(var,locator)`](saveTextByLocator(var,locator))
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))
