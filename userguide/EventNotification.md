---
layout: default
title: Execution Event Notification
parent: User Guide
tags: notification tts audio email sms pause even notify
comments: true
---


Starting [v1.2](../release/nexial-core-v1.2.changelog), Nexial has added event notification to aid in the awareness of
critical execution events and to improve user experience with automation. Nexial provides the capability to notify
the intended audience of significant events during the execution. It does so via multiple form of techniques.

Currently, these are the events that can be configured for notification:

  | Event Name              | System Variable                    | Explanation                                         |
  |:------------------------|:-----------------------------------|:----------------------------------------------------|
  | **OnExecutionStart**    | `nexial.notifyOnExecutionStart`    | Start of an Execution
  | **OnExecutionComplete** | `nexial.notifyOnExecutionComplete` | Completion of an Execution; the end of a Nexial run |
  | **OnScriptStart**       | `nexial.notifyOnScriptStart`       | Start of a Script; indicates the start of an iteration (note: by default all scripts have at least one iteration). |    
  | **OnScriptComplete**    | `nexial.notifyOnScriptComplete`    | Complete of a Script; indicates the completion of an iteration. |
  | **OnScenarioStart**     | `nexial.notifyOnScenarioStart`     | Start of a Scenario                                 |
  | **OnScenarioComplete**  | `nexial.notifyOnScenarioComplete`  | Completion of a Scenario                            |
  | **OnError**             | `nexial.notifyOnError`             | An failure occurred; indicates when an error occurred or when a step failed. |
  | **OnPause**             | `nexial.notifyOnPause`             | Execution is Paused; indicates when an execution is paused, such as via the [PauseBefore flow control](../flowcontrols/index#pausebefore()-/-pauseafter()). |

Notifications can be send to one of the following channels by using one of these keyword as prefix:
1. **`audio:`** one can use one of the [included audio samples](../commands/sound/play(audio)#example) or specify your 
   own.
2. **`tts:`** Text-to-Speech; create your own notification message and let Nexial speak it on your behalf.
3. **`sms:`** send a preconfigured message to one or more mobile numbers, separated by 
   [`nexial.textDelim`](../systemvars/index#nexial.textDelim). Phone numbers and message are separated by a pipe 
   (`|`) character.
4. **`email:`** send a preconfigured message to one or more email addresses, separated by 
   [`nexial.textDelim`](../systemvars/index#nexial.textDelim). Email addresses and message are separated by a pipe 
   (`|`) character.
5. **`console:`** pause the console with a preconfigured message.


### Examples
One can mix-and-match the desired event with one of the available notification channels via System variables. For 
examples:

![](image/EventNotification_01.png)

  | Notify By      | Example | Explanation                                                                              |
  |:---------------|:--------|:-----------------------------------------------------------------------------------------|
  | Audio          | Row 8   | Play the predefined "chime3" sound at the start of an execution.                         |
  | Audio          | Row 9   | Play the "MySound.mp3" file in the data directory when the current execution is complete.|
  | Text-to-Speech | Row 10  | _Speak_ `On __ hour, __ minutes and __ seconds, an error was found on [step position]`.<br/>Check [execution built-in function](../functions/$(execution)) for more details about `$(execution)`.|
  | SMS            | Row 11  | When a script completes, send a text message to `1(213)456-7890` informing the same.<br/>Check [sms](../commands/sms/index) commands for more details about SMS automation. |
  | Email          | Row 12  | When current execution is paused (such as via `PauseAfter()` flow control), email <br/>`my_email@my_company.com` of the same, along of current date/time |
  | Email          | Row 12  | When a scenario starts to execution, email `person1@my_company.com` and <br/>`another@geemail.com` with a message "Scenario ___ of ____ has started. |
  | Console        | Row 13  | When a scenario is done, pause the execution with a message on the console: <br/>"Waiting for Your Command, Master..." |

Here are a couple of examples of the email send out via Nexial's event notification feature:<br/>
 ![](image/ExecutionNotification_05.png)<br/>
 ![](image/ExecutionNotification_06.png)<br/>

Check [Mail Settings](../commands/mail/index#mail-settings) for details on setting up SMTP connectivity.

Note that it does not make sense to create a "console" notification on a "pause" event.  Nexial will inform you of 
such scenario via console log:<br/>
 ![](image/ExecutionNotification_08.png)


### Additional Notes
1. Audio, TTS and console notification will be disabled in zero-touch environment (CI/CD, Jenkins, e.g.).
2. TTS, sms and email notification requires additional setup for proper connectivity. 

