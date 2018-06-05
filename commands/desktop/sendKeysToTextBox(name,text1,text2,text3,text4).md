---
layout: default
title: sendKeysToTextBox(name,text1,text2,text3,text4)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is exactly as similar to [desktop &raquo; `typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4)).
- Recommended to use as a secondary option, only when any text field in the desktop does not respond properly with [desktop &raquo; `typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4)) command. 
- The first parameters is the required  `name` is the actual `label name`  of the control displayed in the Application.
- The second parameter is the required text to be entered.
- The remaining parameters are optional and can used used to send the keys after text is entered intoTextBox.
- The command will return pass if successful or else fail otherwise with error.

### Parameters

- **name** - this parameter is the name of the label of the Text Box
- **text1** - this parameter is the actual text or shortcut key to be entered into Text Box.
- **text2,text3,text4** - this parameter is the optional and can be used in need basis where you need to send some Key strokes after you enter text like \[ENTER\], \[CTRL\]\[END\],\[ALT\] \[ENTER\]  
      
    

### Example


### See Also

- [`typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4))