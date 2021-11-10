---
layout: default
title: assertSelectOptionsAbsent(locator,options)
parent: web
tags: command web
comments: true
---

### Description
This command asserts that the specified `options` **MUST NOT** be found in the `SELECT` element as denoted by `locator`. 
Note that the `options` parameter represents the `OPTION` text, not the `value` attribute of the `OPTION` elements. 
Each of the `OPTION` text is separated by [`nexial.textDelimi`](../../systemvars/index.html#nexial.textDelim) or a 
newline character. For example,

![](image/assertSelectOptionsPresent_01.png)

The highlighted (blue) portions are the text of the `OPTION` elements mentioned above. So, if one desires to assert that
this `SELECT` element **DOES NOT** contain, say, `русский` and `Polskie`, the following would be the use of this command:

![](image/assertSelectOptionsAbsent_01.png)

As shown above, the target `OPTION` text is separated by comma, which is the default value of
[`nexial.textDelimi`](../../systemvars/index.html#nexial.textDelim). One can also use newline character to separate
each `OPTION` text.

The corresponding step is considered as FAIL if:
- If the target `SELECT` element cannot be located via the specified `locator`.
- If the target `SELECT` element contains one or more of the specified `OPTION` text.


### Parameters
- **locator** - the locator of the target `SELECT` element.
- **options** - the `OPTION` text that MUST NOT exist under the target `SELECT` element.


### See Also
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertElementNotPresent(locator,maxWaitMs)`](assertElementNotPresent(locator,maxWaitMs))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertSelectOptionsPresent(locator,options)`](assertSelectOptionsPresent(locator,options))
- [`deselect(locator,text)`](deselect(locator,text))
- [`deselectMulti(locator,array)`](deselectMulti(locator,array))
- [`select(locator,text)`](select(locator,text))
- [`selectMulti(locator,array)`](selectMulti(locator,array))
- [`selectMultiByValue(locator,array)`](selectMultiByValue(locator,array))
