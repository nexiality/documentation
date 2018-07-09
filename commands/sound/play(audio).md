---
layout: default
title: play(audio)
parent: sound
tags: command sound mp3 ogg wav beep audio
comments: true
---


### Description
This command plays one of the predefined sounds or an user-defined audio file via the `audio` parameter.
Note that this command can only play MP3 and WAV files at this time. If you need support for additional audio encoding, 
please feel free to request by create an 
<a href="https://github.com/nexiality/nexial-core/issues/new" class="external-link" target="_nexial_link">issue</a>.

Note also that this command will automatically skipped over when the execution is triggered in a CI (Jenkins) 
environment. I mean, "_If a Nexial test makes a sound in an execution and no one is around to hear it, does it make 
a sound_?" Any _metaphysicists_ out there?

See below for sampling of predefined sounds.


### Parameters
- **audio** - specify one of the predefined sound or the full path of one's own audio file (MP3 or WAV only).


### Example
Below is the list of predefined sounds available as part of Nexial distribution. More will be added from time to time.

| Name     | Example                                     | Sampling                                                    |
|----------|---------------------------------------------|-------------------------------------------------------------|
| alert1   | sound &raquo; `play(audio)` &#124; `alert1`   | <audio controls preload="true"><source src="alert1.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| alert2   | sound &raquo; `play(audio)` &#124; `alert2`   | <audio controls preload="true"><source src="alert2.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| alert3   | sound &raquo; `play(audio)` &#124; `alert3`   | <audio controls preload="true"><source src="alert3.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| alert4   | sound &raquo; `play(audio)` &#124; `alert4`   | <audio controls preload="true"><source src="alert4.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| alert5   | sound &raquo; `play(audio)` &#124; `alert5`   | <audio controls preload="true"><source src="alert5.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| chime1   | sound &raquo; `play(audio)` &#124; `chime1`   | <audio controls preload="true"><source src="chime1.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| chime2   | sound &raquo; `play(audio)` &#124; `chime2`   | <audio controls preload="true"><source src="chime2.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| chime3   | sound &raquo; `play(audio)` &#124; `chime3`   | <audio controls preload="true"><source src="chime3.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| chime4   | sound &raquo; `play(audio)` &#124; `chime4`   | <audio controls preload="true"><source src="chime4.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| chime5   | sound &raquo; `play(audio)` &#124; `chime5`   | <audio controls preload="true"><source src="chime5.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| chime6   | sound &raquo; `play(audio)` &#124; `chime6`   | <audio controls preload="true"><source src="chime6.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error1   | sound &raquo; `play(audio)` &#124; `error1`   | <audio controls preload="true"><source src="error1.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error2   | sound &raquo; `play(audio)` &#124; `error2`   | <audio controls preload="true"><source src="error2.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error3   | sound &raquo; `play(audio)` &#124; `error3`   | <audio controls preload="true"><source src="error3.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error4   | sound &raquo; `play(audio)` &#124; `error4`   | <audio controls preload="true"><source src="error4.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error5   | sound &raquo; `play(audio)` &#124; `error5`   | <audio controls preload="true"><source src="error5.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| error6   | sound &raquo; `play(audio)` &#124; `error6`   | <audio controls preload="true"><source src="error6.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| fail1    | sound &raquo; `play(audio)` &#124; `fail1`    | <audio controls preload="true"><source src="fail1.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| fail2    | sound &raquo; `play(audio)` &#124; `fail2`    | <audio controls preload="true"><source src="fail2.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| success1 | sound &raquo; `play(audio)` &#124; `success1` | <audio controls preload="true"><source src="success1.wav" type="audio/wav">Your browser does not support the audio element.</audio> |
| success2 | sound &raquo; `play(audio)` &#124; `success2` | <audio controls preload="true"><source src="success2.mp3" type="audio/mp3">Your browser does not support the audio element.</audio> |
| success3 | sound &raquo; `play(audio)` &#124; `success3` | <audio controls preload="true"><source src="success3.wav" type="audio/wav">Your browser does not support the audio element.</audio> |

<br/>

Alternatively, one could use custom audio file. For example:<br/>
> sound &raquo; `play(audio)` &#124; `$(syspath|data|fullpath)/myaudio.mp3`

<br/>

### See Also
- [sound &raquo; `laser(repeats)`](laser(repeats))
- [sound &raquo; `speak(text)`](speak(text))


