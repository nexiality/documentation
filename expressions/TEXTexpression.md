---
layout: default
title: TEXT
parent: Expressions
tags: command expressions
comments: true
---


### Description
`TEXT`, as the name suggest, treats its input as text.  All its operations treat their respective input as text as well.


### Operations
#### `after(text)`
Retain the portion of text after the specified `text`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_01.png)

Output:<br/>
![output](image/TEXTexpression_02.png)

-----

#### `append(text)`
Add one or more text to the end of `text`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_03.png)

Output:<br/>
![output](image/TEXTexpression_04.png)

-----

#### `appendIfMissing(text)`
Add `text` to the end of current text ONLY if `text` is currently not at the end of text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_05.png)

Output:<br/>
![output](image/TEXTexpression_06.png)

-----

#### `base64decode`
BASE64 decode text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_07.png)

Output:<br/>
![output](image/TEXTexpression_08.png)

-----

#### `base64decodeThenSave(path,append)`
Or, `base64decode-then-save(path,append)`. 
BASE64 decode current `TEXT` content and saving the decoded bytes to file specified via `path`. This operation assumes 
that current `TEXT` content is BASE64 encoded, and that the decoded content is binary (e.g. Excel, PDF or Image file).
Use `append` to append the decoded content to an existing file.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_09.png)

Output:<br/>
![output](image/TEXTexpression_10.png)

Saving the decoded bytes to the path specified in the `file` parameter.

decode.txt:<br/>
![output](image/TEXTexpression_11.png)

-----

#### `base64encode`
BASE64 encode text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_12.png)

Output:<br/>
![output](image/TEXTexpression_13.png)

-----

#### `before(text)`
Retain the portion of text before the specified `text`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_14.png)

Output:<br/>
![output](image/TEXTexpression_15.png)

-----

#### `between(after,before)`
Retain the portion of text that is between the specified `after` and `before` text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_16.png)

Output:<br/>
![output](image/TEXTexpression_17.png)

-----

#### `binary`
Convert current text into a [`BINARY`](BINARYexpression) expression. Generally speaking, a
[`BINARY`](BINARYexpression) expression by itself isn't very useful. One can use its
[`save(filepath)`](BINARYexpression#savefilepath) operation to persist binary data into an external file.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_88.png)

-----

#### `count(searchFor)`
Transfer into a [`NUMBER`](NUMBERexpression) data type that contains the number of occurrence for `searchFor`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_18.png)

Output:<br/>
![output](image/TEXTexpression_19.png)

-----

#### `csv(positions)`
Converts the given text content to csv format, separated by the given position numbers for each line specified via `positions`.

**Example**<br/>
Text input could be a text itself or a path to text file.

Text Input:<br/>
![output](image/TEXTexpression_20.png)

Script:<br/>
![script](image/TEXTexpression_21.png)

Output:<br/>
![output](image/TEXTexpression_22.png)

In this example, after converting to csv format, it saves the csv content to the given output file path.

Text Output:<br/>
![output](image/TEXTexpression_23.png)

-----

#### `distinct`
Remove any duplicate characters from text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_24.png)

Output:<br/>
![output](image/TEXTexpression_25.png)

-----

#### `extract(beginRegex,endRegex,inclusive)`
Extract from current text all instances of text found between `beginRegex` and `endRegex`. Both `beginRegex` and 
`endRegex` are regular expressions. Set `inclusive` as `true` to include the text that matches `beginRegex` and 
`endRegex`. This operation effectively transforms current TEXT expression into a [`LIST`](LISTexpression) expression.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_77.png)

Output:<br/>
![output](image/TEXTexpression_78.png)

-----

#### `ifContain(test,match,notMatch)`
Also known as `if-contain(test,match,notMatch)`. This operation replaces value of the current TEXT expression to either 
`match` or `notMatch`, based on whether the value of the current TEXT expression contains `test` or not.

In other word,
- if current TEXT expression has a value that contains `test`, then its value is replaced with `match`.  
- if current TEXT expression has a value that **DOES NOT** contain `test`, then its value is replaced with `notMatch`.  

