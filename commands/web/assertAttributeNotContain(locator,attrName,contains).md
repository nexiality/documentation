---
layout: default
title: assertAttributeNotContain(locator,attrName,contains)
parent: web
tags: command web
comments: true
---

### Description
This command asserts that an attribute, denoted by `attrName`, belonging to an web element whose locator is 
represented by `locator` - such attribute **does not contain** the value as specified in `contains`.

If the specified attribute is not assigned to the target web element, then this respective step is marked as **PASS**.
In other word, if an attribute does not exists, then it certainly does not "contain anything".

Optionally, one can use the `REGEX:` syntax to invoke regular expression as the matching mechanism. Let's see an
example:

```text
web | assertAttributeNotContain(...) | css=... | class | MyClass
```

The above asserts that the `class` attribute of the target web element does not contain `MyClass` in its value. In 
contrast, using regular expression we can assert multiple things and in more expressive ways:

This asserts that `class` does not contain `MyClass` or `YourClass`
```text
web | assertAttributeNotContain(...) | css=... | class | REGEX:(MyClass|YourClass)
```

This asserts that `class` does not contain any text that contains one or more character, followed by `Class`
```text
web | assertAttributeNotContain(...) | css=... | class | REGEX:(.+Class)
```


### Parameters
- **locator** - the locator of the target web element
- **attrName** - the name of the attribute belonging to the web element
- **contains** - the text to verify against the value of the specified attribute


### Example
**Script**:<br/>
![](image/assertAttributeNotContain_01.png)

**Output**:<br/>
![](image/assertAttributeNotContain_02.png)


### See Also
- [`assertAttributeContain(locator,attrName,contains)`](assertAttributeContain(locator,attrName,contains).html)
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value).html)
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName).html)
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName).html)
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName).html)