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


### [Batch Files](../userguide/BatchFiles)
- [`nexial-project`](../userguide/BatchFiles#nexial-project): fixed minor edge condition during project creation


### [Interactive](../interactive)


### [Expressions](../expressions)


### [desktop commands](../commands/desktop)


### [macro commands](../commands/macro)


### [mobile commands](../commands/mobile)
- [`scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)`](../commands/mobile/scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)):
  **NEW** command to scroll until a specific element is present.
- [`assertElementNotVisible(locator)`](../commands/mobile/assertElementNotVisible(locator)): **NEW** command to assert
  that an element is either not present or not visible.
- [`select(locator,item)`](../commands/mobile/select(locator,item)): performance and accuracy improvements.
- [`text=`]: text locator now supports PolyMatcher (except for REGEX and NUMERIC)
- [`nearby=`]: nearby locator now supports `above` and `below` as well


### [rdbms commands](../commands/rdbms)


### [localdb commands](../commands/localdb)


### [sound commands](../commands/sound)


### [web commands](../commands/web)
- update to latest geckodriver (firefox)


### [webmail commands](../commands/webmail)
- reduce dependency on web command and webdriver


### [ws commands](../commands/ws)
