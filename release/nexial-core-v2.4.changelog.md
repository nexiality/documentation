---
layout: default
title: nexial-core 2.4 (2019-07-??)
parent: release
tags: release nexial-core 2.4
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v2.4_???" class="external-link" target="_nexial_link">Release 2.4</a>
2019-07-??


### General
#### Fixes
- code fix to avoid modifying System properties while simultaneously reading such properties.
- [`nexial-project.cmd`](../userguide/BatchFiles#nexial-projectcmd--nexial-projectsh): fixed the `ECHO is off.` error.
- [`nexial-artifact-repair.cmd|sh`](../userguide/BatchFiles#nexial-artifact-repaircmd--nexial-artifact-repairsh): 
  fixed invalid package reference.
- [`nexial-artifact-repair.cmd|sh`](../userguide/BatchFiles#nexial-artifact-repaircmd--nexial-artifact-repairsh):
  fixed formatting issue in data and script files.  
- Fixed issue of opening an output excel/execution report after execution even if `nexial.openResult` or 
 `nexial.openExecutionReport` is `false`.
- enforce no text-wrap on param values of a Nexial output
- perform data variable substitutions for external resources such as file.

#### Improvements
- removed `java.awt.headless=true` from .commons.cmd|ssh in order to support Robot-based type key
- enhanced to support the rendering of multi-line or wrapped text in execution output (Excel).
- execution output color update for description column; now *NOT* as similar as a FAIL step
- minor console output enhancement to highlight (in blue) any execution abort messages and reasons.

### [Nexial Installer](https://github.com/nexiality/nexial-installer)


### System Variables
- **[`nexial.scope.mailTo`] HAS BEEN REMOVED AND REPLACED BY [`nexial.mailTo`](../systemvars/index#nexial.mailTo)**
- [`nexial.mailSubject`](../systemvars/index#nexial.mailSubject): **NEW** System variable to custom email subject for
  post-execution email notification
- [`nexial.mailHeader`](../systemvars/index#nexial.mailHeader): **NEW** System variable to custom "header" content for
  post-execution email notification
- [`nexial.mailFooter`](../systemvars/index#nexial.mailFooter): **NEW** System variable to custom "footer" content for
  post-execution email notification


### Nexial Expression
- [NUMBER expression](../expressions/NUMBERexpression): handle number with other symbols such as comma and dollar sign


### Nexial Filter


### Flow Control
- [`EndLoopIf()`](../flowcontrols/index#endloopifcondition): Now supported early termination of a repeat-until loop
  without aborting the corresponding scenario.
- code fix: now Nexial favors "fail-immediate" over "fail-fast".


### [aws.sqs commands](../commands/aws.sqs)


### [base commands](../commands/base)
- [`assertArrayEqual(array1,array2,exactOrder)`](../commands/base/assertArrayEqual(array1,array2,exactOrder)): minor
  improvement on console message to reflect the result of the said assertion.


### [csv commands](../commands/csv)


### [desktop commands](../commands/desktop)
- [`typeKeys`](../commands/desktop/typeKeys(os,keystrokes)): **NEW** command to automate a series of `keystrokes` to 
  the current execution environment.
  

### [external commands](../commands/external)


### [localdb commands](../commands/localdb)


### [io commands](../commands/io)

### [image commands](../commands/image)
- [saveDiff(var,baseline,actual)](../commands/image/saveDiff(var,baseline,actual)): **NEW** command to compare images
  and store its metadata to var.
- [crop(image,dimension,saveTo)](../commands/image/crop(image,dimension,saveTo)): Supports Asterisk(`*`) for width and 
  height if image width or height is unknown 
- [resize(image,width,height,saveTo)](../commands/image/resize(image,width,height,saveTo)): Supports Asterisk(`*`) for 
  width and height if image width or height is unknown
- [compare(baseline,actual)](../commands/image/compare(baseline,actual)): **DEPRECATED** command use 
  [saveDiff(var,baseline,actual)](../commands/image/saveDiff(var,baseline,actual)) instead


### [web commands](../commands/web)
- stabilize available open window/tab while attempting to select one of them via its index.
- support enabling of chrome remote port (aka DevToolsActivePort) via new System variable 
  [`nexial.browser.chrome.remote.port`](../systemvars/index#nexial.browser.chrome.remote.port). By default, this System 
  variable is not enabled. The default Chrome's DevToolsActivePort is `12209` or `9555`. This is needed when automating 
  Electron application via chromedriver 4.x or above (set port to `12209`).
- enable external chromedriver logging for chrome and electron automation via System variable 
  [`nexial.browser.logChrome`](../systemvars/index#nexial.browser.logChrome), 
  [`nexial.browser.logElectron`](../systemvars/index#nexial.browser.logElectron), and 
  [`nexial.browser.logElectronVerbose`](../systemvars/index#nexial.browser.logElectronVerbose).
- use ChromeDriverService so that chrome driver can reuse same port for driver-browser communication. This helps to 
  stabilize chrome browser automation.


### [xml commands](../commands/xml)
- [`assertSoap(wsdl,xml)`](../commands/xml/assertSoap(wsdl,xml)): **NEW** command to validate SOAP `xml` against the 
  schema defined in `wsdl`
- [`assertSoapFaultCode(expected,xml)`](../commands/xml/assertSoapFaultCode(expected,xml)): **NEW** command to assert 
  the "fault code" in SOAP fault `xml. 
- [`assertSoapFaultString(expected,xml)`](../commands/xml/assertSoapFaultString(expected,xml)): **NEW** command to 
  assert the "fault text" in SOAP fault `xml. 
- [`storeSoapFaultCode(var,xml)`](../commands/xml/storeSoapFaultCode(var,xml)): **NEW** command to extract and store 
  "fault code" in SOAP fault `xml`. 
- [`storeSoapFaultString(var,xml)`](../commands/xml/storeSoapFaultString(var,xml)): **NEW** command to extract and 
  store "fault text" in SOAP fault `xml`. 
- [`assertCorrectness(xml,schema)`](../commands/xml/assertCorrectness(xml,schema)): enhance command to support automatic 
  conformance retries over multiple schemas.
- [`assertSoap(wsdl,xml)`](../commands/xml/assertSoap(wsdl,xml)): fix to handle multiple and possibly conflicting 
  namespace(s) within one XSD embedded in a WSDL. Also some code optimization.
- [`assertSoap(wsdl,xml)`](../commands/xml/assertSoap(wsdl,xml)): allow for empty `<detail>` node in SOAP Fault xml 
  validation. Such condition will result in the corresponding step to **SKIP** 