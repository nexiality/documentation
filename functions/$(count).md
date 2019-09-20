---
layout: default
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

#### `$(count|upper|text)`
Renders the number of uppercase characters in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_01.png)

Output<br/>
![](image/$(count)_02.png)

-----

#### `$(count|lower|text)`
Renders the number of lowercase characters in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_03.png)

Output<br/>
![](image/$(count)_04.png)

-----

#### `$(count|number|text)`
Renders the number of digit characters (`0,1,2,3,4,...`) in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_05.png)

Output<br/>
![](image/$(count)_06.png)

-----

#### `$(count|alphanumeric|text)`
Renders the number of alphabetic and numeric characters in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_07.png)

Output<br/>
![](image/$(count)_08.png)

-----

#### `$(count|whitespace|text)`
Renders the number of whitespace characters - space, tab, newline (`\n`), carriage return (`\r`) - in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_09.png)

Output<br/>
![](image/$(count)_10.png)

-----

#### `$(count|punctuation|text)`
Renders the number of punctuation characters (**`!"#$%&'()*+,-./\:;<=>?@[]^_{|}~`**)  in `text`

**Example**<br/>
Script<br/>
![](image/$(count)_11.png)

Output<br/>
![](image/$(count)_12.png)

-----

#### `$(count|any|text|characters)`
renders the number of matches in `text` based on the characters listed in `characters`.  
For example, `$(count|any|This is a test.|ist)` would yield `7` since `This is a test.`
- duplicate character in `characters` will not alter the result (i.e. no duplicate count)
- character in `characters` is not order specific

**Example**<br/>
Script<br/>
![](image/$(count)_13.png)

Output<br/>
![](image/$(count)_14.png)

-----

#### `$(count|size|text)`
renders the length of `text`

**Example**<br/>
Script<br/>
![](image/$(count)_15.png)

Output<br/>
![](image/$(count)_16.png)

-----

#### `$(count|omit|text|omitChars)`
Renders the number of characters in `text` that are not found in `omitChars`

**Example**<br/>
Script<br/>
![](image/$(count)_17.png)

Output<br/>
![](image/$(count)_18.png)

-----

#### `$(count|sequence|text|seq)`
Renders the number of matches in `text` based on the specified `seq`. 
For example, `$(count|sequence|Doo be doo be doo|oo)` would render `3`.

**Example**<br/>
Script<br/>
![](image/$(count)_19.png)

Output<br/>
![](image/$(count)_20.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>
