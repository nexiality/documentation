-----
##### **PolyMatcher** - a flexible way to perform text matching
In addition to extract text matching (or _string matching_), this command/expression also supports "polymatcher" 
(as of [v3.6](../release/nexial-core-v3.6.changelog)). With polymatcher, one can instruct Nexial to match the 
intended text in a less exact (but more expressiveness) way. Here are the supported matching strategies:

- **`CONTAIN:`**: Use this technique to perform partial text matches. For example: use `CONTAIN:completed` 
  as intent for "_matching text that contains the text 'completed'_".
- **`CONTAIN_ANY_CASE:`**: Use this technique to perform partial text matches (same as `CONTAIN:`), except 
  without considering the uppercase/lowercase variants. For example, `CONTAIN_ANY_CASE:Successfully` would match
  "Completed successfully", "Completed Successfully", and "COMPLETED SUCCESSFULLY".
- **`START:`**: Use this technique to perform "starts with" text matches. For example, `START:Greetings` matches any
  text starting with the text "Greetings".
- **`START_ANY_CASE:`**: Use this technique to perform "starts with" text matches without considering letter casing. For 
  example, `START_ANY_CASE:Greetings` matches any text starting with the text "Greetings", "GREETINGS", "greetings", 
  "greeTINGs", etc.
- **`END:`**: Use this technique to perform "ends with" text matches. For example, `END:Please try again.` matches any
  text that ends with the text "Please try again.".
- **`END_ANY_CASE:`**: Use this technique to perform "ends with" text matches without considering letter casing. For 
  example, `END_ANY_CASE:Please try again.` matches any text that ends with the text "Please try again." in any 
  combination of upper or lower case.
- **`REGEX:`**: Use this technque to perform text matching via regular expression. For example: use 
  `REGEX:.+[S|s]uccessfully.*` as intent for "_matching text that contains 1 or more character, then either 
  'Successfully' or 'successfully', follow by zero or more characters._".
- And, of course, one can still use the exact matching strategy by specifying the exact text to match.

We will be adding new strategy to polymatcher -- Please feel free to 
<a href="https://github.com/nexiality/nexial-core/issues/new?template=feature_request.md" class="external_link" target="_nexial_link">request for new ones</a>!

-----
