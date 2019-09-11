---
layout: default
title: beautify(xml,var)
parent: xml
tags: command xml beautify format
comments: true
---


### Description
This command parse `xml` into a beautified version of the same, and stored the formatted content as `var`. Logically 
and structurally speaking the content of `var` should be the same as that of `xml`.

For example, suppose the following XML document:
```xml
<test><first>level 1</first><second><inner>level 2</inner></second><third><inner>level 3</inner></third></test>
```

This command will beautify/reformat the XML content as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<test>
  <first>level 1</first>
  <second>
    <inner>level 2</inner>
  </second>
  <third>
      <inner>level 3</inner>
  </third>
</test>
```

Note:- If XML prolog is missing, it will add default XML prolog as `<?xml version="1.0" encoding="UTF-8"?>`

### Parameters
- **xml** - the XML document or file
- **var** - the variable name to store the beautified content.

### Example
Script:<br/>
![](image/beautify(xml,var)_01.png)

Output:<br/>
![](image/beautify(xml,var)_02.png)

### See Also
- [`minify(xml,var)`](minify(xml,var))