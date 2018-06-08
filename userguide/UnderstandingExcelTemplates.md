---
layout: default
title: Understanding Nexial Test Artifact
parent: User Guide
tags: excel template
comments: true
---


Here is the hierarchy of automation, in Nexial-speak:

```text
Test Plan                                  (commonly found in {PROJECT}/artifact/plan)
+-- (1 or more) Test Script                (commonly found in {PROJECT}/artifact/script)
    +-- (1 or more) Iteration              (defined via nexial.scope.iteration System Variable)
        +-- (1 or more) Scenario           (synonymous to worksheet in test script file)
            +-- (1 or more) Activity       (a sequence of related test step)
                +-- (1 or more) Test Step  (synonymous to command, which is either an action or validation)
```

As shown above, an "Activity" is a sequence of test steps, a "Scenario" is a series of "Activity", an Iteration is a
group of "Scenarios", and so forth.  From script development perspective, one can organize at different level of
abstraction to improve readability and reusability.



### Anatomy of a Nexial Script
![](image/undaerstaindingExcel_01.png)

![](image/undaerstaindingExcel_02.png)

---------------------------------------------

### Anatomy of a Nexial Data File
![](image/undaerstaindingExcel_03.png)

---------------------------------------------

### Anatomy of a Nexial Test Plan
![](image/undaerstaindingExcel_04.png)

---------------------------------------------

### Anatomy of Nexial Output Files

#### Case Study 1: Single-Scenario Execution 
**During script design & development**:<br/>
![](image/undaerstaindingExcel_05.png)

**After execution**:<br/>
![](image/undaerstaindingExcel_06.png)

#### Case Study 2: Multi-Scenario Execution 
**During script design/ development**:<br/>
![](image/undaerstaindingExcel_07.png)

**After script execution**:<br/>
![](image/undaerstaindingExcel_08.png)

#### Case Study 3: Iteration
**During script design/ development**:<br/>
![](image/undaerstaindingExcel_09.png)

**After script execution**:<br/>
![](image/undaerstaindingExcel_10.png)

#### Use Case 4: Test Plan
**During script design/ development**:<br/>
![](image/undaerstaindingExcel_11.png)

**After script execution**:<br/>
![](image/undaerstaindingExcel_12.png)


---------------------------------------------


