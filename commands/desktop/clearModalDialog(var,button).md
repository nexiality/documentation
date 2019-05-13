---
layout: default
title: clearModalDialog(var,button)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to clear the modal dialog box presently in display. Such desktop UI construct can often
be seen as a way to inform its user or confirm user's intention, such as saving or transacting data.

As a side effect to clearing the modal dialog box, this command will save the text found in such dialog box as `var`. 

Note that Nexial assumes the modal design principle allows for only 1 modal dialog box. Hence it will handle only 1 such
UI element, if such exists. Consequently, if dialog box does not exist, this command **WILL NOT** fail and no text will
be saved to `var`.


### Parameters
- **var** - the text displayed in the modal dialog box will be saved to this variable.
- **button** - the button name to click in order to dismiss the dialog box.


### Example


### See Also
- [`saveModalDialogText(var)`](saveModalDialogText(var))
