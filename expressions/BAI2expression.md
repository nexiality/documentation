---
layout: default
title: BAI2 expression
parent: Expressions
tags: command expressions
comments: true
---

### Description

- **BAI2**  is  a  file  format  standard  developed  by  the  Banking  Administration  Institute to  enable  the 
  electronic  exchange  of  banking  data. BAI2 files come to an account holder from a bank.
- The Nexial expression `BAI2` automates parsing and validating the files with BAI2 file format.
- Read more about <a href="https://www.bai.org/docs/default-source/libraries/site-general-downloads/cash_management_2005.pdf" class="external-link" target="_nexial_link">BAI Standard Specifications (PDF)</a>.

#### BAI2 File Structure
Record types and field names that needs to be used in the `BAI2` expression:

| Record Code | Record Type | Purpose | Field Names |
| --- | --- | --- | --- |
| 01  | `File Header` | Begins File | `Record Code`<br/>`Sender ABA`<br/>`Receiver ABA`<br/>` File Creation Date`<br/>`File Creation Time`<br/>`File ID`<br/>`Record Length`<br/>`File Block Size`<br/>`File Version Number`|
| 02  | `Group Header` | Begins Group |`Record Code`<br/>`Bank Customer Number`<br/>`Receiver ABA`<br/>`Group Status`<br/>`Effective Date`<br/>`Effective Time`<br/>`Currency Code`<br/>`Date Modifier`|
| 03  | `Account Header` | Begins Account | `Record Code`<br/>`Bank Customer Account`<br/>`Currency Code`<br/>`Summary Type Code`<br/>`Summary Amount`<br/>`Summary Item Count`<br/>`Funds Type`|
| 16  | `Transaction` | Within Account | `Record Code`<br/>`Detail Type Code`<br/>`Transaction Amount`<br/>`Funds Type`<br/>`Bank Ref Number`<br/>`Customer Ref Number`<br/>`Detail Text` |
| 49  | `Account Trailer` | Ends Account | `Record Code`<br/>`Account Control Total Amount`<br/>`Account Total Records`|
| 98  | `Group Trailer` | Ends Group | `Record Code`<br/>`Group Total Amount`<br/>`Group Total Accounts`<br/>`Group Total Records`|
| 99  | `File Trailer` | Ends File | `Record Code`<br/>`File Total Amount`<br/>`File Total Groups`<br/>`File Total Records`|

BAI2 Sample File<br/>
![](image/BAI2_01.png)


### Operations

#### `csv`
Convert the file content to CSV data type.

**Example**<br/>
Filter all the `Transaction` records in the file and convert into `csv` data type<br/>
Script<br/>
![](image/BAI2_10.png)

Output**<br/>
![](image/BAI2_11.png)

-----

#### `errors`
List out all the errors found during file validation.

-----

#### `field(recordType,name)`
List out all the values of a specific field of a specific record type.<br/>

**Example**<br/>
Sum all the `Group Total Amount` values from each `Group Trailer` record and assert with `File Total Amount` value from `File Trailer` record<br/>
Script<br/>
![](image/BAI2_06.png)

Output<br/>
![](image/BAI2_07.png)

-----

#### `filter(recordType,condition)`
Filter all the matched records with given condition.

**Example**<br/>
Filter all the `Group` blocks with `Group Status` as 1<br/>
Script<br/>
![](image/BAI2_02.png)

Output<br/>
![](image/BAI2_03.png)

List all the `Bank Customer Account` field values in the filtered groups<br/>
Script<br/>
![](image/BAI2_04.png)

Output<br/>
![](image/BAI2_05.png)

-----

#### `save(path)`
Saves the content to given file path. File path is to be specified including file name.

**Example**<br/>
Filter all the `Group` blocks in the file and `save` the output to a file.<br/>
Script<br/>
![](image/BAI2_12.png)

Output<br/>
Output with filtered `Group` blocks are saved to given file `path`:<br/>
![](image/BAI2_13.png)

-----

#### `store(var)`
Stores the content to given variable name in memory. This variable name can be used in consecutive steps.

**Example**<br/>
Filter all the `Transaction` records in the file and list out all the `Transaction Amount` values<br/>
Script<br/>
![](image/BAI2_08.png)

Output<br/>
![](image/BAI2_09.png)

-----

<script>jQuery(document).ready(function () { newOperationSelect(); });</script>


