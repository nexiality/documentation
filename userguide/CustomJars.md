---
layout: default
title: Custom Jars
parent: User Guide
tags: command userguide batch cmd sh
comments: true
---


## Introduction
Sometimes, Nexial automation tests require some custom jars which are not available during execution. Nexial user can 
simply provide those jars to `${NEXIAL_HOME}/lib` directory or Nexial user can also provide new custom jars in the 
`${user.home}/.nexial/jar` which will be loaded during execution itself. 

For example, Nexial supports databases like db2, mssql, oracle, mysql and many more. If user wants to connect to other 
databases which are not available in Nexial, user can provide required db driver and any other necessary jars in 
${user.home}/.nexial/jar`. So Nexial will load these jars during script or plan execution. For more details, see 
[database connection](../commands/rdbms/dbConnectionSetup).

User can provide any kind of jars such as JMS jars, custom jars created by user which are not there in 
`${NEXIAL_HOME}/lib` but required for the Nexial test cases.

Nexial also provides functionality to copy the custom jars to `${user.home}/.nexial/jar`. For more details, please go
through [bin/nexial-custom-jar](BatchFiles#nexial-custom-jar).