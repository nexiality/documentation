---
layout: minified
title: merge(csvVariable,refColumns)
parent: CSVexpression
---

#### `merge(csvVariable,refColumns)`
Merge the CSV data represented by `csvVariable` into existing CSV content. The `refColumns`, if specified, is used to merge 
the 2 CSV content in such a way that the record of the same key(s) are merged together. For merging 2 CSV content based 
on multiple "key" columns, specified these columns (1) in the order of importance, and (2) separated by 
[`nexial.textDelim`](../systemvars/index#nexial.textDelim).

In general, there are 3 uses of this operation:

1. **merge two CSV content have no header**<br/>
   In this case, records will be merged line-by-line with no regard to the data value.
   
   **Example**:<br/> 
```text
[CSV( ${csv file to merge from} ) => parse store(merge_from)]
... ...
[CSV( ${csv file to merge into} ) => parse(header=false) merge(merge_from) store(merge_into)]
```
    <table border="1" cellspacing="0" cellpadding="5">
    <thead>
    <tr>
        <th>data variable</th>
        <th>snapshot</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>csv file to merge into</code></td>
        <td><img src="image/csv_05.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>csv file to merge from</code></td>
        <td><img src="image/csv_06.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>merge into</code> (<b>AFTER</b> merge)</td>
        <td><img src="image/csv_07.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    </tbody>
    </table>
    <br/>
   
   Script:<br/>
   ![script](image/CSVexpression_33.png)
   Note that in this example **`\(empty\)`** as the `refColumns` signifies that no shared column is between these 2 CSV 
   files. Alternatively, omit the `refColumns` parameter entirely, as in `merge(merge_from)`.
   
   Output:<br/>
   ![output](image/CSVexpression_34.png)

2. **merge two CSV content with headers, but without `refColumns`**<br/>
   In this case, `header` exists in both CSV file, but they do not share any common column from the merge can be based 
   on.
   
   **Example**:<br/>
```text
[CSV( ${csv file to merge from} ) => parse(header=true) store(merge_from)]
... ...
[CSV( ${csv file to merge into} ) => parse(header=true) merge(merge_from) store(merge_into)]
```
    <table border="1" cellspacing="0" cellpadding="5">
    <thead>
    <tr>
        <th>data variable</th>
        <th>snapshot</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>csv file to merge into</code></td>
        <td><img src="image/csv_08.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>csv file to merge from</code></td>
        <td><img src="image/csv_09.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>merge into</code> (<b>AFTER</b> merge)</td>
        <td><img src="image/csv_10.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    </tbody>
    </table>
    <br/>
   
   Script:<br/>
   ![script](image/CSVexpression_35.png)
   Note that passing  **`\(empty\)`** as the `refColumns` signifies that no shared column is between these 2 CSV 
   files. Alternatively, omit the `refColumns` parameter entirely, as in `merge(merge_from)`.
   
   Output:<br/>
   ![output](image/CSVexpression_36.png)
   
3. **merge two CSV content with headers and share same `refColumns`**<br/>
   In this case, header exists for both CSV data and they also share (at least) one common column whereby merge can use 
   it to align the records.
   
   **Example**<br/>
```text
[CSV( ${csv file to merge from} ) => parse(header=true) store(merge_from)]
... ...
[CSV( ${csv file to merge into} ) => parse(header=true) merge(merge_from,SSN) 
                                        store(merge_into)]
```
    <table border="1" cellspacing="0" cellpadding="5">
    <thead>
    <tr>
        <th>data variable</th>
        <th>snapshot</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>csv file to merge into</code></td>
        <td><img src="image/csv_11.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>csv file to merge from</code></td>
        <td><img src="image/csv_12.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    <tr>
        <td><code>merge into</code> (<b>AFTER</b> merge)</td>
        <td><img src="image/csv_13.jpg" style="box-shadow:none;margin:0"/></td>
    </tr>
    </tbody>
    </table>
    <br/>
   Notice that the merged CSV is matching up the First Name and Last Name based on `SSN`, even though the order of these 
   `SSN` are not the same.

   Script:<br/>
   ![script](image/CSVexpression_37.png)
   
   Output:<br/>
   ![output](image/CSVexpression_38.png)
 
4. (more like _3a_) **merge two CSV content with headers and share multiple `refColumns`**<br/>
   Similar to the above usage, Nexial also supports the merging of 2 CSV content with multiple key columns.  As such,
   both CSV content will be sorted against the specified key columns before the content are merged together. Consider
   the following example:<br/>
   
   Script:<br/>
   ![script](image/CSVexpression_93.png)
   
   Output:<br/>
   In the first example (line 4), we are merging two CSV content using `SSN`, `First Name`, and `Last Name`. The output
   for this command looks like this:<br/>
   ![output](image/CSVexpression_95.png)<br/>
   
   In the second example (line 5), we mare merging the same two CSV content using `Last Name`, `First Name` and then 
   `SSN`. Note that the key columns affected the sorting order:<br/> 
   ![output](image/CSVexpression_94.png)<br/>
   <br/>
   Observe that the order of the merged CSV content is different than the previous output.
 
-----

