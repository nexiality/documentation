---
layout: default
title: nexial-core 1.9 (2019-02-??)
parent: release
tags: release nexial-core 1.9
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.9" class="external-link" target="_nexial_link">Release 1.9</a>
2019-02-??


### General
#### Fixes:
- open execution output doesn't create new command console.

#### Improvements:

#### New:


### [System Variables](../systemvars/index):


### [Event Notification](../userguide/EventNotification)


### [Nexial Expression](../expression)
- [JSON &raquo; `beautify`](../expressions/JSONexpression): **NEW** beautify `json` to improve readability.
- [JSON &raquo; `minify`](../expressions/JSONexpression): **NEW** minify `json` to improve data transfer efficiency.


### [Nexial Interactive](../interactive)


### [Nexial Filter](../flowcontrols/filter)


### [Built-in Function](../functions)


### [aws.s3 commands](../commands/aws.ses)


### [aws.ses commands](../commands/aws.ses)


### [base commands](../commands/base)


### [excel commands](../commands/excel)
- automatically create missing Excel files when using any of the `write*()` commands.
- allow the reading of an empty cell range follow by other Excel operations such as `transpose()`.
- [`clear(file,worksheet,range)`](../commands/excel/clear(file,worksheet,range)): now clearing a non-existent file or 
  worksheet would not throw any error.


### [image commands](../commands/image)


### [io commands](../commands/io)


### [json command](../commands/json)
- [`beautify(json,var)`](../commands/json/beautify(json,var)): **NEW** beautify `json` to improve readability.
- [`minify(json,var)`](../commands/json/minify(json,var)): **NEW** minify `json` to improve data transfer efficiency.


### [web commands](../commands/web)


### [xml commands](../commands/xml)
