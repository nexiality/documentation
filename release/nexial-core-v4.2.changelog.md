---
layout: default
title: nexial-core 4.2 (2021-09-??)
parent: release
tags: release nexial-core 4.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.2_????" class="external-link" target="_nexial_link">Release 4.2</a>
2021-09-??


### General

#### Fixes

#### Improvements
- allow priority overrides (specified via `-override`) to take effect prior to loading project artifacts. As such, 
  these overrides can be specified via the `-override` command line argument. Previous requirement of using 
  `JAVA_OPT=-D...` is still supported so no script/batch file changes are required.


### [Batch Files](../userguide/BatchFiles)
- [`nexial-project`](../userguide/BatchFiles#nexial-project): fixed minor edge condition during project creation


### [Interactive](../interactive)


### [Expressions](../expressions)


### [desktop commands](../commands/desktop)


### [macro commands](../commands/macro)


### [mobile commands](../commands/mobile)
- [`scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)`](../commands/mobile/scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)):
  **NEW** command to scroll until a specific element is present.
  - fix scrolling issue that cause UI to hang at times.
- [`assertElementNotVisible(locator)`](../commands/mobile/assertElementNotVisible(locator)): **NEW** command to assert
  that an element is either not present or not visible.
- [`select(locator,item)`](../commands/mobile/select(locator,item)): performance and accuracy improvements.
- [`text=`]: text locator now supports PolyMatcher (except for REGEX and NUMERIC)
- [`nearby=`]: nearby locator now supports `above` and `below` as well
  - support PolyMatcher on attribute values as well as text
  - support item priority via `{item:#}` where user can specify exactly the occurrence (of multiple matches) to use
  - support "container" reference via `container:` and `scroll-container`
- [`assertElementNotPresent(locator)`](../commands/mobile/assertElementNotPresent(locator)): **NEW** command to assert
  the absence of element(s).
- [`assertElementEnabled(locator)'](../commands/mobile/assertElementEnabled(locator)): **NEW** command to assert the
  presence and readiness (for interaction) of an element.
- [`assertElementDisabled(locator)`](../commands/mobile/assertElementDisabled(locator)): **NEW** command to assert that
  an element is disabled for interaction.
- [`select(locator,item)`](../commands/mobile/select(locator,item)): support PolyMatcher on `item`.
- [`saveAttributes(var,locator,attribute)`](../commands/mobile/saveAttributes(var,locator,attribute)): *NEW* command to 
  collect the attribute values from a list of elements matching `locator`.
- [`assertAlertPresent(text)`](../commands/mobile/assertAlertPresent(text)): **NEW** command to alert that an alert 
  dialog is present. iOS only.
- [`clearAlert(option)`](../commands/mobile/clearAlert(option)): **NEW** command to clear/dismiss existing alert 
  dialog. iOS only.
- [`saveAlertText(var)`](../commands/mobile/saveAlertText(var)): **NEW** command to save the text content of an 
  existing alert dialog. iOS only.
- [`clearNotification()`](../commands/mobile/clearNotification()): **NEW** command to clear off all push notifications. 
  Android only.
- [`type(locator,text)`](../commands/mobile/type(locator,text)): code fix to clear off existing text before typing
- code fix to handle `text=...` locator for iOS automation (automatically convert to using `label` attribute)
- fixed path references in `bin/mobile/android-setup.sh`.


### [rdbms commands](../commands/rdbms)


### [localdb commands](../commands/localdb)


### [sound commands](../commands/sound)


### [web commands](../commands/web)
- update to latest geckodriver (firefox)


### [webmail commands](../commands/webmail)
- reduce dependency on web command and webdriver


### [ws commands](../commands/ws)
- code fix to correctly treat text-based payload as such (instead of as binary stream)
- [`assertReturnCode(var,returnCode)`](../commands/ws/assertReturnCode(var,returnCode)): allows `returnCode` to be
  expressed as a list or range.
