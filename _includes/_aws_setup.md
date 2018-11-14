#### Connection Setup
Similar to other command collections in Nexial, the commands of this command type utilize a profile-based approach to 
connect to the target AWS services. A profile is a collection of data variables that share the same prefix. In this 
case, below are the data variables that make up an AWS connectivity profile:
<a name="s3profile"/>

|data variable                     |value                                                           | note                                       |
|----------------------------------|----------------------------------------------------------------|--------------------------------------------|
|`<profile>.aws.accessKey`         |The access key valid for the target AWS service                 | For more information, consult <a href="https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/" class="external-link" target="_nexial_link">AWS online documentation</a>|
|`<profile>.aws.secretKey`         |The secret key valid for the target AWS service                 | More information available on <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys" class="external-link" target="_nexial_external">AWS online documentation</a>|
|`<profile>.aws.region`            |The target region to connect to                                 | <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html" class="external-link" target="_nexial_external">Available AWS regions</a>. Scroll down to the relevant service section|
|`<profile>.aws.assumeRoleArn`     |(OPTIONAL) The ARN that represents the role to assume           | <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html" class="external-link" target="_nexial_external">Only required if "assume role" is desired</a>.|
|`<profile>.aws.assumeRoleSession` |(OPTIONAL) The session name that represents the temporarily role| <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html" class="external-link" target="_nexial_external">Specify a session name that can be useful for tracking temp. role activities</a>.|
|`<profile>.aws.assumeRoleDuration`|(OPTIONAL) The duration of the role temporarily switched        | <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html" class="external-link" target="_nexial_external">Specify the duration of the role switching</a>.|

<br/>
Note that if "assume role" is desired, `<profile>.aws.assumeRoleSession` is required.


