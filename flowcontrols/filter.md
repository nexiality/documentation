---
layout: default
title: Nexial Filter
parent: Flow Controls
tags: command filter
comments: true
---


### Description
In dealing with automation, often one finds the necessity to quality a condition from which a specific action or a set
of data element would be considered. The ability to articulate such condition gives our automation more flexibility,
more resilience against change (intentional or unintentional) and more accuracy. This is main purpose of 
**Nexial Filter**. 


### Specification
Nexial provides a small and simple set of "directives" to express the condition to activate certain action or to filter
data elements. Such condition uses the following format:

> **`[subject] [comparator] [controls]`**

where,

**`[subject]`** represents the data variable or data to consider in order to qualify a condition.

**`[comparator]`** represents how **`[subject]`** is to be compared with **`[controls]`**. Currently supported 
comparisons are:

| comparator             | description |
| ---------------------- | ----------- |
| **`=`**                | equals, as in "is _this_ the same as _that_?". It supports for both _text_ and _numeric values_ as well. |
| **`!=`**               | not equals, as in "is _this_ not the same as _that_?". It supports for both _text_ and _numeric values_ as well. |
| **`>`**                | greater than, as in "is _this value_ greater than that value?" Only applicable to numbers. |
| **`>=`**               | greater or equal to, as in "is _this value_ greater or the same as _that value_?" Only applicable to numbers. |
| **`<`**                | less than, as in "is _this value_ less than _that value_?" Only applicable to numbers. |
| **`<=`**               | less or equal to, as in "is that value less or equal to that value?" Only applicable to numbers. |
| **`is`**               | is one of ..., as in "is _this_ one of the values in _that_ list?" |
| **`is not`**           | is not any of ..., as in "is _this_ not found in any of the values in _that_ list?" |
| **`in`**               | same as **is** |
| **`not in`**           | same as not **in** |
| **`between`**          | between/within, as in "is _this_ value within the range of these two values?" Only applicable to numbers. |
| **`not contain`**      | **not** containing, as in "does _this_ not containing _that_?" |
| **`contain`**          | containing, as in "does _this_ contains _that_?" |
| **`start with`**       | start with, as in "does _this_ starts with _that_?" |
| **`not start with`**   | **not** start with, as in "does _this_ not starts with _that_?" |
| **`end with`**         | end with, as in "does _this_ ends with _that_?" |
| **`not end with`**     | **not** end with, as in "does _this_ not ends with _that_?" |
| **`match`**            | match by regular expression, as in "can _this_ be expressed via _that_ regular expression?" |
| **`is empty`**         | does the specified data variable contains empty or no value? |
| **`is not empty`**     | does the specified data variable contains some value that is **NOT** empty? |
| **`is defined`**       | is the specified data variable defined (such as in a data sheet)? |
| **`is undefined`**     | is the specified data variable **NOT** defined (in a data sheet, project.properties, etc.)? |
| **`has length of`**    | does the specified data variable contains value of __ character. Only applicable to text or numeric value. |
| **`has file-size`**    | does the specified data variable represents a **readable** file with a size of **at least** __ bytes. Only applicable to fully qualified file path. |
| **`is readable-path`** | does the specified data variable represents a **valid, readable** directory. |

**`[controls]`** represents the variable or data (could be more than one) to consider in order to qualify a condition. 
It must be separated by pipe (` | `) like `${fruit} in [apple|banana|chicken|shoes]`. 

Multiple conditions are separated by ampersand (` & `). This represents the "AND" conditions, as in
"_condition 1_ **AND** _condition 2_". For example, `${name} contain "Smith" & ${age} between [18|65]` would mean 
"_Smith-somebody_ who is between 18 and 65 years old".

(Since Nexial 1.8) There is another unique type of filter - the unary filter. This type of filter only has `[subject]`
and it should always evaluate to either `true` or `false`. Consider the following uses of the unary filter in the 
context of [Flow Control](index):

- `SkipIf(true)`: this means to **always** skip the corresponding step since `true` is _always_ true.
- `ProceedIf(false)`: this means to **always** bypass the corresponding step since `false` is _never_ true.
- `ProceedIf(${condition})`: this means to proceed with the corresponding step if `${condition}` should evaluate to 
   `true`.
- `EndIf(!${stopNow})`: this means to end the current execution if `${stopNow}` does not evaluate to `true` (`!` means 
  "negate", hence the opposite of `false` would be `true`).
- `EndIf(not ${stopNow})`: same as above.


### Example
<table class="sysvar" cellspacing="0" cellpadding="3">
<tr><th>condition</th><th>description</th></tr>
<tr><td><code>"A" = "A"</code></td><td>is "A" equals to "A"?</td></tr>
<tr><td><code>${fruit} in [apple|banana|chicken|shoes]</code></td><td>is <code>${fruit}</code> one of the items in the list <code>apple, banana, chicken, shoes</code>?</td></tr>
<tr><td><code>${error message} start with "Error: "</code></td><td>does <code>${error message}</code> starts with the text <code>"Error: "</code>?</td></tr>
<tr><td><code>${rate} between [7.005|7.8001]</code></td><td>is <code>${rate}</code> between <code>7.005</code> and <code>7.8001</code>?</td></tr>
<tr><td><code>${my_age} between [${min_age}|${max_age}]</code></td><td>is <code>${my_age}</code> between <code>${min_age}</code> and <code>${max_age}</code>?</td></tr>
<tr><td><code>${my_fruit} match [A-Za-z]{5} | ${my_age} &gt; 25</code></td><td>is <code>${my_fruit}</code> 5 alphabets <b>and</b> <code>${my_age}</code> greater than <code>25</code>?</td></tr>
<tr><td><code>${my_name} end with nathan</code></td><td>Does <code>${my_name}</code> end with <code>nathan</code> (such as Jonathan)?</td></tr>
<tr><td><code>${is_login} is false</code></td><td>is <code>${is_login}</code> false (i.e. NOT true)?</td></tr>
<tr><td><code>not_a_var is undefined</code></td><td>is there a variable defined as <code>not_a_var</code>?<br/><br/><b>Note that <code>not_a_var</code> is not specified in the format of <code>${...}</code></b> since we are referencing the data variable, not the inferred value.</td></tr>
<tr><td><code>my_age is defined & ${my_age} is not empty & ${my_age} has length of 2</code></td><td>is there a variable defined as <code>my_age</code>, and such variable is not empty and contains 2 characters?<br/><br/><b>Note that <code>my_age</code> is not specified in the format of <code>${...}</code> in the context of the <code>is defined</code> condition</b> since we are referencing the data variable, not the inferred value.  <br/>However, with the <code>is not empty</code> and <code>has length of</code> conditions, we would use the <code>${...}</code> form.</td></tr>
<tr><td><code>${os.name} not start with "Windows"</code></td><td>the current operating system is NOT a Windows OS</td></tr>
<tr><td><code>$(syspath|out|fullpath)/myFile.txt has file-size 1024</code></td><td>does the file "myFile.txt" in the "output" directory has at least 1024 bytes?</td></tr>
</table>

### See Also
This filter specification will be used within the following operations:
- [CSV &raquo; `filter(conditions)`](../expressions/CSVexpression#filter(conditions))
- [CSV &raquo; `removeRows(conditions)`](../expressions/CSVexpression#removerows(conditions))
- [Flow Controls](index)
