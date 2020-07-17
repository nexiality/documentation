Th `filterFilter` parameter can be expressed in one or more of the following:
1. The exact file name such as `MyDocument.txt`
2. The conventional wildcard file pattern such as `*.log` or `a*.json`
3. The more powerful name matching approach using regular expression, which is prefixed with `REGEX:`
   - e.g. `REGEX:a.{2,5}\-\d{4}.txt`
4 file name (use `name match ...`.)
5 file size in bytes (use `size > ...` or `size < ...`).
6 file's last modified date (use `lastmod > ...` or `lastmod < ...`). This matches the last modified date/time of a 
  file as timestamp (i.e. epoch).

Additionally, `fileFilter` may be expressed as [Nexial Filter](../../flowcontrols/filter) to create a multi-criteria
filter on `name`, `size` and/or `lastMod`. For example,

    name end with saveMatches4.json & size = 0 & lastMod >= 1547394418

...means "match on files where 
    - the file name ends with `saveMatches4.json`, 
    - has no byte (i.e. empty file) and 
    - was last modified since January 13, 2019 3:46:58 PM"

**Note**: In order to distinguish between "exact match" and "filter match", please observe the following rules:
> **The "filter match" is expected to contain space(s) between the keywords (like `name`, `size`, and `lastMod`)** 
> **and the corresponding criteria.** 

For example, `name = saveMatches4.json` will return the file with name `saveMatches4.json`. But `name=saveMatches4.json` 
will return the file with name `name=saveMatches4.json`

