---
layout: default
title: section(steps)
parent: base
tags: command base macro section
comments: true
---

### Description
Section command came into picture from the idea of having finer control over flow control across entire macro or also 
for individual macro steps. The main idea with section is to execute subsequent steps in the section depending on 
condition. This command includes set of steps that are immediately following.


### When to use and why
This command has its own purpose like other nexial commands. This command works well when one wants to modify or change 
execution flow for multiple subsequent commands as well as for subsequent steps. 

For Example,<br/>
1. In the execution of "search of all defective products", there might not be any defective products. It is not a 
   application fault so one might want to ignore all subsequent steps. Instead of writing skipIf() or proceedIf() 
   condition for all the subsequent steps which is to be ignored, write it once for entire section and add subsequent 
   steps in the section by specifying subsequent step count.
2. In same example, if there is defective product and further execution is likely to generate false-positive result, 
   wants to use failIf() condition. So, one can use SkipIf() for entire section and failIf() for some of the subsequent 
   steps where it is needed. 


### Parameters
- **steps** - this parameter specifies the number of subsequent (as in **immediately following**) commands to 
  consider in a section.


### Example:-
**Script**:<br/>
![script](image/section_01.png)

**Output**:<br/>
![Output](image/section_02.png)


### See Also
- [`macro(file,sheet,name)`](macro(file,sheet,name))
