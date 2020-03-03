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
 

### [JSONPath](../jsonpath)


### [Nexial Interactive](../interactive)


### [System Variable](../systemvars)
- [`nexial.lastOutputPath`](../systemvars/index#nexial.lastOutputPath): **NEW** System variable to expose the location
  of the last output ([`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink)). This System variable will 
  honor the [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) mode where the output is to be 
  transformed to a URL (cloud storage). This is useful when a command (such as 
  [rdbms &raquo; `saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir))) could possibly 
  generate multiple output files.


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- [JSON](../expressions/JSONexpression): code fix to accurately reporting invalid file or content when constructing a
  JSON expression.
- [TEXT](../expressions/TEXTexpression): **NEW** operation - `parseAsCsv(configs)` - to convert TEXT to CSV expression.


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


### [sound commands](../commands/sound)


### [web commands](../commands/web)
- minor fixes to allow for multiple UserStack API keys.
- [`switchBrowser(profile,config)`](../commands/web/switchBrowser(profile,config)): **NEW** command to switch between
  two or more independent browsers during execution.
- support auto-search for chrome and firefox binary when the "default" or system-defined binary path cannot be found.
- userstack error no longer pervent execution from continuing. 
