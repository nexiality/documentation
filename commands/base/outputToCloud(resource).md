---
layout: default
title: outputToCloud(resource)
parent: base
tags: command base
comments: true
---


### Description
This command instruct Nexial to move a file (`resource`) from output directory to the designated cloud location. Note 
that this command will only work if **[`nexial.outputToCloud`](../../systemvars/index#nexial.outputToCloud) is set to 
`true`**. The main impetus behind this command is to support all the custom generated execution artifact, such as log 
or HTML files generated as part of the automation, to be co-located with the rest of the execution output. By default, 
this is already the case since one could use technique such as [`$(syspath|out|fullpath)`](../../functions/$(syspath)) 
to designate the location of an execution artifact. However when 
[`nexial.outputToCloud`](../../systemvars/index#nexial.outputToCloud) is set to `true`, the Nexial-generated execution 
output will be stored in the cloud (S3). This leaves an awkward discrepancy where some of the output is stored in the 
cloud whilst some remain in local disk.

One would use this command to ensure that all output are stored in the cloud (and linked in the output XLSX file) when
[`nexial.outputToCloud`](../../systemvars/index#nexial.outputToCloud) is set to `true`. If 
[`nexial.outputToCloud`](../../systemvars/index#nexial.outputToCloud) is set to `false`, this command will result in a 
`SKIP` to the corresponding step.

The `resource` can be fully qualified by using the [`$(syspath|out|fullpath)`](../../functions/$(syspath)) built-in 
function or it can be referenced in relative path to the output directory. Note that the target `resource` must be 
located in the output directory (or its sub-directory).


### Parameters
- **resource** - the output resource to move to the cloud.


### Example


### See Also
