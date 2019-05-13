---
layout: default
title: delete(var,profile,remotePath)
parent: aws.s3
tags: command aws.s3
comments: true
---


### Description
This command deletes all the files matching the criteria specified for the target files from the target bucket/folder. 
For example, if the criteria (`remotePath`) is `my_bucket/my_folder/*` it deletes all the files from 
`my_bucket/my_folder`. The **`*`** acts like a wildcard specifying any or none i.e it matches any no. of characters 
in place of `*` or no character at all.

Similarly if the remote is given as `my_bucket/my_folder/report*`, all the files starting with `report` are deleted. 
Another example is `my_bucket/my_folder/*-*`, where all the files containing `-` are deleted. 


### Parameters
- **var** - the variable name to represent the outcome of this command.
- **profile** - the [profile](index#s3profile) added in the data file which contains AWS credentials and connectivity.
- **remotePath** - the pattern which specifies the folder, file or a pattern of files.


### Example
**Script**:<br/>
![](image/delete_01.png)

**Output**:<br/>
![](image/delete_02.png)

**Script**:<br/>
![](image/delete_03.png)

**Output**:<br/>
![](image/delete_04.png)


### See Also
- [`list(var,profile,remotePath)`](list(var,profile,remotePath))
