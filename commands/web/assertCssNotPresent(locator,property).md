---
layout: default
title: assertCssNotPresent(locator,property)
parent: web
tags: command web
comments: true
---

### Description
This command asserts the absence of a specific CSS property for a given web element denoted via `locator`.

Any of the following will result in a FAIL for the corresponding step:
- If the specified web element cannot be found via the `locator`,
- If the specified CSS `property` is found for the specified web element,
- If an non-empty `value` is found for the specified CSS `property`.

{% include_relative css.md %}


### Parameters
- **locator** - this parameter is the locator of the element.
- **property** - this parameter is the css property which is not expected in that element.


### Example
**Script**:<br/>
![](image/assertCssNotPresent_01.png)

**Output**:<br/>
![](image/assertCssNotPresent_02.png)


### See Also
- [`assertCssPresent(locator,property,value)`](assertCssPresent(locator,property,value).html)