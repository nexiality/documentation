{% include_relative _breadcrumb.html current="put(url,body,var)" %}


### Description
This command is used to send a HTTP PUT request to the given url with the given request body.

To learn about how to utilize the response returned from the target URL, click [here](index.html#http-response).


### Parameters
- **url** \- the target URL
- **body** \- the payload to send, or `(empty)` if none is to be send
- **var** \- the variable to hold the [response](index.html#http-response)


### Example


### See Also
- [`delete(url,body,var)`](delete(url,body,var))
- [`get(url,queryString,var)`](get(url,queryString,var))
- [`head(url,var)`](head(url,var))
- [`patch(url,body,var)`](patch(url,body,var))
- [`post(url,body,var)`](post(url,body,var))
