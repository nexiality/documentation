---
layout: default
title: sftpDelete(var,profile,remote)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command automates the deletion of a remote resource via SFTP.

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies the folder, file or a pattern of files.


### Example
**Script**:<br/>
![](image/sftpDelete_01.png)

**Output**:<br/>
![](image/sftpDelete_02.png)


### See Also
- [`sftpCopyFrom(var,profile,remote,local)`](sftpCopyFrom(var,profile,remote,local))
- [`sftpCopyTo(var,profile,local,remote)`](sftpCopyTo(var,profile,local,remote))
