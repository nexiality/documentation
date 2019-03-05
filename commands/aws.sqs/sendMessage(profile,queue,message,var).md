---
layout: default
title: sendMessage(profile,queue,message,var)
parent: aws.sqs
tags: command aws.sqs sqs queue
comments: true
---


### Description



### Parameters
- **profile** - the [profile](index#connection-setup) added in the data file which contains AWS SES credentials and 
  connectivity.
- **queue** - the target SQS queue name. 
- **receiptHandle** - to identify the message to delete. The receipt handle can be found from the message retrieved 
  from [`receiveMessage(profile,queue,var)`](receiveMessage(profile,queue,var)) or 
  [`receiveMessages(profile,queue,var)`](receiveMessages(profile,queue,var)) command.


### Example


### See Also
- [`deleteMessage(profile,queue,receiptHandle)`](deleteMessage(profile,queue,receiptHandle))
- [`receiveMessage(profile,queue,var)`](receiveMessage(profile,queue,var))
- [`receiveMessages(profile,queue,var)`](receiveMessages(profile,queue,var))
