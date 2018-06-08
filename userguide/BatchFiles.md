---
layout: default
title: Batch Files
parent: User Guide
tags: command userguide batch cmd sh
comments: true
---


### Introduction
Nexial ships with a variety of batch files and shell scripts to aid the process of automation.  These scripts range
from project creation to execution, and we will be adding more from time to time.

All batch files  can be found under `${NEXIAL_HOME}/bin`:<br/>
![](image/BatchFiles_01.png)


### Available Batch Files

#### nexial.cmd / nexial.sh
This is the main script is used to execute Nexial script or plan.  This command has following command line options:

| options           | explanation |
| ----------------- | ----------- |
| **`-data`**       | This option will ensure the data file location relative to executing script. <br/>Default data file is `../data/<script_name>.data.xlsx`.| 
| **`-datasheets`** | This option will restrict to a comma-seperated list of data sheets for this test execution. <br/>Default will utilize all the sheets of data file.|
| **`-output`**     | This will ensure output directory where results are stored. <br/>Default location is `../../output` relative to script/plan.|
| **`-plan`**       | This option is to for running plan. This will require full path of plan. <br/>This is required if `-script` is missing.|
| **`-script`**     | This option is to for running script. This will require full path of script. <br/>This is required if `-plan` is missing.|
| **`-scenario`**   | This will run one or more test scenarios separated by comma.|

<br/>

For example,<br/>
- Execute a Nexial script:<br/>
  `nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx`

- Execute a Nexial plan:<br/>
  `nexial.cmd -plan c:\projects\myProject\artifact\plan\myProject.xlsx`

- Execute one specific scenario (i.e. worksheet):<br/>
  `nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx -scenario test1` 

---------------------------------------------
#### nexial-setup.cmd / nexial-setup.sh

This is the script used to setup the user specific configurations. This command has following command line options:

| options           | explanation |
| ----------------- | ----------- |
| **`-file`** | This is the location of the key value pairs user wants to setup.| 
| **`-key`** | This is the key used to encrypt the data.|

<br/>

For example,<br/>
- Setup user defined configurations:<br/>
  `nexial-setup.cmd -f "C:\Projects\config.data" -k "|7FDo8#Q;;mZ>G22"`
  
##### Usage
1.  Open a console and point it to `${NEXIAL_HOME}/bin`
2.  Run `nexial-crypt.cmd` (Windows) or `./nexial-crypt.sh` (*NIX, OSX) with the data file and the secret key as follows:  
    `nexial-setup.cmd -f "C:\Projects\config.data" -k "|7FDo8#Q;;mZ>G22"`
3.  The config.data file content looks like the following:  
    ![](image/NexialSetup_01.png)
4.  When the Nexial command is run with the appropriate arguments it creates a lib called setup.jar inside the lib folder.
    Also a message is displayed asking you to delete the config file as shown below:  
    ![](image/NexialSetup_02.png)
5.  Now you can further zip this using the `jar` command and distribute it further with the team. For example
    `jar -cf nexial.zip .`
6. That is it! the latest zip you have is configured with the necessary configurations.

---------------------------------------------
#### nexial-crypt.cmd / nexial-crypt.sh
This script is used to encrypt the sensitive data.

For sensitive information such as password, it may be important to store them encrypted at rest to avoid tampering or 
misuse.  The `nexial-crypt.[cmd|sh]` script is used to support this.  At a high level, this is how it works:

1. A Nexial user uses the nexial-crypt utility to encrypt the sensitive information.
2. The nexial-crypt utility provides the encrypted form back to the Nexial user.
3. Nexial user then copy the encrypted data into the appropriate data file.
4. During automation, Nexial will dynamically decrypt the encrypt data as and when it is referenced within the 
   corresponding Nexial script.
5. However, Nexial will not convert the encrypted form to its original form in the Nexial output file(s).

It should be considered as best practice to encrypt information that would otherwise be misused.  In a team setting 
where automation scripts are made available (e.g. via SCM), this is especially important.

##### Usage
1.  Open a console and point it to `${NEXIAL_HOME}/bin`
2.  Run `nexial-crypt.cmd` (Windows) or `./nexial-crypt.sh` (*NIX, OSX) with the target sensitive data as an argument:  
    ![](image/NexialCrypt_02.png)
