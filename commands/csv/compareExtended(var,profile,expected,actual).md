### Description

This command provides a more comprehensive way of comparing CSV content.  For simple comparison, look at `[csv.compare(expected,actual,failFast)](https://confluence.ep.com/display/QA/compare%28expected%2Cactual%2CfailFast%29+-+csv)`.

The main purpose of this command is to provide flexibility and insights into the comparison of 2 CSV content with the following strategies:

- *   Ability to compare 2 fields with different name, and possibly different position in the respective files
    *   Ability to skip certain fields, but still have them as part of output
    *   Ability to compare files with disparate sort order
    *   Ability to specify multiple columns as "identity" columns for fast comparisons
    *   Ability to generate different format of output, such as CSV and HTML
    *   Ability to control the fields to display as part of output
    *   Ability to create reusable configuration for comparison

This command takes 4 parameters:

- *   `var` \- the variable to reference the comparison result (see below for possible data extraction)
    *   `profile` \- the reference to the configuration of this comparison
    *   `expected` \- the file or CSV content that represents the expected content
    *   `actual` \- the file or CSV content that represents the actual content

It is important to note that the `expected` is treated as the "baseline" - meaning, the subject to compare against.  In comparison, the `actual` is the "variant", so as speak. 

The `profile` refers to a set of data variables that are used as configuration for a given comparison.  This profile may be reused for multiple comparisons, thus could be a time saver.  The general structure of the comparison configuration is as follows:

`**[profile]**.compareExt.**configuration_key** | value`

Here are the list of possible configuration (assuming the `profile` is `MyFiles`):

configuration

value

notes

`MyFiles.compareExt.expected.identity`

"ID" column name(s) of the `expected` file.

The "ID" columns are used in 2 ways:

1.  Fast matching \- if the "ID" columns of an `expected` row is not matching that of the `actual` row, then the comparison for that row is considered as FAILED and Nexial will move to compare the next row.
2.  Pre-Comparison Sort \- Nexial uses the content of the "ID" column(s) to sort the CSV content prior to comparison. That way 2 CSV files with disparate sort order can be compared.

`MyFiles.compareExt.actual.identity`  

"ID" column name(s) of the `actual` file.

see above.

`MyFiles.compareExt.identity.delim`

Default: `^`

The delimiter to use when multiple identity columns are specified. Default is `^`.

`MyFiles.compareExt.match.[EXPECTED COLUMN]`  

The corresponding column name of the `actual` file.

Specifying the columns to match between the `expected` and `actual` file. For example:

![](https://confluence.ep.com/download/attachments/16173284/image2017-12-22%204%3A0%3A54.png?version=1&modificationDate=1513944054558&api=v2&effects=border-simple,shadow-kn)

One can specify all the columns to ensure proper matching. If the `MyFiles.compareExt.match.[FIELD]` configuration is used then those not specified will be omitted for comparison. If both files contains the exact same headers, such configuration can be omitted entirely.

`MyFiles.compareExt.output.display`  

The column(s) - the `expected`file's perspective - to display as part of output.

Use this configuration to include or omit certain fields. Not all fields are used for matching. If the `MyFiles.compareExt.match.[FIELD]` configuration is used then those not specified will be omitted for comparison. However such omitted fields can still be used for output purpose - via this configuration. Furthermore, it is possible to alter the order of these columns in the output.

`MyFiles.compareExt.output.MISMATCHED`  

Field name of the "mismatched" field.

This command provides an additional field to specify where the mismatched is found. This configuration specify what such field should be called. By default it is `MISMATCHED FIELD`. 

`MyFiles.compareExt.output.EXPECTED`  

Field name of the "mismatched" value from the `expected` file.

The field name to use for displaying the value from the `expected` file for the "mismatched" field (see above).

`MyFiles.compareExt.output.ACTUAL`  

Field name of the "mismatched" value from the `actual` file.

The field name to use for displaying the value from the `actual` file for the "mismatched" field (see above).

Here's an example of the comparison configuration (in this case, the `profile` is `AppOutput`):

![](image/compareExtended_01.png)

For output, there are various data elements that are available.  Below is a depiction of what one can retrieve from the comparison result (referenced by the specified `var` variable):

![](image/compareExtended_02.png)

For example, assuming that the `var` is specified as `result`:

- *   To retrieve the number of mismatched rows - `${result}.**failCount**`
    *   To find the rate of matches - `[**NUMBER**(${result}.**successRate**) -> multiple(100) roundTo(00.00)]%`
        *   Note that we are using [Nexial Expression](../../expressions/) in the example above to convert a rate of 0 to 1 to a percentage value.
    *   To list the identities of the mismatched records - `${result}.failIdentities`
    *   To generate a report, in CSV format, of the mismatched records - `${result}.reportAsCSV`  
        ![](image/compareExtended_03.png) 
        *   Note that `MISMATCHED FIELD` is controlled via the `profile.compareExt.output.MISMATCHED` configuration (see above).
        *   Note that `FROM_DATABASE` represents the mismatched field from the `expected` file, and is controlled via the `profile.compareExt.output.EXPECTED` configuration (see above).
        *   Note that `FROM_EXTERNAL` represents the mismatched field from the `actual` file, and is controlled via the `profile.compareExt.output.ACTUAL` configuration (see above).
    *   To generate a report, in HTML format, of the mismatched records - `${result}.reportAsHTML`  
        ![](image/compareExtended_04.png) 
        The same HTML can be better rendered via external stylesheet.  The table DOM has a style class of `compare-extended-result-table`.  For example, with the following stylesheet:
        
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
        
        One can possibly render the same HTML as:  
        ![](image/compareExtended_05.png)

### Parameter(s)

see above for parameter details

### Example

Example Script:

![](image/compareExtended_05.png)

Example Data file:

![](image/compareExtended_06.png)

Here's the output:

![](image/compareExtended_07.png)

### See Also

- `[csv.compare(expected,actual,failFast)](https://confluence.ep.com/display/QA/compare%28expected%2Cactual%2CfailFast%29+-+csv)`