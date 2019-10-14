---
layout: default
title: saveSelectedText(var,locator)
parent: web
tags: command web
comments: true
---

### Description

This command will get the selected text in a web `select` element identified via the specified `locator` and
store to user defined variable specified via `var`.

**Note**: This command will store the array of selected text from the **`multi-select`** list box.

### Parameters

- **var** - this parameter is to store the value into variable.
- **locator** - this parameter is locator(xpath) of the element.

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
           <img src="image/saveSelectedText_01.png"/><br/>
        <b>Output:</b><br/>
           <img src="image/saveSelectedText_02.png"/><br/> 
        </div>
        <div id="tab2" class="tab" style= "display:none;">
        <b>Sample HTML:</b><br/>
           <img src="image/saveSelectedMulti.png"/><br/>
        <b>Data file:</b><br/>
           <img src="image/saveSelectedText_03.png"/><br/>
        <b>Output:</b><br/>
           <img src="image/saveSelectedText_04.png"/><br/> 
        </div>
    </div>
</div>

### See Also

- [`saveText(var,locator)`](saveText(var,locator))
- [`saveValue(var,locator)`](saveValue(var,locator))
- [`saveSelectedValue(var,locator)`](saveSelectedValue(var,locator))
