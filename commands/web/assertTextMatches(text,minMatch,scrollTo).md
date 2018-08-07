---
layout: default
title: assertTextMatches(text,minMatch,scrollTo)
parent: web
tags: command web
comments: true
---

### Description
This command asserts a minimum number of occurrence of `text` in the current web page.  If `minMatch` is `0`, then
the command will assert that the specified `text` is not present in current web page. Optionally, one can instruct
Nexial to scroll to the specified "minimum occurrence" (`minMatch`) by setting `scrollTo` to `true`. 

If the current web page does not contain the specified `text` at occurrence matching to or greater than `minMatch`, 
Nexial will consider this as a FAIL.

Note:
- Nexial scans for the specified `text` with no regards to the associated styling, positioning or tags. So what might 
  seem like "hidden" text will be included as part of the scan.
- Nexial will scan the specified `text` case-sensitively.


### Parameters
- **text** - the text to search for.
- **minMatch** - minimum number of matches required to consider as PASS.
- **scrollTo** - `true` if Nexial should scroll the web page so that last minimum occurrence of `text` is visible.


### Example


### See Also
- [`assertNotText(locator,text)`](assertNotText(locator,text))
- [`assertOneMatch(locator)`](assertOneMatch(locator))
- [`assertText(locator,text)`](assertText(locator,text))
- [`assertTextContains(locator,text)`](assertTextContains(locator,text))
- [`assertTextMatches(text,minMatch,scrollTo)`](assertTextMatches(text,minMatch,scrollTo))
- [`assertTextNotPresent(text)`](assertTextNotPresent(text))
- [`assertTextPresent(text)`](assertTextPresent(text))
- [`verifyContainText(locator,text)`](verifyContainText(locator,text))
- [`verifyText(locator,text)`](verifyText(locator,text).html)
