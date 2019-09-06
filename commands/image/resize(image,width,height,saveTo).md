---
layout: default
title: resize(image,width,height,saveTo)
parent: image
tags: command image
comments: true
---


### Description
This command resizes an image, with full path denoted by `image`, to another size as denoted by `width` and `height` 
and saves it to another file denoted by `saveTo`. Both `width`and `height` must be positive integers and may be 
greater than the original `image` (enlarge).

Nexial supports `image` as URL (instead of fully qualified path). Nexial will automatically download image content and 
save it to temporary location (OS-specific). Use `saveTo` to determine the location of the processed file.


### Parameters
- **image** - the full path of the image to resize
- **width** - the width to resize to. Use `*` to keep current image width.
- **height** - the height to resize to. Use `*` to keep current image height.
- **saveTo** - the full path of the resized image.


### Example
**Script**:<br/>
![script](image/resize_01.png)

**Output**:<br/>
![output](image/resize_02.png)

**Original Image**:<br/>
<img src="image/resize_03.png" style="box-shadow:none"/>

**Resized Image**:<br/>
<img src="image/resize_04.png" style="box-shadow:none"/>
<br/>


### See Also
- [`crop(image,dimension,saveTo)`](crop(image,dimension,saveTo))
