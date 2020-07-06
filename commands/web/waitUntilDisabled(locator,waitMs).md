---
layout: default
title: waitUntilDisabled(locator,waitMs)
parent: web
tags: command web
comments: true
---

### Description
Ths command instructs Nexial to continuously poll for a Web element (denoted by `locator`) until it becomes disabled 
(and therefore cannot be used for automation). If the target element is already disabled at the start of this command, 
then this command will end immediately with a **PASS**. If not, this command will poll for the target web element to be 
disabled until the specified `waitMs`. If the target element is not enabled or not found when `waitMs` time is reached, 
this command will return with a **FAIL**.

Note that this command is mostly used for form input elements such as button, textbox, checkbox, etc. 


### Parameters
- **locator** - the locator of the target element.
- **waitMs** - the maximum amount of time to wait for said condition.


### See Also
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs)) 
- [`waitForElementsPresent(locators)`](waitForElementsPresent(locators)) 
- [`waitUntilEnabled(locator,waitMs)`](waitUntilEnabled(locator,waitMs))
- [`waitUntilHidden(locator,waitMs)`](waitUntilHidden(locator,waitMs))
- [`waitUntilVisible(locator,waitMs)`](waitUntilVisible(locator,waitMs))