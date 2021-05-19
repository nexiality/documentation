---
layout: default
title: nexial-core 4.0 (2021-06-??)
parent: release
tags: release nexial-core 4.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.0_????" class="external-link" target="_nexial_link">Release 4.0</a>
2021-06-??


### General
#### Fixes

#### Improvements


### [Expression](../expressions)


### [System Variables](../systemvars)


### [base commands](../commands/base)


### [desktop commands](../commands/desktop)
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text)): 
  - performance improvement when target combo element contains no selection.
  - collapse dropdown after the appropriate selection is made.
- [`clickTableRow(row)`](../commands/desktop/clickTableRow(row)): 
  - stability improvement when requested row does not exist in the current table component.
  - accuracy improvement by considering `[COLUMN].format` information in the `"extra"` section of the autoscan JSON 
    file.
- [`clickFirstMatchRow(nameValues)`](../commands/desktop/clickFirstMatchRow(nameValues)): performance improvement to
  find matching row over multiple column criterion.
- [`saveTableRows(var,contains,csv)`](../commands/desktop/saveTableRows(var,contains,csv)): improve accuracy by 
  omitting the last, not-yet-exist row


### [image commands](../commands/image)


### [io commands](../commands/io)


### [mail commands](../commands/mail)


### [web commands](../commands/web)


### [webmail commands](../commands/webmail)
