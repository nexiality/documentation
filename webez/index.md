---
layout: webez
title: Nexial WebEZ
level: 1
tags: WebEZ locators inspection web automation
comments: true
---

## Introduction

> ##### TL;DR For the impatient, scroll down to [WebEZ in Action](#webez-in-action) to see a short demo!

**Nexial WebEZ** [`/ wɛb ˈi zi /`] is a Chrome browser extension designed to expedite Web automation, especially (but 
not limited to) with the use of [Nexial Automation](/index.html). The main objectives of this tool are:
- To speed up the tasks of associating Web elements to a [Web commands](../commands/web/index.html#available-commands),
- To easily create (and edit) a basic Nexial-based, Web automation script for the purpose of Web automation,
- To learn about Web automation,
- To learn about Nexial Automation Platform,
- To learn about the Web application you are targeting for automation

It is, however, **NOT**:
- a record-and-playback application. _They 
  <a href="https://testsigma.com/blog/why-is-record-and-playback-not-suitable-for-enterprise-class-test-automation/" class="external-link" target="_nexial_link">don't really work anyways</a>_ (
  read more <a href="https://techbeacon.com/app-dev-testing/record-playback-test-automation-harmful" class="external-link" target="_nexial_link">here</a> and 
  <a href="https://www.cio.com/article/3077286/record-playback-automation-its-a-trap.html" class="external-link" target="_nexial_link">here</a>) 
- a debugger or web page profiler. Profiler is an important part of web page performance analysis. Nexial provides
  [some capabilities around this](../commands/web/index.html#browser-performance-metrics). Lighthouse is another great 
  tool in this space.
- a full-fledged script editor.

With Nexial WebEZ, one can create a "Web automation ready" script in a reasonably short amount of time. With less time 
spent on figuring out locators and the commands to use, one can focus on Testing and Quality-related concerns.
This aligns well to the mission of [Nexial Automation](/index.html), which is to accelerate Testing and the advancement 
of Quality Engineering. 

So what does this Nexial WebEZ look like? Let's have a look!


## WebEZ in Action

<iframe width="820" height="555" src="https://www.youtube-nocookie.com/embed/vI7RcMbF95s?cc_lang_pref=en&cc_load_policy=1"
frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
[View it on Youtube](https://www.youtube.com/watch?v=vI7RcMbF95s&cc_lang_pref=en&cc_load_policy=1)


## Features
Here are the features that WebEZ currently supports. New functionality will be added from time to time! Please feel free
to <a href="https://github.com/nexiality/nexial-webeasy/issues/new?assignees=&labels=&template=feature_request.md" class="external-link" target="_nexial_link">suggest new features on GitHub!</a>

- **Inspect** either current web page or on a specified URL
- Inspection includes both **user interaction** and **element assertion** (assert and wait-for)
- Captured inspections are converted into appropriate commands and steps
- Captured steps can be re-ordered, removed, edited, and duplicated
- Easy to copy the generated step to a Nexial script 
- [On-Page Locator Inspection](ShowLocator), can be launched via context menu


## How do I get it?!
WebEZ chrome extension is <a href="https://chrome.google.com/webstore/search/Nexial%20WebEZ" class="external-link" target="_nexial_link">
available on Chrome Web Store</a>. Follow the link to download.

For the latest (possibly not yet published on Google Web Store) version of Nexial WebEZ, follow these steps:
1. Download [nexial-webez-v0.9.0.zip](./nexial-webez-v0.9.0.zip) and save it locally.
2. Unzip the download zip to a local directory, say, `C:\temp\nexial\webez`
3. Open a new tab on your Chrome browser to `chrome://extensions/`.
4. Make sure the "Developer mode" (near top-right corner of the Extensions page) is turned on.
5. Click on the "Load unpacked" button near the top of the Extensions page.
6. Navigate to the directory where the extension has been unzipped. Click "Select Folder" to select the folder.
7. The Nexial WebEZ extension is now installed.
8. Click on the "Details" button to enable "Allow in Incognito".


## Your Feedback, please!
We'd love to hear your feedback. Find us on <a href="https://github.com/nexiality/nexial-webeasy" class="external-link" target="_nexial_link">GitHub</a>.
While you are there, do give us a star or <a href="https://github.com/nexiality/nexial-webeasy/issues/new/choose" class="external-link" target="_nexial_link">submit an issue</a>.


 
