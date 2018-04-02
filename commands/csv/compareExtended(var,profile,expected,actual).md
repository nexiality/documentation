---
layout: default
title: compareExtended(var,profile,expected,actual)
parent: csv
tags: command csv
comments: true
---


### Description
This command provides a more comprehensive way of comparing CSV content.  For simple comparison, check out 
[`compare(expected,actual,failFast)`](compare(expected,actual,failFast)).

The main purpose of this command is to provide flexibility and insights into the comparison of 2 CSV content with the 
following strategies:
- Ability to compare 2 fields with different name, and possibly different position in the respective files
- Ability to skip certain fields, but still have them as part of output
- Ability to compare files with disparate sort order
- Ability to specify multiple columns as "identity" columns for fast comparisons
- Ability to generate different format of output, such as CSV and HTML
- Ability to control the fields to display as part of output
- Ability to create reusable configuration for comparison

This command takes 4 parameters:
- `var` \- the variable to reference the comparison result (see below for possible data extraction)
- `profile` \- the reference to the configuration of this comparison
- `expected` \- the file or CSV content that represents the expected content
- `actual` \- the file or CSV content that represents the actual content

It is important to note that the `expected` is treated as the "baseline" - meaning, the subject to compare against.  
In comparison, the `actual` is the "variant", so as speak. 

The `profile` refers to a set of data variables that are used as configuration for a given comparison.  This profile 
may be reused for multiple comparisons, thus could be a time saver.  The general structure of the comparison 
configuration is as follows:

<code><b>[profile]</b>.compareExt.<b>configuration_key</b> | value</code>

Here are the list of possible configuration (assuming the `profile` is `MyFiles`):
<table>
<thead>
<tr>
	<th>configuration</th>
	<th>value</th>
	<th>notes</th>
</tr>
</thead>
<tbody>
<tr>
	<td><code>MyFiles.compareExt.expected.identity</code></td>
	<td>"ID" column name(s) of the <code>expected</code> file.</td>
	<td>
		The "ID" columns are used in 2 ways:<br/><br/>
		<ol>
			<li><u>Fast matching</u> - if the "ID" columns of an <code>expected</code> row is not matching that of the <code>actual</code> row, then the comparison for that row is considered as FAILED and Nexial will move to compare the next row.</li>
			<li><u>Pre-Comparison Sort</u> - Nexial uses the content of the "ID" column(s) to sort the CSV content prior to comparison. That way 2 CSV files with disparate sort order can be compared.</li>
		</ol>
	</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.actual.identity</code></td>
	<td>"ID" column name(s) of the <code>actual</code> file.</td>
	<td>see above.</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.identity.delim</code></td>
	<td>Default: <code>^</code></td>
	<td>The delimiter to use when multiple identity columns are specified. Default is <code>^</code>.</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.match.[EXPECTED COLUMN]</code></td>
	<td>The corresponding column name of the <code>actual</code> file.</td>
	<td>
		Specifying the columns to match between the <code>expected</code> and <code>actual</code> file. For example:<br/>
		<img src="image/compareExtended_09.png"/><br/>
		One can specify all the columns to ensure proper matching. If the <code>MyFiles.compareExt.match.[FIELD]</code> 
		configuration is used then those not specified will be omitted for comparison. If both files contains the exact 
		same headers, such configuration can be omitted entirely.
		</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.output.display</code></td>
	<td>The column(s) - the <code>expected</code>file's perspective - to display as part of output.</td>
	<td>Use this configuration to include or omit certain fields. Not all fields are used for matching. If the 
	<code>MyFiles.compareExt.match.[FIELD]</code> configuration is used then those not specified will be omitted for 
	comparison. However such omitted fields can still be used for output purpose - via this configuration. Furthermore, 
	it is possible to alter the order of these columns in the output.
	</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.output.MISMATCHED</code></td>
	<td>Field name of the "mismatched" field.</td>
	<td>
	This command provides an additional field to specify where the mismatched is found. This 
	configuration specify what such field should be called. By default it is <code>MISMATCHED FIELD</code>.
	</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.output.EXPECTED</code></td>
	<td>Field name of the "mismatched" value from the <code>expected</code> file.</td>
	<td>
	The field name to use for displaying the value from the <code>expected</code> file for the "mismatched" 
	field (see above).
	</td>
</tr>
<tr>
	<td><code>MyFiles.compareExt.output.ACTUAL</code></td>
	<td>Field name of the "mismatched" value from the <code>actual</code> file.</td>
	<td>
	The field name to use for displaying the value from the <code>actual</code> file for the "mismatched" field 
	(see above).
	</td>
</tr>
</tbody>
</table>

Here's an example of the comparison configuration (in this case, the `profile` is `AppOutput`):
![config](image/compareExtended_01.png)

For output, there are various data elements that are available.  Below is a depiction of what one can retrieve from 
the comparison result (referenced by the specified `var` variable):

![result](image/compareExtended_02.png)

For example, assuming that the `var` is specified as `result`:
- To retrieve the number of mismatched rows - <code>${result}.<b>failCount</b></code>
- To find the rate of matches - <code>[<b>NUMBER</b>(${result}.<b>successRate</b>) -> multiple(100) roundTo(00.00)]%</code>
  - Note that we are using [Nexial Expression](../../expressions/) in the example above to convert a rate of 0 to 1 to 
    a percentage value.
- To list the identities of the mismatched records - <code>${result}.failIdentities</code>
- To generate a report, in CSV format, of the mismatched records - <code>${result}.reportAsCSV</code>
  ![csv](image/compareExtended_03.png) 
  - Note that `MISMATCHED FIELD` is controlled via the `profile.compareExt.output.MISMATCHED` configuration (see above).
  - Note that `FROM_DATABASE` represents the mismatched field from the `expected` file, and is controlled via the `profile.compareExt.output.EXPECTED` configuration (see above).
  - Note that `FROM_EXTERNAL` represents the mismatched field from the `actual` file, and is controlled via the `profile.compareExt.output.ACTUAL` configuration (see above).
- To generate a report, in HTML format, of the mismatched records - `${result}.reportAsHTML`  
  ![html](image/compareExtended_04.png) 
  The same HTML can be better rendered via external stylesheet.  The table DOM has a style class of 
  `compare-extended-result-table`.  For example, with the following stylesheet:
  
  ```css
  table.compare-extended-result-table {  
   font-size: 10pt;  
   color: #333;  
   font-family: monospace;  
   padding: 5px;  
   border: 1px solid #888;  
   border-radius: 15px;  
   box-shadow: 5px 1px 10px #555;  
  }
  
  table.compare-extended-result-table thead tr th {  
   font-weight: bold;  
   font-family: sans-serif;  
   text-align: left;  
   text-shadow: 1px 1px 3px #888;  
   color: #358;  
   padding: 0 5px;  
  }
  
  table.compare-extended-result-table tbody tr td {  
   border-bottom: 1px solid #ccc;  
   padding: 2px 5px;  
   margin-right: 2px;  
  }
  ```
  
  One can possibly render the same HTML as:  
  ![html-nice](image/compareExtended_05.png)


### Parameters
see above for parameter details


### Example
**Script**:<br/>
![script](image/compareExtended_06.png)

**Data file**:<br/>
![data](image/compareExtended_07.png)

**Output**:<br/>
![output](image/compareExtended_08.png)


### See Also
- [`compare(expected,actual,failFast)`](compare(expected,actual,failFast))
