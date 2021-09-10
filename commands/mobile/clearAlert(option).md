---
layout: default
title: clearAlert(option)
parent: mobile
tags: command mobile profile alert
comments: true
---


### Description

**iOS only**<br/>

This command dismiss the current alert dialog via the specified `option`. The `option` represents the label of the 
target button to press in order to dismiss an alert dialog. Typical examples are `OK`, `Accept`, `Cancel`.

{% include_relative _alert.html %}

As stated above, this command is only supported on iOS platform. If no alert dialog is present at the time of executing
this command, a FAIL will be generated for the corresponding step. Similarly, if the specified `option` cannot resolve
to a button on the alert dialog, a FAIL will be generated for the corresponding step. Note that PolyMatcher is supported
for the `option` parameter.

{% include _polymatcher.md %}


### Parameters
- **option** - The label of the target button to press in order to dismiss the current alert dialog.


### Example


### See Also
- [`assertAlertPresent(text)`](assertAlertPresent(text))
- [`saveAlertText(var)`](saveAlertText(var))
