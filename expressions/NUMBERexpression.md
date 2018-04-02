---
title: NUMBER expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
NUMBER treats its data a number, from which mathematical or numerical operations may be performed.


### Operations
- **`add(numbers)`** \- add one or more numbers to current number.
- **`ceiling`** \- round **`up`** current number.
- **`divide(numbers)`** \- divide one or more numbers from current number, in the order specified.
- **`floor`** \- round **`down`** current number; same as **`round`**.
- **`minus(numbers)`** \- subtract one or more numbers from current number, in the order specified.
- **`multiply(numbers)`** \- multiple one or more numbers to current number, in the order specified.
- **`randomDigits(length)`** \- generate a random string of digits of the specified `length`.
- **`randomDecimal(wholeLength,fractionLength)`** \- generate a random decimal number which contains a whole number of 
  length as specified by `wholeLength`, and decimal number of length as specified by `fractionLength`.
- **`randomInteger(atLeast,atMost)`** \- generate a random integer number within the range of `atLeast` and `atMost`.
- **`round`** \- transform current number by rounding it to the closest integer.
- **`roundTo(closestDigit)`** \- transform current number by rounding it to the `closestDigit`.  The `closestDigit` 
  is used to specify "the closest digit", "the closest tenth", "the closest hundredth", etc.  For example, 
  `[NUMBER(173921.22) => roundTo(1000)]` would yield `174000`.
- **`store(var)`** \- save current NUMBER expression to a data variable.  If the specified `var` exists, its value 
  will be overwritten.  Using this operation, one can put an expression on pause and resume it at a later time.
- **`text`** \- transform current number to text


### Example
**Script**:<br/>
![script](image/NUMBERexpression_01.png)

**Output**:<br/>
![output](image/NUMBERexpression_02.png)
