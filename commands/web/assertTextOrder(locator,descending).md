---
layout: default
title: assertTextOrder(locator,descending)
parent: web
tags: command web
comments: true
---

### Description

- This command is to assert text order of the element.
- In other words the command will assert the order of the text in the element and will check as per the descending order defined.
- The command will pass if the text found with the descending order defined or else fail otherwise.

### Parameters

- **locator** - this parameter is the locator of the text element to be found.
- **descending** - this parameter is the order in with the text is expected.The Boolean value true or false need to be defined here.

### Example

**Script**:<br/>
![](image/assertTextOrder_01.png)

**Output**:<br/>
![](image/assertTextOrder_02.png)

### See Also

- [`assertTextPresent(text)`](assertTextPresent(text).html)