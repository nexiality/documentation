---
layout: default
title: compare(baseline,actual)
parent: image
tags: command image
comments: true
---


### Description
This command compares 2 images (`baseline` and `actual`), and the result as the basis of PASS/FAIL for this command.  
The comparison uses [`nexial.imageTolerance`](../../systemvars/index#nexial.imageTolerance)` as variance for the 
comparison. 

User can use  command [`saveDiff(baseline,actual)`](saveDiff(baseline,actual)) which adds extra feature 
where difference of two image is highlighted in new image.

### Parameters
- **baseline** \- the full path of the expected image to compare.
- **actual** \- the full path of the actual image file to compare.


### Example
Here's an example of comparing a captured screenshot against a predefined baseline image:<br/>
![script](image/compare_01.png)

See [`nexial.lastScreenshot`](../../systemvars/index#nexial.lastScreenshot) for more details on this system variable.

**Output**:<br/>
![output](image/compare_02.png)

If there are errors, the result will reflect the violation against the defined tolerance:<br/>
![output2](image/compare_03.png)

### See Also
- [`saveDiff(baseline,actual)`](saveDiff(baseline,actual))