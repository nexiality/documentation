---
layout: default
title: nexial-core 3.7 (2021-02-12)
parent: release
tags: release nexial-core 3.7
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.7_????" class="external-link" target="_nexial_link">Release 3.7</a>
2021-02-12


### General
#### Fixes
- fixed Excel output so that only the first 500 characters will be stored for the parameter values. 
  Configurable via [`nexial.maxConsoleDisplay`](../systemvars/index.html#nexial.maxConsoleDisplay).
- logic fix when dealing with nested steps in macro

#### Improvements


### [System Variable](../systemvars)
- deprecated [`nexial.desktopNotifyWaitMs`](../systemvars/content.html#nexial.desktopNotifyWaitMs) in favor of
  [`nexial.desktop.notifyWaitMs`](../systemvars/content.html#nexial.desktop.notifyWaitMs) for consistency.


### [Nexial Interactive](../interactive)
- support inspection and basic step-by-step automation for desktop application:
  - `DESKTOP(xpath)` to inspect desktop element by XPATH.
  - `DESKTOP(xpath) => click` to click on a desktop element by XPATH.
  - `DESKTOP(xpath) => doubleclick` to double click on a desktop element by XPATH.
  - `DESKTOP(xpath) => type(text)` to type on a desktop element by XPATH.
  - `DESKTOP(label)` to inspect desktop element by a label in the current form.
  - `DESKTOP(label) => click` to click on a desktop element by a label in the current form.
  - `DESKTOP(label) => doubleclick` to double click on a desktop element by a label in the current form.
  - `DESKTOP(label) => type(text)` to type on a desktop element by a label in the current form.
  - `DESKTOP(app) => menu(label,label,...)` to simulate the activation of menu/menus via label/labels. For example,
    `DESKTOP(app) => menu(File,Open)`
- minor improvement on console output for Inspect.


### [Expression](../expressions)
- [EXCEL &raquo; `renameSheet`](../expressions/EXCELexpression.md#renamesheetworksheetnewname): **NEW** operation to 
  rename worksheet.


### [Function](../functions)

 
### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- enhanced support for "_older_" applications that require (or prefer) ASCII-based key mapping, especially for function
  and control keys such as `{BACKSPACE}` and `{ESCAPE}`. Set 
  [`nexial.desktop.useAsciiKey`](../systemvars/index.html#nexial.destop.useAsciiKey) to `true` to enable this feature.
- [`doubleClick(name)`](../commands/desktop/doubleClick(name)): **NEW** command to perform double click.
- [`doubleClickByLocator(locator)`](../commands/desktop/doubleClickByLocator(locator)): **NEW** command to perform 
  double click.
- [`waitForLocator(locator,maxWaitMs)`](../commands/desktop/waitForLocator(locator,maxWaitMs)): code fix to continue 
  waiting for specified element until specified time out.
- added `[CONTEXT]` key map to support shortcut key for context menu (Windows only).


### [excel commands](../commands/excel)
- [`renameSheet(file,worksheet,newName)`](../commands/excel/renameSheet(file,worksheet,newName)): **NEW** command to 
  rename worksheet.


### [json commands](../commands/json)


### [macro commands](../commands/macro)


### [mail commands](../commands/mail)


### [rdbms commands](../commands/rdbms)


### [ssh commands](../commands/ssh)


### [web commands](../commands/web)


## [tn.5250 commands](../commands/tn.5250)
