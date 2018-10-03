---
layout: default
title: $(format)
parent: Built-in Functions
tags: format $(format)
comments: true
---


### Description
This built-in function provides textual formatting of various common data type.  


### Available Functions
- **`$(format|base64decode|text)`** - base64 decode `text`.
- **`$(format|base64encode|text)`** - base64 encode `text`.
- **`$(format|custom|text|format)`** - customizable way to reformat `text` via the specified `format`.  The `format` 
  parameter contains the **back tick (`` ` ``)**  not single quotes **(')** to represent each character in `text`, and 
  all other characters as formatting characters.  For example,
  - ``$(format|custom|ABC|`-`-`)`` would render `A-B-C`
  - `$(format|custom|1234567890|(```) ```-````)` would render `(123) 456-7890`
  - `$(format|custom|1234567890|```-````)` would render `123-4567`
  - `$(format|custom|1234567890|```-```-````)` would render `123-456-7890`
  - Note that any used characters will be omitted.
- **`$(format|dollar|text)`** \- render only the numeric characters within `text` as a dollar amount.  
  `$(format|dollar|58.396)` would render `$58.40` \- note the applied rounding.
- **`$(format|integer|text)`** \- render only the numeric characters within `text`, including the negative sign (if 
  found).  Supposed `text` is specified as `90abv2a`.  Then `$(format|integer|text)` would render `902`.
- **`$(format|left|text|length)`** \- render only the left-most portion of `text`, for the specified `length`.
- **`$(format|lower|text)`** \- convert `text` to its lowercase equivalent.
- **`$(format|mask|text|start|end|maskChar)`** \- mask certain part of `text` with `maskChar`.  The `start` and `end` 
  parameter specified where the masking should be applied.  For example,
  - `$(format|mask|5432109876|0|5|x)` would render `xxxxx9876`
  - `$(format|mask|Howdy folks!|5|11| )` would render `Howdy`
  - Note that character position is zero-based and if the positions specified is outside the range of the specified 
    `text`, then `text` will be rendered as is. 
- **`$(format|number|text|format)`** \- render only the numeric characters within `text`, including the negative sign 
  and decimal point (if found), using the specified `format`  Supposed `text` is specified as `90ab.v2a`. and `format` 
  is `#.##`.  Then `$(format|decimal|text|format)` would render `90.20`.  For more details on numeric format and how 
  to specify them, consult 
  <a href="https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html" class="external-link" target="_nexial_link">this page</a> 
  or this 
  <a href="https://docs.oracle.com/javase/tutorial/i18n/format/decimalFormat.html" class="external-link" target="_nexial_link">other page</a>.
- **`$(format|percent|text)`** \- render only the numeric characters within `text` as percentage.  Note that this 
  function considers the value `1.0` as `100%`.  Hence `$(format|percent0.52448)` would render `52.45%`.
- **`$(format|phone|text)`** \- render `text` as a phone number, with support for various length.  
	 - If `text` is less than 7 characters long, it will be rendered as is.
	 - If `text` is 7 characters long, then it will be formatted as `xxx-xxxx`.  
	 - If `text` is 10 characters long, then it will be formatted as `(xxx)xxx-xxxx`.
	 - If `text` is 11 characters long, then it will be formatted as `x(xxx)xxx-xxxx`.
	 - Otherwise, `text` will be rendered as `x...x(xxx)xxx-xxxx`, depending on the number of characters found.  Note 
	   that in this case, the formatting starts from right to left.
	 - For more flexible formatting option, see `$(format|custom|text|format)`.
- **`$(format|right|text|length)`** \- render only the right-most portion of `text`, for the specified `length`.
- **`$(format|ssn|text)`** \- render `text` as a Social Security Number, in the format of `xxx-xx-xxxx`.  Note that 
  exactly 9 characters are required for the formatting to be rendered, otherwise the `text` will be rendered as is.  
  For more flexible formatting option, see `$(format|custom|text|format)`.
- **`$(format|strip|text|omit)`** \- render `text` without any of the characters specified through `omit`.  This is a 
  useful/easy way to remove spaces, tabs, or punctuations.`
- **`$(format|titlecase|text)`** \- convert `text` to title case - that is, the first letter of each word is 
  converted to uppercase, while the rest to lowercase.
- **`$(format|upper|text)`** \- convert `text` to its UPPERCASE equivalent.
- **`$(format|urldecode|text)`** \- perform 
  <a href="https://en.wikipedia.org/wiki/Percent-encoding" class="external-link" target="_nexial_link">URL Encoding</a> on `text` so that 
  it is more readable or usable for non-HTTP related processing.  Generally speaking, successive call to this function 
  should have not varying result – such call is likely 
  <a href="https://en.wikipedia.org/wiki/Idempotence" class="external-link" target="_nexial_link">idempotent</a>.
- **`$(format|urlencode|text)`** \- perform 
  <a href="https://en.wikipedia.org/wiki/Percent-encoding" class="external-link" target="_nexial_link">URL Encoding</a> on `text` so that it 
  may be suitable as part of an URL (or URL query). Note that Nexial does not check to if `text` might have already 
  being encoded.  Hence successive calls to this function might result in undesired effect.


### Example
Here's an example of the `$(format)` function is action:<br/>
![script](image/$(format)_01.png)

The test **output**:<br/>
![output](image/$(format)_02.png)


### See Also
- [`$(random)`]($(random))
