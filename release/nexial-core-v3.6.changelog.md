---
layout: default
title: nexial-core 3.6 (2021-01-08)
parent: release
tags: release nexial-core 3.6
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.6_????" class="external-link" target="_nexial_link">Release 3.6</a>
2021-01-08


### General
#### Fixes
- fixed "quiet mode" ([`nexial.quiet`](../systemvars/index.html#nexial.quiet)) so that console logs will be drastically 
  reduced.
- correctly read `nexial.mail.smtp.from` from command line or nexial-setup.
- [`nexial-setup`](../userguide/BatchFiles#nexial-setup): backward supports for older Java (version 8-15).
- fixed code not to fire "fail" event when evaluating an assert command within `repeat-until` to evaluate the 
  continuation of a loop.

#### Improvements
- [`project.properties`](../userguide/UnderstandingProjectStructure#artifactprojectproperties): supports 
  environment-specific project.properties via runtime environment variable `nexial.env`.
  - when environment-specific project.properties is specified, the default `project.properties` will be loaded first
- minor log reformatting to improve readability.
- PolyMatcher: **NEW** expressive comparison technique to perform inexact text comparison.  Currently supports
  `REGEX:` for regular expression based matching, `CONTAIN:` and `CONTAIN_ANY_CASE:` for partial text matching, 
  `START:` and `START_ANY_CASE:` for "starts-with" text matching, `END:` and `END_ANY_CASE:` for "ends-with" text 
  matching. Will be added to more commands and expressions in the future.
- adding logging for clarity


### [System Variable](../systemvars)
- [`nexial.io.matchRecursive`](../systemvars/index#nexial.ui.matchRecursive): **NEW** System variable to determine if 
  Nexial should scan recursively the target directory when invoking 
  [io &raquo; `saveMatches(var,path,fileFilter,textFilter)`](../commands/io/saveMatches(var,path,fileFilter,textFilter)).
  - also impacts [io &raquo; `count(var,path,pattern)`](../commands/io/count(var,path,pattern)).
- [`nexial.io.matchExact`](../systemvars/index#nexial.ui.matchExact): **NEW** System variable to determine if the 
  regex-based matching logic should match "partially" or "exactly". Use `true` to perform match. Default is `false`.
  This impact the following commands:
  - [io &raquo; `moveFilesByRegex(sourceDir,regex,target)`](../commands/io/moveFilesByRegex(sourceDir,regex,target))
  - [io &raquo; `deleteFilesByRegex(sourceDir,regex)`](../commands/io/deleteFilesByRegex(sourceDir,regex))
  - [io &raquo; `copyFilesByRegex(sourceDir,regex,target)`](../commands/io/copyFilesByRegex(sourceDir,regex,target))


### [Expression](../expressions)
- [LIST &raquo; `index(item)`](../expressions/LISTexpression#indexitem): supports PolyMatcher for inexact/expressive text comparison.


### [Function](../functions)
- [`$(format|phone|text)`](../functions/$(format).html#formatphonetext): improvement to accept phone number with 
  non-numeric characters such as `-`, `.`, `(` and `)`.

 
### [desktop commands](../commands/desktop)
- [`clickMenu(menu)`](../commands/desktop/clickMenu(menu)): avoid unnecessary error when clicking on a menu item.


### [json commands](../commands/json)
- [`assertValue(json,jsonpath,expected)`](../commands/json/assertValue(json,jsonpath,expected)): supports PolyMatcher 
  for inexact/expressive text comparison.


### [pdf commands](../commands/pdf)


### [image commands](../commands/image)


### [mail commands](../commands/mail)
- [`compose(var,config,value)`](../commands/mail/compose(var,config,value)): support adding new files as attachments, 
  instead of replacing them.
- [`clearComposed(var)`](../commands/mail/clearComposed(var)): no longer cause FAIL when specified variable is not found.


### [rdbms commands](../commands/rdbms)
- [`assertResultMatch(var,columns,search)`](../commands/rdbms/assertResultMatch(var,columns,search)): supports 
  PolyMatcher for inexact/expressive text comparison.
- [`assertResultNotMatch(var,columns,search)`](../commands/rdbms/assertResultNotMatch(var,columns,search)): supports 
  PolyMatcher for inexact/expressive text comparison.


### [ssh commands](../commands/ssh)
- added additional logging for better RCA


### [web commands](../commands/web)
- instructs chrome browser not to show "Save Password" prompt during automation.
- instructs firefox browser not to show "Save Password" prompt during automation.
- [`assertText(locator,text)`](../commands/web/assertText(locator,text)): supports PolyMatcher for inexact/expressive 
  text comparison.
- [`assertValue(locator,value)`](../commands/web/assertValue(locator,value)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`assertAttribute(locator,attrName,value)`](../commands/web/assertAttribute(locator,attrName,value)): supports 
  PolyMatcher for inexact/expressive text comparison.
- [`assertNotText(locator,text)`](../commands/web/assertNotText(locator,text)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`deselectMulti(locator,array)`](../commands/web/deselectMulti(locator,array)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`select(locator,text)`](../commands/web/select(locator,text)): supports PolyMatcher for inexact/expressive text 
  comparison.
- [`selectMulti(locator,array)`](../commands/web/selectMulti(locator,array)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`assertCssPresent(locator,property,value)`](../commands/web/assertCssPresent(locator,property,value)): supports 
  conversion of HEX color to RGBA form.


### [word commands](../commands/word)


## [tn.5250 commands](../commands/tn.5250)
- implement retry logic when scanning for nested screen
- [`assertFieldMatch(label,expects)`](assertFieldMatch(label,expects)): supports PolyMatcher for inexact/expressive 
  text comparison.
- [`assertFieldNotMatch(label,expects)`](assertFieldNotMatch(label,expects)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`assertMessageMatch(expects)`](assertMessageMatch(expects)): supports PolyMatcher for inexact/expressive text 
  comparison.
- [`assertMessageNotMatch(expects)`](assertMessageNotMatch(expects)): supports PolyMatcher for inexact/expressive 
  text comparison.
- [`assertTableMatch(column,text)`](assertTableMatch(column,text)): supports PolyMatcher for inexact/expressive text 
  comparison.
- [`assertTableNotMatch(column,text)`](assertTableNotMatch(column,text)): supports PolyMatcher for inexact/expressive 
  text comparison.
- [`checkScreenText((expected,expectMatch)`](checkScreenText((expected,expectMatch)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`checkTableContains(column,text,expectMatch)`](checkTableContains(column,text,expectMatch)): supports PolyMatcher 
  for inexact/expressive text comparison.
- [`saveTableMatchCount(var,column,text)`](saveTableMatchCount(var,column,text)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`typeOnMatchedColumns(matches,keystrokes)`](typeOnMatchedColumns(matches,keystrokes)): supports PolyMatcher for 
  inexact/expressive text comparison.
- [`typeOnMatchedRow(column,match,keystrokes)`](typeOnMatchedRow(column,match,keystrokes)): supports PolyMatcher for 
  inexact/expressive text comparison.
