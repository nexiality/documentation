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
- fix email notification when email address isn't specified
- force email notification to be sent as HTML
- [`nexial-variable-update`](../userguide/BatchFiles.md#nexial-variable-updatecmd--nexial-variable-updatesh): slight improvement on logging

#### Improvements:
- minor improvement on logging to help troubleshoot test step errors.
- [`nexial-variable-update`](../userguide/BatchFiles.md#nexial-variable-updatecmd--nexial-variable-updatesh) script 
   now supports macro and HTML files. Also reduced excessive logging.
- event notification: mail notification now supports HTML via System variable `nexial.notifyViaHTML`.

### [System Variables](../systemvars/index):


### [Built-in Function](../functions)
- [execution]: better support for execution metadata, specifically for scenario and script

### [Nexial Expression](../expression)


### [aws.s3 commands](../commands/aws.s3)


### [macro commands](../commands/macro)
- [`description()`](../commands/macro/description()): **NEW** no-op command for script author to provide macro 
  documentation in a standard way.
- [`expects(var,default)`](../commands/macro/expects(var,default)): **NEW** command to assert expected data variable 
  prior to invoking the enclosing macro.
- [`produces(var,value)`](../commands/macro/produces(var,value)): **NEW** command to indicate the data variable that 
  will be created/overwritten as part of the enclosing macro execution. 


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
- [`saveAttributeList(var,locator,attrName)`]: *NEW* command to save the value of an attribute for all matching elements.


### [xml commands](../commands/xml)
