---
layout: default
title: sendKeysToTextBox(name,text1,text2,text3,text4)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command performs the same automation as [desktop &raquo; `typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4)).
It is recommended for use as a secondary option, only when any text field in the desktop does not respond properly with 
[desktop &raquo; `typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4)) command. 
The first parameters is the required  `name` that corresponds to the label of the target UI element. The second parameter 
is the required text to be entered. The remaining parameters are optional and can used to send the keys after 
text is entered into the target text box.


### Parameters
- **name** - this parameter is the name of the label of the Text Box
- **text1** - this parameter is the actual text or shortcut key to be entered into Text Box.
- **text2,text3,text4** - this parameter is the optional and can be used in need basis where you need to send some Key strokes after you enter text like \[ENTER\], \[CTRL\]\[END\],\[ALT\] \[ENTER\]  


### Note
If one wants to enter actual text or shortcut key with key strokes in same text box, the best way to use is the 
combination of actual text and key strokes. For example, if user want to enter text at the start of text box, one would 
use `[HOME]` to move cursor to the starting position and then enter `text`. One can specify `[HOME]text` as 1 parameter, 
or separate them into different parameters for better readability. However, possibly the best way is `[HOME-t-e-x-t]` 
as this would most likely simulate the key strokes that the user would actually key. 


### Example


### See Also
- [`typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4))