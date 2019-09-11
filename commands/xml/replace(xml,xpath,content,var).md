---
layout: default
title: replace(xml,xpath,content,var)
parent: xml
tags: command xml append xpath
comments: true
---


### Description
This command search against specified `xml` via `xpath`, and replace `content` against all matching instances. The final 
(modified) XML is then stored in a data variable specified as `var`. Note that this command replaces the matching 
XML nodes, not the content of those match nodes.<br/>
If `xpath` refers to attribute of `xml`, it will replace name of all matching attributes with specified `content`.

{% include_relative xpath_and_content.md %}


### Parameters
- **xml** - the XML document or file
- **xpath** - the XPATH to specify the target area of impact
- **content** - the content to replace, may be text content, attribute value or well formed XML snippet
- **var** - the variable name to store the beautified content.


### Example
Script:<br/>
![script](image/replace_01.png)

Output:<br/>
![](image/replace_02.png)

![](image/replace_03.png)


### See Also
- [`append(xml,xpath,content,var)`](append(xml,xpath,content,var))
- [`clear(xml,xpath,var)`](clear(xml,xpath,var))
- [`delete(xml,xpath,var)`](delete(xml,xpath,var))
- [`prepend(xml,xpath,content,var)`](prepend(xml,xpath,content,var))
