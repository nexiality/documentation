---
layout:     default
title:      Through Plan
tags:       command tipsandtricks data environment plan test-plan
parent:     Targeted Test Data Management
parent-url: TargetedData
level:      3
section:    Tips and Tricks
comments:   true
---


Nexial provides a mechanism to execute multiple scripts, either in succession or in sequence through the use of
[test plan](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-test-plan). A test plan organizes the order 
of executions across multiple scripts, even those in different projects (i.e. different project directories). In 
addition, one can associate different data files and datasheets per script execution, making the test plan a powerful 
tool to create elaborate and dynamic automation. Let's see this in more details.


### Dealing with Multiple Script and Data
Suppose we have the following test plan (`arifact/plan/TestPlan.xlsx):<br/>
![](image/TargetedData_Plan1.png)<br/>

As specified, this test plan references 2 scripts: `PlanControl1` and `PlanControl2`. Consistent with 
Nexial's design, the script locations are automatically resolved based on convention. Furthermore the reference to
data file is subsequently inferred as `artifact/data/PlanControl1.data.xlsx` and `artifact/data/PlanControl2.data.xlsx` 
respectively. One could draw up a project directory as something like this:

 
this means that:
1. `artifact/plan/TestPlan.xlsx` references its first script as `artifact/script/PlanControl1.xlsx`. 


![](image/TargetedData_Plan2.png)<br/>
![](image/TargetedData_Plan3.png)<br/>
![](image/TargetedData_Plan4.png)<br/>
![](image/TargetedData_Plan5.png)<br/>

It is not uncommon to run multiple scripts consecutively.

-----

### Applying Matching Data File

-----

### Conclusion
