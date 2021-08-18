---
layout: default
title: assertElementNotPresent(locator)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
This command asserts that no element on the current application screen matches the specified `locator`. If at least 1
element matches the specified `locator`, then the corresponding step is deemed as **FAIL**.

{% include_relative _wait_strategy.md %}
{% include_relative _locator_link.md %}


### Parameters
- **locator** - the locator of the element in question. 


### Example


### See Also
- [`assertElementVisible(locator)`](assertElementVisible(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertTextPresent(locator,text)`](assertTextPresent(locator,text))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))
