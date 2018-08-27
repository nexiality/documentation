---
layout: default
title: typeKeys(locator,value)
parent: web
tags: command web
comments: true
---

### Description

This command automates the issuing of keystrokes on the target the web element as specified via `locator`.  Keystrokes 
maybe alphanumeric, punctuations, control keys (see below), or a combination of them.  If the specified `locator` does 
not result in a valid web element, or if the target web element does not accept keystroke (e.g. `<hr/>`), then this 
command will FAIL.  A combination of keys and controls are supported.

The acceptable control keys can be specified as follows:
```
{TAB}  
{BACKSPACE}  
{BKSP}  
{SPACE}  
{ENTER}  
{INSERT}  
{DELETE}  
{ESCAPE}  
{HOME}  
{END}  
{LEFT}  
{RIGHT}  
{UP}  
{DOWN}  
{PAGEUP}  
{PAGEDOWN}  
{F1}  
{F2}  
{F3}  
{F4}  
{F5}  
{F6}  
{F7}  
{F8}  
{F9}  
{F10}  
{F11}  
{F12}
```

### Parameters
- **locator** - this parameter is the locator of the element.
- **value** - this parameter is the key value which need to be send.


### Example
**Script**:<br/>
![](image/typeKeys_01.png)

**Output**:<br/>
![](image/typeKeys_02.png)


### See Also
- [`type(locator,value)`](type(locator,value))