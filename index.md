---
layout: default
title: Nexial Automation
---


## Nexial Automation

#### Test Automation Platform for _Everyone_!

<img src="image/logo-x.png" alt="Nexial" style="box-shadow:none"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="image/nexial-caption.png" alt="Test Automation Platform for Everyone" style="box-shadow:none"/>

The name reflects our desire and intention to perfect the "art" and "science" of Software Testing and the promotion of 
Quality Artisan.  As professional Quality Advocates, we are all _nexialists_ - we see links in the disconnected and 
synergy in the seemingly independent, and draw from such new ideas/solutions.

The main motivation of Nexial is to provide a set of capabilities to automate software testing.  
Here are some of the core design considerations for this platform:

- ***Test automation for everyone*** - no coding required (but supported), simple and 
  relevant to all project participants
- Hybrid, Keyword-driven and standards-based; simple/familiar spreadsheet (Excel) interface
- Supports many application architecture and interface - web (browser), desktop, API/REST/SOAP, database, batch, ssh
- Extensive and flexible test and data management
- Local and remote (Jenkins, BrowserStack) support
- Integration to existing collaboration tools such as JIRA and Confluence
- Supports FRIP (functional, regression, integration, performance testing)

---------------------------------------------

#### Nexial in Action
To see Nexial in action, watch this short demo showcasing how Nexial 
1. performs a few Google searches (browser automation), 
2. uses one of the search results to invoke a few REST API calls (API automation),
3. bulk generates a series of SQL INSERT statements (text manipulation via Nexial expression),
4. stores API responses and Google search stats into database (database automation, with sqlite),
5. finally, performs a few simple data analytical queries and reports (database automation, Nexial expression). 

[Nexial in Action](https://www.youtube.com/watch?v=b372XikN1YU)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/b372XikN1YU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Wanna try? Have at it!
1. Download [Nexial distro](https://github.com/nexiality/nexial-core/releases)
2. Follow the [installation guide](https://nexiality.github.io/documentation/userguide/InstallingNexial) (most steps are one-time work)
3. Download the ["nexial-in-action" project](nexial-in-action.zip) and unzip to local directory
4. Run it:
   Mac/Linux:
	```
	cd <NEXIAL_HOME>/bin
	./nexial.sh -plan <MY_NEXIAL_IN_ACTION_PROJECT>/artifact/plan/demo1-plan.xlsx
	```
	
   Windows:
   ```
	cd <NEXIAL_HOME>\bin
	nexial.cmd -plan <MY_NEXIAL_IN_ACTION_PROJECT>\artifact\plan\demo1-plan.xlsx
   ```

---------------------------------------------

For better understanding of Nexial, check out the **[Introduction](userguide/IntroductionAndFAQ)** page.

---------------------------------------------

<div class="quick_link"><a href="userguide">User Guide</a></div>
<div class="quick_link"><a href="commands">Command Reference</a></div>
<div class="quick_link"><a href="systemvars">System Variables</a></div>
<div class="quick_link"><a href="flowcontrols">Flow Controls</a></div>

<div style="clear:both" />

<div class="quick_link"><a href="functions">Built-in Functions</a></div>
<div class="quick_link"><a href="expressions">Expressions</a></div>
<div class="quick_link"><a href="jsonpath">Jsonpath</a></div>
<div class="quick_link"><a href="tipsandtricks">Tips and Tricks</a></div>

<div style="clear:both" />


<div class="quick_link"><a href="release">Release Notes</a></div>

<div style="clear:both" />

---------------------------------------------

