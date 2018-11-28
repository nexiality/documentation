---
layout: default
title: nexial-core 1.8 (2018-12-??)
parent: release
tags: release nexial-core 1.8
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.8" class="external-link" target="_nexial_link">Release 1.8</a>
2018-12-??


### General
- rename some System variables so that their name are prefixed with `nexial.` to avoid conflicts.
- code fix to ensure that macro/section expansion won't inadvertently merge passed the "ignored" section.
- improved support for XML/HTML during data variable substitution.
- [`${nexial.lastOutputLink}`](../systemvars/index#nexial.lastOutputLink): **NEW** System variable to capture the 
  location of the last output file (only generated via certain commands).


### [Nexial Interactive](../interactive)
- now supports reloading of `project.properties` (option: `9`)
- improved support for iteration. Data is re-calibrated when iteration changed during a Nexial Interactive session.
- improved support for script/data file (re)loading. When a script or data file is (re)loaded, the activity assignment 
  is re-calibrated as well to account for possible step or activity changes.
- improved support for assigning activities: use `*` to assign all available activities from the assigned scenario.
- improved support for assigning steps: use `*` to assign all available steps from the assigned scenario.


### [Built-in Function](../functions)


### [System variables](../systemvars)


### [aws.s3 commands](../commands/aws.ses)
- support AWS <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-api.html" class="external-link" target="_nexial_link">Assume Role"</a> 
  during credential challenge. Now it is possible to include the switching of a AWS IAM role as part of your automation. 
  This feature is available for all integrated AWS services, which is thus far S3 and SES. For more information, read 
  the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html" class="external-link" target="_nexial_link">Granting a User Permissions to Switch Roles</a>.


### [aws.ses commands](../commands/aws.ses)
- support AWS <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-api.html" class="external-link" target="_nexial_link">Assume Role"</a> 
  during credential challenge. Now it is possible to include the switching of a AWS IAM role as part of your automation. 
  This feature is available for all integrated AWS services, which is thus far S3 and SES. For more information, read 
  the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html" class="external-link" target="_nexial_link">Granting a User Permissions to Switch Roles</a>.


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)


### [image commands](../commands/image)
- [`compare(baseline,actual)`](../commands/image/compare(baseline,actual)): increase the thickness of the highlighting 
  border to improve readability.
- increase thread stack size to support comparison of larger images.


### [io commands](../commands/io)


### [json command](../commands/json)


### [ssh commands](../commands/ssh)


### [step commands](../commands/step)


### [web commands](../commands/web)
- improved [CrossBrowserTesting support](../tipsandtricks/CrossBrowserTestingIntegration):
  - now with execution status reporting (at the end of execution).
  - now support automation on mobile devices (Android and iOS).
  - delay safari window resizing (same as on BrowserStack).
  - automatically download/update/execute CrosssBrowserTesting local executable.
  - additional logging added.
  - no switching of window when automating against mobile devices.
- support mobile device emulation when automating on chrome browser (locally).
- shipped with <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG" class="external-link" target="_nexial_link">Selenium v3.141.59</a>.
  Significant changes include:
  - Restored remoteHost support
  - Implement `WrapsElement` by `Select` element wrapper (#6616)
  - Default the number of threads assigned to the server to 200, which is what it was in 3.13.0
- code fix to prevent unnecessary loading of web driver.

### [ws commands](../commands/ws)

