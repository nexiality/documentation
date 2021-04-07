---
layout: default
title: clearCombo(name)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to clear off the text (or the selection) from a ComboBox denoted by `name`. If the 
specified component is not a ComboBox or if the ComboBox component is currently not enabled, then the corresponding
step will be determined as FAIL.


### Parameters
- **name** - this parameter is the name of the Combo box.(The label name displayed in the UI for the element)


### See Also
- [`clear(locaotr)`](clear(locator))
- [`saveComboOptions(var,name)`](saveComboOptions(var,name))
- [`saveComboOptionsByLocator(var,locator)`](saveComboOptionsByLocator(var,locator))
- [`selectCombo(name,text)`](selectCombo(name,text))
