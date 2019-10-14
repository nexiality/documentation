---
layout: default
title: saveSelectedValue(var,locator)
parent: web
tags: command web
comments: true
---

### Description
This command is to save the selected option value of a web `select` element to a user defined variable via `var`.
This "value" mentioned here is equivalent to the "value" attribute of the selected option of the corresponding 
`select` element identified via the specified `locator`.

**Note**: This command will store the array of selected option values from the **`multi-select`** list box. 

### Parameters

- **var** - this parameter is to store the value attribute of selected option in `select` element.
- **locator** - this parameter is the locator of the select element.

### Example
<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tab1">Single-select Element</a></li>
        <li><a href="#tab2">Multi-select Element</a></li>
    </ul>
    <div class="tab-content">
        <div id="tab1" class="tab active">
        <b>Sample HTML:</b><br/>
           <img src="image/saveSelectedSingle.png"/><br/>
        <b>Data file:</b><br/>
           <img src="image/saveSelectedValue_01.png"/><br/>
        <b>Output:</b><br/>
           <img src="image/saveSelectedValue_02.png"/><br/> 
        </div>
        <div id="tab2" class="tab" style= "display:none;">
        <b>Sample HTML:</b><br/>
           <img src="image/saveSelectedMulti.png"/><br/>
        <b>Data file:</b><br/>
           <img src="image/saveSelectedValue_03.png"/><br/>
        <b>Output:</b><br/>
           <img src="image/saveSelectedValue_04.png"/><br/> 
        </div>
    </div>
</div>

### See Also

- [`saveText(var,locator)`](saveText(var,locator))
- [`saveValue(var,locator)`](saveValue(var,locator))
- [`saveSelectedText(var,locator)`](saveSelectedText(var,locator))
