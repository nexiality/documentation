---
layout: default
title: nexial-core 2.0 (2019-03-??)
parent: release
tags: release nexial-core 2.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.0" class="external-link" target="_nexial_link">Release 2.0</a>
2019-03-??


### General
#### Fixes:


#### Improvements:


### [System Variables](../systemvars/index):


### [Nexial Expression](../expression)


### [aws.s3 commands](../commands/aws.s3)


### [desktop commands](../commands/desktop)


### [external commands](../commands/external)


### [excel commands](../commands/excel)


### [json command](../commands/json)


### [web commands](../commands/web)
- code fix on [`selectWindowByIndex(index)`](../commands/web/selectWindowByIndex(index)) and 
  [`selectWindowByIndexAndWait(index,waitMs)`](../commands/web/selectWindowByIndexAndWait(index,waitMs)) to allow for 
  last window to be selected.
- enhancement to speed up Electron automation by removing "page source support" and "preemptive dialog checks". Both
  of these checks are not common (and at times not applicable) to Electron applications.


### [xml commands](../commands/xml)
