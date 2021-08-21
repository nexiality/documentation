---
layout: default
title: saveAlertText(var)
parent: mobile
tags: command mobile profile alert
comments: true
---


### Description
**iOS only**<br/>
This command saves the text of the current alert dialog to `var`. 

{% include_relative _alert.html %}

As stated above, this command is only supported on iOS platform. If the corresponding profile is configured to 
automatically dismiss or accept alert dialog, then this command will likely result in a FAIL for the corresponding step.


### Parameters
- **var** - The data variable name to store the alert dialog text.


### Example


### See Also
- [`assertAlertPresent(text)`](assertAlertPresent(text))
- [`clearAlert(option)`](clearAlert(option))
