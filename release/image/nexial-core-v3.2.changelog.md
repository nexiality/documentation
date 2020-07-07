---
layout: default
title: nexial-core 3.2 (2020-08-??)
parent: release
tags: release nexial-core 3.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.2_???" class="external-link" target="_nexial_link">Release 3.2</a>
2020-08_??


### General
#### Fixes

#### Improvements


### [Batch Files](../userguide/BatchFiles)


### [System Variable](../systemvars)


### [Nexial Filter](../flowcontrols/filter)


[Built-In Function]


### [base commands](../commands/base)


### [localdb commands](../commands/localdb)


### [rdbms commands](../commands/rdbms)


### [ssh](../commands/ssh)


### [web commands](../commands/web)
- create default `waitMs` for the following "waitFor" commands:
  - [`waitForElementPresent(locator,waitMs)`](../commands/web/waitForElementPresent(locator,waitMs)).
  - [`waitUntilVisible(locator,waitMs)`](waitUntilVisible(locator,waitMs)).
  - [`waitUntilHidden(locator,waitMs)`](waitUntilHidden(locator,waitMs)).
  - [`waitUntilEnabled(locator,waitMs)`](waitUntilEnabled(locator,waitMs)).
  - [`waitUntilDisabled(locator,waitMs)`](waitUntilDisabled(locator,waitMs)). 
  - the default `waitMs` (if not specified) is the same as `${nexial.pollWaitMs}`.


### [webalert](../commands/webalert)
