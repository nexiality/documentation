---
layout: default
title: Azure DevOps Setup
parent: User Guide
tags: azure devops ADO setup service integration userguide
comments: true
---


### Overview
Azure DevOps is a service provided by Microsoft which provides support to teams to plan work, collaborate on code
development, build and deploy applications. This tool automates CI/CD process and supports automatic builds and 
code projects to make them available to others. It also provides Test Management service required for planned testing,
user acceptance testing, exploratory testing. Please go through [**Azure DevOps Test plan**](https://docs.microsoft.com/en-in/azure/devops/test/overview?view=azure-devops)
documentation to learn more.

Nexial supports Test management using `Azure DevOps Test Plan` Service in which user can import testcases created by
Nexial user as a part of script and subplan.

### HOW to Import Test cases in Azure DevOps
Importing test cases to Azure DevOps includes following steps:-
1. Prerequisite configuration to access Azure DevOps.
2. Configure Azure DevOps using Nexial Data Variables to access Azure DevOps through apis.
3. Configure project meta file to access particular project from Azure DevOps.
4. Import testcases using Nexial batch file [nexial-tms-importer](./BatchFiles#nexial-tms-importer).

**Prerequisite Configuration on Azure DevOps**:-<br/>
User need to have proper subscription plan and provide proper permissions to user to access Azure DevOps using APIs.
- Firstly, Azure DevOps needs to have **Basic + Test Plan** subscription to utilize `Test Plan` service in general.<br/>
![](image/AzureDevOpsSetup_01.png)<br/>
- User should have **Basic + Test Plan** level access to utilize `Test Plan` fully.<br/>
![](image/AzureDevOpsSetup_02.png)<br/>
- Generate PAT(Personal Access Token) to access Azure DevOps. Please go through docs to see 
[How to Generate PAT](https://docs.microsoft.com/en-us/azure/devops/organizations/account) in detail.<br/>
![](image/AzureDevOpsSetup_03.png)<br/>
- Create personal access token with expiry date.
![](image/AzureDevOpsSetup_04.png)<br/>


**Configure Using Data Variables**:-<br/>
- User should specify tms source tool to import testcases. In this case, it must be **azure**
- Azure devOps requires url till organization name only. e.g. `https://dev.azure.com/<organization name>/`.
- Azure DevOps doesn't require any username to access Azure devOps.
- Azure DevOps provides alternate password as PAT(Personal Access Token) to access Azure DevOps. 

~~~
# values are for azure devops for reference except source name
nexial.tms.source=azure
nexial.tms.url=https://dev.azure.com/AzureOrganization
nexial.tms.username=
nexial.tms.password=4hsg6n5bb5n56ahixmdu7suoah65kk6bro3yu3rokcqhee5u5
~~~

User needs to provide above credentials to access Azure DevOps through Nexial variables using one-time setup, you can
provide Azure integration configuration details once and build `setup.jar` using [`nexial-setup.cmd`](BatchFiles#nexial-setup) 
or [`nexial-setup.sh`](BatchFiles#nexial-setup).

{% include _configure_project_meta.md %}
**Note : `projectId` is the name of project in the Azure DevOps.**

### See Also
- [TestRail](TestRailSetup)
- [Tms Management](TmsManagement)
