---
layout: default
title: assertElementNotVisible(locator)
parent: mobile
tags: command mobile profile
comments: true
---


### Description
This command asserts that either no element can be found on the current application screen via the specified `locator`, 
or the matched element is NOT visible (i.e. not displayed). Note that this command is not asserting that an element
is **PRESENT** but **NOT VISIBLE**. The absence of an element also implies that such element is not visible.

Furthermore, it is noteworthy to mention that this command can be adversely impacted by the  
[implicit wait](../../systemvars/index.html#nexial.mobile.implicitWaitMs) configured for the corresponding mobile 
profile. A high implicit wait value could potentially lengthen the execution time of this command, since this command
is looking for an element that potentially does not exist.

{% include_relative _wait_strategy.md %}
{% include_relative _locator_link.md %}


### Parameters
- **locator** - the locator of the element in question.


### Example



### See Also
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementVisible(locator)`](assertElementVisible(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertTextPresent(locator,text)`](assertTextPresent(locator,text))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))
