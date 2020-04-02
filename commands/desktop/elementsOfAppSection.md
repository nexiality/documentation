---
layout: default
title: Elements of 'app' section
parent: desktop
tags: elements of app section
comments: true
---


### Elements under 'app' section

```json
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

**xpath:**
- The value for this key is to provide the xpath of the application under Test.
- This is the starting point from where the initial xpath will get created for your application(**app**)

**xpathGenerationStrategy:**

```json
{
     "xpathGenerationStrategy": "USE_ALL"
}
```

- use `USE_ALL` as xpathGenerationStrategy, when it is required to find the element with `@AutomationId`, 
  `@Name`, `@ConrolType` to generate Xpath, regardless of their values.
- in other words if you are not sure how the element to be scanned by `Name` or `AutomationId` etc, if this hint is 
  provide nexial will try all the attributes.


```json
{
     "xpathGenerationStrategy": "FAVOR_AUTOMATION_ID_OVER_NAME"
}
```

-  use `FAVOR_AUTOMATION_ID_OVER_NAME` as xpathGenerationStrategy, when it is required to favor and find element with `@AutomationId`.
-  this strategy should be used when element requires the use of `@AutomationId` only if its value is not dynamic.
-  this strategy is useful when In some applications, automation id represents a dynamically generated id that cannot be reliably reused.

```json
{
     "xpathGenerationStrategy": "IGNORE_NUMERIC_AUTOMATION_ID"
}
```

- use `IGNORE_NUMERIC_AUTOMATION_ID` as `xpathGenerationStrategy`, when it is required to favor name and will 
  ignore attribute `AutomationId`.
- this `key` for strategy should be us when element requires the use only name and ignore `AutomationId`.


**componentTypeHint:**

***Ribbon***
```json
{
     "ribbon": {
        "xpath": "",
        "componentTypeHint": "Ribbon"
     }
}
```
- This is optional component and may not be required for all applications.
- needs a ribbon.json file where all the ribbon elements are configured with XY offsets or shortcut keys if available. 

***ExplorerBar***
```json
{
      "explorerBar": {
         "xpath": "",
         "componentTypeHint": "ExplorerBar"
      }
}
```
- If the target application has Explorer Bar then this key need to be defined.
- This is optional component and may not be required for all applications.

**layoutHint:**

-  **left2right** strategy:
```json
{
     "layoutHint": "left2right"
}
```

-  This section will explain about the provided hint to the element where elements need to be identified for that parent and all the element labels are aligned left to right.
-  This hint helps nexial in scanning the element which has the assigned label on the left side.
-  In other words if in your UI screen if there are elements with labels and are aligned left to right this hint will help to identify those elements.

-  **2lines** strategy: 

```json
{
     "layoutHint": "2lines"
}
```
-  This section will explain about the provided hint to the element where elements need to be identified for that parent and all the element labels are 2 lines.
-  In other words in some of the UI screen the element labels are on top of the element and not on left side.
-  In order to handle these elements a layout hint need to provided.
-  This hint helps nexial in scanning the element which has the assigned label are on the top of the element.

**extra:**

- this **optional** key is to be used to provide extra information of that component.
- this extra information is required to describe the specifications of the element, such as:
    - column headers in data grid.
    - specific characters like regular expression etc.
    - specific width of the data.
    - special cell types in data grid.
    - specific height of the column header in data grid.
    - offset positions

Lets look at all the components..

**headers**

- But in special cases such as **ControlType.List** and **ControlType.Table**. we need to define the XPATH for its header information, and the appropriate regular expression to parse its data into contextually meaningful cells.
- Generally while scanning some of the table headers has contains lot of information which takes more time to scan.
- The headers are the constant UI component of table, it is recommended to provide the extra information with all the Listed Header names of the table.
- This way the xpath would be created for table faster and table would be scanned with header.
- This is highly recommended to provide the extra header information as much as possible for **ControlType.Table** and ControlType.List having Headers.

**headerXpath**

- In some of the application it would be difficult to scan the header xpath of the table.
- In such cases it is recommended to provide the extra information along with the **table** or **List*8 component to identify the xpath of the header.
- The key headerXpath can be defined if special case where list has internally has window and has text to be identified.  
 

**dataRegex**

- This is an optional Key and should be used as need basis
- Then those regular expression values can be set to the xpath to be identified.


**dataWidths**


- This is an optional Key and should be used as need basis.
- In **list** or **table** control if there are specific dataWidths need to be provide to scan xpath of those element , then This Information need to be provided.
- This is usually the width of the data in the list.

**cellTypes**

- This is an optional Key and should be used as need basis.
- This key can be used if there are component have specific element which are dynamic in nature and gets split into multiple element e.g date element in data grid.
- for such kind of element cellTypes key can be provided to scan all child element for the same.

**headerHeight**

- This is an optional Key and should be used as need basis.
- This key can be is an extra information can be provided.
- This is a specific case where header height need to be provided to scan the element.


**clickOffsetX**

- This is an optional Key and should be used as need basis.
- This key can be is an extra information can be provided.
- This is an extra information can be provided, if there component where X offset to some value need to provided.

- There may be some situation where nexial is not able to scan the element.
- Its possible that some elements are unique or the required attributes are not present in the element.
- In such cases nexial has made the provisions where in application.json file some hints can be provided to handle those element.
- There are certain Keys for the components which can be used along with the xpath to get the accurate element.

### How Nexial *auto-scan* feature works

- nexial reads the **xpath**, defined for every component in the **application.json** and will auto-scan all the child elements under that component.
- this auto-scan gets triggered only when it finds the nexial command **useForm(name)** in the script.
- nexial creates individual json file for each component defined in application.json.
- json file will be created with the file name as mentioned in **useForm(name)**.
- nexial ignores auto-scan the form if it finds the json file if already created with that name.

### How to re-scan application.json file if modified

-  during creation of json files, sometimes its possible that files are not correctly created due to incorrect xpath or any other reason.
-  so, in order to re-scan and generate new json file, the old json file needs to be deleted.
-  remember here, we are not talking about deleting **application.json** file, but about the **\*.json** files which are created during auto-scan.
-  as a precaution, it is recommended to keep a backup of that file.
-  to make sure that the desired file is created, check for the file's created timestamp.