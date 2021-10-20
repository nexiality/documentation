Note that there are a few caveats to consider in terms of CSS property.
- If the CSS property in question is a color property (such as `background-color` or `color`), then it's a good idea to 
  specify it in the RGBA form. For example, instead of specifying `green`, specify `rgba(0, 255, 0, 1)` clarifies both
  the mix of red, green and blue value, as well as the alpha (transparent) value. Here are some online tools to help 
  with the color conversion:
  - <a href="http://hex2rgba.devoth.com/" class="external-link" target="_nexial_link">Devoth's HEX 2 RGBA Color Calculator</a>
  - <a href="https://www.rapidtables.com/convert/color/hex-to-rgb.html" class="external-link" target="_nexial_link">RapidTables</a>
- Shorthand CSS properties (e.g. `background`, `font`, `border`, `border-top`, `margin`, `margin-top`, `padding`, 
  `padding-top`, `list-style`, `outline`, `pause`, `cue`), while are supported, might result in cross-browser 
  incompatibility. The support for some of these CSS shorthands are not uniform across browser and some of them are 
  still under review. Use the CSS longhand, like `background-color`, instead of `background`. To determine the 
  longhand CSS properties, check out this article:
  - <a href="https://developers.google.com/web/updates/2015/05/expand-css-shorthand-properties" class="external-link" target="_nexial_link">Expand CSS shorthand properties</a>
- Nexial currently does not support automatic unit conversion, such as "px" to "em", or "pt" to "in". One must use extra
  care when dealing with CSS properties that use measurement units.

