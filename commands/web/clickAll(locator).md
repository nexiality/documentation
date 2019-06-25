---
layout: default
title: clickAll(locator)
parent: web
tags: command web
comments: true
---

### Description
Unlike [`click(locator)`](click(locator)) command, which automates the clicking of the first matching web element, this 
command automates the clicking of **ALL** web elements that matches the specified `locator`. Moreover this command
will not consider a FAIL when no web element is found to match the specified `locator`. This command internally
behaves the same (and shares the same code) as [`selectMultiOptions`](selectMultiOptions(locator)).

This command is designated for the web elements that do not trigger a change in current browser location when 
clicked, but instead some on-page JavaScript code such as marking certain elements as selected or unselected. This is
particularly useful towards more modern JavaScript-driven Web UI frameworks such as React.js or AngularJS. Many of the
modern JavaScript-driven Web frameworks render the conventional "dropdown options" as `<DIV>` elements. As such, one
can automate the clicking of such elements via this command.

If the clicking on one of the matching element results in a change in current browser location, then subsequent attempt
to click on other matching elements would likely cause a FAIL condition (since those elements will likely be unavailable 
after browser location changes). Also, if the locator does not resolve to any valid web element, this command will 
consider it as a FAIL.

Note that this command also honor the same System variable 
[`nexial.browser.forceJSClick`](../../systemvars/index#nexial.browser.forceJSClick) as 
[`click(locator)`](click(locator)) does.

Sometimes, again depending on the target applications, it might not be advisable to perform screenshot capture 
after the click command. Some application might need time to "settled down" before further navigational or automation 
actions can be performed upon it. This is especially true when a click command results in the rendering of a new tab or 
new window. When possible, it is probably to perform screenshot capture **after** the click command -- that means, 
mark the "screenshot" column with `x`.


### Parameters
- **locator** - this parameter is the xpath of the element on which action need to be performed.


### Example


### See Also
- [`click(locator)`](click(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs).html)
- [`clickByLabel(label)`](clickByLabel(label).html)
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs).html)
