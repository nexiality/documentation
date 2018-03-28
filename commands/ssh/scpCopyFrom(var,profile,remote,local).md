---
title: ssh &raquo; scpCopyFrom(var,profile,remote,local)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command copies a `remote` file (fully qualified) to a `local` file (fully qualified).

For output process via `var`, check out [Command Output Processing](index.md#command-output-processing)


### Parameters
- **var** \- the variable name that references the the outcome of this command.
- **profile** \- the profile that encapsulate the SSH connectivity and security information.
- **remote** \- the pattern which specifies the folder, file or a pattern of files.
- **local** \- the directory to which the files should be copied.


### Example


### See Also
- [`scpCopyTo(var,profile,local,remote)`](scpCopyTo(var,profile,local,remote))