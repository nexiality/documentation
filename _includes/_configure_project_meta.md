**Configure Project Meta File**:-<br/>
Configure `project.tms.json` file in the `.meta` folder of project whose script to be imported.
This json requires `projectId` from the TMS tool where the scripts to be imported. 
`projectId` can also be project name depending on provided tms tool.<br/>
![](../image/TMS_Setup_01.png)

**Import Testcases**:-<br/>
Test cases of the project are to be imported using Nexial batch file [nexial-tms-importer](./BatchFiles#nexial-tms-importer)
After importing testcases to tms tool, `project.tms.json` json file will be automatically updated with imported test 
case data like below. This json is for script file import for reference only.<br/>
 
 For example, `project.tms.json` should look like this after import,<br/>
 ![](../image/TMS_Setup_02.png)

 