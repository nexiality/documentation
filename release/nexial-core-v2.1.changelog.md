---
layout: default
title: nexial-core 2.1 (2019-04-13)
parent: release
tags: release nexial-core 2.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.1_0457" class="external-link" target="_nexial_link">Release 2.1</a>
2019-04-13


### General
#### Fixes:
- code fix to render correctly (color) the console output for SKIPPED step in 
  [base &raquo; `repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)) loop. 
- simplify `nexial.sh` by eliminating the need for a shell script to be generated dynamically.
- fix error with macro refactoring via [`nexial-macro-update.sh`](../userguide/BatchFiles#nexial-macro-update).
- fix error where data variables defined in `project.properties` are not overwritten via 
  [base &raquo; `save(var,value)`](../commands/base/save(var,value)). As with this fix, only certain System variables 
  will not be overwritten due to the run time nature of such data variables (e.g. 
  [`nexial.manageMemory`](../systemvars/index#nexial.manageMemory)).
 
#### Improvements:
- shell scripts support commandline arguments that contain spaces.
- added execution output html link and more meaningful data to execution result notification mail.
- added preview option(-p) for macro refactor batch file.


### Project Inspector
- code fix to `nexial-project-inspector` when the target project does not contain `project.properties`
- code fix to `nexial-project-inspector` when the target project does not contain `artifact/bin` directory
- adding a bit more project metadata when inspecting project via `nexial-project-inspector`.
- support `nexial-macro-update` and `nexial-variable-update` batch files from Project Inspector.
- slight enhancement to `nexial-project-inspector` to automatically open HTML after script completes.
- performance improvement on scanning project artifacts via local cache, which is stored in 
  `$USER_HOME/.nexial/projectCache/$PROJECT_NAME`.
- minor output adjustment to improve readability.
- improvement on data variable inspection on commands that take on multiple variable parameters.


### System Variables
- [`nexial.io.copyConfig`](../systemvars/index#nexial.io.copyConfig): provides modes for copying new file to 
existing file location.


### Nexial Expression
- **[XML Expression](../expressions/XMLexpression)**
  - **`append`**: **NEW** append content to xml document.
  - **`clear`**: **NEW** clear content of xml document.
  - **`delete`**: **NEW** delete node from xml document.
  - **`insertAfter`**: **NEW** insert content after xml document.
  - **`insertBefore`**: **NEW** insert content after xml document.
  - **`prepend`**: **NEW** prepend content to xml document.
  - **`replace`**: **NEW** replace xml node with content from xml document.
  - **`replaceIn`**: **NEW** replace inside xml content of xml document.

- **[LIST Expression](../expressions/LISTexpression)**
  - [LIST &raquo; `sum`](../expressions/LISTexpression#sum): fix the handling of numbers with different floating points. 
    Now Nexial should resolve to the largest (or longest) floating points found during the `sum` operation.
  - [LIST &raquo; `replaceItem`](../expressions/LISTexpression#replaceitemsearchforreplacewith): fix to support empty
    item replacement

- **[WEB Expression](../expressions/WEBexpression)**:    **NEW** expression for web automation<br/>
  - **`click(locator)`** : This clicks on element specified via locator.    
  - **`deselect(locator,option1,option2,option3...)`** : deselects one or multiple options from the listbox.
  - **`fetchAsCsv(locator1,locator2,locator3...)`** :  stores the values of web elements specified via locators in 
    CSV format
  - **`select(locator,option1,option2,option3...)`** : This selects one or multiple options from the listbox.
  - **`selectWindow(locator,winId)`** : This selects the open tab/window as per the `windows id` or by `index`.. 
  - **`text`** : transforms the associated Web statement(s) result into plain text.
  - **`type(locator,value)`** : Enters the specified `value` into the first element that matches the specified 
    `locator`. 
  - **`typeKeys(locator,value)`** : performs keystroke on the element specified via `locator`. For more information,
  - **`wait(waitMs)`** :  waits till the desired time(in milli seconds) passed as input parameter `waitMs`

- **[NUMBER Expression](../expressions/NUMBERexpression)**:
    - **`whole`** - renamed `round` operation to `whole`


### [base commands](../commands/base)
- [`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)): support the reference of macro files from
  directories other than `artifact/script`.


### [desktop commands](../commands/desktop)
- code fix to [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)) when combo box 
  is not editable (can't type text in combo box).


### [io commands](../commands/io)
- [`copyFilesByRegex(sourceDir,regex,target)`](../commands/io/copyFilesByRegex(sourceDir,regex,target)): copy all 
files from sourceDir matching specified regex recursively to target location.
- [`moveFilesByRegex(sourceDir,regex,target)`](../commands/io/moveFilesByRegex(sourceDir,regex,target)): move all 
files from sourceDir matching specified regex recursively to target location.
- [`deleteFilesByRegex(sourceDir,regex)`](../commands/io/deleteFilesByRegex(sourceDir,regex)): delete all 
files from sourceDir matching specified regex recursively.


### [rdbms commands](../commands/rdbms)
- now supports `CREATE` and `DROP` keywords for SQL execution


### [number commands](../commands/number)
- [`whole(var)`](../commands/number/whole(var)) - **NEW** round number as Whole number(Integer)
- [`roundTo(var,closestDigit)`](../commands/number/roundTo(var,closestDigit)) - renamed `round(var,closestDigit)` 
  command to `roundTo(var,closestDigit)`


### [web commands](../commands/web)
- new System variable - [`nexial.web.scrollIntoView`](../systemvars/index#nexial.web.scrollIntoView) to reduce 
  additional (and possibly unnecessary) `scrollIntoView` automation prior to interacting with an element. This would be 
  applicable to "type", "typeKeys", "click" and "double click" commands.
- code fix for Electron app where not all Selenium/Webdriver features are supported, particularly `actions`.
- code fix for Electron app where `element.clear()` is not _really_ clearing out input value due to registered event 
  handler on the application. In such case, Nexial issue hard `BACKSPACE` to compensate the clearing intent.
- [`rightClick(locator)`](../commands/web/rightClick(locator)): **NEW** command to support right click.
- [`nexial.web.clearWithBackspace`](../systemvars/index#nexial.web.clearWithBackspace): **NEW** System variable to 
  forcefully clear out text input using `BACKSPACE` keystrokes. Default is `false` (i.e. not enabled).
  - improved clearing strategy on text input field by first issuing an `END` keystroke and then issuing the appropriate 
    number of `BACKSPACE`.
- [`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)): **NEW** command to assert a series
  of web elements via their respective locators.
- [`saveValues(var,locator)`](../commands/web/saveValues(var,locator)): **NEW** command to save value of multiple 
  matching web form elements.


### [xml commands](../commands/xml)
- [`insertAfter(xml,xpath,content,var)`](../commands/xml/insertAfter(xml,xpath,content,var)): **NEW** command to 
  insert content after xml document specified via `xpath`
- [`insertBefore(xml,xpath,content,var)`](../commands/xml/insertBefore(xml,xpath,content,var)): **NEW** command to 
  insert content before xml document specified via `xpath`
- [`replaceIn(xml,xpath,content,var)`](../commands/xml/replaceIn(xml,xpath,content,var)): **NEW** command to replace 
  inside content of an XML document specified via `xpath`
