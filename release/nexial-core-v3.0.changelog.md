---
layout: default
title: nexial-core 3.0 (2020-01-??)
parent: release
tags: release nexial-core 3.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.0_???" class="external-link" target="_nexial_link">Release 3.0</a>
2020-01-??


### General
#### Fixes
- remove erroneous data output generation in `#summary` worksheet.
- ensure `nexial.lastOutcome` to set to `false` when exception occurs.
- update Nexial internal use of web service functionality so that such use is not affected by user's configuration and 
  project artifacts.
- remove email receipt (aka DSN, or delivery status notification) from Nexial mail notification.
#### Improvements
- [bin/nexial-script-update](../userguide/BatchFiles#nexial-script-update): add optional flag to automatically 
  rename duplicate activity names found in the same scenario.
- [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud): now supports subdirectory (or relative paths) when 
  moving execution artifacts to cloud storage. This means that any execution artifacts to be created in a subdirectory
  under the "output" directory will be move to the cloud storage with said subdirectory intact.
- Removed unnecessary error logs for commands other than web and desktop when 
  [`nexial.screenshotOnError`](../systemvars/index#nexial.screenshotOnError) is true.
- [bin/nexial-project](../userguide/BatchFiles#nexial-project): Now supports creation of project.properties
   if it doesn't exist.
- create error log when exception ocurrs to help improve RCA.
- update mail configuration, including `nexial.mailHeader` and `nexial.mailFooter` information at the end of each 
  script execution.
- Added **NEW** command line option [`-subplan`](../userguide/BatchFiles#nexial) to execute specific worksheets/subplans
  of a test plan which is only available for single plan execution.
 

### [Nexial Interactive](../interactive)
- minor fix for corner case dealing with iteration. Now it is possible to run a non-default (`1`) iteration value
  via `nexial.scope.iteration` in the data file without forcefully setting such iteration value in Interactive Mode.
- fixed runtime error when inspecting data variables within Nexial Interactive
- improved support for flow control over [`base.section(step)`](../commands/base/section(steps)) to properly skip
  over steps that are enclosed within a section


### [System Variable](../systemvars)
- [`nexial.lastOutputPath`](../systemvars/index#nexial.lastOutputPath): **NEW** System variable to expose the location
  of the last output ([`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink)). This System variable will 
  honor the [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) mode where the output is to be 
  transformed to a URL (cloud storage). This is useful when a command (such as 
  [rdbms &raquo; `saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir))) could possibly 
  generate multiple output files.
- [`nexial.maxConsoleDisplay`](../systemvars/index#nexial.maxConsoleDisplay): **NEW** System variable to limit the 
  amount of text or data variable to be displayed on console to ease the readability of the execution log on the 
  console. Default is `500`. Setting this System variable to `-1` will disable such limit.
- [`nexial.subplansIncluded`](../systemvars/index#nexial.subplansIncluded): **NEW** This variable provides all 
  worksheets/subplans executed by Nexial single plan execution.
- [`nexial.subplansOmitted`](../systemvars/index#nexial.subplansOmitted): **NEW** This variable provides all 
  worksheets/subplans omitted(not executed) by Nexial single plan execution.

### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- [JSON](../expressions/JSONexpression): code fix to accurately reporting invalid file or content when constructing a
  JSON expression.
- [TEXT](../expressions/TEXTexpression): **NEW** operation - `parseAsCsv(configs)` - to convert TEXT to CSV expression.
- [CSV](../expressions/CSVexpression): [`merge(var,keyColumns)`](../expressions/CSVexpression#mergevarkeycolumns) now
  supports multiple "key" columns so that one can merge 2 CSV content based on multiple keys. Note that both CSV content
  must contain header (i.e. parsed with `header=true`).
- additional logging to improve troubleshooting and RCA.
- [NUMBER](../expressions/NUMBERexpression): **NEW** operation - `abs` - to convert a number into its absolute form 
  (i.e. positive number).


### [csv commands](../commands/csv)
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): now
  supports the comparing of column content as either an order-significant 
  (via `[profile].compareExt.matchAsOrderedList`) or order-insignificant 
  (via `[profile].compareExt.matchAsUnorderedList`) list.
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): "list" 
  column cell can also combine with "trim-first" (via `[profile].compareExt.matchAutoTrim`) and "insensitively compare" 
  (via `[profile].compareExt.matchCaseInsensitive`).
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): minor
  fixes to improve "output to cloud" support for when the EXPECTED or ACTUAL file is stored in cloud storage.


### [excel commands](../commands/excel)


### [desktop commands](../commands/desktop)
- Fixed issue of build number. Now build num provided by [`nexial.scriptRef.buildnum`](../systemvars/index#nexial.scriptRef.buildnum)
  has precedence over application version defined in application config xml file. 


### [rdbms commands](../commands/rdbms)
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)) and 
  [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output)): minor adjustment so that the resulting 
  CSV file will be referenced by [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink) System variable 
  (instead of the metadata JSON file).
- supports MongoDB via [`rdbms`](../commands/rdbms) commands. See 
  [Database Connection Setup](../commands/rdbms/index#database-connection-setup) and 
  [Working With Execution Result](../commands/rdbms/index#working-with-execution-result) for more details. Not all
  `rdbms` commands are yet supported (to be ratified soon!)
- supports connecting to MongoDB with SSL/TLS
- improved support for AWS DocumentDB via the current MongoDB connectivity support. Nexial now includes standard AWS 
  `rds-combined-ca-bundle.pem` in the `jks` form to simplify connectivity.
- [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output)): force FAIL when unable to execute query
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): force FAIL when unable to execute query


### [sound commands](../commands/sound)


### [web commands](../commands/web)
- minor fixes to allow for multiple UserStack API keys.
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): **NEW** command to switch between
  two or more independent browsers during execution.
- support auto-search for chrome and firefox binary when the "default" or system-defined binary path cannot be found.
- userstack error no longer pervent execution from continuing. 
- code fix to ignore scrolling or [highlight](../systemvars/index#nexial.web.highlight) error during automation.
- deprecated [`selectMultiOptions(locator,array)`](../commands/web/selectMultiOptions(locator)); use 
  [`selectAllOptions(locator)`](../commands/web/selectAllOptions(locator)) instead.
- [`selectMultiByValue(locator,array)`](../commands/web/selectMultiByValue(locator,array)): **NEW** command to select
  `<OPTION>` elements of a `<SELECT>` element based on their assigned `value` attribute.
- workaround for the recent `samesite` implementation by Chrome (v80+) to block certain cookies.
 - [`saveTitle(var`)](../commands/web/saveTitle(var)): **NEW** command to save the current page title to a variable.
 - supports the `partialLinkText` locator (alias: `partial`).
- [`nexial.browser.isOpen`] - **NEW** System variable to indicate that the target browser is opened (to an URL) or not.
- [`nexial.browser.current`] - **NEW** System variable to indicate the current browser type.
- [`assertElementEnabled(locator)`](../commands/web/assertElementEnabled(locator)): **NEW** command to validate the 
  usability of an element (usually form element).
- add EAGER as default page load strategy for chrome browser; help to reduce occasional false-positive error when the 
  web page does not load timely.
- [`waitForElementsPresents(locators)`](../commands/web/waitForElementsPresent(locators)): **NEW** command to wait for 
  the presence of one or more locators.
- explicitly use `nexial.web.alwaysWait` system variable to trigger Selenium's fluent-wait strategy.
- change default value for `nexial.web.pageLoadWaitMs` to 15 seconds (instead of 10 seconds).


### [webcookie commands](../commands/webcookie)
- [`saveAllAsText(var,excludes)`](../commands/webcookie/saveAllAsText(var,exclude)): **NEW** command to save all 
  available cookie (at the time of execution) as `var`. One can optionally excludes one or more cookie by name via the 
  `excludes` parameter.
- [`clearCookieFields(var,remove)`](../commands/webcookie/clearCookieFields(var,remove)): **NEW** command to remove
  one or more fields (denoted as `remove`) from the cookie(s) saved in `var`.


### [ws commands](../commands/ws)
- fix URL encoding unnecessarily applied on certain characters.
