---
layout: default
title: $(random)
parent: Built-in Functions
tags: random $(random)
comments: true
---


### Description
This built-in Nexial function renders a series of randomized text or number based characters, which can be useful as 
test data or to exploratory testing the AUT with less than expected input. The main objective behind this function 
is to provide just-in-time randomization so that the test execution, and by association the test result as well, could 
be less than predictable.

With regards to random numeric generation, note that this function renders characters not _true_ numeric value. 
Hence, since the character `0` is a value numeric character, it is conceivable that this function could render 
`00201.005`, as character but not resolving to the numeric value of `201.005`. To convert the randomized character 
to a _true_ number, consider the following strategy:<br/>

![](image/$(random)_01.png)


### Available Functions

#### `$(random|integer|length)`
Render a random integer (whole number) with specified `length`. 

**Example**<br/>
Script<br/>
![](image/$(random)_02.png)

Output<br/>
![](image/$(random)_03.png)

-----

#### `$(random|numeric|from|to)`
Render a random integer that is between `from` and `to`, inclusively. Comparing this to the previous function, this 
one generates an integer that is _numerically_ between a `from` number and a `to` number. However 
`$(random|integer|length)` generates a random number that has the same number of digits as the specified `length`.

**Example**<br/>
Script<br/>
![](image/$(random)_04.png)

Output<br/>
![](image/$(random)_05.png)

-----

#### `$(random|decimal|whole_and_fraction)`
Render a random decimal number with specified `length` for the whole number portion and the fractional portion. The 
`whole_and_fraction` is separated by **comma** (`,`). For example, `$(random|decimal|5,3)` would generate a random 
decimal number between `00000.000` and `99999.999`. 

**Example**<br/>
Script<br/>
![](image/$(random)_06.png)

Output<br/>
![](image/$(random)_07.png)

-----

#### `$(random|letter|length)`
Render a random alphabet-only string with specified `length`.

**Example**<br/>
Script<br/>
![](image/$(random)_08.png)

Output<br/>
![](image/$(random)_09.png)

-----

#### `$(random|alphanumeric|length)`
Render a random string with alphabet or numeric characters, with specified `length`.

**Example**<br/>
Script<br/>
![](image/$(random)_10.png)

Output<br/>
![](image/$(random)_11.png)

-----

#### `$(random|any|length)`
Render a random string with any character between ASCII 32 and 126 (inclusive), with specified `length`. The ASCII 
range is sometimes known as "space-to-tilde" range, or the  _printable character range_. See 
<a href="http://www.charstable.com/_site_media/ascii/chars-table-landscape.jpg" class="external-link" target="_nexial_link">here</a> 
for more details of the characters included. 

**Example**<br/>
Script<br/>
![](image/$(random)_12.png)

Output<br/>
![](image/$(random)_13.png)

-----

#### `$(random|characters|<specify characters>|length)`
Render a random string based on the specified `characters` and the  specified `length`. This can be particularly useful 
to validate functionality with specified characteristics on input characters, such as password. For example, 
`$(random|characters|abcdefghijklmnopqrstuvwxyz!@#$%^*()|8)` will render 8 characters randomly from the 
**`abcdefghijklmnopqrstuvwxyz!@#$%^*()`** range. 

**Example**<br/>
Script<br/>
![](image/$(random)_14.png)

Output<br/>
![](image/$(random)_15.png)

-----    

### See Also
- [`$(format)`]($(format))

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>
