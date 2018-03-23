
There's probably a better place for this... A number of inquiries have surfaced as to the 'nitty-gritty' of execution flows and controls in terms of failures and early termination.  Here is an attempt to provide some explanation.  Perhaps a more thorough undertaking is needed...

Failure has a way of interrupting the flow of a test execution.  This is necessary in order to prevent unnecessary automation or worse, any misleading false-positives.  The key factors to interrupting the flow of a test execution are:

1.  `sentry.failFast`
2.  `based.failImmediate` 
3.  `EndIf(...)` (flow control) 
4.  `FailIf(...)` (flow control)
5.  `sentry.failAfter` 
6.  `sentry.resetFailFast` 
7.  unrecoverable exceptions

![](https://confluence.ep.com/download/attachments/9971773/execution%20interrupt.png?version=1&modificationDate=1512474157759&api=v2)