**Example**<br/>

Script:<br/>
```
[TEXT(Hello) => if-contain(ell,Hi,Bye)]
```

Output:<br/>
```
Hi
```

-----

#### `ifEqual(test,match,notMatch)`
Also known as `if-equal(test,match,notMatch)`. This operation replaces value of the current TEXT expression to either 
`match` or `notMatch`, based on whether the value of the current TEXT expression is equal to `test` or not.

In other word,
- if current TEXT expression has a value equal to `test`, then its value is replaced with `match`.  
- if current TEXT expression has a value **NOT** equal to `test`, then its value is replaced with `notMatch`.  

**Example**<br/>

Script:<br/>
```
[TEXT(Hello) => if-equal(Hello,Bye,Huh?)]
```

Output:<br/>
```
Bye
```

-----

#### `ifMatch(regex,match,notMatch)`
Also known as `if-match(test,match,notMatch)`. This operation replaces value of the current TEXT expression to either 
`match` or `notMatch`, based on whether the value of the current TEXT expression satisfies the specified `regex` in 
its entirety or not.

In other word,
- if current TEXT expression has a value that matches `regex`, then its value is replaced with `match`.  
- if current TEXT expression has a value that **DOES NOT** match to `regex`, then its value is replaced with `notMatch`.  

**Example**<br/>

Script:<br/>
```
[TEXT(Catepillar) => if-match(^.+pills.+$,Butterfly,Medicine)]
```

Output:<br/>
```
Medicine
```

-----

#### `insert(after,text)`
Search for `after` in text, and if found, add the specified text to it.  If `after` is not found, no changes will be 
made to text.

**Example**<br/>
Chain up a `remove` and a `insert`. In this example, after removing the word "all", insert operation will insert 
"each and every" after the word "for".<br/>

Script:<br/>
![script](image/TEXTexpression_26.png)

Output:<br/>
![output](image/TEXTexpression_27.png)

-----

#### `json`
Transform existing text into a [JSON expression](JSONexpression). If 
[`nexial.expression.resolveURL`](../systemvars/index#nexial.expression.resolveURL) is set to `true` and the current 
text content is a URL, Nexial will automatically download from such URL and transform the download content as 
[JSON expression](JSONexpression). 

**Example**<br/>
In this example, the text is converted to json format, to perform json operations on it.<br/>
Script:<br/>
![script](image/TEXTexpression_28.png)

Output:<br/>
![output](image/TEXTexpression_29.png)

-----

#### `leftMost(length)`
Or `left-most(length)`. Truncate the current TEXT value *FROM THE LEFT* so that its length is equal or less to 
`length`. If the current TEXT value has a length less than `length`, then it will remain unchanged.

**Example**<br/>
Script:<br/>
![](image/TEXTexpression_83.png)

This will print to the console:
```
Carni
```

-----

#### `length`
Transfer into a [`NUMBER`](NUMBERexpression) data type that contains the length of text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_30.png)

Output:<br/>
![output](image/TEXTexpression_31.png)

-----

#### `list(delim)`
Transfer into a [`LIST`](LISTexpression) data type by converting text into a list, using  `delim` as the character to split.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_32.png)

Output:<br/>
![output](image/TEXTexpression_33.png)

-----

#### `lower`
Turn text into lowercase equivalent.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_34.png)

Output:<br/>
![output](image/TEXTexpression_35.png)

-----

#### `normalize`
Remove any leading or trailing whitespaces and also remove duplicate whitespace characters in text. The end result is 
that text will not contain any occurrences of successive spaces.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_38.png)

Output:<br/>
![output](image/TEXTexpression_39.png)

-----

#### `number`
Transfer into a [`NUMBER`](NUMBERexpression) data type by converting text into a numeric value. Failure to explicitly 
convert text into number will result in an ERROR condition.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_36.png)

Output:<br/>
![output](image/TEXTexpression_37.png)

-----

#### `pack`
Remove all whitespace characters (tab, space, line feed, carriage return) from text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_40.png)

Output:<br/>
![output](image/TEXTexpression_41.png)

-----

