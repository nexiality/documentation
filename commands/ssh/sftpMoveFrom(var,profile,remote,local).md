---
layout: default
title: sftpMoveFrom(var,profile,remote,local)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command automates the moving of one or more remote resources to a local path. The local resource(s), if exist, 
will be overwritten. If `remote` represents multiple files, then `local` is expected to be a directory. Wildcard is 
supported - for example, `/my_folder/my_data/my_files*`.

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies a folder, a file or a group of files.
- **local** - the target file or directory to which the remote files should be moved.


### Example
**Script**:<br/>
![](image/sftpMoveFrom_01.png)

**Output**:<br/>
![](image/sftpMoveFrom_02.png)


### See Also
- [`sftpMoveTo(var,profile,local,remote)`](sftpMoveTo(var,profile,local,remote))
