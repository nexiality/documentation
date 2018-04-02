---
layout: default
title: useForm(formName)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command must be called before performing calling any method to perform action on the element of the desired form.
- In other words to you want to click any element on the form, make sure to call this method once before calling the desired methods.
- Also this command will work if the name passed as input parameters  are mapped in application.json file.Please navigate back to desktop main page to know more about application.json. file.
- If the input parameter name is not defined in application.json file, the command will fail with error
- If this method is used and proper name is defined and mapped in application json file, with correct xpath of the form, the method will pass
- One more point when you called this command for very first time with the form name mapped, it create a a new json file at the same location with the prefixed form name.  
      
    

### Parameters

- **formName** - the name defined for the form in application.json at the json location under your data folder.

### Example

### See Also
