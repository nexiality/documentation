For date/time formatting (denoted below as `format` or `*Format`), Nexial supports the following 3 conventions:
- <a href="http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html" class="external-link" target="_nexial_link">Standard Java date/time formatting convention</a>
  for a full range to express the desired date/time format.
- <a href="https://en.wikipedia.org/wiki/Unix_time" class="external-link" target="_nexial_link">epoch</a> 
  for timestamp. Use `epoch` to signify the display of date/time value in its epoch value (millisecond).
- `informal` to express date/time information in a colloquial, non-exact manner that mimic human conversation. 
  For example, `informal` format would output `about a minute ago` instead of `00:00:57`, or 
  `about a month and a half ago` rather than `2018/08/24 00:01:32`. The `informal` format is suitable to use in 
  conjunction with the [sound &raquo; `speak(text)`](../commands/sound/speak(text)) command.
- `base10time` to express time information as a base-10 decimal number. For example, `10:25:30` would be converted as
  `10.425`, `14.32918` would be converted as `14:19:46`.

