---
layout: default
title: scpCopyFrom(var,profile,remote,local)
parent: ssh
tags: command ssh
comments: true
---


### Description
This command copies a `remote` file (fully qualified) to a `local` file (fully qualified).

For output process via `var`, check out [Command Output Processing](index#command-output-processing)


### Parameters
- **var** - the variable name that references the outcome of this command.
- **profile** - the profile that encapsulates the SSH connectivity and security information.
- **remote** - the pattern which specifies the folder, file or a pattern of files.
- **local** - the directory to which the files should be copied.


### Example


### See Also
- [`scpCopyTo(var,profile,local,remote)`](scpCopyTo(var,profile,local,remote))