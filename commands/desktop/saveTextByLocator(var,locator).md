---
layout: default
title: saveTextByLocator(var,locator)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command attempts to retrieve the text content of the desktop element matching `locator` and saving such content to
`var`. Technically speaking, Nexial retrieves the value of the `Text` attribute - and failing that, the value of the 
`Name` attribute. The retrieved value will overwrite any existing value of `var`.

Note that if no text can be found, the specified data variable will be removed to avoid confusion.

If the specified `locator` does not result in a desktop component, Nexial will FAIL the associated step.

As of [Nexial v3.7](../../release/nexial-core-v3.7.changelog), this command provides special handling for "Checkbox" and
"Radio" elements:
- If the target component is selected/checked, then `True` will be the text to save. 
- If the target component is not selected/checked, then `False` will be the text to save.


### Parameters
- **var** - this parameter is the variable where the value is stored.
- **locator** - the locator(xpath) of the target element.


### Example


### See Also
- [`saveText(var,name)`](saveText(var,name))
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))
