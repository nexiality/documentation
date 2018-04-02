---
layout: default
title: saveModalDialogText(appLocator,var)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command harvests the text found in a modal dialog and saves it to the specified `var`.  
- The referenced application is denoted by the XPATH to its main window.  
- Below is an example of the modal dialog (modal means that it is perpetually on top of other windows from the same application):

### Parameters

- **appLocator** - the XPATH that represents the main window of the AUT
- **var** - the variable name to store the harvested modal dialog text.

### Example
