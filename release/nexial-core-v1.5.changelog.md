---
layout: default
title: nexial-core 1.5 (2018-09-??)
parent: release
tags: release nexial-core 1.5
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.5" class="external-link" target="_nexial_link">Release 1.5</a>
2018-09-??


### General
- supports replacing multiple `(empty)`, `(blank)`, `(tab)` and `(eol)` with the appropriate values in the parameter. 
  For example, `(blank)(blank)(blank)` will now be replaced as `   ` (3 spaces).
- Added new command line option(`-p`) in `nexial-variable-update.cmd` batch file to only preview updating variables. It won't update variables just showcase which variables will be updated. 


### Flow Control


### Event Notification


### Nexial Expression  

### [io commands](../commands/io)
- file validation support to give a choice to the user to define record spec configuration for any one record type or
  for a combination of the record types(file header, section header, section body, section footer, file footer).
   
### [csv commands](../commands/csv)
  

### [number commands](../commands/number)


### [json command](../commands/json)


#### [web commands](../commands/web)
- honor [`nexial.browser.forceJSClick`](../systemvars/index#nexial.browser.forceJSClick) so that if it is set to 
  `false` then Nexial will not automate `click` event via JavaScript. This might slightly improve execution performance
  and possibly reduce some flakiness.
- enable web element highlight during the execution of `assert`* commands. Note that [`nexial.highlight`] must be set
  to `true` to activate web element highlighting.
