---
layout: default
title: nexial-core 1.6 (2018-10-??)
parent: release
tags: release nexial-core 1.6
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.6" class="external-link" target="_nexial_link">Release 1.6</a>
2018-10-??


### General
- support default output directory via environment variable `NEXIAL_OUTPUT`


### Nexial Filter


### Flow Control


### Built-in Function
- [`$(array|length)`](../functions/$(array)): added logic to compensate for web element array with characters that 
  might be misinterpreted as array delimiter. Now it should be safe/correct to issue: 
  `web    | saveElements(var,locator) | MyList | //div` 
  `number | assertEquals(num1,num2)   | 53      | $(array|length|${MyList}) `


### Event Notification


### Nexial Expression  
- [`[LIST(...) => count]`](../expressions/LISTexpression.md#count): added logic to compensate for web element array 
  with characters that might be misinterpreted as array delimiter. Now it should be safe/correct to issue: 
  `web    | saveElements(var,locator) | MyList | //div` 
  `number | assertEquals(num1,num2)   | 53      | [LIST(${MyList}) => count] `


### [base commands](../commands/base)


### [io commands](../commands/io)


### [csv commands](../commands/csv)
  

### [json command](../commands/json)


### [rdbms command](../commands/rdbms)


#### [web commands](../commands/web)


### [webalert commands](../commands/webalert)
