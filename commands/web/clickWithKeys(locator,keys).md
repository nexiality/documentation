---
layout: default
title: clickWithKeys(locator,keys)
parent: web
tags: command web
comments: true
---

### Description

- This command clicks on the target element as specified via `locator` with the keystrokes of control(modifier) keys specified via `keys`.
- In other words, control keys are pressed while clicking on the element specified via `locator`.
- If the locator does not resolve to a valid web element, this command will consider it as a FAIL. 
- If keystroke is empty, this command will be equivalent to [web &raquo; `click(locator)`]. 
- if keys contain duplicate/repeated control keys, key press for that key will happen only once.
- For example, if user want to select multiple rows, they can use (CONTROL + click) on each element to be selected. 
If the multiple rows to be selected are contiguous, user can use (SHIFT + click) for first and last element so it will all the rows in between them.

The supported key or combination of keys are :-
```
   {SHIFT}
   {CONTROL}
   {ALT}
   {META}
   {WIN}
   {COMMAND}
```

### Parameters

- **locator** - this parameter is the xpath of the element on which action need to be performed
- **keys** - this parameter is control keys to be pressed while clicking on element.

### Example

**Script**:<br/>
![](image/clickWithKeys_01.png)

**Output**:<br/>
![](image/clickWithKeys_02.png)

Above script will first select 8th to 16th row with `SHIFT + click` for first two rows, then it will deselect 11th row 
with `CONTROL + click` as it was already selected with `SHIFT` key. Then it will select 5th row with `CONTROL + click` key.

### See Also
- [`click(locator)`](click(locator))