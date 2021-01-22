<hr/>

<div class="polymatcher-teaser" onclick="toggleContent('polymatcher-content')" title="click to read more about PolyMatcher">
  PolyMatcher Enabled 
</div>

<div class="polymatcher-content">
<h4><b>PolyMatcher</b> - a flexible way to perform text matching</h4>
<p>
In addition to extract text matching (or <em>string matching</em>), this command/expression also supports "polymatcher" 
(as of <a href="../release/nexial-core-v3.6.changelog">v3.6</a>). With polymatcher, one can instruct Nexial to match the 
intended text in a less exact (but more expressiveness) way. Here are the supported matching strategies:
</p>
<ul>
  <li>
  <b><code>CONTAIN:</code></b>: Use this technique to perform partial text matches. For example: use 
  <code>CONTAIN:completed</code> as intent for "<em>matching text that contains the text ‘completed’</em>".
  </li>
  <li>
  <b><code>CONTAIN_ANY_CASE:</code></b>: Use this technique to perform partial text matches (same as 
  <code>CONTAIN:</code>), except without considering the uppercase/lowercase variants. For example, 
  <code>CONTAIN_ANY_CASE:Successfully</code> would match "Completed successfully", "Completed Successfully", and 
  "COMPLETED SUCCESSFULLY".
  </li>
  <li>
  <b><code>START:</code></b>: Use this technique to perform "starts with" text matches. For example, 
  <code>START:Greetings</code> matches any text starting with the text "Greetings".
  </li>
  <li>
  <b><code>START_ANY_CASE:</code></b>: Use this technique to perform "starts with" text matches without considering 
  letter casing. For example, <code>START_ANY_CASE:Greetings</code> matches any text starting with the text 
  "Greetings", "GREETINGS", "greetings", "greeTINGs", etc.
  </li>
  <li>
  <b><code>END:</code></b>: Use this technique to perform "ends with" text matches. For example, <code>END:Please try 
  again.</code> matches any text that ends with the text "Please try again.".
  </li>
  <li>
  <b><code>END_ANY_CASE:</code></b>: Use this technique to perform "ends with" text matches without considering letter 
  casing. For example, <code>END_ANY_CASE:Please try again.</code> matches any text that ends with the text "Please 
  try again." in any combination of upper or lower case.
  </li>
  <li>
  <b><code>REGEX:</code></b>: Use this technique to perform text matching via regular expression. For example: use 
  <code>REGEX:.+[S|s]uccessfully.*</code> as intent for "<em>matching text that contains 1 or more character, then 
  either ‘Successfully’ or ‘successfully’, follow by zero or more characters.</em>".
  </li>
  <li>
  <b><code>EXACT:</code></b>: Use this to perform exact text matching, i.e. equality matching. In most cases, this is 
  not required as the absence of any special keyword almost always means the "<em>is this the same as that?</em>" test. 
  However in some special cases such as <a href="../commands/base/assertMatch(text,regex)">base » 
  <code>assertMatch(text,regex)</code></a>, one may use this <code>EXACT:</code> syntax to indicate match by equality 
  instead of regular expression.
  </li>
  <li>
  And, of course, one can still use the exact matching strategy by specifying the exact text to match.
  </li>
</ul>
<p>
We will be adding new strategy to polymatcher – Please feel free to 
<a href="https://github.com/nexiality/nexial-core/issues/new?template=feature_request.md" class="external_link" target="_nexial_link">request for new ones</a>!
</p>
</div>

<hr/>