---
layout: default
title: uncheckAll(locator,waitMs)
parent: web
tags: command web checkbox
comments: true
---


### Description
This command automates the "unchecking" of all 
<a href="https://www.w3.org/wiki/Html/Elements/input/checkbox" class="external-link" link="nexial_link">CheckBox</a> 
elements matching the specified `locator`.  If the `locator` does not resolve to a valid Checkbox element, or if the
resolved Checkbox element is not valid, or if the resolve Checkbox element is not selected, then no further action
is executed upon such element. If a matched Checkbox element is already "unchecked", then it will be skipped over.

The `waitMs` parameter allows one to inject an additional wait time between each "check". This can be useful in 
situation where unchecking a Checkbox element activates a web rendering or page refresh event. Set it to `0` if no 
wait is necessary.


### Parameters
- **locator** - the locator pointing to one or more Checkbox elements.
- **waitMs** - the time to wait between each "uncheck", in milliseconds.


### Example


### See Also
- [`checkAll(locator,waitMs)`](checkAll(locator,waitMs))
- [`click(locator)`](click(locator))