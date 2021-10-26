---
layout: default
title: contextMenuByLocator(locator,menu,xOffset,yOffset)
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

![](image/contextMenu_01.png)

As a convenience, one may use the submenu's position instead of its label. For example, `Menu1,INDEX:4,Menu4` means to
click on `Menu1`, then click on its fourth submenu, and then click on `Menu4` from the next level of submenu.

As an additional convenience, one may include keystrokes whilst the context menu is in display. Use keystrokes as an
added support to expedite automation, when appropriate. For example, `{DOWN},INDEX:14,{CTRL}{SPACE},Execute` means:
1. When the context menu is first shown, press the DOWN key
2. Then select the 14th menu item
3. Then type in CONTROL-SPACE key combination
4. Finally, select the "Execute" menu item.

Consult the [`typeKeys(os,keystrokes)`](typeKeys(os,keystrokes)) page on how to specify keystrokes.

Both the `xOffset` and `yOffset` parameters are optional. One can use these 2 parameters to fine-tune where the 
right-click should be invoked. By leaving both parameters as blank, Nexial will target the center (approximately) of the
specified element instead.


### Parameters
- **locator** - the locator of the component from which the context menu will be triggered.
- **menu** - the menu item(s) to invoked from the context menu.
- **xOffset** - the X coordinate of the element to be clicked on.
- **yOffset** - the Y coordinate of the element to be clicked on.


### Example


### See Also
- [`clickMenu(menu)`](clickMenu(menu))
- [`clickMenuByLocator(locator,menu)`](clickMenuByLocator(locator,menu))
- [`contextMenu(name,menu)`](contextMenu(name,menu,xOffset,yOffset))