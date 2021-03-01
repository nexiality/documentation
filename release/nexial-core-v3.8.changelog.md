---
layout: default
title: nexial-core 3.8 (2021-03-??)
parent: release
tags: release nexial-core 3.8
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.8_????" class="external-link" target="_nexial_link">Release 3.8</a>
2021-03-?


### General
#### Fixes

#### Improvements
- PolyMatcher: **NEW** matchers added
  - [`LENGTH:`]: check that the target value contains specified length. For example, `LENGTH:5` means to 
    check that the target value has a length of 5. One may prefix with a numeric comparator for added expressiveness. 
    For example, `LENGTH: >5` means to check that the target value has a length greater than 5.
  - [`NUMERIC:`]: perform numeric comparison so that `100` would be considered the same as `100.00`. For example, 
    `NUMERIC:100.0` means to check that the target value has a numerical value of `100`. One may prefix with a numeric 
    comparator for added expressiveness. For example, `NUMERIC: >= -5.01` means to check that the target value has a 
    numerical value greater or equal to `-5.01`.
  - [`EMPTY:`]: check that the target value is empty (`EMPTY:true`) or not (`EMPTY:false`).
  - [`BLANK:`]: check that the target value is blank (`BLANK:true`) or not (`BLANK:false`). Note that an empty value is
    considered as blank as well (however, not the other way around).


### [System Variable](../systemvars)


### [Nexial Interactive](../interactive)


### [Expression](../expressions)


### [desktop commands](../commands/desktop)


### [excel commands](../commands/excel)


### [localdb commands](../commands/localdb)


### [web commands](../commands/web)
