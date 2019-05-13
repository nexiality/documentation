---
layout: default 
title: assertPresent(profile,remotePath)
parent: aws.s3
tags: command aws.s3
comments: true
---

### Description
This command checks if there are any files(at least one) matching the pattern provided in the `remotePath` i.e in the 
S3 bucket/folder.

Check [here](index#s3profile) for more information regarding `profile`.


### Parameters
- **profile** - the [profile](index#s3profile) added in the data file which contains AWS credentials and connectivity
- **remotePath** - the pattern which specifies the folder, file or a pattern of files.


### Example
**Script**:<br/>
![](image/assertPresent_01.png)

**Output**:<br/>
![](image/assertPresent_02.png)

### See Also
- [`list(var,profile,remotePath)`](list(var,profile,remotePath))
