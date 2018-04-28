---
layout: default
title:  clickTab(group,name)
parent: desktop
tags: command desktop
comments: true
---

### Description

This command is used to click on the tab in desktop application to navigate from one form to another form.

Presetting:

- **Step1**: Add the xpath of the Tab group in application.json.

- **Step2**: Add  _"componentTypeHint":"TabGroup"_ as shown in the example

- **Step3**: Scan the tabs using useForm() command from the script

### Parameters

- **group** - this parameter is the group name (name given in application.json).
- **name** - is the name of the tab (as scanned)

### Example


### See Also

-  [`clickButton(name) .](clickButton(name))