---
layout: default
title: sftpDelete(var,profile,remote)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command automates the deletion of one or more remote resources via SFTP. `remote` can be a directory, a file, or a
group of files. Wildcard is supported - for example, `/directory/data/report-2020-05*`.

Note that if `remote` represents all the files available in a given remote directory, then all the files will be 
deleted but the directory will remain. To remove the remote directory, use this command but specify `remote` as the
target directory rather its files. 

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies the folder, file or a group of files.


### Example
**Script**:<br/>
![](image/sftpDelete_01.png)

**Output**:<br/>
![](image/sftpDelete_02.png)


### See Also
- [`sftpCopyFrom(var,profile,remote,local)`](sftpCopyFrom(var,profile,remote,local))
- [`sftpCopyTo(var,profile,local,remote)`](sftpCopyTo(var,profile,local,remote))
