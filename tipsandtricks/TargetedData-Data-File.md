---
layout: default
title: Manage Environment Impact Through Data Files
parent: Targeted Test Data Management
level: 2
tags: command tipsandtricks data environment data-file
comments: true
---


## Manage Environment Impact Through Data File

This is a continuation from [Manage Environment I/mpact Through Datasheets](TargetedData-Datashets) (exerpt below)
> The ability to load unconventional datasheets during execution gives us greater flexibility and control over the 
  automation data set. One can achieve via the `-datasheet` command line option. One can design environment-specific 
  dataset via dedicated datasheets. One can also design a "default" datasheet to maintain environment-agnostic dataset 
  (consider the `#default` datasheet for this) to further simplify the maintenance of data variables.

In continuation from [Managing Environment Impact Through Datasheets](TargetedData-Datashets), we continue to explore
other ways Nexial can help to manage environment impact. Another way is to segregate data into dedicated files. Another 
way to manage one's automation data (or test data) is by segregating environment-specific data as separate data files 
(Excel files). This means that one can design multiple data files for the same test script, and selectively elect 
one of them for automation, at the time of execution.

First, here's the example script (`artifact/script/DifferentDataFile.xlsx`):<br/>
![](image/TargetedData_datafile_01.png)

As highlighted, this simple script references 4 data variables:
- `${MyTest.BusinessName}`
- `${MyTest.BusinessOpensOn}`
- `${MyTest.BusinessStarts}`
- `${MyTest.BusinessCloses}`

The matching data file (`artifact/data/DifferentDataFile.data.xlsx`) is as follows:<br/>

![](image/TargetedData_datafile_02.png) &nbsp; ![](image/TargetedData_datafile_03.png)

No surprises here; the output prints out what we expect:<br/>
![](image/TargetedData_datafile_04.png)



By convention, Nexial resolves the effective data file by the name of the script in execution. More specifically,

```
artifact/script/[MY_SCRIPT_NAME].xlsx
```

would resolve to the effective data file as:

```
artifact/data/[MY_SCRIPT_NAME].data.x;lsx
```

By convention, Nexial looks for the [datasheet](../userguide/UnderstandingExcelTemplates#anatomy-of-a-nexial-data-file) 
that matches the scenario currently in execution. This means that: 

- When executing scenario `TestScenario` of `artifact/script/MyTest.xlsx`, Nexial will attemp to load the 
  data variables defined in the datasheet `TestScenario` of `artifact/data/MyTest.data.xlsx`.
- Regardless whether the `TestScenario` datasheet is loaded or not (perhaps it does not exist), Nexial will attempt 
  to load `#default` datasheet from the same `artifact/data/MyTest.data.xlsx` data file. This way the `#default` 
  datasheet acts as a form of "catch-all".
- As a "catch-all", the data variables defined in `#default` datasheet will be loaded **ONLY** if they are not
  defined in other datasheet. In other words, `#default` datasheet is of the _least priority_.

The above convention is Nexial's default behavior and is designed to simplify script development and straightforward 
tests. It provides a generally serviceable construct and a good starting point for individuals who are new to test 
automation or to Nexial. To see this in action, let's look at the following example. Below is a simple test scenario 
(named `TestScenario`) with 2 [base &raquo; `verbose(text)`](../commands/base/verbose(text)) commands and it 
references to 3 data variables:

1. On Row 5: `${MyTest.BusinessStarts}`
2. On Row 5: `${MyTest.BusinessCloses}`
3. On Row 6: `${MyTest.BusinessOpensOn}`

![DifferentDataFiles](image/TargetedData_01.png)

For this example, the referenced data variables are defined in the `#default` datasheet and the `TestScenario` 
datasheet:<br/>
![DifferentDataFiles.data](image/TargetedData_02.png) &nbsp; ![DifferentDataFiles.data](image/TargetedData_03.png)

When we execute this script, we can see that these 3 data variables are loaded and printed correctly on the console:<br/>
```
./nexial.sh -script $MY_PROJECT_HOME/artifact/script/DifferentDataFiles.xlsx
```

![](image/TargetedData_04.png)

Hence the "catch-all" logic is in effect where the `${MyTest.BusinessStarts}` data variable is loaded from `#default` 
datasheet (since it's not defined elsewhere).

-----

### Alter The Datasheet Loading Sequence
However, Nexial provides the ability to alter the above convention via the `-datasheets` command line option.

Suppose we have 2 other datasheets in the same data file:<br/>
![DifferentDataFiles.data](image/TargetedData_05.png) &nbsp; ![DifferentDataFiles.data](image/TargetedData_06.png)

We can specify the use of these datasheets via command line option:
```
./nexial.sh -script $MY_PROJECT_HOME/artifact/script/MyTest.xlsx -datasheets Local,QA
```

Now Nexial will not consider the data variables defined in `TestScenario`. The sequence of data variable resolution
would now be:

- load data variables defined in `#default`
- load data variables defined in `Local`, possibly overriding previously defined ones
- load data variables defined in `QA`, possibly overriding previously defined ones

**NOTE: "The lsat one WINS!"**

Since `${MyTest.BusinessStarts}` is defined in the `#default`, `Local` and `QA` datasheets, the one defined in `QA`
datasheet will take effect because `QA` datasheet is the last one to load. Now observe the execution output:<br/>

![](image/TargetedData_07.png)

The value of referenced data variables are as follows:

- `${MyTest.BusinessStarts}` --> `09:30` (from `QA` datasheet)
- `${MyTest.BusinessCloses}` --> `21:30` (from `QA` datasheet)
- `${MyTest.BusinessOpensOn}` --> `Monday, Friday, Saturday` (from `Local` datasheet)

Suppose we switch the order of the datasheets from `Local,QA` to `QA,Local`. What do you think the output would look 
like:<br/>

![](image/TargetedData_08.png)

In this case, the value of referenced data variables are as follows:

- `${MyTest.BusinessStarts}` --> `10:30` (from `Local` datasheet)
- `${MyTest.BusinessCloses}` --> `16:00` (from `Local` datasheet)
- `${MyTest.BusinessOpensOn}` --> `Monday, Friday, Saturday` (from `Local` datasheet)

-----

### Conclusion
The ability to load different datasheets during execution gives us greater flexibility and control over the automation
data set. One can design a set of datasheets, each designated to a specific environment. One can also design a "default"
datasheet that would apply to all environment (consider using `#default` datasheet for this) to simply the work of
maintaining data variables in the environment-specific datasheets.

