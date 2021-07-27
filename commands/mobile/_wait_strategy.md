
Nexial provides 2 wait strategies in regard to locating elements. In both cases, they are configured via the 
corresponding "profile" and the use of the [`use(profile)`](use(profile)) command.

#### Implicit Wait
The idea of implicit wait is to suspend execution for a specified amount of time before proceeding to finding the 
target element. The wait time is specified in millisecond. 

To specify implicit wait, use the following configuration for your profile:
`[PROFILE].nexial.mobile.implicitWaitMs=<millisecond>`

If this configuration is not specified, the System variable by the same name - 
[`nexial.mobile.implicitWaitMs`](../../systemvars/index.html#nexial.mobile.implicitWaitMs) - will be used instead. 
Specifying this configuration thus override the system default. If `[PROFILE].nexial.mobile.implicitWaitMs` is specified 
with a value less than 200 (millisecond), the system default will be used instead. Any wait time that is 200 or less 
would not likely to be fruitful. 

#### Explicit Wait
Explicit wait is different from its implicit counterpart in that the specified wait time is not exercised prior to 
finding the target element. Instead, Nexial polls for the target element every 10 millisecond until either the element 
is found or the specified wait time is passed - whichever comes first. Hence, the specified wait time is the maximum 
amount of time to wait (i.e. tolerance) before consider the target element as non-existent. This form of wait is 
generally preferred as the automation generally runs faster and with less _flakiness_.

To specify explicit wait, use the following configuration for your profile:
`[PROFILE].nexial.mobile.explicitWait=<millisecond>`

If this configuration is not specified, the System variable by the same name -
[`nexial.mobile.explicitWaitMs`](../../systemvars/index.html#nexial.mobile.explicitWaitMs) - will be used instead.
Specifying this configuration thus override the system default. However, if `[PROFILE].nexial.mobile.explicitWaitMs` 
is specified with a value less than 200 (millisecond), then Nexial will consider explicit wait **DISABLED**. 
Consequently, disabling explicit wait would activate implicit wait. 

