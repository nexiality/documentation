Note that the parenthesis and commas characters could be a little tricky to handle since they are grammatically 
significant as parameter boundary and parameter separator, respectively. One should use the backslash character (`\`) to
"escape" parenthesis and commas. In addition, parenthesis and various punctuations such as `[`, `]`, `-`, `{`, `}`, `?` 
and `*` are significant in the context of regular expression. To circumvent this possible confusion, one might need to
"double escape" certain characters when expressing a regular expression as an operation parameter, as in `\\(US.+\\)`.
