---
layout: default
title: selectCombo(name,text)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command "selects" an item from a Combo box denoted by `name`. The item is selected based on its visible label 
(denote as `text`). If the specified `name` cannot be found, or is not mapped in the corresponding mapping JSON file,
or is not mapped as a Combo box, the corresponding step will `FAIL`.

One may pass on additional function or control keys at the end of `text` to carry out further automation. Such is the 
case where after selecting the target Combo box item, say, the `ENTER` key should be pressed to activate certain UI
behavior, for example. Note that the function/control key sequence should be enclosed with square brackets, such as
`[ENTER]`.


### Parameters
- **name** - The label name of element list box displayed in Application
- **text** - The actual value to be selected in the Combo Box. One can also provide additional function or control 
  keys after the target combo box item. For example, `text[TAB]` or `text[ENTER]`, etc.  


### Example


### See Also
