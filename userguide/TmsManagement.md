---
layout: default
title: TMS
parent: User Guide
tags: Tms nexial userguide configuration
comments: true
---

> Nexial supports TMS(Test Management Service) Integration through the use of System Variables. By default, importing 
> test cases to particular TMS tools is not enabled.

### Setting up TMS tool
The TMS integration allows Nexial to import test cases to TMS tool. This means Nexial scripts and plans(One subplan) can be 
imported as a test suite in tms. Here, test cases in TMS are mapped to scenarios from script file. Currently, 
TMS tools supported by Nexial are:
- [Azure DevOps](https://azure.microsoft.com/en-in/services/devops/)
- [Test Rail](https://www.gurock.com/testrail/)

Additionally, Nexial provides features like:
- Publishing test results to TMS test runs after execution.(`Work in Progress`)
- Close previous test runs.(`Supported for Test Rail`)

### Configuring Data Variables
1. [`nexial.tms.source`](../systemvars/index#nexial.tms.source) - the source name of your tms tool. For example, `azure`, `testrail`.
2. [`nexial.tms.url`](../systemvars/index#nexial.tms.url)     - url of the TMS tool.
3. [`nexial.tms.username`](../systemvars/index#nexial.tms.username) - username only if it is needed to access TMS tool apis.
4. [`nexial.tms.password`](../systemvars/index#nexial.tms.password) - password only if it is needed to access TMS tool apis.


### Prerequisites to import test cases
- Configure TMS tools using above data variables using [TMS setup](../userguide/ServiceIntegration#TMS-Integration-Setup) 
for onetime setup for TMS integration using `nexial-setup`. 
- Configure `project.tms.json` file in the `.meta` folder of project whose script to be imported.<br/>
 This json requires `projectId` from the TMS tool where the scripts to be imported. `projectId` can also be project name 
 depending on provided tms tool.<br/>
 For example, `Azure DevOps` supports project name while `TestRail` has project id.

```json
{
  "projectId": "<projectId>"

}
```

After import of testcase to tms, this json file will be automatically updated with imported test case information like 
below. This json is for script file import.<br/>

```json
{
  "projectId": "<projectId>",
  "files": [
    {
      "path": "/artifact/script/myProject.xlsx",
      "fileType": "script",
      "suiteId": "349",
      "suiteUrl": "https://dev.azure.com/{organization}/{projectId}/_apis/testplan/Plans/349",
      "scenarios": [
        {
          "testCase": "Init",
          "name": "Init",
          "testCaseId": "351"
        },
        {
          "testCase": "HomePage",
          "name": "HomePage",
          "testCaseId": "352"
        },
        {
          "testCase": "SearchContent",
          "name": "SearchContent",
          "testCaseId": "353"
        }
      ]
    }
  ]
}
```

### How to import test cases
Test cases of the project are to be imported using Nexial batch file [nexial-tms-importer](./BatchFiles#nexial-tms-importer)
which requires `-script` for script or `-plan` and `-subplan` for plan import as a cmdline arguments. 
Please go through [nexial-tms-importer](./BatchFiles#nexial-tms-importer) in detail to see all arguments supported by batch file