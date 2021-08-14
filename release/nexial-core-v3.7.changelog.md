---
layout: default
title: nexial-core 3.7 (2021-03-01)
parent: release
tags: release nexial-core 3.7
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.7_1086" class="external-link" target="_nexial_link">Release 3.7</a>
2021-03-01


### General
#### Fixes
- fixed Excel output so that only the first 500 characters will be stored for the parameter values. 
  Configurable via [`nexial.maxConsoleDisplay`](../systemvars/index.html#nexial.maxConsoleDisplay).
- logic fix when dealing with nested steps in macro


### [System Variable](../systemvars)
- deprecated [`nexial.desktopNotifyWaitMs`](../systemvars/content.html#nexial.desktopNotifyWaitMs) in favor of
  [`nexial.desktop.notifyWaitMs`](../systemvars/content.html#nexial.desktop.notifyWaitMs) for consistency.


### [Nexial Interactive](../interactive)
- support inspection and basic step-by-step automation for desktop application:
  - `DESKTOP(xpath)` to inspect desktop element by XPATH.
  - `DESKTOP(xpath) => click` to click on a desktop element by XPATH.
  - `DESKTOP(xpath) => doubleclick` to double click on a desktop element by XPATH.
  - `DESKTOP(xpath) => type(text)` to type on a desktop element by XPATH.
  - `DESKTOP(name)` to inspect desktop element by a component name in the current form.
  - `DESKTOP(name) => click` to click on a desktop element by a component name in the current form.
  - `DESKTOP(name) => doubleclick` to double click on a desktop element by a component name in the current form.
  - `DESKTOP(name) => type(text)` to type on a desktop element by a component name in the current form.
  - `DESKTOP(app) => menu(label,label,...)` to simulate the activation of menu/menus via label/labels. For example,
    `DESKTOP(app) => menu(File,Open)`
  - `DESKTOP(xpath) => context(label,label,...)` to trigger context on a desktop element.
  - `DESKTOP(name) => context(label,label,...)` to trigger context on a desktop element.
- minor improvement on console output for Inspect.


### [Expression](../expressions)
- [EXCEL &raquo; `renameSheet`](../expressions/EXCELexpression#renamesheetworksheetnewname): **NEW** operation to 
  rename worksheet.
- [LIST &raquo; `removeMatch(match)`](../expressions/LISTexpression#removematchmatch): **NEW** operation to remove from 
  a [`LIST`](../expressions/LISTexpression) the items that match the specified `match` criteria.
- [LisT &raquo; `item(indices)`](../expressions/LISTexpression#itemindices): support multiple indices (to concatenate 
  specified items into 1 text) and the use of `random` to randomly select one of the available item.
- [TEXT &raquo; `removeRegex(regex)`](../expressions/TEXTexpression#removeregexregexmultilinecasesensitive): Now 
  supports multi-line text and case-insensitive pattern matching.
- [TEXT &raquo; `removeLine(match)`](../expressions/TEXTexpression#removelinesmatch): PolyMatcher-based operation to 
  remove one or more lines from a TEXT expression.


### [desktop commands](../commands/desktop)
- General Improvements:
  - enhanced support for "_older_" applications that require (or prefer) ASCII-based key mapping, especially for function
    and control keys such as `{BACKSPACE}` and `{ESCAPE}`. Set 
    [`nexial.desktop.useAsciiKey`](../systemvars/index.html#nexial.destop.useAsciiKey) to `true` to enable this feature.
  - added `[CONTEXT]` key map to support shortcut key for context menu (Windows only).
  - improved keyboard automation by utilizing Winium's internal "shortcut" script.
  - additional support for "FormattedTextbox" to avoid data type conversion issue.
  - post-edit validation now will performance numeric comparison if both before-edit and after-edit value can be 
    converted into number. For example, `100.00` would be considered as `100`.
  - logic to avoid double "clear field" action; minor speed improvement.
  - improvement on the repeated typing over the same component:
    - One can now use `[ctrl-end]` to append text to the end of existing text.
    - Nexial automatically translate newline as `[ENTER]`. 
    - Also some performance improvements. 
    This impact the following commands:
    - [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
    - [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
  - [`waitForLocator(locator,maxWaitMs)`](../commands/desktop/waitForLocator(locator,maxWaitMs)): code fix to continue 
    waiting for specified element until specified time out.
- **NEW** commands to perform double click.
  - [`doubleClick(name)`](../commands/desktop/doubleClick(name))
  - [`doubleClickByLocator(locator)`](../commands/desktop/doubleClickByLocator(locator))
- [`clickMenuByLocator(locator,menu)`](../commands/desktop/clickMenuByLocator(locator,menu)): **NEW** command to trigger
  application menu via a `locator`.
  - support the triggering of menu via the index of the target menu item (use `INDEX:` prefix) in combination with the 
    use of menu label. For example, `File,INDEX:2,Open Last...`.
- **NEW** commands to trigger context menu (i.e. right-click) on a desktop element:
  - [`contextMenuByLocator(locator,menu)`](../commands/desktop/contextMenuByLocator(locator,menu))
  - [`contextMenu(name,menu)`](../commands/desktop/contextMenu(locator,menu))
  - support the triggering of context menu via index (prefix with `INDEX:`) in combination with menu item label. For 
    example, `File,INDEX:2,Open Last...`. 
- **NEW** commands capture the screenshot of the specified element:
  - [`screenshotByLocator(locator,file)`](../commands/desktop/screenshotByLocator(locator,file))
  - [`screenshot(name,file)`](../commands/desktop/screenshot(name,file))
- [Autoscanning](../commands/desktop/configureDesktopApplication#autoscan) Improvements:
  - improves [autoscanning](../commands/desktop/configureDesktopApplication#the-benefit-of-autoscan) process with better
    support for Infragistics 4 components.
  - support the use of data variable in the "Aut" section of "application.json".
  - support for special/rare case of Combo box component containing only Radio component(s).
  - [`nexial.desktop.autoscan.verbose`](../../systemvar/index.html#nexiak.desktop.autoscan.verbose): *NEW* System 
    variable to enable console logging during [autoscanning](../commands/desktop/configureDesktopApplication#autoscan).
  - capture component name as label for Tab element.
  - support "deeper" scanning of Tab items in case they are not placed directly underneath a Tab element.
- additional support for Infragistics 4 components:
  - support the use of TreeView-based datagrid on the `table`-related commands such as 
    [`assertTableRowContains(row,contains)`](../commands/desktop/assertTableRowContains(row,contains)), 
    [`saveAllTableRows(var,csv)`](../commands/desktop/saveAllTableRows(var,csv)) and 
    [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)).
  - support various types of Combo via common set of `combo`-related commands:
    - [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): supports "single-select", "multi-select" 
      and "type-ahead" combo boxes
    - [`assertSelected(name,text)`](../commands/desktop/assertSelected(name,text)): supports "single-select", 
      "multi-select" and "type-ahead" combo boxes
- Improved Data Grid Support 
  - code fix to use the correct driver script for grid data edits.
  - performance improvement over the editing of data grid and fetching of data from a data grid.
  - performance improvement over the reading of data grid content.
  - added data grid to CSV support for the following commands (useful for further data processing):
    - [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv))
    - [`saveAllTableRows(var,csv)`](../commands/desktop/saveAllTableRows(var,csv))
    - [`saveTableRowsRange(var,beginRow,endRow,csv)`](../commands/desktop/saveTableRowsRange(var,beginRow,endRow,csv))
- support PolyMatcher: for the following commands:
  - [`assertTableRowContains(row,contains)`](../commands/desktop/assertTableRowContains(row,contains))
  - [`assertTableColumnContains(column,contains)`](../commands/desktop/assertTableColumnContains(column,contains))
  - [`assertTableContains(contains)`](../commands/desktop/assertTableContains(contains))
  - [`assertTableCell(row,column,contains)`](../commands/desktop/assertTableCell(row,column,contains))
  - [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv))
- Improved Radio/Check support
  - [`assertChecked(name)`](../commands/desktop/assertChecked(name)): supports both Checkbox and Radio component.
  - [`assertNotChecked(name)`](../commands/desktop/assertNotChecked(name)): supports both Checkbox and Radio component.
  - [`saveText(var,name)`](../commands/desktop/saveText(var,name)): support "CheckBox" and "Radio" component so that 
    checked state would result in `True` as its text, and `False` if such component is unchecked.
  - [`saveTextByLocator(var,locator)`](../commands/desktop/saveTextByLocator(var,locator)): support "CheckBox" and 
    "Radio" component so that checked state would result in `True` as its text, and `False` if such component is 
    unchecked.


### [excel commands](../commands/excel)
- [`renameSheet(file,worksheet,newName)`](../commands/excel/renameSheet(file,worksheet,newName)): **NEW** command to 
  rename worksheet.


### [localdb commands](../commands/localdb)
- [`importCSV(var,csv,table)`](../commands/localdb/importCSV(var,csv,table)): fix code to support headers with 
  special characters and data with single quote (now escaped).


### [web commands](../commands/web)
- [`dragAndDrop(fromLocator,toLocator)`](../commands/web/dragAndDrop(fromLocator,toLocator)): 
  - updated to support Angular/Material-based tree node components.
  - updated to support native mouse event, which is required when start of a drag-and-drop event also trigger drastic 
    changes to the underlying DOM structure.
- [`dragTo(fromLocator,xOffset,yOffset)`](../commands/web/dragTo(fromLocator,xOffset,yOffset)): 
  - updated to support native mouse event, which is required when start of a drag-and-drop event also trigger drastic 
    changes to the underlying DOM structure.
