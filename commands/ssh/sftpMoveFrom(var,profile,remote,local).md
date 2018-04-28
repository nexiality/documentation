---
layout: default
title: sftpMoveFrom(var,profile,remote,local)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command automates the moving of a remote resource to a local path. The local resource, if exist, will be 
overwritten.

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies the folder, file or a pattern of files.
- **local** - the directory to which the files should be moved.


### Example
**Script**:<br/>
![](image/sftpMoveFrom_01.png)

**Output**:<br/>
![](image/sftpMoveFrom_02.png)


### See Also
- [`sftpMoveTo(var,profile,local,remote)`](sftpMoveTo(var,profile,local,remote))
