---
layout: default
title: prepend(xml,xpath,content,var)
parent: xml
tags: command xml append xpath
comments: true
---


### Description
This command search against specified `xml` via `xpath`, and prepend `content` to all matching instances. The final 
(modified) XML is then stored in a data variable specified as `var`.

{% include_relative xpath_and_content.md %}


### Parameters
- **xml** - the XML document or file
- **xpath** - the XPATH to specify the target area of impact
- **content** - the content to prepend, may be text content, attribute value or well formed XML snippet
- **var** - the variable name to store the beautified content.


### Example
Script:<br/>
![script](image/prepend_01.png)

Output:<br/>
![](image/prepend_02.png)

![](image/prepend_03.png)


### See Also
- [`append(xml,xpath,content,var)`](append(xml,xpath,content,var))
- [`clear(xml,xpath,var)`](clear(xml,xpath,var))
- [`delete(xml,xpath,var)`](delete(xml,xpath,var))
- [`replace(xml,xpath,content,var)`](replace(xml,xpath,content,var))
