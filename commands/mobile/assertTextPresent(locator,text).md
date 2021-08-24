---
layout: default
title: assertTextPresent(locator,text)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
This command searches within current application for all elements that match to the specified `locator`, and then
evaluate if any of these matched element contains the specified `text`. If any of the elements contains the specified
`text` then this corresponding step is considered as PASS. If no matches can be found - either via the `locator` or the
`text` parameters - then the corresponding step is considered as FAIL.

{% include _polymatcher.md %}
{% include_relative _wait_strategy.md %}
{% include_relative _locator_link.md %}


### Parameters
- **locator** - the element(s) to search against
- **text** - the text to match. PolyMatcher supported here.


### Example


### See Also
- [`assertAttribute(locator,attribute,text)`](assertAttribute(locator,attribute,text))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementVisible(locator)`](assertElementVisible(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))