---
layout: default
title: storeText(var)
parent: webalert
tags: command webalert alert web
comments: true
---


### Description
This command stores the text of the alert dialog to variable denoted by `var`.  If no alert dialog is found or if the
current dialog contains no text, the specified `var` will subsequently be removed to prevent any data taining from
previous use. In either way, this command will always return as PASS.


### Parameters
- **var** - this parameter is the variable for the text to be stored.


### Example
**Script**:<br/>
![](image/storeText_01.png)

**Output**:<br/>
![](image/storeText_02.png)


### See Also
- [`accept()`](accept())
- [`assertPresent()`](assertPresent())
- [`assertText(text,matchBy)`](assertText(text,matchBy))
- [`dismiss()`](dismiss())
