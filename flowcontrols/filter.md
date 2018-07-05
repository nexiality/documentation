---
layout: default
title: Nexial Filter
parent: Flow Controls
tags: command filter
comments: true
---


### Description
In dealing with automation, often one finds the necessity to quality a condition from which a specific action or a set
of data element would be considered.  The ability to articulate such condition gives our automation more flexibility,
more resilience against change (intentional or unintentional) and more accuracy.  This is main purpose of 
**Nexial Filter**. 


### Specification
Nexial provides a small and simple set of "directives" to express the condition to activate certain action or to filter
data elements.  Such condition uses the following format:

> **`[subject] [comparator] [controls]`**

where,

**`[subject]`** represents the data variable or data to consider in order to qualify a condition.

**`[comparator]`** represents how **`[subject]`** is to be compared with **`[controls]`**.  Currently supported 
comparisons are:

| comparator          | description |
| ------------------- | ----------- |
| **`=`**             | equals, as in "is _this_ the same as _that_?". It supports for both _text_ and _numeric values_ as well. |
| **`!=`**            | not equals, as in "is _this_ not the same as _that_?". It supports for both _text_ and _numeric values_ as well.  |
| **`>`**             | greater than, as in "is _this value_ greater than that value?"  Only applicable to numbers. |
| **`>=`**            | greater or equal to, as in "is _this value_ greater or the same as _that value_?" Only applicable to numbers. |
| **`<`**             | less than, as in "is _this value_ less than _that value_?" Only applicable to numbers. |
| **`<=`**            | less or equal to, as in "is that value less or equal to that value?" Only applicable to numbers. |
| **`is`**            | is one of ..., as in "is _this_ one of the values in _that_ list?" |
| **`is not`**        | is not any of ..., as in "is _this_ not found in any of the values in _that_ list?" |
| **`in`**            | same as **is** |
| **`not in`**        | same as not **in** |
| **`between`**       | between/within, as in "is _this_ value within the range of these two values?" Only applicable to numbers. |
| **`contain`**       | containing, as in "does _this_ contains _that_?"  |
| **`start with`**    | start with, as in "does _this_ starts with _that_?" |
| **`end with`**      | end with, as in "does _this_ ends with _that_?" |
| **`match`**         | match by regular expression, as in "can _this_ be expressed via _that_ regular expression?" |
| **`is empty`**      | does the specified data variable contains empty or no value? |
| **`is not empty`**  | does the specified data variable contains some value that is **NOT** empty? |
| **`is defined`**    | is the specified data variable defined (such as in a data sheet)? |
| **`is undefined`**  | is the specified data variable **NOT** defined (in a data sheet, project.properties, etc.)? |
| **`has length of`** | does the specified data variable contains value of __ character.  Only applicable to text or numeric value. |

**`[controls]`** represents the variable or data (could be more than one) to consider in order to qualify a condition.

Multiple conditions (as part of `[controls]`) are separated by pipe (`|`).


### Example

| condition                                                               | description |
|-------------------------------------------------------------------------|-------------|
| <code>"A" = "A"</code>                                                  | _is "A" equals to "A"?_ |
| <code>${fruit} in [apple|banana|chicken|shoes]</code>                   | _is `${fruit}` one of the items in the list `apple, banana, chicken, shoes`?_ |
| <code>${error message} start with "Error: "</code>                      | _does `${error message}` starts with the text `"Error: "`?_ |
| <code>${rate} between [7.005|7.8001]</code>                             | _is `${rate}` between `7.005` and `7.8001`?_ |
| <code>${my_age} between [${min_age}|${max_age}]</code>                  | _is `${my_age}` between `${min_age}` and `${max_age}`?_ |
| <code>${my_fruit} match [A-Za-z]{5} | ${my_age} > 25</<code>            | _is `${my_fruit}` 5 alphabets **and** `${my_age}` greater than `25`?_ |
| <code>${my_name} end with nathan</code>                                 | _Does `${my_name}` end with `nathan` (such as Jonathan)?_ |
| <code>${is_login} is false</code>                                       | _is `${is_login}` false (i.e. NOT true)?_ |
| <code>not_a_var is undefined</code>                                     | _is there a variable defined as `not_a_var`?_ <br/><br/>**Note that `not_a_var` is not specified in the format of <br/>`${...}`**since we are referencing the data variable, not the inferred value. |
| <code>my_age is defined | ${my_age} is not empty | ${my_age} has length of 2</code> | _is there a variable defined as `my_age`, and such variable <br/>is not empty and contains 2 characters?_ <br/><br/>**Note that `my_age` is not specified in the format of <br/>`${...}` in the context of the `is defined` condition** since <br/>we are referencing the data variable, not the inferred value.  <br/>However, with the `is not empty` and `has length of` <br/>conditions, we would use the `${...}` form. |


### See Also
This filter specification will be used within the following operations:
- [CSV &raquo; `filter(conditions)`](../expressions/CSVexpression#filter(conditions))
- [CSV &raquo; `removeRows(conditions)`](../expressions/CSVexpression#removerows(conditions))
- [Flow Controls](index)
