Note that there are a few caveats to consider in terms of CSS property.
- If the CSS property in question is a color property (such as `background-color` or `color`), then its value
  should be specified in RGBA form. For example, instead of specifying `green`, one should specify `rgba(0, 255, 0, 1)`. 
  Instead of `#f70000`, specify `rgba(247, 0, 0, 1)`. Use any of the following online tools to help with the color 
  conversion:
  - <a href="http://hex2rgba.devoth.com/" class="external-link" target="_nexial_link">Devoth's HEX 2 RGBA Color Calculator</a>
  - <a href="https://www.rapidtables.com/convert/color/hex-to-rgb.html" class="external-link" target="_nexial_link">RapidTables</a>
- Shorthand CSS properties (e.g. `background`, `font`, `border`, `border-top`, `margin`, `margin-top`, `padding`, `padding-top`, 
  `list-style`, `outline`, `pause`, `cue`) are not supported. This is due to the fact that there is still a lack of 
  cross-browser conformity on these shorthands. So instead of specifying, say, `background`, use `background-color` 
  instead. To determine the longhand CSS properties, check out this article:
  - <a href="https://developers.google.com/web/updates/2015/05/expand-css-shorthand-properties" class="external-link" target="_nexial_link">Expand CSS shorthand properties</a>

