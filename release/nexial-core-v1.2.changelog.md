---
layout: default
title: nexial-core 1.2 (2018-06-??)
parent: release
tags: release nexial-core 1.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.2" class="external-link" target="_nexial_target">Release 1.2</a>
2018-06-??


### General
- fixed internal logic to handle the insertion of Excel rows that avoids the infamous "unreadable content" error. The
  underlying bug (in POI) is documented at https://bz.apache.org/bugzilla/show_bug.cgi?id=57423
- fixed Nexial email notification so that email settings can be configured either System properties (i.e. `-D`), 
  `project.properties` or data sheets.
- Nexial Setup now ready for use.  Checks dos. for usage details.

#### Nexial Expression
- allow for "tight-space" expression with no spaces between `[..]` and `=>` and the subsequent operations.

#### Built-in Function
- [$(execution)](../functions/$(execution)): **NEW** built-in function to expose execution-time metadata. 

#### [rdbms commands](../commands/rdbms/index)
- [rdbms &raquo; `saveResults(db,sqls,outputDir)`](../commands/rdbms/saveResults(db,sqls,outputDir)): **NEW** command
  to execute a series of queries and save the results to CSV files.


#### [sound commands](../commands/sound/index)
- new set of commands to generate digitalized sound and to generate text-to-speech
- [sound &raquo; `play(audio)`](../commands/sound/play(audio)): **NEW** command to play either 
  [predefined digitized sounds](../commands/sound/play(audio)#example) or audio file (WAV or MP3) of your own choosing.
- [sound &raquo; `speak(text)`](../commands/sound/speak(text)): **NEW** command to generate text-to-speech during execution.
- [sound &raquo; `laser(repeats)](../commands/sound/laser(repeats)): **NEW** command to generate digitized "laser" sounds.
  One may use `repeats` to control the sound duration.

