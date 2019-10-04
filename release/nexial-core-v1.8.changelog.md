---
layout: default
title: nexial-core 1.8 (2019-01-04)
parent: release
tags: release nexial-core 1.8
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.8_0369" class="external-link" target="_nexial_link">Release 1.8</a>
2019-01-04


### General
#### Fixes:
- rename some System variables so that their name are prefixed with `nexial.` to avoid conflicts.
- ensure that macro/section expansion won't inadvertently merge passed the "ignored" section.
- update code on macro handling logic; no longer cache macro steps in support of Nexial Interactive. Performance impact 
  should be minimal.
- fixed GMail mail support due to namespace conflict in mail configuration.
- propagate data variable changes between iterations.
- fix on reading Excel cells that contain value other than STRING.
- reduce undesirable runtime errors.
- better handling of invalid or malformed test scenarios.

#### Improvements:
- improved support for XML/HTML during data variable substitution.
- minor stylistic updates to artifact templates.
- minor improvement on expanding the column width of `#data` worksheet during output generation.
- update execution output on "SKIPPED" test steps (description is now italicized).
- sort `#data` worksheet on the execution output to favor System variables over user-defined variables.
- improve the fatal error reporting in execution output.
- add `[nexial] ` prefix to mail subject in mail notification.
- major improvement in memory footprint by applying aggressive memory conservation after each iteration and script 
  execution.
