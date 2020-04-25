---
layout: default
title: Standards and Convention for Nexial Project
---

# Standards and Convention for Nexial Project


## Scripts
The chief purpose of a Nexial script is to organize related or similar tests into the same file. This will simplify
the work of identifying tests (for edits or for execution). It will also streamline the process of maintaining broad-
impact changes across multiple scenarios.

#### Organization
Note that we should not force any dependencies of the scenarios within the same script. Flow and order can be (and 
importantly, **should be**) defined either at execution time or via a plan file. Thus, If the following are the 
sequence of executions:
1. Login
2. Search Product
3. Refine Search
4. Add To Cart
5. Checkout
6. Feedback
7. Search Order
8. Logout

Then it might be good to organize these scenarios in the following manner:

| Script      | Scenario         |
|:------------|:-----------------|
| `Common`    | `Login`          |
|             | `Logout`         |
|             | `Feedback`       |
| `Product`   | `Search Product` |
|             | `Refine Search`  |
| `Order`     | `Add to Cart`    |
|             | `Checkout`       |
|             | `Search Order`   |

# Naming Convention
Script name should reflect the scenarios it contains. Avoid using ID, code, story number and such. However well-known 
acronyms, especially those used within the project team, are acceptable. All are encouraged to keep script names short
and simple.

Avoid using names to describe the execution intent. Names such as `RegressionScript`, `SmokeTest`, 
`EndToEndIntegration`, `ProductionValidation`, `Sprint_14` are not ideal as such name "timestamped" the purpose of 
these script. It is generally a good goal to extend the usefulness of a script beyond a sprint or an execution purpose.

However, there are circumstances where the script names might be slightly more complicated. At times we might find 
ourselves having to maintain two separate scripts in order to support multiple incompatible application versions or 
different environments. For example, the production version of the application might be starkly different than the one 
in the QA environment. In such case, we might want to add some descriptive to our scripts, such as `OrderEntry_v5.7`, 
`Billing_PROD`, `TaxReporting_2018`. We should consider such as the exception.

-----

## Macro
Macros are similar to scripts except that they are generally smaller in scope, with higher reusability. A macro should
be named appropriately to its purpose to improve recognition and usability. For example, naming a macro as `Login` is
not as ideal as subpar to naming it as`Login_As_Admin` or `Login_Via_2FA`. In short, macro name should be:
1. functional
2. descriptive
3. focus

A Macro library (worksheet in a macro file), however, can be more generic. One can keep related macros in the same
macro library. A more generalized name for macro library would serve it well.
 
-----

## Scenario

-----

## Activity

-----

## Plan

-----

## Data Variable

#### Naming Convention
Ideally we want to name our data variables to clearly identify its purpose and it's reference back to the application, 
when appropriate. When dealing with a larger application, there may be many situations where a data variable can be 
misrepresented or misused. Names such as `name`, `error`, `address` can be too generic and would cause conflict and 
confusion over time. It is thus a good practice to create the appropriate context to these data variables to improve
their identification and to avoid conflict. The following are 2 recommended strategies towards naming data variables:

1. `[page].[section].[element].[type]`<br/>
    where,<br/>
    `[page]`    would describe the page, the window, or the application view in context.<br/>
    `[section]` would represent the portion of `[page]` with related application components or elements.<br/>
    `[element]` would represent a specific object or concept that is unique within the context of its `[section]`.<br/>
    `[type]`    would further distinguish the specific representation of a data variable with regards to a `[element]`<br/>
     
2. `[section].[element].[type]`


#### Typical Use for `project.properties`
#### Typical Use of `#default` datasheet

-----

## Improving Execution 
#### Creating batch files and shell scripts
#### Naming convention

-----

## Improving Teamwork and Collaboration
#### Use of SCM
#### Commit consideration
#### commit frequency
#### use of commit comment
#### Avoid rich text (default) copy-and-paste
#### Use `nexial-artifact-repair`

-----

