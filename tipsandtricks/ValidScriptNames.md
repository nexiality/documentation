---
layout: default
title: Best Practice on Script Names
parent: Tips and Tricks
tags: command tipsandtricks
comments: true
---

### Explanation and Best Practise
First and foremost, the best approach is keep things simple and short. It starts with the script name.

When creating test script, it is often advised to the script name meaningful but succinct.  Nexial uses script 
file name, along with other runtime-generated data to formulate file names for runtime artifact such as screenshots, 
logs, etc.  Special care is applied in order to keep the generated files uniquely named. In addition, Nexial generates 
links to these runtime artifacts in the output spreadsheet as well.  Since Excel does not allow more than 255 
characters in formula (Nexial creates links via Excel formula), having a test script with very long name might cause 
failure in execution.


### Consequences of Using Script with Long Name
If the recommended best practice not followed, you might end up getting error while executing script as shown below.<br/>

![](image/ValidScriptNames_01.png)

The above exception would be thrown during execution if the initial script name or the formulated file name breaches 
the required 255 ASCII characters in any operating system.


### Example of Filename Created in Nexial
Below is the one of the sample example and description of test artifact generated which will cause the "String literals 
in formula" error.

Below is an example how Nexial derives the file name for a screenshot file.  Again, for the purpose of keeping such 
files unique and descriptive, various execution metadata is added to the generated file name (the **bold** portions are 
dynamic):

[**project**].Test_Plan.[**sequence in plan**],[**script name**].[****run ID as yyyyMMdd_hhmmss**].[**iteration #**].xlsx_[**Scenario**]\_[**Activity**]_[**Row #**].png

Let's suppose that:
- project is `xyzProject`
- sequence in plan is `003`
- script name is **`long_Script_Name_with_way_too_much_information_included_but_not_all_necessary`**
- run ID is `20171130_152727`
- iteration # is `001`
- scenario is `User Registration without Picture ID`
- activity is `Provide Personal Information`
- Row # is `A33`
 
This would generate a file name that is 201 characters.  Include the path information, this is way too long for Excel
to accept as a link location.

Again, keep your script names short and sweet.
