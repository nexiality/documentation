---
layout: default
title: Developer Guide
parent: User Guide
tags: 
comments: true
---
<style>
ul, ol, dl {
   margin-bottom: 2px;
}
</style>

### Script (.xlsx) Read/Load/Modify During Execution

#### From `Nexial`
1. if `-plan` is used, for each specified plan file: 
   1. run `InputFileUtils.isValidPlanFile()` against it
   2. create new `TestProject` instance using `TestProject.newInstance()`
   3. derive output location, based on the newly created `TestProject` instance
   4. derive all the specified "plan sequence" (combination of script and data file) per one plan
      - a "plan sequence" may be disabled via strikethrough
   5. for each "plan sequence":
      1. validate the specified script
      2. validate the specified scenario as one that exist in the script
      3. validate the specified/derived data file
      4. validate the specified/derived datasheet as one that exists in the data file
      5. create new `ExecutionDefinition` instance using the validated script, scenario(s), data file, datasheet(s) and
         `TestProject` instead
      6. parse the associated data file/datasheets and `project.properties`
         - the parsed data variables and system variables will be the basis of the associated Nexial execution
<br/><br/>
2. if `-script` is used, for the specified script file:
   1. validate the specified script
   2. create new `TestProject` instance using `TestProject.newInstance()`
   3. validate the specified scenario as one that exist in the script
   4. validate the specified/derived data file
   5. validate the specified/derived datasheet as one that exists in the data file
   6. derive output location, based on the newly created `TestProject` instance
   7. create new `ExecutionDefinition` instance using the validated script, scenario(s), data file, datasheet(s) and
      `TestProject` instead
   8. parse the associated data file/datasheets and `project.properties`
      - the parsed data variables and system variables will be the basis of the associated Nexial execution
<br/><br/>
3. execution commence via `execute()`:
   1. init spring context (different than the spring context in `ExecutionContext`)
   2. generate `run id`, from which execution output will be based
   3. create new instance of `ExecutionSummary` representing the entire execution - a.k.a. main execution summary
   4. for each instance of `ExecutionDefinition`:
      1. assign the generated `run id`
      2. create new instance of `ExecutionThread` and run it as a thread
      3. at the completion of each execution thread, its `ExecutionSummary` is attached to the main execution summary 
         instnace
   5. wait until all active `ExecutionThread` instances are complete
   6. report on total execution time
   7. tally up the execution metadata through the attached `ExecutionSummary` instances
   8. upload execution output to cloud (if configured)
   9. mail out execution summary email (if configured)
<br/><br/>


#### From `ExecutionThread.run()`
1. derived log directory based on `TestProject` instance (in `ExecutionDefinition` instance) and register it to logback
2. set up an instance of `ExecutionSummary` for the `SCRIPT` execution level
3. for each iteration specified to the current script:
   1. create an instance of `ExecutionSummary` at the `ITERATION` execution level
   2. prepare the script via `ExecutionInputPrep.prep()`:
      1. determine output script file/path
      2. copy input script to output
      3. remove all unused (and unreferenced) worksheet from output script
      4. run "macro merger":
         1. scan through all the test steps in each scenario (of current script)
         2. for each `base.macro()` command reference:
            1. resolve macro file and macro sheet / can result in IOException due to file/sheet not found
            2. if specified macro name is not found in resolved macro file/sheet, then no replacement will be done to 
               the macro command in question.
            3. for all the resolved macro steps, replace and expand the current test step (which has `base.macro()`)
               - this will expand the current test step set.
            4. 








