---
layout: default
title: typeByLocator(locator,text)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command automates a series of keystrokes on a desktop element denoted by `locator`. The keystroke sequence, denoted
by `text`, may be a series of printable characters (such as `AbCdEf` or `123`) or function keys (such as `{CTRL}F`), or
the combination of the two.

Note that Nexial is not performing any validation as to whether the target element will accept the specified keystrokes.
The target element might be, for example, a button or a checkbox. As such, almost any keystroke sequence would render 
meaningless (with the exception of the ENTER or SPACE key, perhaps). Also, one should take special care when using 
keystroke sequences that might be OS-specific, such as `{COMMAND}Q` (Mac only) or `{CONTEXT}` (Windows only).

If the target element can be resolved via the specified `locator`, the corresponding step will be considered as a `FAIL`.

{% include _keystrokes.html %}
<br/>


### Parameters
- **locator** - this parameter is the locator of the element.
- **text** - this parameter is the text to be entered on the identified element.


### Example


### See Also
- [`saveLocatorCount(var,locator)`](saveLocatorCount(var,locator))
- [`saveAttributeByLocator(var,locator,attribute)`](saveAttributeByLocator(var,locator,attribute))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`waitForLocator(locator,maxWaitMs)`](waitForLocator(locator,maxWaitMs))
