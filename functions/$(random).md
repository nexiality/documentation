---
title: $(random)
parent: Built-in Function
tags: random $(random)
comments: true
---


### Description
This built-in Nexial function renders a series of randomized text or number based characters, which can be useful as 
test data or to exploratory testing the AUT with less than expected input.  The main objective behind this function 
is to provide just-in-time randomization so that the test execution, and by association the test result as well, could 
be less than predictable.

With regards to random numeric generation, note that this function renders characters not _true_ numeric value.  
Hence, since the character `0` is a value numeric character, it is conceivable that this function could render 
`00201.005`, as character but not resolving to the numeric value of `201.005`.  To convert the randomized character 
to a _true_ number, consider the following strategy:<br/>

![](image/$(random)_01.png)


### Available Functions
- **`$(random|integer|length)`** \- render a random integer (whole number) with specified `length`. 
- **`$(random|numeric|from|to)`** \- render a random integer that is between `from` and `to`, inclusively.  Comparing 
  this to the previous function, this one generates an integer that is _numerically_ between a `from` number and a 
  `to` number.  However `{random|integer|length}` generates a random number that has the same number of digits as the 
  specified `length`.
- **`$(random|decimal|whole\_and\_fraction)`** \- render a random decimal number with specified `length` for the whole 
  number portion and the fractional portion.  The `whole_and_faction` is separated by comma.  For example, 
  `$(random|decimal|5,3)` would generate a random decimal number between `00000.000` and `99999.999`. 
- **`$(random|letter|length)`** \- render a random alphabet-only string with specified `length`.
- **`$(random|alphanumeric|length)`** \- render a random string with alphabet or numeric characters, with specified 
  `length`.
- **`$(random|any|length)`** \- render a random string with any character between ASCII 32 and 126 (inclusive), with 
  specified `length`.  The ASCII range is sometimes known as "space-to-tilde" range, or the 
  _printable character range_. See 
  <a href="http://www.charstable.com/_site_media/ascii/chars-table-landscape.jpg" class="external-link" target="_nexial_external">here</a> for 
  more details of the characters included. 
- **`$(random|character|length)`** \- render a random string based on the specified `character` and the 
  specified `length`.  This can be particularly useful to validate functionality with specified characteristics on 
  input characters, such as password.  For example, `$(random|abcdefghijklmnopqrstuvwxyz!@#$%^*()|8)` will render 8 
  characters randomly from the **`abcdefghijklmnopqrstuvwxyz!@#$%^*()`** range.  
    

### Example
Here are some examples how to use the `$(random)` function:<br/>
![script](image/$(random)_02.png)

The output would look something like this:<br/>
![](image/$(random)_03.png)


### See Also
- [`$(format)`]($(format))