#### `padLeft(padWith,maxLength)`
Or `pad-left(padWith,maxLength)`. Pad (add) existing text with `padWith` character(s) from the left, until 
`maxLength` length is reached. If current `TEXT` expression value already exceeds specified `maxLength`, it will be 
truncated (from the right) to `maxLength`.

**Example**<br/>
Script:<br/>
![](image/TEXTexpression_80.png)

This will print out the following on the console:
```
......John
```

-----

#### `padRight(padWith,maxLength)`
Or `pad-right(padWith,maxLength)`. Pad (add) existing text with `padWith` character(s) from the right, until 
`maxLength` length is reached. If current `TEXT` expression value already exceeds specified `maxLength`, it will be 
truncated (from the right) to `maxLength`.

**Example**<br/>
Script:<br/>
![](image/TEXTexpression_81.png)

This will print out the following on the console:
```
John------
```


-----

#### `parseAsCsv(configs)`
Parse the current text content as CSV. This operation supports the same parsing options found in 
[CSV &raquo; `parse(configs)`](CSVexpression#parseconfig).

**Example**<br/>
In this example, the `parseAsCsv(configs)` operation is invoked on a TEXT expression. The next operation, `store(var)`,
is issued against the now-transformed CSV expression. This is evident by the fact that the subsequent operation is
`column-count`, which is an operation from [CSV Expression](CSVexpression). Furthermore, the "stored" data variable is
recalled in the next command as a CSV expression, from which the `row-count` operation is issued.

Script:<br/>
![script](image/TEXTexpression_79.png)

-----

#### `prepend(text)`
Add one or more `text` to the beginning of current text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_42.png)

Output:<br/>
![output](image/TEXTexpression_43.png)

-----

#### `prependIfMissing(text)`
Add `text` to the beginning of current text ONLY if `text` if currently not at the beginning of text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_44.png)

Output:<br/>
![output](image/TEXTexpression_45.png)

-----

#### `remove(text)`
Remove any and all occurrences of `text`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_46.png)

Output:<br/>
![output](image/TEXTexpression_47.png)

-----

#### `removeEnd(ending)`
Or `remove-end(ending)`. Remove ending character sequence (substring) of text that matches `ending`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_48.png)

Output:<br/>
![output](image/TEXTexpression_49.png)

-----

#### `removeLeft(length)`
Or `remove-left(length)`. Use `length` to specify the number of characters to remove from the left (i.e. the 
beginning) of the text. The parameter `length` must be a positive integer. If `length` is greater than the length of
current text, an empty text will be returned.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_84.png)

Output:<br/>
![output](image/TEXTexpression_85.png)

-----

#### `removeLines(match)`
Remove lines from current expression that matches the specified `match`. This operation supports PolyMatcher.

{% include _polymatcher.md %}

-----

#### `removeRegex(regex,options)`
Remove character(s) that matches `regex`.  
Optionally, one can specify two options `multiLine`, `caseSensitivity`. Both the parameters are optional.

1. `multiLine` :- `true` to support text content that spans across multiple lines. Default value set to `true`. 
**This MUST BE FIRST PARAMETER after regex**. When enabling the multi-line mode, be sure to start the `regex`
with a `^` character to signify the start of a line, and to end the `regex` with a `\n` character (not `$`)
to represent the end of line.
2. `caseSensitivity` : By default, this operation will perform regular expression pattern matching 
case-sensitively. One can set the `caseSensitive` parameter as `false` to enforce a case-insensitive pattern matching.
Default value set to `false`. **This MUST BE SECOND PARAMETER after regex**, immediately after `multiLine`. 

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_50.png)

Output:<br/>
![output](image/TEXTexpression_51.png)

-----

#### `removeRight(length)`
Or `remove-right(length)`. Use `length` to specify the number of characters to remove from the right (i.e. the 
end) of the text. The parameter `length` must be a positive integer. If `length` is greater than the length of current 
text, an empty text will be returned.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_86.png)

Output:<br/>
![output](image/TEXTexpression_87.png)

-----

#### `removeStart(start)`
Or `remove-start(start)`
Remove starting character sequence (substring) of text that matches `start`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_52.png)

