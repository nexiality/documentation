---
layout: default
title: writeBase64decode(encodedSource,decodedTarget)
parent: io
tags: command io
comments: true
---


### Description
This command instructs Nexial to perform BASE64 decode on `encodedSource` and then write the decoded content to a file
(`decodedTarget`) as a binary. This command is unique is that it compounds 2 distinct actions into 1 command, and
that the decoded content is written to a file as binary. In almost all other cases, Nexial write content to file as 
UTF-8 text.

This command is useful when the decoded content must not be interpreted as text, and the bitwise significance of
the content (as bytes) must be kept as is. Such would be the case for binary file types as such ZIP files, PDF files,
Excel spreadsheets (.xls), image files, videos, etc.


### Parameters
- **encodedSource** - the BASE64 encoded content.
- **decodedTarget** - the file to store the BASE64 decoded content, as binary.


### Example


### See Also
- [`writeFile(file,content,append)`](writeFile(file,content,append).md))
- [`base64(var,file)`](base64(var,file))
