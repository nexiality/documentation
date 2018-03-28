---
title: web &raquo; unselectAllText()
parent: web
tags: command web
comments: true
---

### Description

*   This command will call  the javscript 
*   This command will internally execute javascript " "window.getSelection().removeAllRanges(); which eventually removes all ranges from the selection, leaving the [`anchorNode`](https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorNode "The Selection.anchorNode read-only property returns the Node in which the selection begins.") and [`focusNode`](https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusNode "Selection.focusNode read-only property returns the Node, in which selection ends.") properties equal to `null` and leaving nothing selected.
*   This command does not require any input parameters.

### Example