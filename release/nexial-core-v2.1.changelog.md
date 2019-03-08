---
layout: default
title: nexial-core 2.1 (2019-04-??)
parent: release
tags: release nexial-core 2.1
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-2.1" class="external-link" target="_nexial_link">Release 2.1</a>
2019-04-??


### General
#### Fixes:
- code fix to `nexial-project-inspector` when the target project does not contain `project.properties`
- code fix to `nexial-project-inspector` when the target project does not contain `artifact/bin` directory

#### Improvements:
- adding a bit more project metadata when inspecting project via `nexial-project-inspector`.


#### Nexial Expression
- [XML &raquo; `append`](../expressions/XMLexpression): **NEW** append content to xml document.
- [XML &raquo; `prepend`](../expressions/XMLexpression): **NEW** prepend content to xml document.
- [XML &raquo; `insertAfter`](../expressions/XMLexpression): **NEW** insert content after xml document.
- [XML &raquo; `insertBefore`](../expressions/XMLexpression): **NEW** insert content after xml document.
- [XML &raquo; `replace`](../expressions/XMLexpression): **NEW** replace xml node with content from xml document.
- [XML &raquo; `replaceIn`](../expressions/XMLexpression): **NEW** replace inside xml content of xml document.
- [XML &raquo; `clear`](../expressions/XMLexpression): **NEW** clear content of xml document.
- [XML &raquo; `delete`](../expressions/XMLexpression): **NEW** delete node from xml document.

### [Built-in Function](../functions)


#### Event Notification


### [aws.sqs commands](../commands/aws.sqs)


### [base commands](../commands/base)
- [`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)): support the reference of macro files from
  directories other than `artifact/script`.


### [macro commands](../commands/macro)


### [web commands](../commands/web)


### [xml commands](../commands/xml)
- [`insertAfter(xml,xpath,content,var)`](../commands/xml/insertAfter(xml,xpath,content,var)): **NEW** command to 
  insert content after xml document specified via `xpath`
- [`insertBefore(xml,xpath,content,var)`](../commands/xml/insertBefore(xml,xpath,content,var)): **NEW** command to 
  insert content before xml document specified via `xpath`
- [`replaceIn(xml,xpath,content,var)`](../commands/xml/replaceIn(xml,xpath,content,var)): **NEW** command to replace 
  inside content of an XML document specified via `xpath`

