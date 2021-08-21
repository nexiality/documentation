---
layout: default
title: type(locator,text)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
This command instructs Nexial to enter the specified `text` on the element denoted by `locator`. Such element is 
typically a TextBox or a TextArea component. If `text` is specified as `(empty)`, then Nexial will attempt to clear out
any existing text content on the target element.

After the text is entered, Nexial will wait for some time as a way of stabilizing the automation. The wait time is 
controlled via either the System variable `nexial.mobile.postActionWaitMs` or by the corresponding profile. For example,

`[profile].nexial.mobile.postActionWaitMs=800`

This wait time is optional and is specified in millisecond.


### Parameters
- **locator** - the target element to receive the text input. 
- **text** - the text to enter. Use `(empty)` to only clear out existing text content from the target element.


### Example


### See Also
