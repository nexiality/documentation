
Each SQS message would contain the following properties, which may be retrieved (read-only) during Nexial execution:
1. `.id` - the message id.
2. `.body` - this contains the message body (or content). Nexial presents this as plain text. According to AWS 
    documentation, this should not exceed 256 KB.
3. `.attributes` - this contains the 
    <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html" 
    class="external-link" target="_nexial_external">message attribute(s)</a> associated to this message. This can be
    thought of as "structured metadata" that provides more context and definition to the associated message. According
    to AWS documentation, each message can hold up to 10 attributes. To retrieve a specific attribute in Nexial, use
    the `.[attributes].[name]` syntax (example below).
4. `.receiptHandle` - unique identifier to 
   <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-general-identifiers.html" 
   class="external-link" target="_nexial_external">a message received</a>. This property is required to delete a message
   from its queue.
