Since the intended target file(s) in question could already present at the destination location, Nexial provides a few 
different options to handle such condition. Define the System variable 
[`nexial.io.copyConfig`](../../systemvars/index#nexial.io.copyConfig) with one of the following value: 
- `keepOriginal`: don't copy file (default behaviour)
- `override`: override existing file
- `backup`: taking backup of existing file and copy new file
