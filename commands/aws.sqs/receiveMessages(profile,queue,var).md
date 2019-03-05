---
layout: default
title: receiveMessages(profile,queue,var)
parent: aws.sqs
tags: command aws.sqs sqs queue
comments: true
---


### Description



### Parameters
- **profile** - the [profile](index#connection-setup) added in the data file which contains AWS SES credentials and 
  connectivity.
- **queue** - the target SQS queue name. 
- **var** - the variable to store the retrieved messages from this command.


### Example


### See Also
- [`deleteMessage(profile,queue,receiptHandle)`](deleteMessage(profile,queue,receiptHandle))
- [`receiveMessage(profile,queue,var)`](receiveMessage(profile,queue,var))
- [`sendMessage(profile,queue,message,var)`](sendMessage(profile,queue,message,var))
