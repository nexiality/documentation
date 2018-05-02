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
- Read more about [BAI Standard Specifications](https://www.bai.org/docs/default-source/libraries/site-general-downloads/cash_management_2005.pdf) in PDF. 

#### BAI2 File Structure
- Record types and filed names that needs to be used in the `BAI2` expression:

| Record Code | Record Type | Purpose | Field Names |
| --- | --- | --- | --- |
| 01  | `File Header` | Begins File | `Record Code`<br/>`Sender ABA`<br/>`Receiver ABA`<br/>` File Creation Date`<br/>`File Creation Time`<br/>`File ID`<br/>`Record Length`<br/>`File Block Size`<br/>`File Version Number`|
| 02  | `Group Header` | Begins Group |`Record Code`<br/>`Bank Customer Number`<br/>`Receiver ABA`<br/>`Group Status`<br/>`Effective Date`<br/>`Effective Time`<br/>`Currency Code`<br/>`Date Modifier`|
| 03  | `Account Header` | Begins Account | `Record Code`<br/>`Bank Customer Account`<br/>`Currency Code`<br/>`Summary Type Code`<br/>`Summary Amount`<br/>`Summary Item Count`<br/>`Funds Type`|
| 16  | `Transaction` | Within Account | `Record Code`<br/>`Detail Type Code`<br/>`Transaction Amount`<br/>`Funds Type`<br/>`Bank Ref Number`<br/>`Customer Ref Number`<br/>`Detail Text` |
| 49  | `Account Trailer` | Ends Account | `Record Code`<br/>`Account Control Total Amount`<br/>`Account Total Records`|
| 98  | `Group Trailer` | Ends Group | `Record Code`<br/>`Group Total Amount`<br/>`Group Total Accounts`<br/>`Group Total Records`|
| 99  | `File Trailer` | Ends File | `Record Code`<br/>`File Total Amount`<br/>`File Total Groups`<br/>`File Total Records`|

- BAI2 Sample File<br/>
- ![](image/BAI2_01.png)


### Operations

- **`csv`** - convert the file content to csv data type.
- **`errors`** - list out all the errors found during file validation.
- **`field(recordType,name)`** - list out all the values of a specific field of a specific record type.
- **`filter(recordType,condition)`** - filter all the matched records with given condition.
- **`save(path)`** - saves the content to given file path. File path is to be specified including file name.  
- **`store(var)`** - stores the content to given variable name in memory. This variable name can be used in consecutive steps. 

### Examples

- Sample BAI2 file used for examples:
- ![](image/BAI2_01.png) 

##### Example 1: Usage of `filter(recordType,name)`
**Use case:** Filter all the groups with `Group Status` as 1<br/>
**Script:**<br/>
- ![](image/BAI2_02.png)

**Output:**<br/>
- ![](image/BAI2_03.png)

##### Example 2: Usage of `field(recordType,name)`
**Use case:** List all the Bank Customer Account numbers in the filtered groups
**Script:**<br/>
- ![](image/BAI2_04.png)

**Output:**<br/>
- ![](image/BAI2_05.png)

##### Example 3: Mixed use of expressions. Expression transformed through various data types `BAI2`, `LIST` and `NUMBER`.
**Use case:** Sum all the group total amounts and assert with total file amount <br/>
**Script:**<br/>
- ![](image/BAI2_06.png)

**Output:**<br/>
- ![](image/BAI2_07.png)

##### Example 4: Usage of `store(var)`
**Use case:**
 - Filter all the transactions in the file and list out all the `Transaction Amount` values.
 -  You can then transform to `Number` data type and can expand with more operations.<br/>
**Script:**<br/>
- ![](image/BAI2_08.png)

**Output:**<br/>
- ![](image/BAI2_09.png)