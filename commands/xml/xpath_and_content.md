
A few things to consider when modifying (append, prepend or replace) XML. Since,
- `xpath` may resolve to a XML node (as in `<node>...</node>`) or an attribute (as in `<node attribute="...">...`),
- `content` may be text or a well-formed XML snippet.

Therefore,
1. If `content` is simply text (as in text content) and specified `xpath` resolves to one or more XML nodes, then
   the text content of such nodes will be impacted (i.e. appended, prepended or replaced).
2. If `content` is a well-formed XML snippet and specified `xpath` resolves to one or more XML nodes, then the
   specified `content` will be converted into XML to affect (i.e. append, prepend or replace) those matching nodes.
3. If the specified `xpath` resolves to one or more XML attributes, then `content` will be used as attribute values 
   to append, prepend or replace (depending on the command used) existing attribute values.

