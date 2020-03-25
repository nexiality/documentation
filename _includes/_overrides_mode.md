Since the intended target file(s) could already exist, Nexial provides a few different options to handle such condition. 
The System variable [`nexial.io.copyConfig`](../../systemvars/index#nexial.io.copyConfig) is created for this purpose.
One can define this System variable with one of the following values to alter how Nexial handle such situation: 
- `keepOriginal`: don't copy file (default behaviour)
- `override`: override existing file
- `backup`: taking backup of existing file and copy new file
