---
layout: default
title: nexial-core 3.3 (2020-09-09)
parent: release
tags: release nexial-core 3.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v3.3_943" class="external-link" target="_nexial_link">Release 3.3</a>
2020-09-09


### General
#### Fixes
- fix OS-specific path issue when handling path as command parameter.
- fix screenshot link creation in execution output.
- exposing [`nexial.lastError`](../systemvars/index#nexial.lastError) within macro execution.
- enable [`PauseAfter()`](../flowcontrols/index#pausebefore--pauseafter) within macro execution.
- consider setting data variables from with macro (`macroFlex()`).
- code fix to accurately parse text into array when successive delimiter is encountered. 
  (e.g. `a,,b` will be parsed as `["a", "", "", "b"]`).
- prevent a "skip" condition to be considered as a failure via the 
  [`nexial.lastOutcome`](../systemvars/index#nexial.lastOutcome) System variable.
- replaced new line character with space for activity name in log, output/junit.xml and output/execution_detail.json
#### Improvements
- for all command parameters of type boolean, support the use of `true`, `false`, `yes`, `no`, `on`, `off` and 
  log error message if invalid value found.
- improve performance of preparing and validating large plan files (multiple subplans and many steps)
- improve performance by reducing the template rows in template xlsx files
- improve performance by remove some border styles from execution output files (xslx)
- reduce unnecessary logging
- end-immediate results in a “END test result, not PASS – to provide more clarity to the execution
- improved performance while copying macro to test script


### [System Variable](../systemvars)
- [`nexial.elapsedTimeSLA`](../systemvars/index#nexial.elapsedTimeSLA): SLA enforcement will no longer to applicable to
  [base &raquo; `macro(file,sheet,name)`](../commands/base/macro(file,sheet,name)), 
  [base &raquo; `macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)), 
  [base &raquo; `repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)) and 
  [base &raquo; `section(steps)`](../commands/base/section(steps)) since these composite commands would likely over
  extent beyond the specified SLA after the enclosed commands are executed. Similarly, all the `wait...` commands will
  not be held accountable to the same SLA set forth via this System variable.
- [`nexial.repeatUntil.index`](../systemvars/index#nexial.repeatUntil.index): tracking the loop occurrence within a 
  `repeat-until` instance.
- [`nexial.repeatUntil.startTime`](../systemvars/index#nexial.repeatUntil.startTime): tracking the start time (epoch) 
  of a `repeat-until` instance.
- [`nexial.repeatUntil.endTime`](../systemvars/index#nexial.repeatUntil.endTime): tracking the end time (epoch) of a 
  `repeat-until` instance.


### [Expression](../expressions)
- [NUMBER >> average](../expressions/NUMBERexpression#average): exclude empty values during calculation
- [NUMBER >> multiple](../expressions/NUMBERexpression#multiplynumbers): skip over empty values during calculation
- [NUMBER >> divide](../expressions/NUMBERexpression#dividenumbers): skip over empty values during calculation
- [NUMBER >> add](../expressions/NUMBERexpression#addnumbers): skip over empty values during calculation
- [NUMBER >> minus](../expressions/NUMBERexpression#minusnumbers): skip over empty values during calculation
- [NUMBER >> roundTo](../expressions/NUMBERexpression#roundtoclosestdigit): custom decimal rounding support via 
  [`nexial.number.rounding`](../systemvars/index#nexial.number.rounding)
- [NUMBER >> mod](../expressions/NUMBERexpression#moddivisor): **NEW** operation to calculate the remainder of a division.


### [base commands](../commands/base)
- [`macroFlex(macro,input,output)`](../commands/base/macroFlex(macro,input,output)): 
  - supports empty input and output parameters.
  - output returns as object (such as list, number, etc.) instead of the corresponding string representation
- [`repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs)): supports the tracking, start time 
  and end time of a `repeat-until` loop.


### [image commands](../commands/image)
- [`ocr(source,saveVar)`](../commands/image/ocr(source,saveVar)): 
  - supports retries when OCR fails (default 3 retries)
  - random waits between retries to reduce conflicts


### [io commands](../commands/io)
- [`moveFiles(source,target)`](../commands/io/moveFiles(source,target)): proactively create missing `target` directory


### [json commands](../commands/json)
- [`assertCorrectness(json,schema)`](../commands/json/assertCorrectness(json,schema)): now supports 
  [JSON Schema Core Draft v2019-09](http://json-schema.org/draft/2019-09/json-schema-core.html), in addition to 
  existing support for Draft v4, v6, v7. If schema is not specified, then `v2019-09` is the default


### [number commands](../commands/number)
- [`average(var,array)`](../commands/number/average(var,array)): exclude empty values during calculation
- [`roundTo(var,closestDigit)`](../commands/number/roundTo(var,closestDigit)): custom decimal rounding support via 
  [`nexial.number.rounding`](../systemvars/index#nexial.number.rounding)


### [rdbms commands](../commands/rdbms)
- extra logic to handle SQL comments


### [web commands](../commands/web)
- [`screenshot(file,locator,removeFixed)`](../commands/web/screenshot(file,locator,removeFixed)): now support capturing
  screenshot by disabling persistent navigation elements
- [`screenshotInFull(file,timeout,removeFixed)`](../commands/web/screenshotInFull(file,timeout,removeFixed)): now 
  support capturing screenshot by disabling persistent navigation elements
- fixed the downloading of [CrossBrowserTesting](https://crossbrowsertesting.com/) webdriver
- update chromedriver setting to allow for multiple downloads


### [ws commands](../commands/ws)
- fix over-zealous URL encoding, which in turn had caused some authentication issue


### [xml commands](../commands/xml)
- [`assertValue(xml,xpath,expected)`](../commands/xml/assertValue(xml,xpath,expected)): support validating against 
  empty or blank `expected` values
- [`assertValues(xml,xpath,array,exactOrder)`](../commands/xml/assertValues(xml,xpath,array,exactOrder)): support 
  validating against empty or blank `expected` values


## [tn.5250 commands]
- (**nexial-amplify ONLY**)
- fixed parsing logic: skip over screen text with no content to avoid NPE
- fixed parsing logic: actively lining up table content against table header; some heuristics applied
- [`saveTableRow`]: *NEW* command to save the first matching row of a screen table based on the `criteria`
- code stabilization for full screen and nested screen scanning
- `{SPACE}` no longer supported as it is platform-specific. Use literal space (` `) instead
- remove "hidden" text (a.k.a. "black" text) from being displayed during TN5250 screen scanning
- support dual-pane data layout during screen scanning
- duplicated data labels are now prefixed with `@1`, `@2`, ... (previously using `[1]`, `[2]`, ... wasn't great since 
  it created more parsing issues)
- when possible, PPI are hidden from console logging
- support successive use of the same profile (previously created duplicated session) via the same TN5250 session
- detect read-only fields
- [`saveTableAsCSV(csv)`]: 
  - additional logic applied to handle empty cell or cell data contains comma or double quote
  - additional logic to handle cells with missing data or missing headers
  - additional logic to handle dangling cell data (without matching header)
  - support automatic paging (and scroll back) of table content. Use `maxPage` to limit excessive paging.
- [`inspectScreen()`] and [`inspectNesteScreen(titles)`]: 
  - handle the parsing of data displayed in 2-column format
  - support partially dual-column display (where a screen contains only partially dual-column data layout)
- [`typeKeys(keystrokes)`]: enable direct support for `[ATTN]` key to invoke CIS command menu
- [`{PROFILE}.logInspection`]: reworked the log file output to improve readability
- cleaned up some log misconfiguration
- implemented a slightly more stable approach to wait for the TN5250 screen to "settle" down
- [clearField(label)]: **NEW** command to clear any value for a given field.