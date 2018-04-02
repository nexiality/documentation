---
title: $(count)
parent: Built-in Functions
tags: count $(count)
comments: true
---


### Description
This built-in command, as the name suggest, provides count of various text filters such as "count-uppercase-only", 
"count-lowercase-only", "count-digit-only", "count-only-punctuations", etc.  It also provide other basic functionality 
to manipulate character data. 


### Available Functions
- **`$(count|upper|text)`** - renders the number of uppercase characters in `text`
- **`$(count|lower|text)`** - renders the number of lowercase characters in `text`
- **`$(count|number|text)`** - renders the number of digit characters (`0,1,2,3,4,...`) in `text`
- **`$(count|alphanumeric|text)`** - renders the number of alphabetic and numeric characters in `text`
- **`$(count|whitespace|text)`** - renders the number of whitespace characters - space, tab, newline (`\n`), 
  carriage return (`\r`) - in `text`
- **`$(count|punctuation|text)`** - renders the number of punctuation characters (
  **`!"#$%&'()*+,-./\:;<=>?@[]^_{|}~`**)  in `text`
- **`$(count|any|text|characters)`** - renders the number of matches in `text` based on the characters listed in 
  `characters`.  For example, `$(count|any|This is a test.|ist)` would yield `7` since `This is a test.` 
	 - duplicate character in `characters` will not alter the result (i.e. no duplicate count)
	 - character in `characters` is not order specific
- **`$(count|size|text)`** - renders the length of `text`
- **`$(count|omit|text|omitChars)`** - renders the number of characters in `text` that are not found in `omitChars`
- **`$(count|sequence|text|seq)`** - renders the number of matches in `text` based on the specified `seq`.  For 
  example, `$(count|sequence|Doo be doo be doo|oo)` would render `3`.


### Example
Here's an example how `$(count)` are used:<br/>
![script](image/$(count)_01.png)

**Output**:<br/>
![output](image/$(count)_02.png)
