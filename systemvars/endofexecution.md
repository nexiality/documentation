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

![](image/endofexecution_01.png)

Observe the following:
1. `OUTPUT:` shows the output directory created for this specific execution.
2. `EXECUTION:` shows the location of the execution output (HTML) for this specific execution.
3. `JUNIT XML:` show the location of the JUnit XML generated for this specific execution.
4. `SUCCESS RATE:` show the PASS percentage of this specific execution.
5. `EXIT STATUS:` show the [exit status](exitstatus) of this specific execution. Subsequently this will also be
   the exit status of `nexial.cmd` or `nexial.sh`.

Having the above information will allow either an external or parent process to parse for additional details
regarding a Nexial execution. For example, one could harvest for information to dynamically generate an email with
execution status and links.

