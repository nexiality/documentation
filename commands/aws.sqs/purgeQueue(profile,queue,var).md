---
layout: default
title: purgeQueue(profile,queue,var)
parent: aws.sqs
tags: command aws.sqs sqs queue
comments: true
---


### Description
The command instructs Nexial to clear out existing messages in the target SQS `queue`, and store any system message as 
`var`. Usually SQS does not supply any messages if the purge was successful.

{% include_relative message.md %}


### Parameters
- **profile** - the [profile](index#connection-setup) added in the data file which contains AWS SES credentials and 
  connectivity.
- **queue** - the target SQS queue to purge. 
- **var** - the variable to store system message(s) incurred as part of the purge.


### Example


### See Also
- [`deleteMessage(profile,queue,receiptHandle)`](deleteMessage(profile,queue,receiptHandle))
