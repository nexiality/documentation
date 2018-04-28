---
layout: default
title: saveTextSubstringBefore(var,locator,delim)
parent: web
tags: command web
comments: true
---

### Description

- This command is to sub string the text and get the text before the defined delimiter as input command.
- The command will sub string the text found from element and return before text from the delimiter.
- The command will return the after text from defined delimiter and pass the command or else fail otherwise.

### Parameters

- **var** - this parameter is to store the return value of the command.
- **locator** - this parameter is locator of the element
- **delim** - this parameter is delimiter, from where the text needs to be separated and return the before value.

### Example

**Script**:<br/>
![](image/saveTextSubstringBefore_01.png)

**Output**:<br/>
![](image/saveTextSubstringBefore_02.png)

### See Also

- [`saveTextSubstringBetween(var,locator,start,end)`](saveTextSubstringBetween(var,locator,start,end))
- [`saveTextSubstringAfter(var,locator,delim)`](saveTextSubstringAfter(var,locator,delim))