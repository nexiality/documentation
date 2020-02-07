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


Nexial provides a mechanism to manage a set of project-level data variables - via the use of a common file named 
`project.properties`. Using this file, one can define a set of data variables that can be used for all the automation
within the same project structure. This feature helps to streamline data management and expedite script development. 
Let's see in detail how this works...


### Primer on `project.properties`
Within the standard Nexial project structure, there's a designated file under the `artifact/` folder named as 
`project.properties`. This file can be considered as the centralized, project-wide data definition file. The 
`artifact/project.properties` file is a plain text file that loosely follows the standard Java 
<a href="https://docs.oracle.com/cd/E26180_01/Platform.94/ATGProgGuide/html/s0204propertiesfileformat01.html" class="external-link" target="_nexial_link">Properties file format</a>.
Here's an example:

```properties

# company information
MyBusiness.Name=Best Discount Tire
MyBusiness.Address=1234 Roundabout Circle Drive, Suite B, Busy City
MyBusiness.OpenSince=January 14th, 1992

# user information
User.Roles=Admin,Worker,Customer,Guest
User.LoginRetries=3
User.SessionLength=60
User.SessionMillis=[NUMBER(${User.SessionLength}) => multiply(60) multiply(1000)]

```



### Toggling Multiple `artifact/project.properties`
[`artifact/project.properties`](../userguide/UnderstandingProjectStructure#artifactprojectproperties)


-----

### Conclusion
