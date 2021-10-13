---
layout: default
title: Test Management Service
parent: User Guide
tags: Tms nexial userguide configuration
comments: true
---

> Nexial supports TMS(Test Management Service) Integration through the use of System Variables. By default, importing 
> test cases to particular TMS tools is not enabled.

### TMS Integration
Test Management Service is managing test process in more efficient way and improving productivity through
managing and tracking bugs, collaborating test cases with team and automated build and deployment of code. Test
Management tool is software used to manage test cases. Nexial supports few of such widely known tools for 
Test Management. For example `Azure DevOps`, `TestRail`, `JIRA` etc. In future, Nexial might support other well 
known tools depending on requirement.

The TMS integration allows Nexial to import test cases to supported TMS tools. This means Nexial scripts and subplan
can be imported as a test suite in tms.

**Note**:: <br/>
Even though mapping depends on each individual tool, Nexial Test Artifact mapped to TMS tool mainly like below,<br/>
- *Script/Plan* => Test Suite/Test Plan<br/>
- *Scenarios*   => Test cases<br/>

As of now, TMS tools supported by Nexial are:
- [Azure DevOps](https://azure.microsoft.com/en-in/services/devops/)
- [TestRail](https://www.gurock.com/testrail/)

Additionally, Nexial provides features like:
- Publishing test results to TMS test runs after execution.(`Work in Progress`)
- Close previous test runs.(`Supported for Test Rail`)

### Configuring Data Variables
1. [`nexial.tms.source`](../systemvars/index#nexial.tms.source) - the source name of your tms tool. For example, `azure`, `testrail` etc.
2. [`nexial.tms.url`](../systemvars/index#nexial.tms.url) - url of the TMS tool.
3. [`nexial.tms.username`](../systemvars/index#nexial.tms.username) - username only if it is needed to access TMS tool apis.
4. [`nexial.tms.password`](../systemvars/index#nexial.tms.password) - password only if it is needed to access TMS tool apis.

Configure TMS tools using above data variables using [TMS setup](../userguide/ServiceIntegration#tms-integration-setup) 
onetime setup for TMS integration using `nexial-setup`.<br/>
To learn more in detail, please go through individual tool setup documentation provided [here](#supported-tms-tools)

### Prerequisites to import test cases
{% include _configure_project_meta.md %}

### Supported TMS tools
Following TMS tools are supported by Nexial as of now. Please go through each TMS tools setup in details.
- [Azure DevOps](../userguide/AzureDevOpsSetup)
- [TestRail](../userguide/TestRailSetup)
