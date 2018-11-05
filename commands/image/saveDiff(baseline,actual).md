---
layout: default
title: saveDiff(baseline,actual)
parent: image
tags: command image
comments: true
---


### Description
This command compares 2 images (`baseline` and `actual`), and if the two images are different, then the resulted 
difference is highlighted with Rectangle in a new image in output folder and link is given in the screenshot column as `image diff` 
with FAIL for this command.<br>
Color for highlighting difference can be specified by [`nexial.imageDiffColor`](../../systemvars/index#nexial.imageDiffColor).<br>
The comparison uses [`nexial.imageTolerance`](../../systemvars/index#nexial.imageTolerance)` as variance for the 
comparison.

### Parameters
- **baseline** \- the full path of the expected image to compare.
- **actual** \- the full path of the actual image file to compare.

### Example
Here's an example of comparing a captured screenshot against a predefined baseline image:<br/>
![script](image/saveDiff_01.png)

**Output**:<br/>
![output](image/saveDiff_02.png)

If there are errors, the result will reflect the violation against the defined tolerance:<br/>
![output2](image/saveDiff_03.png)

