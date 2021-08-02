---
layout: default
title: Batch Files
parent: User Guide
tags: command userguide batch cmd sh
comments: true
---


## Introduction
Nexial ships with a variety of batch files and shell scripts to aid the process of automation. These scripts range
from project creation to execution, and we will be adding more from time to time.

All batch files can be found under `${NEXIAL_HOME}/bin`:<br/>
![](image/BatchFiles_01.png)


## Available Batch Files

#### **nexial**
This is the main script is used to execute Nexial script or plan.  This command has following command line options:

|options           |explanation  |
|------------------|-------------|
|**`-data`**       | This option will ensure the data file location relative to executing script. <br/>Default data file is `../data/<script_name>.data.xlsx`.| 
|**`-datasheets`** | This option will restrict to a comma-seperated list of data sheets for this test execution. <br/>Default will utilize all the sheets of data file.|
|**`-interactive`**| [_optional_] Run Nexial in [Interactive Mode](../interactive). |
|**`-output`**     | This will ensure output directory where results are stored. <br/>Default location is `../../output` relative to script/plan.|
|**`-override`**   | [_optional_] Add or override data variables in the form of `name=value`. <br/>Multiple overrides are supported via multiple `-override name=value` arguments.<br/>Note that variable name or value with spaces must be enclosed in double quotes.|
|**`-plan`**       | This option is for running plan. This will require full path of plan. <br/>This is required if `-script` is missing.|
|**`-subplans`**   | This option is for running specific worksheets(subplans) of plan. This will require one<br/>or more worksheets separated by comma.<br/>This will work for single plan execution.|
|**`-script`**     | This option is for running script. This will require full path of script. <br/>This is required if `-plan` is missing.|
|**`-scenario`**   | This will run one or more test scenarios separated by comma.|

<br/>

##### Example
- Execute a Nexial script:<br/>
  ```
  nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx
  ```

- Execute a Nexial plan:<br/>
  ```
  nexial.cmd -plan c:\projects\myProject\artifact\plan\myProject.xlsx
  ```
  
- Execute one or more specific subplans of single plan file:<br/>
  ```
  nexial.cmd -plan c:\projects\myProject\artifact\plan\myProject.xlsx 
    -subplans testPlan1,testPlan2
  ```

- Execute one specific scenario (i.e. worksheet):<br/>
  ```
  nexial.cmd -script c:\projects\myProject\artifact\script\myProject.xlsx -scenario test1
  ```

- Execute 2 scenarios with data variable overrides<br/>
  ```
  nexial.cmd -script c:\projects\Project1\artifact\script\script17.xlsx
    -scenario scenario1,scenario1a
    -override nexial.outputToCloud=true -override myData=XYZ
  ```

##### Cleaning up Temp Files
As part of execution, Nexial create temp files to store any in-flight automation artifacts. These temp files might not
get clean up properly. Over time, these temp files could create additional strain on the execution host (i.e. disk 
space). To circumvent such issue, starting from [Release 3](../release/nexial-core-v3.0.changelog), Nexial now will 
perform a quick routine clean up process at the start of an execution.

At the start of an execution, Nexial will checks for a configuration file stored in `${user.home}/.nexial/config.json`. 
This file contains the timestamp of when the last clean up was performed. As deemed necessary, Nexial will automatically
clean up outdated temp files it had previously created. This `.nexial/config.json` file will be automatically created
by Nexial. This file looks something like this:<br/>

![](image/BatchFiles_12.png)
    
Note that,
1. `lastChecked`: This shows last time when Nexial performed a temp file clean up.
2. `checkFrequencyDay`: This indicates the number of days since `lastCheck` by which Nexial will perform the next temp
  file clean up. The default value of this configuraiton is 5 days.

