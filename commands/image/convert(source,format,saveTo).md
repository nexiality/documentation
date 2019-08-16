---
layout: default
title: convert(source,format,saveTo)
parent: image
tags: command image
comments: true
---


### Description
This command converts an image file from one format to another. The supported formats are:
- png
- bmp
- jpg
- gif

This command expects that `source` is a readable, valid image file, and that the target image location is denoted 
via `saveTo`. Note that the conversion **DOES NOT** depend on the extension of the target filename. Consider the 
following:

`image` | `convert(source,format,saveTo)` | `original.png` | `bmp` | `new_image.jpg` 

Even though the target file ends with `.jpg`, this command should still carry out a "`png-to-bmp`" conversion.

Nexial supports `image` as URL (instead of fully qualified path). Nexial will automatically download image content and 
save it to temporary location (System/OS -specific). Use `saveTo` to determine the location of the processed file.


### Parameters
- **source** - full path of the image file to convert. Consider using [`$(syspath)`](../../functions/$(syspath)), 
  [`nexial.lastScreenshot`](../../systemvars/index#nexial.lastScreenshot), etc. to keep your script portable.
- **format** - one of the supported format (the target format to convert to): `png`, `bmp`, `jpg` or `gif`
- **saveTo** - the full path of the target (converted) image


### Example
- [`colorbit(source,bit,saveTo)`](colorbit(source,bit,saveTo))


### See Also
- [`colorbit(source,bit,saveTo)`](colorbit(source,bit,saveTo))
