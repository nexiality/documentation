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

If the specified `locator` does not result in a desktop component, Nexil will FAIL the associated step.


### Parameters
- **var** - this parameter is the variable where the value is stored.
- **locator** - the locator(xpath) of the target element.


### Example


### See Also
- [`saveText(var,name)`](saveText(var,name))
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))