Separately, one can also force a clean up via the [`bin/nexial-temp-clean`](BatchFiles#nexial-temp-clean) script.

---------------------------------------------

#### **nexial-setup**
This is the script used to setup the user specific configurations. This command has following command line options:

|options                 |explanation                                                      |
|------------------------|-----------------------------------------------------------------|
|**`-file`** or **`-f`** | This is the location of the configuration (in the form of key value pairs) user wants to setup.| 
|**`-key`** or **`-k`**  | This is the key used to encrypt the data.                       |

<br/>

**Example**<br/>
- Setup user defined configurations:<br/>
  `nexial-setup.cmd -f "C:\Projects\config.data" -k "|7FDo8#Q;;mZ>G22"`
  
**Usage**
1. Open a console and point it to `${NEXIAL_HOME}/bin`

2. Run `nexial-setup.cmd` (Windows) or `./nexial-setup.sh` (*NIX, OSX) with the configuration file and the secret key 
   as follows:<br/>
   `nexial-setup.cmd -f "C:\Projects\config.data" -k "|7FDo8#Q;;mZ>G22"`

3. The config.data file content looks like the following:<br/>
   ![](image/BatchFiles_03.png)
 
4. When the Nexial command is run with the appropriate arguments it creates a lib called setup.jar inside the lib folder.
   Also a message is displayed asking you to delete the config file as shown below:<br/>
   ![](image/BatchFiles_04.png)
   
5. Now you can further zip this using the `jar` command and distribute it further with the team. For example:<br/>
   `jar -cf nexial.zip .`

6. That is it! The latest zip you have is configured with the necessary configurations.

**Note** 
1. For information about setting up an email-server configuration please look at [One Time Server Setup](EmailNotifications#one-time-server-setup)
on the Email Notifications page.

---------------------------------------------

#### **nexial-crypt**
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

**Usage**
1. Open a console and point it to `${NEXIAL_HOME}/bin`

2. Run `nexial-crypt.cmd` (Windows) or `./nexial-crypt.sh` (*NIX, OSX) with the target sensitive data as an argument:
   ![](image/BatchFiles_05.png)

3. The script will encrypt the argument and provide the encrypted form:
   ![](image/BatchFiles_06.png)

4. Copy the highlighted encrypted data (including `crypt:`) to data file:
   ![](image/BatchFiles_07.png)

5. That's it! Now you can reference this data via its name, as is `${TopSecret}`.

**Notes**
1. At times, using command line console (especially on Windows) can present some challenges when encrypting special 
   characters such as pipe (`|`), percent (`%`), ampersand (`&`) or question mark (`?`).  When dealing with special 
   character, be sure to surround the entire input parameter with double quote.  For example,<br/>
   
   `nexial-crypt.cmd "ab&c"`<br/>
   `nexial-crypt.cmd "ab|c"`

2. If the intent input contains double quote (`"`), then one would need to surround the entire input with double 
   quote, and also prepend the double quote with another double quote.  For example,<br/>

   `nexial-crypt.cmd "ab""c"`

---------------------------------------------

#### **nexial-desktop-xpath-update**
This script updates the XPath(s) used for desktop automation (i.e. application.json). This script has following options:

|options  |explanation                                                                                      |
|---------|-------------------------------------------------------------------------------------------------|
|**`-t`** |**[REQUIRED]** This option is for location of a single JSON test script or a directory to update.|
|**`-v`** |This option is to turn on verbose logging. This is optional.                                     |

---------------------------------------------

#### **nexial-project**
This command is used to create new nexial-project. For example, the following will create a new project with the name 
`projectName`. By default it will be created in `C:\projects\projectName` folder for Windows, or 
`/Users/<user_id>/projects/projectName` for MacOSX/*NIX:

`nexial-project.cmd projectName`

`nexial-project.sh projectName` 

**Example**<br/>

Command<br/>
![](image/BatchFiles_08.png)

Project Created<br/>
![](image/BatchFiles_09.png)


---------------------------------------------

#### **nexial-script-update**
This script updates one or more test scripts with the latest available commands (dropdowns in spreadsheets). It has 
two command line options:<br/>

|options  | explanation                                                                                      |
|---------|--------------------------------------------------------------------------------------------------|
|**`-t`** |**[REQUIRED]** This option is for location of a single Excel test script or a directory to update.|
|**`-v`** |This option is to turn on verbose logging. This is optional.                                      |
|**`-u`** |Auto-correct duplicate activity names within one scenario. The duplicate activity name will be append with a number at the end and thus making it unique within the same scenario.|
                                             
**Example**<br/>
The following will update all the scripts from given path.<br/>

`nexial-script-update.cmd -v -t C:\projects\myProject\artifact\script -u`

---------------------------------------------

#### **nexial-variable-update**
This script refactors the data variables referenced across test artifacts to provide uniformity across script authors 
and teams. One may specify the current keys and new keys in the form of:
`-d "key1=NEW_KEY1;key2=NEW_KEY2;..."`
 
This script has four command line options:<br/> 

|options  |explanation                                                                                      |
|---------|-------------------------------------------------------------------------------------------------|
|**`-d`** |**[REQUIRED]** This option is for data variables to replace in the form of `old_var=new_var`     |
|**`-t`** |**[REQUIRED]** This option is for providing the path of project/starting location of update data variable          |
|**`-v`** |This option is to turn on verbose logging                                                        |
|**`-p`** |This option is to preview the results for the data variables being updated without affecting any files. So it won't update data variables across artifacts.|

<br/>
For example, The following renames the key `oldKey1` to `newKey1`, and `oldKey2` to `newKey2`, and so on:<br/>
`nexial-variable-update.cmd -v -d oldKey1=newKey1;oldKey2=newKey2;oldKey3=newKey3 -t projectFullPath` 

If you just want to examine the positions of `oldKey1`, `oldKey2` and so on which will be affected, but don't 
want to refactor them. Following will preview the substitutions:<br/>
`nexial-variable-update.cmd -v -d oldKey1=newKey1;oldKey2=newKey2;oldKey3=newKey3 -t projectFullPath -p`<br/>

Format of data variable update preview has four columns:

|column                     |explanation                                                                     |
|---------------------------|--------------------------------------------------------------------------------|
|**`File`**                 |This will have relative path of file with respect to starting location of update data variable given by `-t` command line option. |
|**`Worksheet/Scenario`**   |This will have worksheet name of data file or scripts.                          |
|**`Position`**             |This is the position of line/cell being refactored/affected.                    |
|**`Updating Lines/Cells`** |Updating lines/Cells column will have line/cells before replacement and after replacement separated by `=>`. |

<br/>

**Example**<br/>
Let's have a look at variable update preview. Following command is executed for the preview:<br/>
![](image/BatchFiles_10.png)<br/>
The variable update preview would look like so:<br/>
![](image/BatchFiles_11.png)

---------------------------------------------

#### **nexial-log-parser**
This script captures required log statements (mainly for elapsed time between request and response of given step) from a log 
file generated through execution and stored to new file.<br/>

|options  |explanation                                                                                      |
|---------|-------------------------------------------------------------------------------------------------|
|**`-t`** |**[REQUIRED]** This option is for provding the location of a log file to be parsed.                           |
|**`-s`** |**[REQUIRED]** This option is for providing the location where a new log file  is to be generated.                      |
|**`-c`** |This option is for specifying type of logs to be tracked. Possible values for this are desktop, rdbms, ws and all(default). This is optional.|

<br/>

**Example**<br/> 
The following will create new log file with required logs only.<br/>

`nexial-log-parser.cmd -t C:\projects\myProject\output\20180608_121212\nexial-20180608_121212.log -s C:\projects\myProject\newLogs.log -c ws` <br/>

This will extract `ws` request and response logs from `nexial-20180608_121212.log` and store it to `newLog.log`.

This script comes into picture when one wants to capture response time for step. For example, someone wants to do 
performance testing for API calls, `ws` criteria will gather information about request and response time from logs and 
calculate elapsed time for the same.

---------------------------------------------

#### **nexial-project-inspector**
The script scans existing artifacts of a project and generate an interactive HTML report.<br/>
This script has the following command line options:<br/>

|options  |explanation                                                                               |
|---------|------------------------------------------------------------------------------------------|
|**`-m`**|Specify how output will be viewed (local or remote). Default is local.                     |
|**`-t`** |**[REQUIRED]** This is for providing the location of the project directory to scan.       |
|**`-v`** |Turn on verbose logging.                                                                  |

<br/>

**Example**<br/>
The following script will scan the demoProject directory<br/>
`nexial-project-inspector -t C:\projects\demoProject -v`

---------------------------------------------

#### **nexial-macro-update**
This script refactor the macro name referenced across test scripts and macro files to provide uniformity across script 
author and teams.<br/>
This script has four command line options:<br/> 

|options  |explanation                                                                               |
|---------|------------------------------------------------------------------------------------------|
|**`-t`** |**[REQUIRED]** This option is for providing the path of project/starting location of updating macro.  .     |
|**`-f`** |**[REQUIRED]** This option is for providing the file name of macro from which macro name to be replaced.    |
|**`-s`** |**[REQUIRED]** This option is for specifying worksheet of above macro file.                              |
|**`-m`** |**[REQUIRED]** This option is for specifying the macro name which needs to be replaced across scripts.   |
|**`-p`** |This option is to preview the results for the macros being updated without affecting any files.|

<br/>

**Example**<br/> 
The following renames the macro `oldMacro1` to `newMacro1`, and `oldMacro2` to `newMacro2`, and so on:<br/>
`nexial-variable-update.cmd -t searchPath -f macroFile -s macrosheet -m oldMacro1=newMacro1,oldMacro2=newMacro2`

---------------------------------------------

#### **nexial-artifact-repair**
This script repairs the artifacts by removing unnecessary, non-existing url links, comments from original file.
This is mostly useful when excel file has links to non existing files asking for updated everytime the user opens the file.
However, the updates fail because the target file does not exist.<br/>

This batch file only supports Nexial excel files e.g. script, plan, data, macro files.<br/>

If preview location(`-d`) is not provided, it will take backup of original file and override the original with repaired file.<br/>

##### Note 
- Maximum row and column limit to read/write data is set to `10000`. 
- Maximum row and column limit is more likely to impact on data files.
- This script will read/write data till the first empty row. Rows after first empty row is ignored.

This script has following command line options:<br/> 

|options  |explanation                                                                                          |
|---------|-----------------------------------------------------------------------------------------------------|
|**`-t`** |**[REQUIRED]** This option is to provide the path of project/starting location or file for repairing artifact.       |
|**`-d`** |**[OPTIONAL]** This option is to provide the destination path to preview repaired files without affecting original file. |

<br/>

**Example** <br/>
The following repair all files from `searchPath` and store at destinationPath.
`nexial-artifact-repair.cmd -t <searchPath> -d <destinationPath>`

---------------------------------------------

#### **nexial-custom-jar**
At times, additional 3rd-party library files (jar) might by needed in order to sufficiently perform the desired 
automation. For example, one might need to use a specialized database driver (JDBC), or vendor-specific JMS client
library. Or, perhaps one has set up a company-specific [setup.jar](#nexial-setup) to connect to company-specific 
email server or AWS account. In order for Nexial to utilize these jar files, they should be placed in 
`${user.home}/.nexial/jar` directory.

To simplify the copying of these "custom" jars, and possibly to update them periodically, this simple batch script
is created to aid in that.

Steps:
1. [ONE-TIME] Create a directory on a network shared drive. This directory should be reachable by other Nexial users on
   the network as well.
2. [ONE-TIME] Place all the custom jar files in this shared directory.
3. Each user would run the following command on his/her workstation:
   ```
   nexial-custom-jar.cmd <shared directory>
   ```
   or
   ```
   nexial-custom-jar.sh <shared directory>
   ```
4. Nexial will then copy all the jar files found in the specified shared directory to `${user.name}/.nexial/jar`. 
   Existing jar files will be overwritten.
5. When there are new jar files to distribute, simply repeat Step 2 and 3!

Note that more than 1 shared directory may be specified.

This is mostly useful when one wants to add some additional libraries, JDBC drivers, JMS clients, etc. during one's
automation. To learn more about custom jars please click [here](CustomJars).

##### Note
- Source location can be directory or file path.
- User can specify multiple source locations.

**Example** <br/>
The following will copy all files from `sourcePath` and store at `${user.home}/.nexial/jar`.

`nexial-custom-jar.cmd <sourcePath>`

For copying files from multiple location:-
`nexial-custom-jar.cmd <sourcePath1> <sourcePath2> <sourcePath3>`

---------------------------------------------

#### **nexial-temp-clean**
This script will remove the temp files created by Nexial during an execution. Note that only the temp files that are more
than 1 day old will be removed.

This script has following command line option:<br/>

|options  |explanation                                                                               |
|---------|------------------------------------------------------------------------------------------|
|**`-v`** |Turn on verbose logging.                                                                  |

<br/>

**Example** <br/>
The following will clean up directories from `TEMP` folder created during Nexial execution.<br/>
`nexial-temp-clean.cmd -v`

---------------------------------------------

#### **nexial-lib-downloader**
This script will download the additional library which is required by nexial but was not provided as part of nexial build. 
It will download library to `${user.home}/.nexial/lib/`. All other batch file has been configured to load the library from this location.

User don't need to run this script manually, this will be called when we will run any script using `nexial.cmd`/`nexial.sh`. 
Nexial will automatically decide whether it should download or not based on the configured version in `${NEXIAL_HOME}/lib/nexial-lib-version.txt`.

If you want to run this manually you can run it, you don't need to pass any command-line argument. 
<br/>

**Example** <br/>
![](image/NexialLibDownloader.png)

---------------------------------------------

<script>jQuery(document).ready(function () { newBatchFileSelect(); });</script>
