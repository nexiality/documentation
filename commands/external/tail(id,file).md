---
layout: default
title: tail(id,file)
parent: external
tags: command external
comments: true
---


### Description
This command instruct Nexial to "tail" the specified `file`. To "tail" means to watch for file content changes and
display the end tail of such content to the console. This command simulate the popular *NIX 
<a href="https://en.wikipedia.org/wiki/Tail_(Unix)" class="external_link" target="_nexial_link">tail</a> command.

The `id` parameter allows one to differentiate the output of multiple "tailing". This `id` will be prefixed to 
the specified `file`. In case there should be multiple instance of this command, the associated output may be 
differentiated with different `id`.

Note that it is possible that the specified `file` might not have existed or empty at the time of this command. Nexial
will continue to watch for file content changes and display them when they become available.


### Parameters
- **id** - the prefix to be added to the beginning of each line from the tail end of `file`.
- **file** - the file to watch and display


### See Also
