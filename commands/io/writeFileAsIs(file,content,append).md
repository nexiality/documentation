---
layout: default
title: writeFileAs(file,content,append)
parent: io
tags: command io
comments: true
---


### Description
Like [`writeFile(file,content,append)`](writeFile(file,content,append)), this command writes `content` to `file`, 
with an optional flag to `append` to existing content. However, this command will not exercise any data variable 
substitution during the file-write operation. This means that if `content` contains any `${...}` text, such text will
be left as is. The [`writeFile(file,content,append)`](writeFile(file,content,append)), on the other hand, will perform
data variable substitution during its file-write operation.

The `content` parameter may be a fully qualified file path or text content. Nexial will resolve this variation 
internally. Use the `append` parameter to either overwrite (if `file` exists) or append content.

{% include_relative eol.md %}


### Parameters
- **file** - this parameter if the full path of the file along with file name to which the content has to be written.
- **content** - this parameter is the content which need to written to the file
- **append** - this parameter is a boolean value if you want to append the existing value or ignore it.


### Example


### See Also
- [`writeFile(file,content,append)`](writeFile(file,content,append))
- [`writeProperty(file,property,value)`](writeProperty(file,property,value))
- [`$(file|append)`](../../functions/$(file))
- [`$(file|overwrite)`](../../functions/$(file))
