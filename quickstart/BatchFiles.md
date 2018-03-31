---
title: Batch Files
parent: quick start
tags: command quickstart batch cmd sh
comments: true
---


### Introduction
Nexial ships with a variety of batch files and shell scripts to aid the process of automation.  These scripts range
from project creation to execution, and we will be adding more from time to time.


### Available Batch Files

#### **`nexial.cmd` / `nexial.sh`**
This is the main script is used to execute Nexial script or plan.  This command has following command line options:

| options           | explanation |
| ----------------- | ----------- |
| **`-data`**       | This option will ensure the data file location relative to executing script. Default data file is `../data/<script_name>.data.xlsx`.| 
| **`-datasheets`** | This option will restrict to a comma-seperated list of data sheets for this test execution. Default will utilize all the sheets of data file.|
| **`-output`**     | This will ensure output directory where results are stored. Default location is `../../output` relative to script/plan.|
| **`-plan`**       | This option is to for running plan. This will require full path of plan. This is required if `-script` is missing.|
| **`-script`**     | This option is to for running script. This will require full path of script. This is required if `-plan` is missing.|
| **`-scenario`**   | This will run one or many test scenarios separated by comma.|

For example,<br/>
- Execute a Nexial script:<br/>
  **`nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx`**.
- Execute a Nexial plan:<br/>
  **`nexial.cmd -plan c:\projects\myProject\artifact\plan\myProject.xlsx`**.
- Execute one specific scenario (i.e. worksheet):<br/>
  **`nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx -scenario test1`**. 


#### **`nexial-crypt.cmd` / `nexial-crypt.sh`**
This command is used to encrypt the sensitive data. For more detail, click [here](../tipsandtricks/NexialCrypt.html).


#### **`nexial-desktop-xpath-update.cmd` / `nexial-desktop-xpath-update.sh`**
This script updates the XPath(s) used for desktop automation (i.e. application.json).  This script has 
following options:

| options  | explanation |
| -------- | ----------- |
| **`-t`** | **[REQUIRED]** This option is for location of a single JSON test script or a directory to update.|
| **`-v`** | This option is to turn on verbose logging. This is optional.|


#### **`nexial-project.cmd` / `nexial-project.sh`**
This command is used to create new nexial-project. For example, the following will create a new project with the name 
`projectName`.  By default it will be created in **C:\projects\projectName** folder for Windows, or 
`/Users/<user_id>/projects/projectName` for MacOSX:

**`nexial-project.cmd projectName`** 
**`nexial-project.sh projectName`** 


#### **`nexial-script-update.cmd` / `nexial-script-update.sh`**
This script updates one or more test scripts with the latest available commands (dropdowns in spreadsheets). It has 
two command line options:<br/>

| options  | explanation |
| -------- | ----------- |
| **`-t`** | **[REQUIRED]** This option is for location of a single Excel test script or a directory to update.|
| **`-v`** | This option is to turn on verbose logging. This is optional.|

For example, the following will update all the scripts from given path.<br/>
**`nexial-script-update.cmd -v -t C:\projects\myProject\artifact\script`**. 


#### **`nexial-variable-update.cmd` / `nexial-variable-update.sh`**
This script refactors the data variables referenced across test artifacts to provide uniformity across script authors 
and teams.  One may specify the current keys and new keys in the form of:

	`key1=NEW_KEY1;key2=NEW_KEY2;...`
 
This script has three command line options:<br/> 

| options  | explanation |
| -------- | ----------- |
| **`-d`** | This option is for data variables to replace in the form of old_var=new_var. |
| **`-t`** | This option is path of project/starting location of update data varaiable. |
| **`-v`** | This option is to turn on verbose logging. |

For example, the following renames the key `oldKey1` to `newKey1`, and `oldKey2` to `newKey2`, and so on:<br/>
**`nexial-variable-update.cmd -v -d oldKey1=newKey1;oldKey2=newKey2;oldKey3=newKey3 -t projectFullPath`** 
    
