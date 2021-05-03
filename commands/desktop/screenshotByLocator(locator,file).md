---
layout: default
title: screenshotByLocator(locator,file)
parent: desktop
tags: command desktop
comments: true
---

### Description
This command instructs Nexial to capture the screenshot of a desktop component denoted by `locator`. The `locator` must
resolve to a valid, visible desktop component in order for the screen capturing to execute successfully. Invalid or 
unresolved `locator` will likely result in a **FAIL** for the corresponding step.

The captured screenshot is then saved to an external file, denoted by `file`. If `file` resolved to a directory, the 
corresponding step will result in a **FAIL**. If `file` exists, it will be overwritten. If `file` is not found, Nexial 
will attempt to create it, including any missing parent directory. Regardless of the file extension provided, the 
captured image will be in the PNG format.

Note:
- screen capturing can be disabled for the entire execution via
  [`nexial.screenshotEnabled`](../../systemvars/index.html#nexial.screenshotEnabled) System variable.


### Parameters
- **locator** - the locator of the target component for screen capture.
- **file** - the fully qualified path of the target image file.


### Example


### See Also
- [`nexial.screenshotEnabled`](../../systemvars/index.html#nexial.screenshotEnabled)
- [`screenshot(name,file)`](screenshot(name,file))
