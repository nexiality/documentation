---
layout: default
title: crop(image,dimension,saveTo)
parent: image
tags: command image
comments: true
---


### Description
This command crops an image, whose location is denoted by `image`, and save it to another location denoted as 
`saveTo`. The parameter dimension represents the starting point (aka {`x,y}`), the width and the height to crop. 
These 4 values are separated by [`nexial.textDelim`](../../systemvars/index#nexial.textDelim), must be positive 
integers and must be represent an area within the bounds of `image`.


### Parameters
- **image** - the full path of the image to crop
- **dimension** - the x position, y position, width in pixel, and height in pixel of the intended crop area. 
  These values are separated by [`nexial.textDelim`](../../systemvars/index#nexial.textDelim)
- **saveTo** - the full path of the cropped image

### Example
