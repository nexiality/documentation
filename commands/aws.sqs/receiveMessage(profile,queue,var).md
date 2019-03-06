---
layout: default
title: receiveMessage(profile,queue,var)
parent: aws.sqs
tags: command aws.sqs sqs queue
comments: true
---


### Description
The command instructs Nexial to receive a message from an SQS `queue` and store such message object in a data variable
denoted as `var`.

Depending on the `.aws.waitTimeMs` value, Nexial might not return any messages. In such case, the data variable denoted
as `var` will be removed to avoid any confusion with previously retrieved messages.

{% include_relative message.md %}


### Parameters
- **profile** - the [profile](index#connection-setup) added in the data file which contains AWS SES credentials and 
  connectivity.
- **queue** - the target SQS queue name. 
- **var** - the variable to store the retrieved message from this command.


### Example
![](image/aws.sqs_02.png)

The above example retrieves a message from the `nexial-test-queue` queue, prints out the message details, and then
deletes the same message via its `.receiptHandle`.

Suppose this message contains an attribute named "create date". To retrieve such information, one would use 
`${message}.[attributes].[create date]`.


### See Also
- [`deleteMessage(profile,queue,receiptHandle)`](deleteMessage(profile,queue,receiptHandle))
- [`receiveMessages(profile,queue,var)`](receiveMessages(profile,queue,var))
- [`sendMessage(profile,queue,message,var)`](sendMessage(profile,queue,message,var))
