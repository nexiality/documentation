---
layout: default
title: assertElementsEnabled(prefix)
parent: web
tags: command web css
comments: true
---

### Description
This command instructs Nexial to harvest a set of data variables that match to the form of `[prefix]...locator` and
use the value of such data variables as locators to assert that the corresponding web elements are enabled for 
interaction. The `[prefix]` will be specified via the first parameter. Such data variables **must** end with 
`.locator`. The corresponding data variables can contain any of the [supported locators](index#locators).

Note that this command will attempt to assert all locators regardless of the state of each targeted web element. It
will FAIL if one or more target web elements is not enabled for interaction. In other words, it will only PASS if all
web elements as indicated by the gathered locators are enabled for interaction.

If [`nexial.verbose`](../../systemvars/index#nexial.verbose) is set to `true`, Nexial will output additional validation 
output. But `false` (default) will result in error-only output in the execution result.


### Parameters
- **prefix** - the prefix to gather a set of data variables that contain locator for "is enabled?" test.


### Example


### See Also
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertElementsVisible(prefix)`](assertElementsVisible(prefix))
