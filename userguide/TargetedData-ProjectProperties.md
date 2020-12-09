---
layout:     default
title:      Through project.properties
tags:       command data environment project.properties
parent:     Targeted Data Management
parent-url: TargetedData
level:      3
section:    User Guide
comments:   true
---


Nexial provides a mechanism to manage a set of project-level data variables - via `artifact/project.properties`. Using 
this file, one can define a set of data variables that can be used for all the artifacts in the same project structure. 
This feature helps to streamline data management and expedite script development. 


### Toggling Multiple `project.properties`
Suppose we manage environment-specific data variables in different `project.properties` files, like this:<br/>
![](image/TargetedData_Prop4.png)

Here are their respective content (shorten for brevity):<br/>
- `project.properties`
   ```
   ...
   report.year=2020
   report.limit=25
   
   # local environment
   MyTest.site.homepage=http://localhost:8080/home
   ```

- `project.DEV.properties`
   ```
   ...
   # DEV environment
   MyTest.site.homepage=http://sdcsdev01:8888/v2/home
   ```

- `project.QA.properties`
   ```
   ...
   # QA environment
   MyTest.site.homepage=http://sdcsqa02/v2/home
   ```

- `project.PROD.properties`
   ```
   ...
   # PROD environment
   MyTest.site.homepage=https://www.superduper123.com/home
   ```

As shown, each `project.properties` file contains its version of `MyTest.site.homepage`. The main idea here is to
ensure that along with the data definition in `project.properties`, the environment-specific one is loaded as well.
This means that when automating against the QA environment, we would load `project.properties` as well as 
`project.QA.properties`. Similarly, when we automate against the PROD environment, we would load `project.properties` as
well as `project.DEV.properties`, and so on.

It is paramount to note that the duplicate data variables in the same properties file mean that the last one would
supersedes those that precede. Hence we would want the environment-specific ones to be appended (and possibly override), 
as opposed to _prepended_ to `project.properties`.

As of [Release v3.6](../release/nexial-core-v3.6.changelog), Nexial supports this concept of the environment-based 
data overriding via a System variable - `nexial.env`. By specifying an appropriate value to this System variable, Nexial
will carry out the loading of these data variables - first from `project.properties` and then from 
`project.${nexial.env}.properties`. The environment-specific `project.properties` is expected to be found under the 
`artifact/` directory.

Here are a few examples.

Example 1: running `MyTestPlan1.xlsx` on `QA` (Windows) - This will first load `artifact\project.properties` and then 
`artifact\project.QA.properties`. 
```batch
cd %NEXIAL_HOME%\bin
nexial.cmd -override nexial.env=QA -plan %PROJECT_HOME%\artifact\plan\MyTestPlan1.xlsx
```

In this example, the data variables `report.year` and `report.limit` will be loaded from `artifact\project.properties` 
as `2020` and `25`, respectively. However, `MyTest.site.homepage` would hold the value `http://sdcsqa02/v2/home`, which
is derived from `artifact\project.QA.properties`.

Example 2: running `RegressionScript_152.xlsx` on DEV (*NIX) - This will first load `artifact/project.properties` and 
then `artifact/project.DEV.properties`. 
```batch
cd $NEXIAL_HOME/bin
nexial.sh -override nexial.env=DEV -script $PROJECT_HOME/artifact/script/RegressionScript_152.xlsx
```

In this example, the data variables `report.year` and `report.limit` will be loaded from `artifact/project.properties` 
as `2020` and `25`, respectively. However, `MyTest.site.homepage` would hold the value `http://sdcsdev01:8888/v2/home`, 
which is derived from `artifact\project.DEV.properties`.

Using this technique, one can device the following strategy towards data management:
1. Common data variables, such as locators, would be managed through `project.properties` file. These are the data 
   variables that would unlikely to differ based on environment (such as DEV, TEST, PRODUCTION). As such, we can 
   streamline access and management, thus improving reuse while keeping the cost of maintenance low.
2. Environment-specific data variables that are applicable across multiple scripts would be maintained in 
   `project.${nexial.env}.properties` files. Examples of such data variables would be database connectivity, API access 
   point, application web site, and client-specific test data. By keeping data variables that hold specific values based
   on environment in `project.${nexial.env}.properties` files, we gain both reusability and maintainability. By allowing
   environment-specific data variables to be maintained in separate files, we also ensure minimum project-wide impact
   when update these data variables.
3. In some cases, certain data variables might hold unique values only in 1 or 2 environments. For example, in all 
   non-PRODUCTION environment, the data variable `process.credit-card` might be set to `false`, while in PRODUCTION 
   environment we would set the same data variable as `true`. For such scenario, we can maintain this data variable in
   `project.properties` as `process.credit-card=false`, while ONLY in `project.PRODUCTION.properties` we would have
   `process.credit-card=true`. Since Nexial will **ALWAYS** load `project.properties` before loading 
   environment-specific `properties` file, this would ensure that in all non-PRODUCTION environment, the value of 
   `process.credit-card` is `false`, while in PRODUCTION environment it has the value of `true`. Once again, this is
   an effective way of improving reusability and maintainability.

-----

### Conclusion
The `project.properties` concept is an effective way to manage project-wide data variables and their respective values.
These data variables can be expressed as plain data value, referenced data variables, [functions](../functions) or 
[expressions](../expressions). Using simple scripts we can further maintain environment-specific, project-wide data 
variables with ease!
