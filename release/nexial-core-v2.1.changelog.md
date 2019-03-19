---
layout: default
title: nexial-core 2.1 (2019-04-??)
parent: release
tags: release nexial-core 2.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.1" class="external-link" target="_nexial_link">Release 2.1</a>
2019-04-??


### General
#### Fixes:
- code fix to render correctly (color) the console output for SKIPPED step in 
  [base &raquo; `repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)) loop. 
- simplify `nexial.sh` by eliminating the need for a shell script to be generated dynamically.
- fix error with macro refactoring via [`nexial-macro-update.sh`](../userguide/BatchFiles#nexial-macro-updatecmd--nexial-macro-updatesh).

#### Improvements:
- shell scripts support commandline arguments that contain spaces.


#### Project Inspector
- code fix to `nexial-project-inspector` when the target project does not contain `project.properties`
- code fix to `nexial-project-inspector` when the target project does not contain `artifact/bin` directory
- adding a bit more project metadata when inspecting project via `nexial-project-inspector`.
- support `nexial-macro-update` and `nexial-variable-update` batch files from Project Inspector.
- slight enhancement to to `nexial-project-inspector` to automatically open HTML after script completes.
- performance improvement on scanning project artifacts via local cache, which is stored in 
  `$USER_HOME/.nexial/projectCache/$PROJECT_NAME`.
- minor output adjustment to improve readability.
- improvement on data variable inspection on commands that take on multiple variable parameters.


#### Nexial Expression
- [XML &raquo; `append`](../expressions/XMLexpression): **NEW** append content to xml document.
- [XML &raquo; `clear`](../expressions/XMLexpression): **NEW** clear content of xml document.
- [XML &raquo; `delete`](../expressions/XMLexpression): **NEW** delete node from xml document.
- [XML &raquo; `insertAfter`](../expressions/XMLexpression): **NEW** insert content after xml document.
- [XML &raquo; `insertBefore`](../expressions/XMLexpression): **NEW** insert content after xml document.
- [XML &raquo; `prepend`](../expressions/XMLexpression): **NEW** prepend content to xml document.
- [XML &raquo; `replace`](../expressions/XMLexpression): **NEW** replace xml node with content from xml document.
- [XML &raquo; `replaceIn`](../expressions/XMLexpression): **NEW** replace inside xml content of xml document.
- [LIST &raquo; `sum`](../expressions/LISTexpression#sum): fix the handling of numbers with different floating points. 
  Now Nexial should resolve to the largest (or longest) floating points found during the `sum` operation.
- [LIST &raquo; `replaceItem`](../expressions/LISTexpression#replaceitemsearchforreplacewith): fix to support empty
  item replacement

### [Built-in Function](../functions)


### Event Notification


### [aws.sqs commands](../commands/aws.sqs)


### [base commands](../commands/base)
- [`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)): support the reference of macro files from
  directories other than `artifact/script`.


### [desktop commands](../commands/desktop)
- code fix to [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues)) when combo box 
  is not editable (can't type text in combo box).


### [macro commands](../commands/macro)


### [web commands](../commands/web)
- new System variable - [`nexial.web.scrollIntoView`](../systemvars/index#nexial.web.scrollIntoView) to reduce 
  additional (and possibly unnecessary) `scrollIntoView` automation prior to interacting with an element. This would be 
  applicable to "type", "typeKeys", "click" and "double click" commands.
- code fix for Electron app where not all Selenium/Webdriver features are supported, particularly `actions`.
- code fix for Electron app where `element.clear()` is not _really_ clearing out input value due to registered event 
  handler on the application. In such case, Nexial issue hard `BACKSPACE` to compensate the clearing intent.
- [`rightClick(locator)`](../commands/web/rightClick(locator)): **NEW** command to support right click.


### [xml commands](../commands/xml)
- [`insertAfter(xml,xpath,content,var)`](../commands/xml/insertAfter(xml,xpath,content,var)): **NEW** command to 
  insert content after xml document specified via `xpath`
- [`insertBefore(xml,xpath,content,var)`](../commands/xml/insertBefore(xml,xpath,content,var)): **NEW** command to 
  insert content before xml document specified via `xpath`
- [`replaceIn(xml,xpath,content,var)`](../commands/xml/replaceIn(xml,xpath,content,var)): **NEW** command to replace 
  inside content of an XML document specified via `xpath`

