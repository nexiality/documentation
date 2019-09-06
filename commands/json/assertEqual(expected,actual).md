---
layout: default
title: assertEqual(expected,actual)
parent: json
tags: command json jsonpath comparison
comments: true
---


### Description
This command performs equivalent-test against `expected` and `actual` JSON documents.  The idea of equivalent-test is
to consider the logical equivalence of 2 structurally different JSON documents.  In JSON, as in the case of XML, some 
nodes may be arranged in different order without changing its logical context.  Consider the following 2 JSON documents:

```json
{
    "name": "Johnny Rocket",
    "age": 19,
    "hobby": "Fly to the moon"
}
```

```json
{
    "age": 19,
    "hobby": "Fly to the moon",
    "name": "Johnny Rocket"
}
```

Technically they are 2 separate and different documents. But logically speaking, they represent the same set of 
information (i.e. _Johnny Rocket, who is 19, likes to fly to the moon_). This command serves the purpose of asserting
the logical equivalence of 2 JSON documents. As such, the above 2 documents would be considered as "equal".

In contract, [base &raquo; `assertEqual(expected,actual)`](../base/assertEqual(expected,actual)) performs byte-level
comparison. Using such command with the above documents would yield FAIL since they are not the same at the byte level.

Note that both `expected` and `actual` can be either a JSON document (text), JSON array (text) or a fully qualified 
file path with valid JSON content. If a file is specified, Nexial will also perform data variable substitution on this 
file PRIOR to performing the equivalent-test.

JSON array is treated differently than JSON document. With JSON document, the order of its child nodes does not alter 
the logical connotation thereof. However with JSON array, the order of its child nodes is significant. For example,

```json
[ "Johnny", "Sammy", "Mark" ]
```

```json
[ "Sammy", "Mark", "Johnny" ]
```

If the above JSON arrays each represents a winner list, the first array would mean "1st place: Johnny, 2nd place: 
Sammy, 3rd place: Mark", and the second array: "1st place: Sammy, 2nd place: Mark, 3rd place: Johnny". _BIG DIFFERENCE..._

This command will treat child node order of a JSON array with significance. The above 2 JSON documents will **not** be
considered as logically equivalent.

Should this command finds any differences between `expected` and `actual`, 3 consequences can be expected:
1. This command will result in a FAIL.
2. The comparison report will be made available as another JSON document and linked to the execution output.
3. System variable, [`nexial.json.lastCompareResults`](../../systemvars/index#nexial.json.lastCompareResults), will be 
   assigned this comparison report (#2). One may use this System variable for further automation or processing.

Subsequently, it is possible to generate the comparison report in other formats. JSON is the default format and is 
determined via the [`nexial.json.compareResultsAsJSON`](../../systemvars/index#nexial.json.compareResultsAsJSON)
System variable. Alternatively one can opt to generate CSV report (via 
[`nexial.json.compareResultsAsCSV`](../../systemvars/index#nexial.json.compareResultsAsCSV)) or HTML report 
(via [`nexial.json.compareResultsAsHTML`](../../systemvars/index#nexial.json.compareResultsAsHTML)) as well. These
report options are not mutually exclusive.


### Parameters
- **expected** - the expected JSON document
- **actual** - the actual JSON document


### Example
Consider the following JSON document as the `expected`:
![](image/assertEqual_01.png)

We can compare against this document either with another file or a JSON document (`${...}` or hardcoded).
The example shows such capability.  After comparison (which ends in FAIL due to logical difference), one can use the
`nexial.json.lastCompareResults` as a JSON document to inspect failure details.

**Script**:<br/>
![](image/assertEqual_03.png)

**Output**:<br/>
Here's the comparison report as a JSON document. One will observe that the comparison is expressed as a JSON array, 
where each node represents a difference between the 2 JSON documents. The `$` character represents the top of the
document (or root node) so that `$.batters.batter[1].type` would mean "_the node named `type` from the 2nd element 
(0-based) of its parent array named `batter` whose parent node is named `batters` whose parent node is the root of the 
JSON document_".
![](image/assertEqual_05.png)

As a JSON document, we can query the comparison report for more specific details via the [json commands](../json/index)
and [JSON Path](../../jsonpath), which is shown below from row 7 through 25. 
![](image/assertEqual_04.png)

As stated earlier, one can also opt to generate the comparison report as CSV or HTML. Here's an another example:

![](image/assertEqual_06.png)

In this example, we have set both [`nexial.json.compareResultsAsCSV`](../../systemvars/index#nexial.json.compareResultsAsCSV) 
and [`nexial.json.compareResultsAsHTML`](../../systemvars/index#nexial.json.compareResultsAsHTML) to `true`. After the 
`assertEqual(expected,actual)` command is executed, we can use the 
[`nexial.lastOutputLink`](../../systemvars/index.md#nexial.lastOutputLink) to retrieve the exact location of the
generated output. Since all 3 report types are set to `true`, there would be 3 files generated, in very similar format:

`<output_location>/<execution_output_xlsx>_<scenario>_A<step_row>_<output_index>.<extension>`

Having the location to this file is useful because now we can further enhance the generated HTML with our own CSS. 
Suppose we have the following CSS in the `data` directory:

```css
table.compare-result-table {
    font-family:    Tahoma, sans-serif;
    padding:        5px;
    margin:         15px 5px;
    border-spacing: 0;
}

table.compare-result-table thead th {
    background-color: #888;
    padding:          5px;
    text-align:       left;
    color:            #eee;
    box-shadow:       0px 4px 5px rgba(80, 80, 80, 0.5);
}

.compare-result-table tbody td {
    white-space:    pre-wrap;
    padding:        5px;
    border-bottom:  1px #bbb solid;
    vertical-align: text-top;
}

.compare-result-table tbody td span.diff-highlight {
    background: #000 !important;
    color: #fff;
}
```

We can prepend this CSS to the generated HTML report, like so:

![](image/assertEqual_07.png)
 
The execution output shows links to the generated reports:

![](image/assertEqual_08.png)

Since the HTML has been "enhanced", when we click on the "html report" link, we'll see a more visually appealing HTML:

![](image/assertEqual_09.png)

As a contrast, here's how the same HTML looks like by default (i.e. without additional CSS enhnacements):

![](image/assertEqual_10.png)


### See Also
- [base &raquo; `assertEqual(expected,actual)`](../base/assertEqual(expected,actual))
