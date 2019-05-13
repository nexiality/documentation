---
layout: default
title: colorbit(source,bit,saveTo)
parent: image
tags: command image
comments: true
---


### Description
This command changes color bit of the specified image to a specified color bit. This command modifies color bit only if 
current image bit is more than target bit specified via `bit`.
  
### Parameters
- **source** - full path of the image file to convert color bit. 
- **bit** - one of the supported bit (the target bit to convert into): `32`, `16`, `8`, `4`, `2` or `1`.
- **saveTo** - the full path of the target (converted) image

### Example
Script:<br>
![](image/colorbit_01.png)

Output:<br>
![](image/colorbit_02.png)