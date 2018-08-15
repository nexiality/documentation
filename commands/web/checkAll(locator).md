---
layout: default
title: checkAll(locator)
parent: web
tags: command web checkbox
comments: true
---

### Description
This command automates the "check" of all 
<a href="https://www.w3.org/wiki/Html/Elements/input/checkbox" class="external-link" link="nexial_link">CheckBox</a> 
elements matching to the specified `locator`.  If the `locator` does not resolve to a valid Checkbox element, or if the
resolved Checkbox element is not valid, or if the resolve Checkbox element is already checked, then no further action
is executed upon such element.


### Parameters
- **locator** - the locator pointing to one or more Checkbox elements.


### Example


### See Also
- [`click(locator)`](click(locator))
- [`uncheckAll(locator)`](uncheckAll(locator))
