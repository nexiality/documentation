---
layout: default
title: clickMenuByLocator(locator,menu)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command automates the clicking of one or more menu items from the menu bar found in an application window denoted 
by `locator`. 

A few critical things to note:
- The specified `locator` should point to an application window that is the "parent component" of
  the target menu bar. Failure to do so would most likely result in the intended menu items not to be clicked.
- Each menu item is separated by comma (`,`). For example, to click on the "Copy" menu under the "Edit" menu 
  (top menu item), one would specify `Edit,Copy`.  The exact text of the target menu must be used here.
- It is also possible to use the index of a menu item instead. For example, `File,INDEX:4` means to click on the menu
  `File`, and then click on its fourth submenu item. 
 

### Parameters
- **locator** - the locator of the application window that contains the target menu bar.
- **menu** - this parameter is the name of the menu item(s). Separated by comma, each item represents the subsequent 
             menu item within a nested menu structure. For position-based trigger, use `INDEX:` prefix.


### Example


### See Also
- [`clickMenu(menu)`](clickMenu(menu))
- [`contextMenuByLocator(locator,menu)`](contextMenuByLocator(locator,menu))
- [`contextMenu(name,menu)`](contextMenu(name,menu))
