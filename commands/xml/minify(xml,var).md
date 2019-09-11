---
layout: default
title: minify(xml,var)
parent: xml
tags: command xml minify format
comments: true
---


### Description
This command parse `xml` into a minified version of the same, and stored the compressed content as `var`. Logically and
structurally speaking the content of `var` should be the same as that of `xml`.

For example, suppose the following XML document
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

This command will compress all the empty spaces and line separators such as:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<test><first>level 1</first><second><inner>level 2</inner></second><third><inner>level 3</inner></third></test>
```
Note:- If XML prolog is missing, it will add default XML prolog as `<?xml version="1.0" encoding="UTF-8"?>`

### Parameters
- **xml** - the XML document or file
- **var** - the variable name to store the compressed content.


### Example
Script:<br/>
![](image/minify(xml,var)_01.png)

Output:<br/>
![](image/minify(xml,var)_02.png)


### See Also
- [`beautify(xml,var)`](beautify(xml,var)))