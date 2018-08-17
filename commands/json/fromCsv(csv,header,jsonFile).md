---
layout: default
title: fromCsv(csv,header,jsonFile)
parent: json
tags: command json csv
comments: true
---


### Description
This command converts a CSV file or content (denoted as `csv`) to a JSON document (denoted as `jsonFile`). Optionally,
one may use `header` to indicate if `csv` contains headers as the first row or not. The nature of a CSV file is such 
that converting to JSON would result as JSON array rather than JSON object. Hence the destination file would contains
something like this:
```json
[
    ["Field 1", "Field 2", "Field 3"],
    ["More Field 1", "More Field 2", "More Field 3"],
    ... ...
]
```

If `header` is set to `true`, then the resultant file would contains JSON array of objects:
```json
[
    { 
        "column1": "..." ,
        "column2": "...",
        "column3": "...",
    },
    { 
        "column1": "..." ,
        "column2": "...",
        "column3": "...",
    },
    { 
        "column1": "..." ,
        "column2": "...",
        "column3": "...",
    },
    ... ...    
]
```



### Parameters
- **csv** - the source CSV file or content
- **header** - `true` if `csv` contains header (as first row)
- **jsonFile** - the destination file for the converted JSON array


### Example


### See Also
- [`[CSV(...) => json]`](../../expressions/CSVexpression#json)
