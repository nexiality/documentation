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
1. Manage data impact through [Data Sheets](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-data-file)
2. Manage data impact through [project.properties](../userguide/UnderstandingProjectStructure#artifactprojectproperties)
3. Manage data impact through [plan](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-test-plan)
4. Manage environment-specific execution flow
5. Environment-specific data variables and reporting


