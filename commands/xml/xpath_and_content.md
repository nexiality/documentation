
Note the following:
- `xpath` may resolve to a XML node (i.e. `<node>...</node>`) or an attribute (i.e. `<node attribute="...">...`).
- `content` may be text or a well-formed XML snippet.

Therefore,
1. If `content` is simply text (as in text content) and specified `xpath` resolves to one or more XML nodes, then
   the text content of such nodes will be impacted (i.e. appended, prepended or replaced).
2. If `content` is a well-formed XML snippet and specified `xpath` resolves to one or more XML nodes, then the
   specified `content` will be converted into XML and affected (i.e. appended, prepended or replaced)