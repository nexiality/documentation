{% include_relative _breadcrumb.html current="BrowserStack Integration" %}


### Description
[BrowserStack](https://www.browserstack.com/) is a cloud-based cross-browser testing tool that enables website 
testing across various browsers on different operating systems and mobile devices, without requiring users to install 
virtual machines, devices or emulators.  It is particularly useful when testing of older OS or browser is required.  
In addition, being a cloud-based solution, executing tests on BrowserStack would incur much less computing resources 
within the enterprise and enables for on-demand resource allocation.

Nexial can integrate with BrowserStack by pushing the test steps and commands to BrowserStack. The output will still 
be recorded in the same format, just like local browser testing.  The steps to integrate with BrowserStack is 
straightforward:

1. Sign up for the appropriate BrowserStack account - be sure to select 
   [one of the Automate plans](https://www.browserstack.com/accounts/subscriptions) (ya, it's not free 
   ![(sad)](../image/sad.png)).
2. Note the username and access key in the [Settings page](https://www.browserstack.com/accounts/settings).
3. Define the following data value in your test data sheet:

   | data variable                     | value          |
   |-----------------------------------|----------------|
   | `nexial.browser`                  | `browserstack` |
   | `nexial.browserstack.username`    | the username specified in [Browser Setting](https://www.browserstack.com/accounts/settings) |
   | `nexial.browserstack.automatekey` | the access key specified in [Browser Setting](https://www.browserstack.com/accounts/settings) |
    
4. Note that the above data values are the minimum required for BrowserStack integration.  For more options, navigate 
   to the [System Variable](../systemvars/) page and search for `nexial.browserstack`
5. If you are testing a website/webpage that can only be accessed within local network or intranet, be sure to 
   download and run the [BrowserStackLocal binary](https://www.browserstack.com/local-testing#command-line).  
   BrowserStackLocal must be active prior to automation.  Also `nexial.browserstack.enablelocal` must be `true`.
   1. **Note**: *we are working on automatically starting BrowserStackLocal during Nexial automation.  Stay tuned!*
6. That's it!  Run your test as you normally would.  With BrowserStack, the automation is performed remotely.  Hence 
   you won't see any browser being launched locally.  However all the screenshots will be captured in the same way as 
   local browser testing.


### See Also
- [BrowserStack sign up page](https://www.browserstack.com/accounts/subscriptions)
- [BrowserStack OS and browser support](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [BrowserStackLocal](https://www.browserstack.com/local-testing#command-line)
- [BrowserStackLocal binary arguments](https://www.browserstack.com/local-testing#modifiers)
- [BrowserStackLocal limitation](https://www.browserstack.com/local-testing#supported)
- [System Variables](../systemvars)
