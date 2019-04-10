---
layout: default
title: saveValues(var,locator)
parent: web
tags: command web
comments: true
---

### Description
This command is to save the values of one or more matching web form element, such as text box, text area, dropdown, 
checkbox, radio button and button.  This "value" mentioned here is equivalent to the "value" attribute of the 
corresponding form elements identified via the specified `locator`.


### Parameters
- **var** - this parameter is to store the value of the attribute.
- **locator** - this parameter is the locator of the element.


### Example

Suppose the following page:<br/>
![](image/saveValues_03.png)

We can retrieve the "age" value (second columns) like so:<br/>
![](image/saveValues_02.png)

Here's the output:<br/>
![](image/saveValues_01.png)


### See Also
- [`saveValue(var,locator)`](saveValue(var,locator))
