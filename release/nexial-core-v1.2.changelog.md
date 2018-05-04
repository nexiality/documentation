---
layout: default
title: nexial-core 1.2 (2018-06-??)
parent: release
tags: release nexial-core 1.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.2" class="external-link" target="_nexial_target">Release 1.2</a>
2018-06-??


### General
- fixed internal logic to handle the insertion of Excel rows that avoids the infamous "unreadable content" error. The
  underlying bug (in POI) is documented at https://bz.apache.org/bugzilla/show_bug.cgi?id=57423


#### [rdbms commands](../commands/rdbms/index)
- [rdbms &raquo; `saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): **NEW** command
  to execute a series of queries and save the results to CSV files.
