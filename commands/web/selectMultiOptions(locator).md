---
layout: default
title: selectMultiOptions(locator)
parent: web
tags: command web
comments: true
---

### Description
This command will select all `<OPTION>` elements from a `<SELECT>` element (i.e. combo box) denoted by 
`locator`. If the `locator` does not resolve to a valid `<SELECT>` element or no `<OPTION>` elements found, then this 
will result in a FAIL result. If the resolved `<SELECT>` element is found but does not support multi-select, then


### Parameters
- **locator** - the locator of the `<SELECT>` element (e.g list box or combo box)


### Example
**Script**:<br/>
![](image/selectMultiOptions_01.png)

**Output**:<br/>
![](image/selectMultiOptions_02.png)


### See Also
- [`selectMulti(locator,array)`](selectMulti(locator,array))
- [`deselectMulti(locator,array)`](deselectMulti(locator,array))