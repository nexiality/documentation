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

#### Improvements
- [`project.properties`](../userguide/UnderstandingProjectStructure#artifactprojectproperties): supports 
  environment-specific project.properties via runtime environment variable `nexial.env`.
  - when environment-specific project.properties is specified, the default `project.properties` will be loaded first
- minor log reformatting to improve readability.


### [System Variable](../systemvars)
- [`nexial.io.matchRecursive`](../systemvars/index#nexial.ui.matchRecursive): **NEW** System variable to determine if 
  Nexial should scan recursively the target directory when invoking 
  [io &raquo; `saveMatches(var,path,fileFilter,textFilter)`](../commands/io/saveMatches(var,path,fileFilter,textFilter)).


### [Expression](../expressions)

 
### [desktop commands](../commands/desktop)
- [`clickMenu(menu)`](../commands/desktop/clickMenu(menu)): avoid unnecessary error when clicking on a menu item.


### [pdf commands](../commands/pdf)


### [image commands](../commands/image)


### [mail commands](../commands/mail)


### [rdbms commands](../commands/rdbms)


### [web commands](../commands/web)
- instructs chrome browser not to show "Save Password" prompt during automation
- instructs firefox browser not to show "Save Password" prompt during automation
 

### [word commands](../commands/word)


## [tn.5250 commands](../commands/tn.5250)
