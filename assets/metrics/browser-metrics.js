/*
 * Copyright 2012-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

let BrowserMetrics = function (/*Object*/metrics) {
  const METADATA = {
    "row":                  {
      "type": "test", "display": "Row", "description": "The row number of the test step associated with this metric"
    },
    "command":              {
      "type": "test", "display": "Command", "description": "The Nexial command used for this test step"
    },
    "parameters":           {
      "type": "test", "display": "Parameters", "description": "The parameter(s) used by the command of this test step"
    },
    "TTFB":                 {
      "type":        "time", "display": "TTFB",
      "description": "Time-To-First-Byte\n" +
                     "-------------------------------------\n" +
                     "The time, in milliseconds, " +
                     "between the start of user's " +
                     "request to the browser and " +
                     "when the corresponding " +
                     "response is initially " +
                     "received by the browser.\n" +
                     "\n" +
                     "(responseStart - navigationStart)"
    },
    "TTLB":                 {
      "type":        "time", "display": "TTLB",
      "description": "Time-To-Last-Byte\n" +
                     "-------------------------------------\n" +
                     "The time, in milliseconds, " +
                     "between the start of user's " +
                     "request to the browser and " +
                     "the completion of the " +
                     "corresponding response " +
                     "received (downloaded) by the " +
                     "browser.\n" +
                     "\n" +
                     "(responseEnd - navigationStart)"
    },
    "BackendTime":          {
      "type":        "time", "display": "Backend",
      "description": "Time for backend response to complete, in milliseconds\n" +
                     "\n" +
                     "(responseEnd - navigationStart)"
    },
    "DomInteractive":       {
      "type":        "time", "display": "DOM Interactive",
      "description": "Time for the web page to be loaded and interactive, in milliseconds\n" +
                     "\n" +
                     "(domInteractive - navigationStart)"
    },
    "PageCompleteTime":     {
      "type":        "time", "display": "Page Complete",
      "description": "Time to download, parse and ready the web page for use, in milliseconds\n" +
                     "\n" +
                     "(domComplete - navigationStart)"
    },
    "Latency":              {
      "type":        "time", "display": "Network Latency",
      "description": "Time incurred by the browser " +
                     "loading requested data from " +
                     "its cache, or the time " +
                     "between the browser issuing " +
                     "the request and the " +
                     "corresponding response first " +
                     "received from the server, in " +
                     "milliseconds\n" +
                     "\n" +
                     "(responseStart - fetchStart)"
    },
    "NetworkOverhead":      {
      "type":        "time", "display": "Network Overhead",
      "description": "Time incurred to complete DNS " +
                     "lookup and open TCP connection, " +
                     "in milliseconds\n" +
                     "\n" +
                     "(connectEnd - domainLookupStart)"
    },
    "FirstResponseTime":    {
      "type":        "time", "display": "First Response",
      "description": "Time to receive response " +
                     "since the request was made, " +
                     "in milliseconds\n" +
                     "\n" +
                     "(requestStart - responseStart)"
    },
    "ContentDownload":      {
      "type":        "time", "display": "DCL",
      "description": "DOM Content Loaded\n" +
                     "---------------------------------------\n" +
                     "Time between the browser " +
                     "receiving the first and the " +
                     "last byte of the response, " +
                     "in milliseconds\n" +
                     "\n" +
                     "(domComplete - domLoading)"
    },
    "DomContentLoaded":     {
      "type":        "time", "display": "DOM Content Loaded",
      "description": "Time to complete the DOM loading process after the content is downloaded, in milliseconds\n" +
                     "\n" +
                     "(responseStart - navigationStart)"
    },
    "FirstInteractive":     {
      "type":        "time", "display": "First Interactive",
      "description": "Time taken by the browser to load DOM content to a point where the web page can be used, in milliseconds"
    },
    "PageReady":            {
      "type":        "time", "display": "Page Ready",
      "description": "Time between the web page being usable and being completely loaded, in milliseconds"
    },
    "OnLoad":               {
      "type":        "time", "display": "On Load",
      "description": "Time taken after the web page is loaded and all the JavaScript load events are completed, in milliseconds"
    },
    "FirstPaint":           {
      "type":        "render", "display": "First Paint",
      "description": "The first time when an UI rendering was detected while loading the current page"
    },
    "FirstContentfulPaint": {
      "type":        "render", "display": "First Content Paint",
      "description": "The first time when some content was rendering while loading the current page"
    },
    "RequestCount":         {
      "type":        "transfer", "display": "Request Count",
      "description": "The number of resources downloaded to complete this page load"
    },
    "CacheResources":       {
      "type":        "transfer", "display": "Cached Resources",
      "description": "The list of referenced resources that are cached by the browser"
    },
    "Fetched":              {
      "type":        "transfer", "display": "Fetched Resources",
      "description": "The list of referenced resources downloaded by the browser"
    },
    "BytesDownloaded":      {
      "type":        "transfer", "display": "Downloaded Bytes",
      "description": "The total number of bytes downloaded to load this page"
    },
    "CompressionRatio":     {
      "type":        "transfer", "display": "Compression Ratio",
      "description": "The compression ratio of data downloaded to load this page"
    }
  };

  let metadata = METADATA;

  function metaByType(/*String*/type) {
    let meta = {};
    Object.keys(METADATA).forEach(function (key) {
      if (type === METADATA[key].type) { meta[key] = METADATA[key]; }
    });
    return meta;
  }

  function formatDescription(/*String*/description) { return !description ? '' : description.replace('"', '&quot;'); }

  function addHeader(/*Array*/headers) {
    let html = '';
    Object.keys(metadata).forEach(function (key) {
      if (headers.includes(key)) {
        let keyMeta     = metadata[key];
        let description = keyMeta.description;
        html += '<th class="label type-' + keyMeta.type + ' type-' + key + '"' +
                ' tooltip="' + formatDescription(description) + '">' +
                keyMeta.display +
                '</th>\n';
      }
    });
    return html;
  }

  function formatMetric(/*Object*/data, /*String*/type) {
    if (!data || !type) { return ''; }

    if (type === 'test') {
      let text = data;
      // array treatment
      if (data.push && data.pop && data.length) { text = data.reduce((a, b) => a + '<br/>' + b); }
      return text.toString().replace('>>', '&raquo;');
    }

    if (type === 'time') { return data.toFixed(2); }

    return data;
  }

  function addActivityGrid(/*Object*/activity) {
    let html = '';
    if (!activity || !activity.steps || activity.steps.length < 1) { return html; }

    let metaKeys     = Object.keys(metadata);
    let activityUsed = false;

    activity.steps.forEach(function (step) {
      html += '<tr>';
      if (!activityUsed) {
        html += '<td class="data type-activity">' + activity.name + '</td>';
        activityUsed = true;
      } else {
        html += '<td class="data type-activity">&nbsp;</td>';
      }
      metaKeys.forEach(function (key) {
        if (step.hasOwnProperty(key)) {
          let type       = metadata[key].type;
          let styleClass = type === 'test' ? type + ' type-' + key : type;
          html += '<td class="data type-' + styleClass + '">';
          if (key === 'command') {
            html += '<a href="' + step['command-ref'] + '" target="_nexial_external">' +
                    formatMetric(step[key], type) +
                    '</a>';
          } else {
            html += formatMetric(step[key], type);
          }
          html += '</td>';
        }
      });
      html += '</tr>\n';
    });

    return html;
  }

  function renderMetricsGrid(/*String*/scriptName, /*String*/scenarioName) {
    if (!metrics || !metrics.scripts || metrics.scripts.length < 1) { return; }

    let scenario = null;
    metrics.scripts.forEach(function (script) {
      if (script.name === scriptName && script.scenarios && script.scenarios.length > 0) {
        script.scenarios.forEach(function (s) { if (s.name === scenarioName) { scenario = s; } });
      }
    });
    if (!scenario || scenario.length < 1) { return; }

    let activities = scenario.activities;
    if (!activities || activities.length < 1) { return; }

    // use the steps in the first activity to generate headers
    let headers = Object.keys(activities[0].steps[0]);

    // build grid header
    let html = '<table class="data-table metrics display" data-page-length="50"><thead><tr>\n';
    html += '<th class="label type-activity">Activity</th>\n';
    html += addHeader(headers);
    html += '</tr></thead><tbody>\n';

    // build grid data
    activities.forEach(function (activity) { html += addActivityGrid(activity); });

    html += '</tbody></table>';

    let containerId = (scriptName + ' ' + scenarioName).replace(/[!"#$%&'()*+,\-./\\:;<=>?@\[\]^`{|}~ ]+/g, "_");
    let banner      = '<h1 class="category">' +
                      scriptName + ' / ' + scenarioName +
                      '<div class="showhide" target="' + containerId + '">' +
                      '<i class="fas fa-minus-square" onclick="hideSection(this)" title="minimize this section"></i>' +
                      '<i class="fas fa-plus-square" onclick="showSection(this)" title="restore this section"></i>' +
                      '</div>' +
                      '</h1>';
    let container   = '<div id="' + containerId + '" class="metrics-container canHide"></div><br/>';
    $('#app').append(banner + container);
    $('#' + containerId).append(html);
    $('#' + containerId + ' .data-table').dataTable({
      "order": [[1, "asc"]]
    });
  };

  this.renderMetrics = function () {
    metrics.scripts.forEach(function (script) {
      script.scenarios.forEach(function (scenario) { renderMetricsGrid(script.name, scenario.name); });
    });
  };

  this.renderExecMeta = function () {
    let scripts = metrics.scripts.map(x => x.name).reduce((a, b) => a + ', ' + b);

    let html = '<div class="execMeta canHide">' +
               '<div class="showhide" target="execMeta">' +
               '<i class="fas fa-minus-square" onclick="hideSection(this)" title="minimize this section"></i>' +
               '<i class="fas fa-plus-square" onclick="showSection(this)" title="restore this section"></i>' +
               '</div>' +
               '<table id="execMeta" class="execMeta" cellpadding="4" cellspacing="3">' +
               '<tbody>';
    html += '<tr>' +
            '<td nowrap="nowrap" class="execLabel">Run ID:</td>' +
            '<th width="100%" class="execValue"><a href="execution-output.html">' + metrics.runID + '</a></th>' +
            '</tr>';
    html += '<tr>' +
            '<td nowrap="nowrap" class="execLabel">Project:</td>' +
            '<th width="100%" class="execValue">' + metrics.project + '</th>' +
            '</tr>';
    html += '<tr>' +
            '<td nowrap="nowrap" class="execLabel">Scripts:</td>' +
            '<th width="100%" class="execValue">' + scripts + '</th>' +
            '</tr>';
    html += '<tr>' +
            '<td nowrap="nowrap" class="execLabel">Operating System:</td>' +
            '<th width="100%" class="execValue">' + metrics.os + '</th>' +
            '</tr>';
    html += '<tr>' +
            '<td nowrap="nowrap" class="execLabel">Browser:</td>' +
            '<th width="100%" class="execValue">' + metrics.browser + '</th>' +
            '</tr>';
    html += '</tbody>' +
            '</table>' +
            '</div><br/>';

    $('#app').append(html);
  };

  (function () {
    // initialization
  }.call(this));
};
