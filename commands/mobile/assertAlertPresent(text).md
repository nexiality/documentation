---
layout: default
title: assertAlertPresent(text)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
**iOS only**<br/>
This command asserts that an alert dialog is displayed on the corresponding mobile device. 

{% include_relative _alert.html %}

As stated above, this command is only supported on iOS platform. Optionally, one can use the `text` parameter to assert
the content of the alert dialog. In this way, both the presence of an alert dialog and its content can be validated at 
the same time. PolyMatcher is supported for the `text` parameter.

{% include _polymatcher.md %}


### Parameters
- **text** - The content of an alert dialog to assert. PolyMatcher is supported here. Use `(empty)` if no content 
 assertion is needed.


### Example


### See Also
- [`clearAlert(option)`](clearAlert(option))
- [`saveAlertText(var)`](saveAlertText(var))
