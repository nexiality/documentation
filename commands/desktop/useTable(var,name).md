---
layout: default
title: useTable(var,name)
parent: desktop
tags: command desktop
comments: true
---

### Description

- This command is required command to be used, if the form as table and needs to be validated.
- If data from table need to read or added/edited, the after useForm command, this command need to be called.
- This command will identify the table element in the form and per the defined table name and values of the table are stored into variable.
- The variable return by the command can be used for further verification.
- All table related commands can used once this command is used and table is identified. 

There is additional setup need to be followed to scan the element of the data grid for headers, different table or gird style  or formatted Text.\[Formatted Text are something there are inner child element gets created for each text like for date field, etc.\]

in order to handle and scan these fields, special handling is required in application.json file.Few Additional components are required to scan under table.

- `headers`  :  Provide headers of the table(basically column name of the table
- `headerHeight` : this is a special case where format of the table is different than regular table, then table height need to be provided.
- `cellTypes` : These is required to identify special elements in the table like text box masked text, date field contains.for such field, cell Type need to be provided.
- `clickOffsetX` : This offset if the   

### Parameters

- `var` - this parameter will store the return values from table element
- `name` - this parameter is the name of the table.(check the json file for the name defined)

### Example

### See Also

[`useHierTable(var,name)`](useHierTable(var,name))