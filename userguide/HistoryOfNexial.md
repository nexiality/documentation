---
layout: default
title: History of Nexial
parent: User Guide
tags: command history
comments: true
---


### Before Nexial, There was Sentry
_How did we get here?_  To answer that, we need to take a quick trip down memory lane.
<a href="https://github.com/mikeliucc" class="external-link" target="_nexial_target">Mike</a> had just
joined <a href="https://www.ep.com" class="external-link" target="_nexial_target">Entertainment Partners (or EP)</a> in 
mid-2016, and soon realized the unique opportunity for an unified test automation strategy there.  Being an 
established company, EP has the need to maintain a variety of software - some based on the more traditional 
architecture, while some on modern technology stacks.  These software led to a divergence in approaches towards software 
validation.  Along with that, there was also a variety of third-party tools to aid the task of software testing. 
These resulted in an overall test strategy at EP that is fragmented and ineffective:
1. Quality engineers need to learn different tools and techniques for different application testing.  Many of these
   tools require programming skill, which is not always readily available to the QA community at EP.
2. Quality engineers (and partly management as well) need to work with a variety of vendors for licensing, 
   support and feature requests.  The compound TCO's of these vendor tools is very costly.
3. Quality engineers need to come up with ways of integrating the various test approaches to conduct integration or
   end-to-end testing.  This is often painful and error-prone, and more often than not, completely manual.

Realizing that there is perhaps another way, Mike set out to create a prototype that would address, at least in parts,
some of the problems the QA community at EP had faced.  The initial design impetus of this prototype was 
straightforward:
1. An unified and simple interface to maintain and execute test.
2. Separate management of test script, test data and test plan.
3. No programming required.
4. Support a variety of testing (Database, API, Web, Desktop, etc.).

Building a full fetch UI would took too much time, so it was decided early on to use Excel spreadsheet as the main
interface to manage test artifacts.  By the same token, the execution output/reports are also generated as Excel 
spreadsheets.  Execution of test script or test plan (multiple scripts) would be done via command line (console). 
Behind the scene, there would be hooks into various open source tools, such as Selenium, to perform the actual 
automation.  A tool like this would simplify the process of test automation, and allow quality engineers to focus on 
software testing and collaboration (such as end-to-end testing).  Not an easy feat, for sure.  But in many ways, this 
is exactly what EP needs.

After a few weeks of sleepless nights, _Sentry_ was born (around November 2016). Unbeknown at the time of selecting 
project name, "Sentry" was too popular and confusing a name.  Later we decided to change Sentry to Nexial (more on 
this later).


### Baby Steps, and Then a Giant Leap
The initial capability of Sentry was to support Desktop Automation (on Windows), which was one of the most
challenging issue for EP QA at that time.  Sentry started out small.  With the help of 1 QA resource, we slowly built 
out a series of proofs that Desktop Automation was possible with Sentry.  There were various hurdles to overcome. The 
progress was slow but encouraging.

Soon new capabilities were added to Sentry.  Besides Desktop Automation, Sentry started to demonstrate capabilities 
around Web Automation (via Selenium), Database Automation and API Automation.  Both through management and word of 
mouth, Sentry slowly started to gain traction with other teams.  Mike's manager, JJ (VP of Quality) was a hugh 
supporter and promoter of Sentry.  Mike started to host internal webinars and impromptu demos, and the Sentry 
development team (we had 2-3 developers at that time) began to development additional automation capabilities.

By June 2017, Sentry adoption had grew from its initial 1 QA resource to 6 scrum teams (in varying capacity).  By
September 2017, 10 scrum teams were actively using Sentry for their test automation.  We moved into a monthly release 
cadence for Sentry.  Meanwhile we continued to add more capabilities and features, and more teams kept showing up with 
interest to learn and use Sentry.  


### Time to Spread 'Em Wings and Fly
As Sentry adoption continued its growth at EP, we begun discussing about its future and the support model to sustain
its momentum.  Two words came to the focal point: Relevance and Sustainability.  In order for Sentry to remain useful, 
it needs to continue meaningful, effective capabilities towards test automation.  It became apparent that releasing 
Sentry as an open source project could be the way to go.  Not only that we would benefit others - as it did at EP - but
the open source community could collaborate with us to improve Sentry.  Understanding how others outside of EP could 
use Sentry would ultimately help us to extend and mature Sentry as a test automation platform.

Around the end of 2017, Mike drafted a proposal o EP's Management to open source Sentry, and in November 2017 it was 
approved!  However we couldn't release it as "Sentry" since it is so widely used within the open source community. So 
we decided to set up a contest within the QA community at EP for a new name.  Among the 30+ names submitted, "Nexial" 
(submitted by Myron Chen) received the highest number of votes.  This is the new name for Sentry -- this is its open 
source name.


### So Long Sentry, Hello Nexial!
The next few months put the Sentry development in high gear to prepare Nexial for open source while support Sentry at 
EP.  Most of the time was spent on converting our internal Sentry documentation from Confluence to GitHub Pages. There
is also a parallel effort to improve the existing documentation with more details and examples.

April 2018 we finally see Nexial moved to GitHub as an open source project.  It's been an exciting journey to see how
our ideas and collaborations came to be, and the impact it has thus far.

Deepest thanks to the Management team at EP, to JJ, to Nexial dev team (Nagesh, Dhana and Akshay), and all the great
Quality engineers at EP that patiently worked with us for last 16 or so months!  We wouldn't have gotten this far if
it won't for your relentless effort!


### Transformational Hope
Nexial (or Sentry) is really more than just an automation tool.  It is a platform where everyone collaborate together to
discover, to improve and to contribute towards software quality.  Since no coding is required (but supported), just 
about anyone can contribute in some ways towards test automation.  It gives Quality engineers - especially those not
verse in coding - equal footing towards test automation.  Instead of relying on someone to conduct the automation (and
they dictate the test scenario), now they can step out and control their own path.


