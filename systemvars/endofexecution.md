---
layout: default
title: End of Execution
level: 1
tags: system output end status
comments: true
---

At the [end of execution](endofexecution), Nexial emits some information that might be useful for external or its parent
process. The main idea is to provide information in a standard, consistent manner so that it may be further processed as
part of a larger pipeline (think CI/CD).

Here's an snapshot of what one can find at the end of a Nexial execution:



One of such information is the <a href="https://en.wikipedia.org/wiki/Exit_status" class="external-link" 
target="nexial_link">exit status</a>. The main idea is that one can use the exit status to make informed decision 
regarding a Nexial execution. Note that exit status represents the "overall status" of an execution. In general, a value
of `0` means that the execution has completed successfully. This does not mean that there were no test step failure, 
however. It simply means that the execution has completed.

