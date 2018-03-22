{% include_relative _breadcrumb.html current="assertContains(text,substring)" %}


### Description
This command checks that `substring` can be found in its entirety within `text`. This means `substring` can be 
either in the beginning, the ending or the middle of `text`.


### Parameter(s)
- **text** \- the text to be tested
- **substring** \- the string of characters that should exist within `text`


### Example
Here's an example:
![script](image/assertContains_01.png)

and the output:
![output](image/assertContains_02.png)


### See Also
- [`assertStartsWith(text,prefix)`](assertStartsWith(text,prefix).html)
- [`assertEndsWith(text,suffix)`](assertEndsWith(text,suffix).html)
