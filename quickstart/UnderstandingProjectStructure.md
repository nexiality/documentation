---
title: Quick Start &raquo; Understanding Project Structure
tags: project structure project.properties script
comments: true
---
{% include_relative _breadcrumb.html current="{{ page.title }}" %}


Below is the general directory/file structure of a Nexial project:

<img src="image/UnderstandingProjectStructure_01.png" style="height:360px"/>

Things to note:
1. The `artifact` directory contains 3 sub-directories: `data`, `plan`, `script`. These are the directories are used 
   to store test scripts and test data.
   1. `artifact/script` \- this directory will store your test scripts.  The script files may be named to your 
   likings.  Generally they would reflect the functionality or time-bound work (such as a sprint) for a project.
   2. `artifact/data` \- this directory will store your test data.  Each data file must be named in correspondent to 
   the test script - `[TEST SCRIPT NAME].data.xlsx`.  It should contain the same number of data sheets (worksheets) as 
   its corresponding test script.  However It is possible to deviate from this.  
   Check [Nexial command](../commands/) for more details. 
   3. `artifact/plan` \- this directory will store all the test plan.  Each test plan may contain one or more test 
   script and data file.  It may contain test scripts and data files from a different project as well.  Check 
   [Nexial command](../commands/) for more details.

2. The `output` directory contains the output of each test execution named as a `run id`, which is simply the 
   timestamp of the start of a test execution.  The `captures` directory stores all the screenshots, the `logs` 
   directory stores all the log files, and the output is named similarly to the target test script - 
   `[TEST SCRIPT NAME].[START DATE/TIME].[ITERATION].xlsx`.

3. For convenience, use the `nexial-project.cmd` or `nexial-project.sh` to generate the project structure for you.

4. As a convention, it is recommended to use `C:\projects` as the top-level directory for all your Nexial projects.

5. For more information, check out [Understanding Nexial Excel templates](UnderstandingExcelTemplates).


### project.properties
In addition to the standard script, data and plan files, Nexial also support another to maintain your test data.  This
is especially useful for managing data that is common across the entire project (i.e. the same project directory). This
is the main purpose of the `project.properties`.  It is used to store test data that is common amongst all or most of 
the script so that such information need not be duplicated across multiple data file.  Information such as database
connectivity, application URL, commonly used XPATH, etc. can now be conveniently managed in one place.  Here are the 
rules about `project.properties`:

1. It must be found under the project directory as `artifact/project.properties`.
2. It is expected to be a file that contains the standard name-value pairs, as in `name1=value1`.  Each pair is 
separated by newline.
3. It may contain custom data variables as well as Nexial system variables.
4. Data variables defined in `project.properties` will override the same defined in a data file.