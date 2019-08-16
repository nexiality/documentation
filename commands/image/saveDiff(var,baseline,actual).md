---
layout: default
title: saveDiff(var,baseline,actual)
parent: image
tags: command image
comments: true
---


### Description
This command compares 2 images (`baseline` and `actual`) and store the image comparison metadata in the variable 
specified as `var`. If the two images are different, the difference is highlighted (as rectangular borders)in a new 
image saved to the output folder. A link will be provided to this "diff" image in the corresponding screenshot column 
as `comparison` and this associated step marked as FAIL.

Nexial supports both `baseline` and `actual` as URL (instead of fully qualified path). Nexial will automatically 
download image content and save it to temporary location (System/OS -specific). However the "diff" image will be saved
to output directory or to the cloud if [`nexial.outputToCloud`](../../systemvars/index#nexial.outputToCloud) to `true`.

Color for highlighting difference can be modified via [`nexial.imageDiffColor`](../../systemvars/index#nexial.imageDiffColor).

The comparison uses [`nexial.imageTolerance`](../../systemvars/index#nexial.imageTolerance) as variance.


### Parameters
- **var** - the variable name to store the image comparison metadata.
- **baseline** - the full path of the expected image to compare.
- **actual** - the full path of the actual image file to compare.

#### Working with Image Comparison Meta
As said earlier, comparison meta is stored to variable specified as `var`. Following are the metadata fields:-<br>
1. **expected**:- the file path of predefined baseline image.
2. **actual**:- the file path of actual image.
3. **matchPercent**:- the matched percentage of two images.
4. **tolerance**:- tolerance to be needed during comparing images.
5. **count**:- count of differences of the image
6. **differences**:- list of differences in the image.
7. **smallest**:- smallest difference in the image.
8. **largest**:- largest difference in the image.

Difference is nothing but `dimensions` of the rectangular borders. Assume following metadata is stored in variable `imageCompareMeta`.
```text
{
    {
        expected=C:\projects\NewFeatures\image-compare\artifact\data\CompareImages1.png,
        actual=C:\projects\NewFeatures\image-compare\artifact\data\CompareImages2.png,
        matchPercent=97.55,
        tolerance=0.0,
        count=2,
        smallest={
        x=1020,
        y=25,
        width=37,
        height=13,
    },
        largest={
        x=65,
        y=11,
        width=409,
        height=39,
    },
        differences=[{
        x=65,
        y=11,
        width=409,
        height=39,
    }{
        x=1020,
        y=25,
        width=37,
        height=13,
     }]
    }
}
```
To reference the specific execution result, one would use the dot notation (`.`) like this: `${imageCompareMeta}.count`. 
This would retrieve difference count in the image.<br>
**Note**:- The difference can be seen in the form of images when user crop image with dimension which can be achieved by 
referencing difference object. For example `${imageCompareData}.differences[0].dimension`
and `${imageCompareData}.largest.dimension` Both will return `65,11,409,39`


### Example
Here's an example of comparing a captured screenshot against a predefined baseline image:<br/>
![script](image/saveDiff_01.png)

See [`nexial.lastScreenshot`](../../systemvars/index#nexial.lastScreenshot) for more details on this system variable.

**Output**:<br/>
![output](image/saveDiff_02.png)

To see particular difference as a image, user can provide dimensions using comparison metadata like following:-
![](image/saveDiff_03.png)

