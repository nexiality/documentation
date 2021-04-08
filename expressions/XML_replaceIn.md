---
layout: minified
title: replaceIn(xpath,content)
parent: XMLexpression
---

#### `replaceIn(xpath,content)`
Search against specified `xml` via `xpath`, and replace inside content of all matching instances. This command 
is different from [`replace(xpath,content)`](https://nexiality.github.io/documentation/expressions/XMLexpression#replacexpathcontent) in that it only replaces the content of the 
matching elements while [`replace(xpath,content)`](https://nexiality.github.io/documentation/expressions/XMLexpression#replacexpathcontent) replaces the tags as well as the content 
of the matching elements. 

**Example**

**Input XML file**: books.xml<br/>
![](https://nexiality.github.io/documentation/expressions/image/XMLexpression_01.png)

**Script**: Replace the `price` of each book in the `Fantasy` genre with `35.50 USD`.<br/>
![](https://nexiality.github.io/documentation/expressions/image/XMLexpression_32.png)

**Output**: As seen below. only the content of the `price` tag was replaced, the tag itself remains unmodified.<br/>
![](https://nexiality.github.io/documentation/expressions/image/XMLexpression_33.png)

**Note:** `replaceIn(xpath,content)` and [`updateContent(xpath,content)`](https://nexiality.github.io/documentation/expressions/XMLexpression#updatecontentxpathcontent) are the same when 
the specified xpath points to an XML node.

-----

