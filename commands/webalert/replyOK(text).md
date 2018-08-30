---
layout: default
title: replyOK(text)
parent: webalert
tags: command webalert alert web
comments: true
---


### Description
This command automates the replying to a JavaScript 
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" class="external-link" target="_nexial_external">prompt dialog</a> 
with `text` and then click on `OK` prompt on the dialog. If the expected prompt dialog is not found, this command
will consider such as FAIL.
 
The text of the alert dialog, if present, will be saved to `nexial.lastAlertText`, which can be retrieved after this 
command is executed.


### Example



### See Also
- [`assertText(text,matchBy)`](assertText(text,matchBy))
- [`dismiss()`](dismiss())
- [`assertPresent()`](assertPresent())
- [`replyCancel(text)`](replyCancel(text))
