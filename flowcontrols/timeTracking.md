---
layout: default
title: Time Tracking
parent: Flow Controls
tags: Time Tracking
comments: true
---

### Description
In dealing with automation, often one finds the necessity to have performance testing or analysis charts for tests. 
The ability to articulate such idea gives our automation more flexibility. This is main purpose of **Time Tracking.** 
This will help nexial user to analyse the time results for test steps.

Nexial will generate new log file at output log folder. It will have logs for the tracked steps only.
This file's format will look like this:-
**`Start Time|End Time|Elapsed time|Thread Name|Label|Remark(if any)`**

Remark is nothing but status of tracking. Following are remarks for some scenarios
1. If execution is ended due to EndIf condition without ending tracking, remark will be "Execution interrupted".
2. If execution is failed in the middle without ending tracking, remark will be "Execution failed".
3. If execution is completed without ending tracking, remark will be "Execution Ended."
4. If tracking ended with timeTrackEnd, remark will be empty.

Time tracking should be specified in flow controls column. They are treated like flow control. 
The syntax of Time Tracking is same as that of flow control. The general syntax looks like:<br>
**`[TimeTrackStart(label)|TimeTrackEnd()]`**

### TimeTrackStart(label)
TimeTrackStart will be start point for time tracking for steps. Label is nothing but description for step tracking. 
Label is `OPTIONAL`. Default label is scriptName#scenarioName. During execution, nexial will evaluate this before test step execution.
So start time will be the start time of that step. Lets have a look how to add TimeTrackStart in scripts.

### TimeTrackEnd()
TimeTrackEnd will be end point for time tracking. During execution, nexial will evaluate this after test step execution.
So end time will be the end time of that step. Lets have a look how to add TimeTrackEnd in scripts.

### Example
Script:-<br>
![](image/timeTracking_01.png)

Log File:-<br>
![](image/timeTracking_02.png)

In above image, you can see that first two lines are without remark while third line is with remark as tracking is not
ended in the script. 


### Notes:-
1. Nexial does not support nested tracking till this point. For example, You have TimeTrackStart for the first step,
again in third steps you have TimeTrackStart. You have not closed first step TimeTrackStart with TimeTrackEnd. 
This is nested tracking. Currently nexial does not support this feature but in future we will think upon this.

2. If you have TimeTrackStart in successive steps without having TimeTrackEnd, nexial will take first one into 
consideration for tracking purpose. Two successive TimeTrackEnd will do the same.

3. If you have TimeTrackStart in script and forgot to end it before iteration completes, nexial will automatically end
tracking at iteration level.

### See Also

Nexial also supports different execution level tracking. For this go through these system variables-

1. [`nexial.trackExecution`](../systemvars/index#nexial.trackExecution)
2. [`nexial.trackScript`](../systemvars/index#nexial.trackScript)
3. [`nexial.trackIteration`](../systemvars/index#nexial.trackIteration)
4. [`nexial.trackScenario`](../systemvars/index#nexial.trackScenario)
