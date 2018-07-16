---
layout: default
title: nexial-core 1.4 (2018-08-??)
parent: release
tags: release nexial-core 1.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.4" class="external-link" target="_nexial_link">Release 1.4</a>
2018-08-??

### General


### Flow Control
- `TimeTrackStart(label)` and `TimeTrackEnd()`: new flow control to mark start/end time of any arbitrary group of steps.


### Execution Dashboard
- fixed code to promote `buildnum` to execution summary.


#### Event Notification
- new event handling to mark the elapsed time of a well-defined events:
  - `nexial.trackExecution=true`: log start/end and elapsed time of an execution.
  - `nexial.trackScript=true`: log start/end and elapsed time of a script.
  - `nexial.trackIteration=true`: log start/end and elapsed time of an iteration.
  - `nexial.trackScenario=true`: log start/end and elapsed time of a scenario.


#### [web commands](../commands/web)
- preliminary support for Microsoft Edge browser for Windows 10. 
  - **Note**: XPATH locator is not supported in the 10240 build of Windows 10/Edge/webdriver
- implemented auto download of Edge webdriver in order to support multiple builds of Windows 10.
  - Nexial no longer shipped with any Edge webdriver. Instead now it automatically downloads one that is appropriate
    for the version of Windows 10 running the execution.
  - fixed code to default to min. OS version (10.0.10240) if an old version of Windows 10 is encountered.
  - known issues:
    - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4468545/
- supports tag-based locator using `tag=` prefix
- browser-specific support on "switch-window" capability. Currently Edge does not support "switch-window".
