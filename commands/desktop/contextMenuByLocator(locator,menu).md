---
layout: default
title: contextMenuByLocator(locator,menu)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command accesses the context menu (i.e. right-click) of a desktop element referenced by `locator`, and performs the 
invocation of such context menu via the specified `menu` parameter.

Note that Nexial does not verify if the target component can generate a context menu or not (for example, radio 
buttons generally do not generate context menu). Upon failure to locate any context menu, Nexial will exit the 
corresponding step with a **FAIL**.

Similarly, if the specified `menu` is incorrect, Nexial will exit the corresponding step with a **FAIL**.

For context menu with multiple levels of menu items, use comma (`,`) to separate each menu items. For example,
to access the "Base64 Encode" item under the "Plugin commands" menu (below), one would specify 
`Plugin commands,Base64 Encode` as the `menu` parameter.

As a convenience, one may use the submenu's position instead of its label. For example, `Menu1,INDEX:4,Menu4` means to
click on `Menu1`, then click on its fourth submenu, and then click on `Menu4` from the next level of submenu.


### Parameters
- **locator** - the locator of the component from which the context menu will be triggered.
- **menu** - the menu item(s) to invoked from the context menu.


### Example


### See Also
- [`clickMenu(menu)`](clickMenu(menu))
- [`clickMenuByLocator(locator,menu)`](clickMenuByLocator(locator,menu))
- [`contextMenu(name,menu)`](contextMenu(name,menu))