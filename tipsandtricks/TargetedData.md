---
layout: default
title: Targeted Test Data Management
parent: Tips and Tricks
tags: command tipsandtricks data test environment
comments: true
---

## Introduction
Often in testing, one comes across the need to support multiple environments (e.g. DEV, QA, UAT, PROD). These 
environments create segregated landscapes to serve different focus throughout the product delivery lifecycle. The
so-called "lower" environments, such as DEV or QA, are purposed to support the early phases of application development, 
integration and testing, while the "higher" ones (e.g. UAT) focus on the end-user experience and end-to-end workflow.
While the target application(s) (a.k.a. _application under test_) could be the same instance across these environments,
the application data and supporting configuration might differ greatly. For example, each environment could differ in
terms of:
1. connectivity to external services and components, such as databases, messaging services, integration endpoints.
2. user credentials and roles
3. business rule data and configuration

These environmental differences can bring about an additional layer of complexity in terms of test automation. Ideally,
applying test automation across these environments should result in minimum impact to the automation artifacts. 
Furthermore, if changes are needed, they should be easy to manage and isolated to each environment. Nexial provides a
few different strategies of handling environment-specific differences, aiming to minimize, isolate and simplify such
impact:
1. Manage data impact through [Datasheets](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-data-file)
2. Manage data impact through [project.properties](../userguide/UnderstandingProjectStructure#artifactprojectproperties)
3. Manage data impact through [plan](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-test-plan)
4. Manage environment-specific execution flow
5. Environment-specific data variables and reporting


### Manage Data Impact Through Datasheets
Nexial provides the ability to change the use of a datasheet during execution. By convention, Nexial looks for the 
datasheet that matches the scenario currently in execution. More specifically, 
- When executing scenario (worksheet) `TestScenario` of `artifact/script/MyTest.xlsx`, Nexial will attemp to load the 
  data variables found in the datasheet (worksheet) `TestScenario` of `artifact/data/MyTest.data.xlsx`. 
- When the datasheet (worksheet) `TestScenario` is not found in `artifact/data/MyTest.data.xlsx`, the datasheet 
  (worksheet) `#default` will be load instead as a form of "catch all".

This convention is the default behavior and is designed to simplify script development and straightforward tests. It
gives a generally serviceable construct, especially for individuals who are newer to test automation or to Nexial. 
However, Nexial provides the ability to override this convention via the `-datasheets` command line options.
 
 
 
 For example,
```shell script
cd $NEXIAL_HOME/bin
./nexial.sh -script $MY_PROJECT_HOME/artifact/script/MyTest.xlsx -datasheets Local,QA
```

