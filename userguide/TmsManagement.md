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
The TMS integration allows Nexial to import test cases(Scenarios) to TMS tool.This means Nexial scripts and plans can be 
imported as suites in the respective TMS project. Currently, TMS tools supported by Nexial are 
- [Azure](https://azure.microsoft.com/en-in/services/devops/)
- [Test Rail](https://www.gurock.com/testrail/)

Additionally, Nexial provides features like:
- Publishing test results to TMS test runs after execution.(`Work in Progress`)
- Close previous test runs.(`Supported for Test Rail`)

### Configuring Data Variables
1. `nexial.tms.source` - the source name of your tms tool. For example, `azure`, `testrail`.
2. `nexial.tms.url`     - url of the TMS tool.
3. `nexial.tms.username` - username only if it is needed to access TMS tool apis.
4. `nexial.tms.password` - password only if it is needed to access TMS tool apis.

### Prerequisites to import test cases
- Configure TMS details(above data variables) using [this guide](../userguide/ServiceIntegration#TMS-Integration-Setup) 
for onetime setup for TMS integration using `nexial-setup`. 
- Configure `project.tms.json` file in the `.meta` folder of project whose script to be imported.<br/>
This json requires `projectId` from the TMS tool where the scripts to be imported. `projectId` can also be project name 
depending on provided tms tool.<br/>
For example, `Azure` supports project name while `TestRail` has project id.
```json
{
  "projectId": "Clearstream"

}
```
After import of testcase to tms, this json file will be automatically updated with imported test case information like below.
```json
{
  "projectId": "Clearstream",
  "files": [
    {
      "path": "/artifact/script/clearstream.xlsx",
      "fileType": "script",
      "suiteId": "349",
      "suiteUrl": "https://dev.azure.com/Tms12/Clearstream/_apis/testplan/Plans/349",
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
          "testCase": "Codelist",
          "name": "Codelist",
          "testCaseId": "353"
        }
      ]
    }
  ]
}
```

### How to import test cases
Test cases of the project are to be imported using Nexial batch file [nexial-tms-importer.cmd|sh](./BatchFiles#nexial-tms-importer)
which requires `-script` or `-plan` and `-subplan` as a cmdline arguments for importing. 
Please do through [here](./BatchFiles#nexial-tms-importer) in detail to see all arguments supported by batch file