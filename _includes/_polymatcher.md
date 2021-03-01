<hr/>

<div class="collapsible-teaser" onclick="toggleContent('collapsible-content')" title="click to read more about PolyMatcher">
  PolyMatcher Enabled 
</div>

<div class="collapsible-content">
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
  <b><code>EMPTY:[true|false]</code></b>: Use this technique to perform "<em>is empty?</em>" check. 
  <code>EMPTY:true</code> means that the target value is expected to be empty (no content or length). 
  <code>EMPTY:false</code> means the target value is expected <b>NOT</b> to be empty (with content).
  </li>
  <li>
  <b><code>BLANK:[true|false]</code></b>: Use this technique to perform "<em>is blank?</em>" check. 
  <code>BLANK:true</code> means that the target value is expected to contain blank(s) or whitespace (space, tab, 
  newline, line feed, etc.) characters or empty (no content or length). <code>BLANK:false</code> means the target value 
  is expected to contain at least 1 non-whitespace character. Note that this matcher includes te <code>EMPTY:</code> 
  check as well.
  </li>
  <li>
  <b><code>LENGTH:</code></b>: Use this technique to perform text length validation against target value. One may use a
  numeric comparator for added flexibility/expressiveness. For example: <code>LENGTH:5</code> means to match the target 
  value to a length of 5. <code>LENGTH: > 5</code> means to match the target value to a length greater than 5. The 
  available comparators are: <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, 
  <code>&equals;</code>, <code>!=</code>.
  </li>
  <li>
  <b><code>NUMERIC:</code></b>: Use this technique to perform numeric comparison/matching against target value. With this
  technique, <code>100</code> considered the same as <code>100.00</code> since both value has the same numerical value.
  One may use a numeric comparator for added flexibility/expressiveness. For example: <code>NUMERIC:5</code> means to 
  match the 
  target value to the number <code>5</code>. <code>NUMERIC: <= -15.02</code> means to match the target value as a 
  number that is less or equal to <code>-15.02</code>. The available comparators are: <code>&gt;</code>, 
  <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&equals;</code>, <code>!=</code>.
  </li>
  <li>
  <b><code>EXACT:</code></b>: Use this to perform exact text matching, i.e. equality matching. In most cases, this is 
  not required as the absence of any special keyword almost always means the "<i>is this the same as that?</i>" test. 
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