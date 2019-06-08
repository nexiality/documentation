---
layout: default
title: nexial-core 2.4 (2019-07-??)
parent: release
tags: release nexial-core 2.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.4_???" class="external-link" target="_nexial_link">Release 2.4</a>
2019-07-??

### General
#### Fixes
- code fix to avoid modifying System properties while simultaneously reading such properties.
- [`nexial-project.cmd`](../userguide/BatchFiles#nexial-projectcmd--nexial-projectsh): fixed the `ECHO is off.` error.
- [`nexial-artifact-repair.cmd|sh`](../userguide/BatchFiles#nexial-artifact-repaircmd--nexial-artifact-repairsh): 
  fixed invalid package reference.

#### Improvements
- removed `java.awt.headless=true` from .commons.cmd|ssh in order to support Robot-based type key


### [Nexial Installer](https://github.com/nexiality/nexial-installer)


### System Variables
- **[`nexial.scope.mailTo`] HAS BEEN REMOVED AND REPLACED BY [`nexial.mailTo`](../systemvars/index#nexial.mailTo)**
- [`nexial.mailSubject`](../systemvars/index#nexial.mailSubject): **NEW** System variable to custom email subject for
  post-execution email notification
- [`nexial.mailHeader`](../systemvars/index#nexial.mailHeader): **NEW** System variable to custom "header" content for
  post-execution email notification
- [`nexial.mailFooter`](../systemvars/index#nexial.mailFooter): **NEW** System variable to custom "footer" content for
  post-execution email notification


### Nexial Expression


### Nexial Filter


### [aws.sqs commands](../commands/aws.sqs)


### [base commands](../commands/base)
- [`assertArrayEqual(array1,array2,exactOrder)`](../commands/base/assertArrayEqual(array1,array2,exactOrder)): minor
  improvement on console message to reflect the result of the said assertion.


### [csv commands](../commands/csv)


### [desktop commands](../commands/desktop)
- [`typeKeys`](../commands/desktop/typeKeys(os,keystrokes)): **NEW** command to automate a series of `keystrokes` to 
  the current execution environment.
  

### [external commands](../commands/external)


### [localdb commands](../commands/localdb)


### [io commands](../commands/io)


### [web commands](../commands/web)
- stabilize available open window/tab while attempting to select one of them via its index.
- support enabling of chrome remote port (aka DevToolsActivePort) via new System variable 
  [`nexial.browser.chrome.remote.port`](../systemvars/index#nexial.browser.chrome.remote.port). By default, this System 
  variable is not enabled. The default Chrome's DevToolsActivePort is `12209` or `9555`. This is needed when automating 
  Electron application via chromedriver 4.x or above (set port to `12209`).
- enable external chromedriver logging for chrome and electron automation via System variable 
  [`nexial.browser.logChrome`](../systemvars/index#nexial.browser.logChrome), 
  [`nexial.browser.logElectron`](../systemvars/index#nexial.browser.logElectron), and 
  [`nexial.browser.logElectronVerbose`](../systemvars/index#nexial.browser.logElectronVerbose).
- use ChromeDriverService so that chrome driver can reuse same port for driver-browser communication. This helps to 
  stabilize chrome browser automation.
