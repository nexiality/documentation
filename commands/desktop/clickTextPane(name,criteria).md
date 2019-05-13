---
layout: default
title: clickTextPane(name,criteria)
parent: desktop
tags: command desktop
comments: true
---

### Description
**See [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria)) command for more details about TextPane and 
the use of criteria.**

This command clicks on the first matching row of the specified TextPane. As such, the criteria will always contains

- **stopOnMatch=true**
- **stopOnEmptyText=true**


### Parameters
- **name** - The name (or label) of the TextPane component
- **criteria** - The criteria to use when matching against the text content of the target TextPane


### Example


### See Also
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))
- [`clickTextPaneRow(var,index)`](clickTextPaneRow(var,index))
