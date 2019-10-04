---
layout: default
title: Browser Performance Metrics
parent: web
tags: command web devtools performance metrics browser
comments: true
---

### Description
As of [v2.7](../../release/nexial-core-v2.7.changelog), Nexial supports the capturing of browser performance metrics 
during an execution. These metrics correspond to the browser's activities to handle the response from the server and 
the performance thereof. This is sometimes referred to as "Client-side Performance Metrics", which is different than 
the "Server-side Performance Metrics". The server-side performance testing, often done through performance testing tools 
like JMeter or Gatling, focuses mainly on the responsiveness and resilience of the web server or web application over 
varying concurrent request load. Client-side performance testing, on the other hand, focuses on the user experience 
through the vantage point of the client application. Both types of performance metrics are important and in isolation 
neither tells the complete story on application performance.

Performance matters! There is other way to put it. Using a slower application is almost always a worse user experience 
than a faster one, all things being equal. When analyze alongside server-side performance metrics, one gains the right 
perspective in terms of user experience, bottlenecks and optimization opportunity.

In terms of browser performance metrics (just _metrics_ hereafter), there are general 3 categories of data we can 
gather (excerpt from <a href="http://siusin.github.io/perf-timing-primer/" class="external-link" target="_nexial_link">
A Primer for Web Performance Timing API</a>):
1. **Navigation Timing**<br/>
   The <a href="https://w3c.github.io/navigation-timing/" class="external-link" target="_nexial_link">
   W3C Navigation Timing API</a> provides the tools to measure the critical milestones for the main HTML document: 
   DNS, TCP, request and response, and even DOM-level timing metrics. This API exposes the metrics as accurate and 
   detailed timing statistics — natively — for page navigation and load events. It's available now in Internet 
   Explorer 9 - 11, Edge, Google Chrome, Firefox and Safari.<br/>
   <br/>
   The exact metrics exposed via this API can be found in the 
   <a href="https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming" class="external-link" target="_nexial_link">MDN web docs</a>.
   As one can see, there are a lot of timing and events being tracked through this, and this can overwhelming and 
   possibly confusing. To streamline the metrics collection and to simplify analysis, Nexial implemented a series of 
   data points via System variables. <br/>

   Click on the image to open this image in its full size:<br/>
   <a href="image/metrics_02.png" target="_nexial_external"><img src="image/metrics_01.png" width="780"/></a>

|System variable | Description   |
|+---------------|+--------------|
| `nexial.web.metrics.TTFB` | The time, in milliseconds, between the start of user's request to the browser and when the corresponding response is initially received by the browser. |
| `nexial.web.metrics.TTLB` | The time, in milliseconds, between the start of user's request to the browser and the completion of the corresponding response received (downloaded) by the browser. |
| `nexial.web.metrics.BackendTime` | _Same as `nexial.web.metrics.TTLB`_. |
| `nexial.web.metrics.DomInteractive` | The time, in milliseconds, between the start of user's request to the browser and the requested page ready for user interaction (while the same page might not be completely loaded). |
| `nexial.web.metrics.PageCompleteTime` | The time, in milliseconds, between the start of user's request to the browser and the requested page being completely loaded, parsed and all sub-resources loaded.|
| `nexial.web.metrics.Latency` | The time incurred, in millisecond by the browser loading requested data from its cache, or the time between the browser issuing the request and the corresponding response first received from the server.|
| `nexial.web.metrics.NetworkOverhead` | The time incurred, in milliseconds, to complete DNS lookup and open TCP connection by the browser.|
| `nexial.web.metrics.FirstResponseTime`| The time, in millisecond, to receive initial response since the request was made. | 
| `nexial.web.metrics.ContentDownload` | The time, in milliseconds, between the browser receiving the first and the last byte of the corresponding response. |
| `nexial.web.metrics.ContentDownload` | The time in millisecond between the first and the last byte of response for the current request (i.e. URL).|
| `nexial.web.metrics.DomContentLoaded` | The time, in milliseconds, between receiving the last byte of the response (which subsequently start the parsing to the document thereof) and the complete construction of the parsed DOM and CSSOM objects.|
| `nexial.web.metrics.FirstInteractive` | The time, in milliseconds, to parse the DOM objects.|
| `nexial.web.metrics.PageReady` | The time, in milliseconds, between the DOM objects being parsed and the corresponding page completely loaded (i.e. DOM and CSSOM construction complete)." |
| `nexial.web.metrics.OnLoad` | The time, in millisecond, taken to executed all the JavaScript load events after the corresponding page is completely loaded.|

<br/>

2. **Resource Timing**<br/>
   API that allows you to collect complete timing information related to resources in a document. It enables one to 
   measure user latency, which is crucial to benchmark web pages. This API is a W3C Candidate Recommendation so we can 
   be sure that significant features are mostly locked, but there could be minor changes to the spec in the future.
   <br/>
   Using the Resource Timing API allows us to retrieve and analyze a detailed profile of all the network timing data 
   for every resource on the page. We’ll cover what these data are in the next section. For the moment, it’s important 
   that you understand how this API can help us in tracking the performance of the resources of our page, and determine 
   how many and what resources we have to optimize.
   
3. **Paint Timing**<br/>
   First Paint (FP) is the first of these key moments, followed by First Contentful Paint (FCP). These metrics mark the points, immediately after navigation, when the browser renders pixels to the screen. This is important to the user because it answers the question: is it happening?
   
   The primary difference between the two metrics is FP marks the point when the browser renders anything that is visually different from what was on the screen prior to navigation. By contrast, FCP is the point when the browser renders the first bit of content from the DOM, which may be text, an image, SVG, or even a canvas element.


-----

### What does it look like?

-----

### How do I get started?

-----

### References
<ul>
<li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp" class="external-link" target="_nexial_link">Measuring the Critical Rendering Path</a></li>
<li><a href="https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics" class="external-link" target="_nexial_link">User-Centric Performance Metrics</a></li>
<li><a href="https://developers.google.com/web/tools/chrome-devtools/network/understanding-resource-timing" class="external-link" target="_nexial_link">Understanding Resource Timing</a></li>
<li><a href="https://community.akamai.com/customers/s/article/Using-Navigation-Timing-APIs-to-understand-your-webpage?language=en_US" class="external-link" target="_nexial_link">Using Navigation Timing APIs to understand your webpage</a></li>
<li><a href="https://gtmetrix.com/blog/first-contentful-paint-explained/" class="external-link" target="_nexial_link">First Content Paint Explained</a></li>
<li><a href="https://www.sitepen.com/blog/improving-performance-with-the-paint-timing-api/" class="external-link" target="_nexial_link">Improving Performance with the Paint Riming API</a></li>
</ul>
ne