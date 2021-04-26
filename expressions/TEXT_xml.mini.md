---
layout: minified
title: xml
parent: TEXTexpression
---

Transform existing text into a [XML expression](https://nexiality.github.io/documentation/expressions/XMLexpression). If 
[`nexial.expression.resolveURL`](https://nexiality.github.io/documentation/systemvars/index#nexial.expression.resolveURL) is set to `true` and the current 
text content is a URL, Nexial will automatically download from such URL and transform the download content as 
[XML expression](https://nexiality.github.io/documentation/expressions/XMLexpression). One may use this operation to parse the HTML content as a XML document. 

**Example**<br/>
In this example, the text is converted to xml format, to perform xml operations on it.<br/>
Suppose the following XML document `bookStore.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>  
  <book>  
    <title>Everyday Italian</title>  
    <author>Giada De Laurentiis</author>
    <year>2005</year>  
  </book> 
  <book>  
    <title>Learning XML</title>
    <author>Erik T. Ray</author>  
    <year>2003</year>  
  </book>  
</bookstore>
```
Script:<br/>
![script](https://nexiality.github.io/documentation/expressions/image/TEXTexpression_75.png)

Output:<br/>
![output](https://nexiality.github.io/documentation/expressions/image/TEXTexpression_76.png)

-----