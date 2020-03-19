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

#### `$(format|base64decode|text)`
base64 decode `text`.

#### `$(format|base64encode|text)`
base64 encode `text`.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_01.png)

Output:<br/>
![output](image/$(format)_02.png)

-----

#### `$(format|custom|text|format)`
Customizable way to reformat `text` via the specified `format`.  The `format` parameter contains the **back tick (`` ` ``)**
not single quotes **(')** to represent each character in `text`, and all other characters as formatting characters.
For example,
  - <code>$(format|custom|ABC|`-`-`)</code> would render `A-B-C`
  - <code>$(format|custom|1234567890|(```) ```-````)</code> would render `(123) 456-7890`
  - <code>$(format|custom|1234567890|```-````)</code> would render `123-4567`
  - <code>$(format|custom|1234567890|```-```-````)</code> would render `123-456-7890`
  <br/>
  Note that any unused characters will be omitted.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_03.png)

Output:<br/>
![output](image/$(format)_04.png)

-----
  
#### `$(format|dollar|text)`
Render only the numeric characters within `text` as a dollar amount.  
  `$(format|dollar|58.396)` would render `$58.40` - note the applied rounding.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_05.png)

Output:<br/>
![output](image/$(format)_06.png)

-----

#### `$(format|integer|text)`
Render only the numeric characters within `text`, including the negative sign (if found). Supposed `text` is specified 
as `90abv2a`.  Then `$(format|integer|text)` would render `902`.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_07.png)

Output:<br/>
![output](image/$(format)_08.png)

-----

#### `$(format|left|text|length)`
Render only the left-most portion of `text`, for the specified `length`.<br/>
One can consider this built-in function as a way to truncate `text` and retain its left-most characters, up to the 
specified `length`. <br/>
<br/>
Note that if the specified `text` is less than the specified `length`, then the entire `text` will be rendered. If the 
specified `length` is less than 1, then this function will render an empty text instead.

**Example**<br/>
Script:<br/>
![script](image/$(format)_09.png)

Output:<br/>
![output](image/$(format)_10.png)

-----

#### `$(format|lower|text)`
Convert `text` to its lowercase equivalent.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_11.png)

Output:<br/>
![output](image/$(format)_12.png)

-----

#### `$(format|mask|text|start|end|maskChar)`
Mask certain part of `text` with `maskChar`. The `start` and `end` parameter specified where the masking should be applied.
For example,
  - `$(format|mask|5432109876|0|5|x)` would render `xxxxx9876`
  - `$(format|mask|Howdy folks!|5|11| )` would render `Howdy`
  - Note that character position is zero-based and if the positions specified is outside the range of the specified 
    `text`, then `text` will be rendered as is.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_13.png)

Output:<br/>
![output](image/$(format)_14.png)

-----
#### `$(format|number|text|format)`
Render only the numeric characters within `text`, including the negative sign and decimal point (if found), using the 
specified `format`. Supposed `text` is specified as `90ab.v2a`. Then 
  - `$(format|number|${text}|#.##)` would render `90.2` (`#` represents "minimum digit")
  - `$(format|number|${text}|000.00)` would render `090.20` (`0` represents "at least digit")
  <br/>
  For more details on numeric format and how to specify them, consult 
  <a href="https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html" class="external-link" target="_nexial_link">Decimal Format</a> 
  or 
  <a href="https://docs.oracle.com/javase/tutorial/i18n/format/decimalFormat.html" class="external-link" target="_nexial_link">I18N Decimal Format</a>.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_15.png)

Output:<br/>
![output](image/$(format)_16.png)

-----

#### `$(format|percent|text)`
Render only the numeric characters within `text` as percentage.  Note that this function considers the value `1.0` as `100%`.
Hence `$(format|percent|0.52448)` would render `52.45%`.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_17.png)

Output:<br/>
![output](image/$(format)_18.png)

-----

#### `$(format|phone|text)`
Render `text` as a phone number, with support for various length.  
	 - If `text` is less than 7 characters long, it will be rendered as is.
	 - If `text` is 7 characters long, then it will be formatted as `xxx-xxxx`.  
	 - If `text` is 10 characters long, then it will be formatted as `(xxx)xxx-xxxx`.
	 - If `text` is 11 characters long, then it will be formatted as `x(xxx)xxx-xxxx`.
	 - Otherwise, `text` will be rendered as `x...x(xxx)xxx-xxxx`, depending on the number of characters found.  Note 
	   that in this case, the formatting starts from right to left.
	 - For more flexible formatting option, see `$(format|custom|text|format)`.

**Example**<br/>
Script:<br/>
![script](image/$(format)_19.png)

Output:<br/>
![output](image/$(format)_20.png)

-----

#### `$(format|right|text|length)`
Render only the right-most portion of `text`, for the specified `length`.<br/>
One can consider this built-in function as a way to truncate (**from the left**) `text` and retain its right-most 
characters, up to the specified `length`. <br/>
<br/>
Note that if the specified `text` is less than the specified `length`, then the entire `text` will be rendered. If the 
specified `length` is less than 1, then this function will render an empty text instead.


**Example**<br/>
Script:<br/>
![script](image/$(format)_21.png)

Output:<br/>
![output](image/$(format)_22.png)

-----

#### `$(format|ssn|text)`
Render `text` as a Social Security Number, in the format of `xxx-xx-xxxx`.  Note that exactly 9 characters are required 
for the formatting to be rendered, otherwise the `text` will be rendered as is.  
For more flexible formatting option, see `$(format|custom|text|format)`.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_23.png)

Output:<br/>
![output](image/$(format)_24.png)

-----

#### `$(format|strip|text|omit)`
Render `text` without any of the characters specified through `omit`.  This is a useful/easy way to remove spaces, tabs,
 or punctuations.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_25.png)

Output:<br/>
![output](image/$(format)_26.png)

-----

#### `$(format|titlecase|text)`
Convert `text` to title case - that is, the first letter of each word is converted to uppercase, while the rest to lowercase.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_27.png)

Output:<br/>
![output](image/$(format)_28.png)

-----

#### `$(format|upper|text)`
Convert `text` to its UPPERCASE equivalent.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_29.png)

Output:<br/>
![output](image/$(format)_30.png)

-----

#### `$(format|urldecode|text)`
Perform <a href="https://en.wikipedia.org/wiki/Percent-encoding" class="external-link" target="_nexial_link">URL Encoding</a> 
  on `text` so that it is more readable or usable for non-HTTP related processing.  Generally speaking, successive call 
  to this function should have not varying result – such call is likely 
  <a href="https://en.wikipedia.org/wiki/Idempotence" class="external-link" target="_nexial_link">idempotent</a>. 

#### `$(format|urlencode|text)`
Perform <a href="https://en.wikipedia.org/wiki/Percent-encoding" class="external-link" target="_nexial_link">URL Encoding</a> 
  on `text` so that it may be suitable as part of an URL (or URL query). Note that Nexial does not check to if `text` 
  might have already being encoded.  Hence successive calls to this function might result in undesired effect.
  
**Example**<br/>
Script:<br/>
![script](image/$(format)_31.png)

Output:<br/>
![output](image/$(format)_32.png)

-----

### See Also
- [`$(random)`]($(random))

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>