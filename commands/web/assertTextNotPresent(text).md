---
layout: default
title: assertTextNotPresent(text)
parent: web
tags: command web
comments: true
---

### Description
This command asserts that the specified `text` is not present in current page.

Note:
- Nexial scans for the specified `text` with no regards to the associated styling, positioning or tags. So what might 
  seem like "hidden" text will be included as part of the scan.
- Nexial will scan the specified `text` case-sensitively.


### Parameters
- **text** - text that should be found in the content of the current page.


### Example
**Script**:<br/>
![](image/assertText_01.png)

**Output**:<br/>
![](image/assertText_02.png)


### See Also
- [`assertNotText(locator,text)`](assertNotText(locator,text))
- [`assertText(locator,text)`](assertText(locator,text))
- [`assertTextContains(locator,text)`](assertTextContains(locator,text))
- [`assertTextMatches(text,minMatch,scrollTo)`](assertTextMatches(text,minMatch,scrollTo))
- [`assertTextNotContain(locator,text)`](assertTextNotContain(locator,text))
- [`assertTextPresent(text)`](assertTextPresent(text))
- [`verifyContainText(locator,text)`](verifyContainText(locator,text))
- [`verifyText(locator,text)`](verifyText(locator,text).html)
