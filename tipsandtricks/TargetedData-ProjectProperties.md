---
layout:     default
title:      Through project.properties
tags:       command tipsandtricks data environment project.properties
parent:     Targeted Test Data Management
parent-url: TargetedData
level:      3
section:    Tips and Tricks
comments:   true
---


Nexial provides a mechanism to manage a set of project-level data variables - via `artifact/project.properties`. Using 
this file, one can define a set of data variables that can be used for all the artifacts in the same project structure. 
This feature helps to streamline data management and expedite script development. 


### Toggling Multiple `project.properties`
One can consider storing environment-specific data variables in different renditions of `project.properties`. Just 
before execution, one can swap one of the `project.properties` file to create a wholesale change of data variables.

With the help of a simple batch script, one can easily swap out different rendition of `project.properties` **PRIOR** to
automation, to create a wholesale change to a set of environment-targeted data variables.


-----

### Conclusion
