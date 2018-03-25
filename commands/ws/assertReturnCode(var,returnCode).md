{% include_relative _breadcrumb.html current="assertReturnCode(var,returnCode)" %}


### Description
This command is used to assert the expected response code from the actual response code received in the service 
response.

For more information about HTTP status codes, refer to 
<a href="https://httpstatuses.com/" class="external-link" target="_nexial_external">https://httpstatuses.com/</a>.  


### Parameters
- **var** \- the variable to hold the [response](index.html#http-response) of a completed request
- **returnCode** \- this is the HTTP Response code (e.g., 200, 500..)


### Example
**Script**:<br/>
![](image/assertReturnCode_01.png)

**Result**:<br/>
![](image/assertReturnCode_02.png)


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`put(url,body,var)`](put(url,body,var))
