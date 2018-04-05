---
title: nexial-core 1.1 (2018-05-??)
parent: release
tags: release nexial-core 1.1
comments: true
---


### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.1" class="external-link" target="_nexial_target">Release 1.1</a>
2018-05-??


##### Please Note
If you have test scripts created in Sentry, be sure to `bin/sentry2nexial.cmd` script for your project **PRIOR** to 
using with Nexial.


#### General
- upgrade to kotlin 1.2.31
- add check to NexialS3Helper to ensure required properties are set before use
- any "output to cloud" procedure could fail-fast due to improper/missing S3 connectivity details.
- fixed bad reflection class in WebSphereMQJmsClientConfig.  Both BeanUtils and MethodUtils failed since they mistakenly took the MQConnectionFactory as a Map instance.
- Expression defaults to using scale of 25 (i.e. 25 decimal places) when dealing with double.  Currently applied to LIST and NUMBER.
- Expression defaults to rounding "up" when dealing with double.  Currently applied to LIST and NUMBER.
- fixed NUMBER expression when dealing with whole number.  Previous implementation converts whole number to decimal number, but this is now fixed.
- reduce log verbosity for 3rd-party library
- added/fixed multiple unit tests

