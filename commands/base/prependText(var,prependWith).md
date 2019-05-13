---
layout: default
title: prependText(var,prependWith)
parent: base
tags: command base
comments: true
---


### Description
This command does a few things:
1.  retrieves the text value of `var`
2.  adds `prependWith` to the beginning of this text
3.  saves text back to the same variable `var `

**Note**: if the value represented by `var` is not text (for e.g. array or map), then after this command it will be 
saved as text.


### Parameters
- **var** - the name of the variable who text value will be prepended
- **prependWith** - the text to add to the beginning of the textual value of `var`


### Example
Here's an example on using this command:
![script](image/prependText_01.png)

output - notice that the last `verbose(text)` command prints out the modified result of `var1`:
![output](image/prependText_02.png)


### See Also
- [`appendText(var,appendWith)`](appendText(var,appendWith))
