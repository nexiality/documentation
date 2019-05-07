---
layout: default
title: Nexial Automation
---

<style>
#nexial-automation { padding: 5px 0; margin-bottom: 35px; }

.top-link { font-size: 9pt !important; margin-bottom: 20px; padding: 0 0 0 30px !important; vertical-align: middle; }
.top-link a { background: none !important; color: #5d8540; font-weight: bold; }
.top-link img { border: none; box-shadow: none !important; width: 32px; margin: 5px !important; vertical-align: bottom; }
</style>

<h2 id="nexial-automation">
Nexial Automation
<span class="top-link">
<a href="https://github.com/nexiality/nexial-core/releases"><img src="image/download.png">Download</a> &nbsp;&nbsp;
<a href="https://github.com/nexiality/nexial-core/"><img src="image/github.jpg">Fork to GitHub</a> &nbsp;&nbsp;
<a href="http://localhost:4000/userguide/InstallingNexial"><img src="image/install-manual-icon.png">Installation Guide</a>
</span>
<br/>
</h2>

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
- Extensible and flexible test and data management
- Local and remote (Jenkins, BrowserStack) support
- Integration to existing collaboration tools such as JIRA and Confluence
- Supports F.R.I.P. (functional, regression, integration, performance testing)

---------------------------------------------

## Nexial in Action
To see Nexial in action, watch this short demo showcasing how Nexial 
1. performs a few Google searches (browser automation), 
2. uses one of the search results to invoke a few REST API calls (API automation),
3. bulk generates a series of SQL INSERT statements (text manipulation via Nexial expression),
4. stores API responses and Google search stats into database (database automation, with sqlite),
5. finally, performs a few simple data analytical queries and reports (database automation, Nexial expression). 

[Nexial in Action](https://www.youtube.com/watch?v=b372XikN1YU&cc_lang_pref=en&cc_load_policy=1)

<iframe width="560" height="555" src="https://www.youtube-nocookie.com/embed/b372XikN1YU?cc_lang_pref=en&cc_load_policy=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Wanna try? Have at it!
1. Download [Nexial distro](https://github.com/nexiality/nexial-core/releases)
2. Follow the [installation guide](https://nexiality.github.io/documentation/userguide/InstallingNexial) (most steps are one-time work)
3. Download the ["nexial-in-action" project](nexial-in-action.zip) and unzip to local directory
4. Run it:<br/>
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

<div align="center">

<div class="sponsor">
    <img src="image/browserstack/Browserstack-logo@2x.png"
        style="box-shadow:none; padding:10px 15px 10px; width:150px;" align="left"/>
    <div class="description">
        Nexial Automation enables test automation with <a href="http://browserstack.com" class="external-link" 
        target="_nexial_link">BrowserStack</a>
    </div>
</div>

<br/>

<div class="sponsor">
    <img src="image/cbt/CrossBrowserTesting-logo-small.png" style="box-shadow:none; padding:0 15px 0;" align="center"/>
    <br/>
    <div class="description" style="padding:2px 5px 20px 5px;text-align:center;">
        Nexial Automation enables test automation with <a href="http://crossbrowsertesting.com" class="external-link" 
        target="_nexial_link">CrossBrowserTesting</a>
    </div>
</div>

</div>
