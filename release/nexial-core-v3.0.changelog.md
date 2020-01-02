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

#### Improvements
- [bin/nexial-script-update](../userguide/BatchFiles#nexial-script-update): add optional flag to automatically 
  rename duplicate activity names found in the same scenario.
- [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud): now supports subdirectory (or relative paths) when 
  moving execution artifacts to cloud storage. This means that any execution artifacts to be created in a subdirectory
  under the "output" directory will be move to the cloud storage with said subdirectory intact.


### [JSONPath](../jsonpath)


### [Nexial Interactive](../interactive)


### [System Variable](../systemvars)


### [Built-in Functions](../functions)


### [Nexial Expression](../expressions)
- [JSON](../expressions/JSONexpression): code fix to accurately reporting invalid file or content when constructing a
  JSON expression.


### [csv commands](../commands/csv)
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual)): now
  supports the comparing of cell content as either an order-significant (via `[profile].compareExt.matchAsOrderedList`)
  or order-insignificant (via `[profile].compareExt.matchAsUnorderedList`) list.


### [excel commands](../commands/excel)


### [rdbms commands](../commands/rdbms)
- [`saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)) and 
  [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output)): minor adjustment so that the resulting 
  CSV file will be referenced by [`nexial.lastOutputLink`](../systemvars/index#nexial.lastOutputLink) System variable 
  (instead of the metadata JSON file).


### [sound commands](../commands/sound)


### [web commands](../commands/web)
