---
layout: default
title: saveText(var,locator)
parent: web
tags: command web
comments: true
---

### Description
This command retrieves text from target element (`locator`) and save it to a data variable denoted as `var`. Note that
if no text can be found, the specified data variable will be removed to avoid confusion.


### Parameters
- **var** - this parameter is to store the value into variable.
- **locator** - this parameter is locator(xpath) of the element.


### Example
**Script**:<br/>
![](image/saveText_01.png)

**Output**:<br/>
![](image/saveText_02.png)


### See Also
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`saveTextSubstringAfter(var,locator,delim)`](saveTextSubstringAfter(var,locator,delim))
- [`saveTextSubstringBefore(var,locator,delim)`](saveTextSubstringBefore(var,locator,delim))