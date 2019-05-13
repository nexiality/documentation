---
layout: default
title: copyTo(var,profile,local,target)
parent: aws.s3
tags: command aws.s3
comments: true
---

### Description
This command copies all the files matching the criteria specified for the local files from the local source directory 
to the target s3 bucket folder. For example, if the criteria (`local`) is `c:\projects\my_folder\*` and the target is 
`my_folder/projects`, it copies all the files from the local directory to the target folder. The **`*`** acts like a 
wildcard specifying any or none i.e it matches any no. of characters in place of `*` or no character at all.

Similarly if the local is given as `C:\projects\ProjectX\test*`, all the files in `C:\projects\ProjectX\` directory, 
having their name starting with the test will be copied to the target directory. Another example is 
`C:\nexial\test\*_*.txt` moves all the text files containing `_` as part of its name.

However, this command should be applied only on local directories having only files and no subdirectories in it. 
Having subdirectories inside the directory may give incorrect results.


### Parameters
- **var** - the variable name to represent the outcome of this command.
- **profile** - the [profile](index#s3profile) added in the data file which contains AWS credentials and connectivity.
- **local** - the pattern which specifies the directory, file or a pattern of files.
- **target** - the bucket or the bucket folder where to copy the files.


### Example
**Script**:<br/>
![](image/copyTo_01.png)

**Output**:<br/>
![](image/copyTo_02.png)

**Script**:<br/>
![](image/copyTo_03.png)

**Output**:<br/>
![](image/copyTo_04.png)


### See Also
- [`moveTo(var,profile,local,target)`](moveTo(var,profile,local,target))
- [`copyFrom(var,profile,remote,local)`](copyFrom(var,profile,remote,local))
