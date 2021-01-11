---
layout: default
title: assertCssPresent(locator,property,value)
parent: web
tags: command web
comments: true
---

### Description
This command asserts the presence of a specific CSS property and its value for a given web element denoted via `locator`.
Set `value` to `(empty)` to ignore the value of the specified CSS `property` -- meaning that Nexial will only check
for the presence of the CSS property, not its value.

Any of the following will result in a FAIL for the corresponding step:
- If the specified web element cannot be found via the `locator`,
- If the specified CSS `property` cannot be found for the specified web element,
- If an non-empty `value` is specified but is not matching the derived value of the specified CSS `property`.

{% include_relative css.md %}


### Parameters
- **locator** - this parameter is the locator(xpath) of the element
- **property** - this parameter is the css property of the element
- **value** - this parameter is the expected value of the css property. Specify `(empty)` to ignore the value comparison


### Example
**Script**:<br/>
![](image/assertCssPresent_01.png)

**Output**:<br/>
![](image/assertCssPresent_02.png)


### See Also
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
