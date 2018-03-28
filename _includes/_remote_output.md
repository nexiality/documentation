### Command Output Processing
Both the [`ssh`](../ssh) commands and [`aws.s3`](../aws.s3) commands store the automation output to a variable 
(denote as `var` and usually the first command parameter). One can use this `var` for further automation such as 
validation or use it as parameter to subsequent commands.  The command output has the following properties:

| output property      | value | explanation |
| -------------------- | ----- | ----------- |
| `${var}.protocol`    | `SFTP`, `SCP`, `AWS` | capture the protocol used in the command |
| `${var}.action`      | `copy to`, `copy from`, `move to`, `move from`, `list`, `delete` | textual description of the action carried via the command |
| `${var}.remotePath`  |       | the target remote location/path |
| `${var}.localPath`   |       | the target local location/path  |
| `${var}.startTime`   |       | the starting time, in millisecond (i.e. `epoch`) when this command was executed |
| `${var}.elapsedTime` |       | the number of milliseconds for this command to complete, and subsequent response received by Nexial |
| `${var}.affected`    |       | a list of fully qualified file paths that were (successfully) affected by the command |
| `${var}.failed`      |       | a list of fully qualified file paths that failed to be affected by the command |
| `${var}.errors`      |       | error text, if any, issued by the target server due to the execution of a command |

Note that:
- `.errors` would return null when none is found



