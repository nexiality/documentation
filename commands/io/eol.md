

In general, it would be a good idea to derive at a predictable outcome inasmuch as reasonable. The end-of-line (EOL) 
character, however, is system-dependent. On Windows, it's usually a combination of carriage return (`\r`) and line 
feed (`\n`). On *NIX/Mac it's usually just the line feed (`\n`).

In order to compensate for the differences, Nexial supports a few different ways to handle the EOL characters. Using
the [`nexial.io.eolConfig`](../../systemvars/index#nexial.io.eolConfig) System variable, one can control the EOL
characters to use:
- `as is`: leave the EOL characters as is; whatever the content in question has is what will be used
- `platform`: change the EOL characters according to the system currently running the automation. This is the default
  behavior.
- `windows`: change the EOL characters to `\r\n`. 
- `unix`: change the EOL characters to `\n`. 

For example, perhaps one is producing a file to be consumed by a UNIX process. It may be important to ensure that the
EOL characters is set to `unix`. One can define the `nexial.io.eolConfig` System variable to `unix` - either via the
data file or via [base &raquo; `save(var,value)`](../base/save(var,value)) command.

