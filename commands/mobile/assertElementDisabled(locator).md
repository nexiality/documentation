---
layout: default
title: assertElementDisabled(locator)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
This command asserts that at least 1 element on the current application screen matches the specified `locator` and the
first element is disabled (for interaction). This is determined via the element's `enabled` attribute. If no element
is found via the specified `locator`, the corresponding step is considered as FAIL. Likewise if the matched element
is considered as enabled.

{% include_relative _wait_strategy.md %}
{% include_relative _locator_link.md %}


### Parameters
- **locator** - the locator of the element in question.


### Example



### See Also
- [`assertElementNotVisible(locator)`](assertElementNotVisible(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertTextPresent(locator,text)`](assertTextPresent(locator,text))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))