3.  The script will encrypt the argument and provide the encrypted form:  
    ![](image/NexialCrypt_03.png)
4.  Copy the highlighted encrypted data (including `crypt:`) to data file:  
    ![](image/NexialCrypt_04.png)
5.  That's it! Now you can reference this data via its name, as is `${TopSecret}`.

##### Notes
1. At times, using command line console (especially on Windows) can present some challenges when encrypting special 
   characters such as pipe (`|`), percent (`%`), ampersand (`&`) or question mark (`?`).  When dealing with special 
   character, be sure to surround the entire input parameter with double quote.  For example,<br/>
   `nexial-crypt.cmd "ab&c"`<br/>
   `nexial-crypt.cmd "ab|c"`  
2. If the intent input contains double quote (`"`), then one would need to surround the entire input with double 
   quote, and also prepend the double quote with another double quote.  For example,<br/>
   `nexial-crypt.cmd "ab""c"`

---------------------------------------------

#### nexial-desktop-xpath-update.cmd / nexial-desktop-xpath-update.sh
This script updates the XPath(s) used for desktop automation (i.e. application.json).  This script has 
following options:

| options  | explanation |
| -------- | ----------- |
| **`-t`** | **[REQUIRED]** This option is for location of a single JSON test script or a directory to update.|
| **`-v`** | This option is to turn on verbose logging. This is optional.|

---------------------------------------------

#### nexial-project.cmd / nexial-project.sh
This command is used to create new nexial-project. For example, the following will create a new project with the name 
`projectName`.  By default it will be created in `C:\projects\projectName` folder for Windows, or 
`/Users/<user_id>/projects/projectName` for MacOSX:

`nexial-project.cmd projectName`

`nexial-project.sh projectName` 

---------------------------------------------

#### nexial-script-update.cmd / nexial-script-update.sh
This script updates one or more test scripts with the latest available commands (dropdowns in spreadsheets). It has 
two command line options:<br/>

| options  | explanation |
| -------- | ----------- |
| **`-t`** | **[REQUIRED]** This option is for location of a single Excel test script or a directory to update.|
| **`-v`** | This option is to turn on verbose logging. This is optional.|

For example, the following will update all the scripts from given path.<br/>
`nexial-script-update.cmd -v -t C:\projects\myProject\artifact\script` 

---------------------------------------------

#### nexial-variable-update.cmd / nexial-variable-update.sh
This script refactors the data variables referenced across test artifacts to provide uniformity across script authors 
and teams.  One may specify the current keys and new keys in the form of:

`-d "key1=NEW_KEY1;key2=NEW_KEY2;..."`
 
This script has three command line options:<br/> 

| options  | explanation |
| -------- | ----------- |
| **`-d`** | This option is for data variables to replace in the form of old_var=new_var |
| **`-t`** | This option is path of project/starting location of update data varaiable |
| **`-v`** | This option is to turn on verbose logging |

For example, the following renames the key `oldKey1` to `newKey1`, and `oldKey2` to `newKey2`, and so on:<br/>
`nexial-variable-update.cmd -v -d oldKey1=newKey1;oldKey2=newKey2;oldKey3=newKey3 -t projectFullPath` 

---------------------------------------------

#### nexial-log-parser.cmd / nexial-log-parser.sh
This script capture required log statements (mainly for elapsed time between request and response of given step) from a log 
file generated through execution and stored to new file.<br/>

| options  | explanation |
| -------- | ----------- |
| **`-t`** | **[REQUIRED]** This option is for location of a log file to be parsed.|
| **`-s`** | **[REQUIRED]** This option is for location of new log file to be generated.|
| **`-c`** | This option is for specifying type of logs to be tracked. Possible values for this are desktop, rdbms, ws and all(default). This is optional.|

For example, the following will create new log file with required logs only.<br/>
`nexial-log-parser.cmd -t C:\projects\myProject\output\20180608_121212\nexial-20180608_121212.log -s C:\projects\myProject\newLogs.log -c ws` <br/>
This will extract `ws` request and response logs from `nexial-20180608_121212.log` and store it to `newLog.log`.

This script comes into picture when one wants to capture response time for step. For example, someone wants to do performance testing for API calls,
`ws` criteria will gather information about request and response time from logs and calculate elapsed time for the same.

---------------------------------------------
