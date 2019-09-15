

### Expressing `body` as file content
Note that this command support automatic content resolution via:
- Fully qualified file path, or
- URL (GET only)
  - When the `body` parameter contains a valid URL, Nexial's default behavior is to treat it as is(meaning, Nexial 
    won't resolve its content). One can instruct Nexial to automatically resolve the underlying content by setting the 
    [`nexial.resolveTextAsURL`](../../systemvars/index#nexial.resolveTextAsURL) to `true`.

When `body` is specified as a fully qualified file path or a valid URL, Nexial will attempt to extract the corresponding 
file content as the request payload. Such content can be resolved as text or binary content depending on the 
`Content-Type` header defined (via [`head(url,var)`](head(url,var))) prior to the execution of this command. 
Alternatively, one can enforce Nexial to treat the corresponding file content as binary via the 
[`nexial.ws.requestPayloadAsRaw`](../../systemvars/index#nexial.ws.requestPayloadAsRaw) System variable.

In addition, if the corresponding file content is to be treated as **text**, the following System variables may have some 
impact as well:
- [`nexial.resolveTextAsIs`](../../systemvars/index#nexial.resolveTextAsIs) - to omit automatic data variable 
  substitution
- [`nexial.ws.requestPayloadCompact`](../../systemvars/index#nexial.ws.requestPayloadCompact) - to trim off 
  leading/trailing spaces from content

