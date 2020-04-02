---
layout: default
title: typeAppendTextBox(name,text1,text2,text3,text4
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is to append the text already exist in the text box. Meaning this command will not clear existing text but append the new text to the end.
- The first parameters is the required  `name` is the actual `label name`  of the control displayed in the Application.
- The second parameter is the required text to be append to the existing Test.
- The remaining parameters are optional and can used to send the keys after text is entered intoTextBox.
- The command will return pass if successful or else fail otherwise with error.

### Parameters

- **name** - this parameter is the name of the label of the Text Box
- **text1** - this parameter is the actual Text to be Entered into Text Box.
- **text2,text3,text4** - this parameter is the optional and can be used in need basis where you need to send some Key strokes after you enter text like \[ENTER\], \[CTRL\]\[END\],\[ALT\] \[ENTER\]

### Example

### See Also

-  [`typeAppendTextArea(name,text1,text2,text3,text4)`](typeAppendTextArea(name,text1,text2,text3,text4))
