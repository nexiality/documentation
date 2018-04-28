---
layout: default
title: Configure Desktop Application
parent: desktop
tags: configure desktop application
comments: true
---


### Configure Desktop Application

In order to achieve the desktop automation, it is required to describe and configure the desktop components, in a JSON document **(application.json)**. Use this file to define the configuration for all the desktop components.

- Nexial uses this **application.json** file to execute the AUT and run the desktop automation tasks. 
- During the execution, Nexial automatically **scans** and generates a repository of all the UI elements under each component.
- This ***auto-scan*** feature, stores the elements repository in a JSON document for each component.

**Let us understand application.json and its components.**
- There are 3 main sections in **application.json** file:
    - **aut**
    - **timeout values**
    - **app**

Here are the few links on the web to learn about JSON and XPath:

- <a href="http://www.w3schools.com/js/js_json_intro.asp" class="external-link" target="_nexial_target">http://www.w3schools.com/js/js_json_intro.asp</a>
- <a href="https://www.w3schools.com/xml/xpath_intro.asp" class="external-link" target="_nexial_target">https://www.w3schools.com/xml/xpath_intro.asp</a>


### Elements under 'aut' section

```json
{
    "aut": {
        "path": "",
        "exe": "",
        "args": "",
        "dotnetConfig": "",
        "terminateExisting": true,
        "workingDirectory": "",
        "runFromWorkingDirectory": true
    }
}
```

Click [here](elementsOfAutSection) for understanding the elements of '**aut**' section


### Elements under 'timeout values'
```json
{
    "defaultWaitMs" : 500,
    "appStartupWaitMs" : 1000
}
```

- **defaultWaitMs:**

- The value for this key is the time in milliseconds to set the default wait time through the application test execution
- This key is optional and can be ignored if no default value need to set

- **appStartupWaitMs:**

- This value is the key to set the time in milliseconds to wait till application is launched and visible on the screen.
- This key is optional and can be ignored if no app startup wait time value need to set.


### Elements under 'app' component

All the desktop components are configured under **components** element under **app**.

```josn
{
  "app": {
    "xpath": "",
    "xpathGenerationStrategy": "",
    "components": {
        "componentOne": {
            "xpath": "",
            "componentTypeHint": "",
            "layoutHint":"",
            "extra": {
                "headers": "",
                "headerXpath": "",
                "dataRegex": "",
                "dataWidths": "",
                "cellTypes": "",
                "headerHeight": "",
                "clickOffsetX": ""
            }
        },
        "componentTwo": {
            "xpath": "",
            "componentTypeHint": "",
            "layoutHint":"",
            "extra": {
                "headers": "",
                "headerXpath": "",
                "dataRegex": "",
                "dataWidths": "",
                "cellTypes": "",
                "headerHeight": "",
                "clickOffsetX": ""
            }
        }
     }
  }
}
```

Click [here](elementsOfAppSection) for understanding the elements of '**app**' section.