Output:<br/>
![output](image/TEXTexpression_53.png)

-----

#### `repeat(times)`
Transform current TEXT expression by repeating its text value. The number of repeats is controlled via the `times` 
parameter. Note that if `times` is not a positive number, this expression would contain empty text (i.e. no value).

-----

#### `replace(searchFor,replaceWith)`
As the name suggest, this operation will search for `searchFor` and replace matches with `replaceWith`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_54.png)

Output:<br/>
![output](image/TEXTexpression_55.png)

-----

#### `replaceRegex(regexSearch,replaceWith)`
Perform a regex-search on text using `regexSearch` and replace all matches with `replaceWith`.  Note that grouping 
character `(` and `)` should be escaped as `\(...\)`.  For example,  `[TEXT(...) => replaceRegex(\(chicken\),beef)]`

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_56.png)

Output:<br/>
![output](image/TEXTexpression_57.png)

-----

#### `retain(keep)`
Retain only the characters found in `keep`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_58.png)

Output:<br/>
![output](image/TEXTexpression_59.png)

-----

#### `retainRegex(regex)`
Or `retain-regex(regex)`. Retain only the characters matched to `regex`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_60.png)

Output:<br/>
![output](image/TEXTexpression_61.png)

-----

#### `rightMost(length)`
Or `right-most(length)`. Truncate the current TEXT value so that its length is equal or less to `length`. If the 
current TEXT value has a length less than `length`, then it will remain unchanged.

**Example**<br/>
Script:<br/>
![](image/TEXTexpression_82.png)

This will print to the console:
```
enture
```

-----

#### `save(path,append)`
Save current text content to `path`. If `path` resolves to an existing file, `append` set as `true` will append 
current text content to the said file. `append` is optional and defaults to `false`.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_62.png)

Output:<br/>
![output](image/TEXTexpression_63.png)

In this example, "Now is the time for all good people to come to the aid of his country." is saved to the given 
path, after the execution of next test step "Actions speak louder than words." is appended after the content of 
first line as `append` is set to `true`.
<br/>
![output](image/TEXTexpression_64.png)

-----

#### `store(var)`
Save current TEXT expression to a data variable.  If the specified `var` exists, its value will be overwritten. Using 
this operation, one can put an expression on pause and resume it at a later time.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_67.png)

Output:<br/>
![output](image/TEXTexpression_68.png)

-----

#### `substring(start,end)`
Retain the portion of text from the `start` position (zero-based) to the `end`  position (exclusive).

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_65.png)

Output:<br/>
![output](image/TEXTexpression_66.png)

-----

#### `title`
Turn text into Title Case, while the first letter of every word is capitalized.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_69.png)

Output:<br/>
![output](image/TEXTexpression_70.png)

-----

#### `trim`
Remove any non-printable character in the beginning or ending of text.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_71.png)

Output:<br/>
![output](image/TEXTexpression_72.png)

-----

#### `upper`
Turn text into UPPERCASE equivalent.

**Example**<br/>
Script:<br/>
![script](image/TEXTexpression_73.png)

Output:<br/>
![output](image/TEXTexpression_74.png)

-----

#### `xml`
Transform existing text into a [XML expression](XMLexpression). If 
[`nexial.expression.resolveURL`](../systemvars/index#nexial.expression.resolveURL) is set to `true` and the current 
text content is a URL, Nexial will automatically download from such URL and transform the download content as 
[XML expression](XMLexpression). One may use this operation to parse the HTML content as a XML document. 

**Example**<br/>
In this example, the text is converted to xml format, to perform xml operations on it.<br/>
Suppose the following XML document `bookStore.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>  
  <book>  
    <title>Everyday Italian</title>  
    <author>Giada De Laurentiis</author>
    <year>2005</year>  
  </book> 
  <book>  
    <title>Learning XML</title>
    <author>Erik T. Ray</author>  
    <year>2003</year>  
  </book>  
</bookstore>
```
Script:<br/>
![script](image/TEXTexpression_75.png)

Output:<br/>
![output](image/TEXTexpression_76.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>

