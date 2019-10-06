---
layout: default
title: nexial-core 2.0 (2019-03-06)
parent: release
tags: release nexial-core 2.0
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.0_0418" class="external-link" target="_nexial_link">Release 2.0</a>
2019-03-06


### General
#### Fixes:
- fix email notification when email address isn't specified
- force email notification to be sent as HTML
- [`nexial-variable-update`](../userguide/BatchFiles#nexial-variable-update): slight 
  improvement on logging
- internal tracking of system variables and respective default value.
- fix to allow shutting down of winium driver with session as required (useful in the case of clickByLocator like commands)
- move `nexial-3rdparty.log` under execution-specific log directory

#### Improvements:
- minor improvement on logging to help troubleshoot test step errors.
- [`nexial-variable-update`](../userguide/BatchFiles#nexial-variable-update) script 
   now supports macro and HTML files. Also reduced excessive logging.
- [`nexial-project-inspector`](../userguide/BatchFiles#nexial-project-inspector):
  **NEW** batch file to generate project level information and insight. Current version supports macro and data 
  variable inspection. More enhancement forthcoming.
  - scan data variable across test scripts, batch files, `project.properties,` datasheets and `#default`.
- [project id binding](../userguide/UnderstandingProjectStructure#metaprojectid): use `.meta/project.id` to bind project
  identification across sandboxes (local project directory) instead of using project directory name. The same
  binding now affects cloud storage location to keep output of the same project together.
- [`nexial-macro-update.cmd|sh`](../userguide/BatchFiles#nexial-macro-update): **NEW** batch 
  file to rename macro name across all scripts within the same project. 


### [Built-in Function](../functions)
- [execution](../functions/$(execution)): better support for execution metadata, specifically for scenario and script.


#### Event Notification
- Nexial now supports email notification with customized `subject`, `cc`, `bcc`, `from`, `footer`. One can optionally 
  configure such email to be sent as HTML or plain text (default). See 
  [Execution Event Notification](../userguide/EventNotification) for more details.
- SMS notification: now supports configurable execution metada inclusion as a footer.


### [aws.sqs commands](../commands/aws.sqs)
- [`receiveMessage(profile,queue,var)`](../commands/aws.sqs/receiveMessage(profile,queue,var)): **NEW** 
  command to receive message from a AWS SQS queue.
- [`receiveMessages(profile,queue,var)`](../commands/aws.sqs/receiveMessages(profile,queue,var)): **NEW** 
  command to receive messages from a AWS SQS queue.
- [`sendMessage(profile,queue,message,var)`](../commands/aws.sqs/sendMessage(profile,queue,message,var)): 
  **NEW** command to send a message from a AWS SQS queue.
- [`deleteMessage(profile,queue,receiptHandle)`](../commands/aws.sqs/deleteMessage(profile,queue,receiptHandle)): 
  **NEW** command to delete a message from a AWS SQS queue.


### [base commands](../commands/base)
- [`repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)): enhanced with additional
  logging to aid in troubleshooting and debugging.


### [macro commands](../commands/macro)
- [`description()`](../commands/macro/description()): **NEW** no-op command for script author to provide macro 
  documentation in a standard way.
- [`expects(var,default)`](../commands/macro/expects(var,default)): **NEW** command to assert expected data variable 
  prior to invoking the enclosing macro.
  - the `default` param is no longer required to be filled in. When missing, the specified `var` is required data
    variable from the viewpoint of the enclosing macro.
- [`produces(var,value)`](../commands/macro/produces(var,value)): **NEW** command to indicate the data variable that 
  will be created/overwritten as part of the enclosing macro execution. 


### [web commands](../commands/web)
- code fix on [`selectWindowByIndex(index)`](../commands/web/selectWindowByIndex(index)) and 
  [`selectWindowByIndexAndWait(index,waitMs)`](../commands/web/selectWindowByIndexAndWait(index,waitMs)) to allow for 
  last window to be selected.
- enhancement to speed up Electron automation by removing "page source support" and "preemptive dialog checks". Both
  of these checks are not common (and at times not applicable) to Electron applications.
- [`saveAttributeList(var,locator,attrName)`]: **NEW** command to save the value of an attribute for all matching 
  elements.


### [xml commands](../commands/xml)
- [`append(xml,xpath,content,var)`](../commands/xml/append(xml,xpath,content,var)): **NEW** command to append content 
  to an XML document
- [`prepend(xml,xpath,content,var)`](../commands/xml/prepend(xml,xpath,content,var)): **NEW** command to prepend 
  content to an XML document
- [`clear(xml,xpath,var)`](../commands/xml/clear(xml,xpath,var)): **NEW** command to clear content in an XML document
- [`delete(xml,xpath,var)`](../commands/xml/delete(xml,xpath,var)): **NEW** command to delete nodes from an XML document
- [`replace(xml,xpath,content,var)`](../commands/xml/replace(xml,xpath,content,var)): **NEW** command to replace 
  content in an XML document
