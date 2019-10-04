---
layout: default
title: nexial-core 2.5 (2019-08-07)
parent: release
tags: release nexial-core 2.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.5_0599" class="external-link" target="_nexial_link">Release 2.5</a>
2019-08-07


### General
#### Fixes
- Multiple fixes to clarify error messages: 
  - when screenshot cannot be taken due to underlying WebDriver being unavailable.
  - when Nexial Expression cannot be properly evaluated due to data error.
  - duplicated error messages reduced.
- avoid console pause when executing in zero-touch environment (like unit testing or Jenkins).
- Fixed variable list indexing issue for the files.
- reduce duplicate 3rd-party libraries.
- [`nexial-project.sh|cmd`](../userguide/BatchFiles#nexial-project):
  - fixed the "ECHO is off" issue.
  - Nexial now detects "bad" project id in `.meta/project.id` file with fix instruction.
  - user can now override with a project id of his/her choice.
  - create `artifact/bin` directory when generating project structure.

#### Improvements
- add Jenkins environment variables in execution summary.
- create alternative screen capture capability in case we can't capture screen via WebDriver of Winium driver.
- increased more formatted rows in `nexial-script.xlsx` and `nexial-macro.xlsx` template files to 
  support the use of `nexial-artifact-repair.cmd|sh` against damaged XLSX files that are larger in size.


### [Nexial Expression](../expressions)
- [JSON &raquo; `keys(jsonpath)`](../expressions/JSONexpression#keysjsonpath): extract immediate keys of resolved JSON 
  fragment based on `jsonpath`.
- [EXCEL &raquo; `replace(search,replace)`](../expressions/EXCELexpression#replacesearchreplace): Of all the cells 
  captured through [`read(sheet,range)`](../expressions/EXCELexpression#readsheetrange), replace all instances of 
  `search` with `replace`.
- [NUMBER &raquo; whole](../expressions/NUMBERexpression#whole): code fix so that fractional numbers are properly 
  converted to whole numbers.
- fixed issue of expressions with multiple closed square bracket.


### [Flow Control](../flowcontrols)
- [`has file-size`](../flowcontrols/filter#description): now support non-existent file via `has file-size 0` syntax.
- [`not contain`](../flowcontrols/filter.#description): handle text delimiter being used as control.
- [`contain`](../flowcontrols/filter.#description): handle text delimiter being used as control.
- support open and close brackets `(` and `)` in the flow control filter conditions. For e.g. 
  `SkipIf(${var} match ^(nexial|Nexial)$)`.


### [base commands](../commands/base)
- console output changes/improvements over multiple assert commands. Now FAILed assertion will display multi-line 
  output that should be easier to decipher.
- [base &raquo; `repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)): Fixed the error thrown 
  when capturing screenshot within a loop.


### [desktop commands](../commands/desktop)
- [`typeKeys(os,keystrokes)`](../commands/desktop/typeKeys(os,keystrokes)): 
  - fixed the simulation of certain "symbol" keystrokes. This enables the typing of fully qualified file path that 
    contains slashes (`\` or `/`) and colons (`:`).
  - support the use of `*` for `os` (meaning any OS).
  - support UPPERCASE and non-alphanumeric symbol typing.
  - _EXPERIMENTAL_ speeding up key-typing by removing any between-keys delay and waits.
- [`mouseWheel(amount,modifiers,x,y)`](../commands/desktop/mouseWheel(amount,modifiers,x,y)): 
  - **NEW** command to simulate mouse wheel movement. `amount` as negative value means to scroll _backwards_.
  - support simple "position" words for `x` and `y` such as `middle`, `left`, `right`, `top` and `bottom`.
  - restricted to Windows for now.
- [`clickScreen(button,modifiers,x,y)`](../commands/desktop/clickScreen(button,modifiers,x,y)): 
  - **NEW** command to simulate mouse click based on current screen (not AUT).
  - support simple "position" words for `x` and `y` such as `middle`, `left`, `right`, `top` and `bottom`.
- ensure Winium driver and `notifu.exe` are not executed in non-Windows environment.
- screenshots captured during the use of `desktop` commands are now assigned to the system variable 
  [`nexial.lastScreenshot`](../systemvars/index#nexial.lastScreenshot), thus maintain consistency with screenshots 
  captured during the use of `web` commands, and to provide additional automation via such system variable.


### [json commands](../commands/json)
- [`storeKeys(json,jsonpath,var)`](../commands/json/storeKeys(json,jsonpath,var)): extract immediate keys of resolved 
  JSON fragment based on `jsonpath`.


### [localdb commands](../commands/localdb)
- [`importCSV(var,csv,table)`](../commands/localdb/importCSV(var,csv,table)): supports scenarios where table structure 
  and the CSV file to import are not equivalent. Also support the use of default value as defined for the target table.


### [number commands](../commands/number)
- [`whole(var)`](../commands/number/whole(var)): code fix so that fractional number is properly converted to whole number.


### [ws commands](../commands/ws)
- fix URL by replacing special characters (like space and `&`) with the appropriate encoding.


### [web commands](../commands/web)
- [`saveText(var,locator)`](../commands/web/saveText(var,locator)): clarify output message when no text is saved due 
  to invalid or missing locator.
- Selenium-backed error messages are shorten to just the first line when possible to streamline error messages.
- honor [`nexial.delayBrowser`](../systemvars/index#nexial.delayBrowser) between plan steps so that Nexial won't 
  inadvertently load WebDriver before it is necessary.
- support screen capturing using native approach so that we can capture JavaScript dialog/popup or other native dialogs 
  (such as "Open File" and "Save As"). This is also the screen capturing alternative when the specific WebDriver fails.
- [`select(locator,text)`](../commands/web/select(locator,text)): supports selecting `empty` text. Also `text` as 
  `{ALL}` to `select` all options for a multi-select `<SELECT>` element.
- [`deselect(locator,text)`](../commands/web/deselect(locator,text)): supports `text` as `{ALL}` to `deselect` all 
  selected options for a multi-select `<SELECT>` element.
