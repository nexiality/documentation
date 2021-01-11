### Count Filter
This command supports `filters` to assert count parameter in special way. `count filter` can be expressed as 
[Nexial Filter](../../flowcontrols/filter) to create single criteria filter on element count.<br/>
But in this special case, Nexial user don't need to provide `[subject]` for [Nexial Filter](../../flowcontrols/filter).
Nexial will automatically pick actual element count as `[subject]` for [Nexial Filter](../../flowcontrols/filter) 
during evaluation itself.<br/>
For example, if count parameter is given as `= 4`, then it will be evaluated as `${actualCount} = 4` during Nexial execution.

<table cellspacing="0" cellpadding="3">
<tr><th>count parameter</th><th>description</th></tr>
<tr><td><code>= ${expectedCount}</code></td><td><code>Is actual element count equals to expected count?</code></td></tr>
<tr><td><code>>= 5</code></td><td><code>Is actual element count greater than or equals to 5?</code></td></tr>
<tr><td><code>in [2|3|5|9]</code></td><td><code>Is actual element count one of the items in the list <code>2, 3, 5, 9</code>?</code></td></tr>
<tr><td><code>between [2|9]</code></td><td><code>Is actual element count between 2 and 9?</code></td></tr>
</table>

**Note**- Multiple criteria filter is currently restricted to use in this assertion.

