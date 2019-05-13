---
layout: default
title: clickTextPaneRow(var,index)
parent: desktop
tags: command desktop
comments: true
---

### Description

**See [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria)) for more details about TextPane and the use of criteria**.

This command clicks on a row of a TextPane from the previously performed [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria)) result, along with the specified index. If the result denoted by var only has 1 value, index can be specified as 0.

### Parameters

- **var** -  The variable that points of the result of the previously performed [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria)). 
- **index** - In case the result contains more than 1 row, use this parameter to specify which row to click (zero-based).

### Example


### See Also

- [`clickTextPane(name,criteria)`](clickTextPane(name,criteria)) 
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))