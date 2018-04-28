---
layout: default
title: managing ribbon and explorer bar
parent: desktop
tags: managing ribbon and explorer bar
comments: true
---

### Managing Ribbon and Explorer bar for Desktop Applications

Users can manage the configuration of Login form, Ribbon icons and Explorer Bar items for their respective projects.  
The purpose of keeping these configuration files (JSON) for these components are explained here:  

**ExplorerBar.json:  
**It contains the names of the Group and the items under that group. Users can provide **EITHER** shortcut keys **OR** x,y offsets to select an item from menu.  
  
**login.json:**It contains the xpaths of the Login form for the specific Desktop application.  
  
**Ribbon.json:**  
It contains the shortcut key and x,y offsets of all the list of Icons of all the forms of each module. Users can keep **EITHER** shortcut key **OR** x,y offsets of any icon. Do not keep both.  

Note

Component names can be customized as per choice. But, it should match with corresponding josn file name for that component.

Please follow the below steps to implement this configuration in your project.  

**Step1** : Keep these json files in the project data path where application.json file is located.  

**Step2** :

In the application.json file, add the Ribbon, ExplorerBar and login components with **componentTypeHint** as explained below for each component:

- For the **Ribbon** component, keep "componentTypeHint": "Ribbon"
- For the **ExplorerBar** component, keep "componentTypeHint": "ExplorerBar"