- speed up batch script executions (`bin/*.sh`) for Mac/*NIX.
- improved output formatting for `nexial-variable-update` utility batch.

#### New:
- [Step Disabling](../flowcontrols/index#on-the-spot-step-skipping):
  - support skipping of command via "strikethrough": Use `Ctrl-5` on a "command" column to skip over the corresponding
    test step. This effectively add a `SkipIf(true)` flow control to the corresponding "flow controls" column. 
    Use `Ctrl-5` again to enable the corresponding test step.
  - supported on test script, macro and test plan.
  - **overwriting** instead of _appending_ `SkipIf(true)` to any existing [flow control](../flowcontrols).
- [`bin/nexial-project.cmd|sh`](../userguide/BatchFiles#nexial-project): 
  - automatically create `.meta/project.id` under the target project directory to identify each project. This manifest 
    file can be useful (in the future) for tracking and comparison purpose.
  - create additional script/data files into existing project directory, without overwriting existing artifacts.
- HTML Output:
  - **NEW** HTML execution output aimed to consolidate all execution summary within 1 HtML page. Should be most 
    helpful for plan-driven execution or iteration-laden execution.
  - automatically opens execution output HTML when `nexial.openResult` is set to `true`.


### [System Variables](../systemvars/index):
- [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink): **NEW** System variable to capture the 
  location of the last output file (only generated via certain commands).
- [`nexial.scope.refetchDataFile`](../systemvars/index#nexial.scope.refetchDataFile): **NEW** System variable to 
  preserve data variable changes between iteration.
  - if data file is to be re-fetched, then Nexial now correctly fetch the correct data file.
- [`nexial.executionCount`](../systemvars/index#nexial.executionCount): **NEW** System variable to indicate the number 
  of steps executed in real-time.
- [`nexial.executionSkipCount`](../systemvars/index#nexial.executionSkipCount): **NEW** System variable to indicate 
  the number of steps skipped in current execution in real-time.
- [`nexial.executionPassCount`](../systemvars/index#nexial.executionPassCount): **NEW** System variable to indicate 
  the number of steps passed in current execution in real-time.
- [`nexial.executionFailCount`](../systemvars/index#nexial.executionFailCount): **NEW** System variable to indicate 
  the number of steps failed in current execution in real-time.
- [`os.hostname`](../systemvars/index#os.hostname): **NEW** System variable to expose the host name of current test 
  harness.


### [Event Notification](../userguide/EventNotification)
- now supports [conditional event notification](../userguide/EventNotification#conditional-notification) via 
  `nexial.notifyOn...If` data variables:


### [Nexial Expression](../expression)
- [`nexial.expression.OpenFileAsIs`](../systemvars/index#nexial.expression.OpenFileAsIs): **NEW** System variable to 
  instruct Nexial on omitting data variable substitution during the opening of external file during the evaluation of
  a Nexial expression.


### [Nexial Interactive](../interactive)
- now supports reloading of `project.properties` (option: `9`)
- improved support for iteration. Data is re-calibrated when iteration changed during a Nexial Interactive session.
- improved support for script/data file (re)loading. When a script or data file is (re)loaded, the activity assignment 
  is re-calibrated as well to account for possible step or activity changes.
- improved support for assigning activities: use `*` to assign all available activities from the assigned scenario.
- improved support for assigning steps: use `*` to assign all available steps from the assigned scenario.
- improved support for assigning activities: use activity indices (digits) instead of activity names. Note: Use `A` to 
  reset back to all activities.


### [Nexial Filter](../flowcontrols/filter)
- new unary filter to simplify boolean filter conditions.


### [Built-in Function](../functions)
- `$(execution|meta|user)`: **NEW** function to reveal execution-time user
- [`$(syspath)`](../functions/$(syspath)): now supports `plan` as well.


### [aws.s3 commands](../commands/aws.ses)
- support AWS <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-api.html" 
  class="external-link" target="_nexial_link">Assume Role"</a> during credential challenge. Now it is possible to 
  include the switching of a AWS IAM role as part of your automation. This feature is available for all integrated AWS 
  services, which is thus far S3 and SES. For more information, read the <a 
  href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html" class="external-link" 
  target="_nexial_link">Granting a User Permissions to Switch Roles</a>.


### [aws.ses commands](../commands/aws.ses)
- support AWS <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-api.html" 
  class="external-link" target="_nexial_link">Assume Role"</a> during credential challenge. Now it is possible to 
  include the switching of a AWS IAM role as part of your automation. This feature is available for all integrated AWS 
  services, which is thus far S3 and SES. For more information, read the <a 
  href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html" class="external-link" 
  target="_nexial_link">Granting a User Permissions to Switch Roles</a>.


### [base commands](../commands/base)
- [`saveVariablesByPrefix(var,prefix)`](../commands/base/saveVariablesByPrefix(var,prefix)): **NEW** command to save
  all variable names with `prefix` as a list to `var`.
- [`saveVariablesByRegex(var,regex)`](../commands/base/saveVariablesByRegex(var,regex)): **NEW** command to save all
  variable names that match `regex` as a list to `var`.


### [excel commands](../commands/excel)
- major improvement in memory footprint by applying aggressive memory conservation after 
  [`writeDown(file,worksheet,startCell,array)`](../commands/excel/writeDown(file,worksheet,startCell,array)),
  [`writeAcross(file,worksheet,startCell,array)`](../commands/excel/writeAcross(file,worksheet,startCell,array)),
  [`write(file,worksheet,startCell,data)`](../commands/excel/write(file,worksheet,startCell,data)) and
  [`writeVar(var,file,worksheet,startCell)`](../commands/excel/writeVar(var,file,worksheet,startCell)).


### [image commands](../commands/image)
- [`compare(baseline,actual)`](../commands/image/compare(baseline,actual)): increase the thickness of the highlighting 
  border to improve readability.
- increase thread stack size to support comparison of larger images.


### [io commands](../commands/io)
- [`searchAndReplace(file,config,saveAs)`](../commands/io/searchAndReplace(file,config,saveAs)): **NEW** command to
  search/replace through the content of `file` via the name/value pair found in `config`.


### [json command](../commands/json)
- fixed json array parsing logic when its textual representation contains whitespace.


### [web commands](../commands/web)
- improved [CrossBrowserTesting support](../tipsandtricks/CrossBrowserTestingIntegration):
  - now with execution status reporting (at the end of execution).
  - now support automation on mobile devices (Android and iOS).
  - delay safari window resizing (same as on BrowserStack).
  - automatically download/update/execute CrossBrowserTesting local executable.
  - additional logging added.
  - no switching of window when automating against mobile devices.
  - code fixes to handle CrossBrowserTesting local download changes (URL changes).
  - configurable wait time (millisecond) after CrossBrowserTesting local has been initiated, to allow sufficient time
    to stabilize the executable.
  - configuration wait time can now be set to `auto` (default) for Nexial to determine most appropriate time to proceed 
    with test automation.
  - support updating of execution status per browser use within same execution. It is now possible to configure via 
    `cbt.reportStatus` when the execution status update should occur - `iteration`, `script`, `execution`.
  - execution status update now accompanied with description (in CBT, description is shown in "Notes and Tags" section).
- improved [BrowserStack support](../tipsandtricks/BrowserStackIntegration):
  - support updating of execution status per browser use within same execution. It is now possible to configure via 
    `nexial.browserstack.reportStatus` when the execution status update should occur: `iteration`,`script`,`execution`.
- support mobile device emulation when automating on chrome browser (locally).
- shipped with <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG" 
  class="external-link" target="_nexial_link">Selenium v3.141.59</a>. Significant changes include:
  - Restored remoteHost support
  - Implement `WrapsElement` by `Select` element wrapper (#6616)
  - Default the number of threads assigned to the server to 200, which is what it was in 3.13.0
- code fix to prevent unnecessary loading of web driver.


### [xml commands](../commands/xml)
- [`storeValues(xml,xpath,var)`](../commands/xml/storeValues(xml,xpath,var)): code fix to appropriately handle attribute 
  values.
- [`assertValues(xml,xpath,array,exactOrder)`](../commands/xml/assertValues(xml,xpath,array,exactOrder)): code fix to 
  appropriately handle attribute values.
