---
layout: default
title: writeBase64decode(encodedSource,decodedTarget,append)
parent: io
tags: command io
comments: true
---


### Description
This command instructs Nexial to perform BASE64 decode on `encodedSource` and then write the decoded content to a file
(`decodedTarget`) as a binary. This command is unique is that it compounds 2 distinct actions into 1 command, and
that the decoded content is written to a file as binary. In almost all other cases, Nexial write content to file as 
UTF-8 text. In this case, the decoded content may not be text or UTF-8 compliant. Hence the binary-write in this 
command.

This command is useful when the decoded content must not be interpreted as text, and the bitwise significance of
the content (as bytes) must be kept as is. Such would be the case for binary file types as such ZIP files, PDF files,
Excel spreadsheets (.xls), image files, videos, etc.

Note that `encodedSource` may be represented as a file. Nexial will resolve the file content internally.


### Parameters
- **encodedSource** - the BASE64 encoded content, or a file with such content.
- **decodedTarget** - the file to store the BASE64 decoded content, as binary.
- **append** - `true` to append decoded content to existing file, and `false` to override.


### Example
- See [`base64`](base64(var,file)) command.


### See Also
- [`base64(var,file)`](base64(var,file))
- [`writeFile(file,content,append)`](writeFile(file,content,append).md))
