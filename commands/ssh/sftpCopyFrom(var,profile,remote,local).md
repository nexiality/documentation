---
layout: default
title: sftpCopyFrom(var,profile,remote,local)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command automates the copying of a remote resource to a local one via SFTP protocol. Local file, if exist, 
will be overwritten.

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies the folder, file or a pattern of files.
- **local** - the directory to which the files should be copied.


### Example
**Script**:<br/>
![](image/sftpCopyFrom_01.png)

**Output**:<br/>
![](image/sftpCopyFrom_02.png)


### See Also
- [`sftpCopyTo(var,profile,local,remote)`](sftpCopyTo(var,profile,local,remote))
