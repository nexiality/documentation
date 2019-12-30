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
      "type":        "test", "display": "Row", "chart": false,
      "description": "The row number of the test step associated with this metric"
    },
    "command":              {
      "type": "test", "display": "Command", "chart": false, "description": "The Nexial command used for this test step"
    },
    "parameters":           {
      "type":        "test", "display": "Parameters", "chart": false,
      "description": "The parameter(s) used by the command of this test step"
    },
    "TTFB":                 {
      "type":        "time", "display": "TTFB", "chart": true, "chartColor": "rgba(100,75,0,0.75)",
      "description": "Time-To-First-Byte\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the start of user's request to the browser and when the " +
                     "corresponding response is initially received by the browser.\n" +
                     "\n" +
                     "(responseStart - navigationStart)"
    },
    "TTLB":                 {
      "type":        "time", "display": "TTLB", "chart": true, "chartColor": "rgba(153,27,29,0.75)",
      "description": "Time-To-Last-Byte\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the start of user's request to the browser and the " +
                     "completion of the corresponding response received (downloaded) by the browser.\n" +
                     "\n" +
                     "(responseEnd - navigationStart)"
    },
    "BackendTime":          {
      "type":        "time", "display": "Backend", "chart": true, "chartColor": "rgba(103,17,19,0.75)",
      "description": "Backend\n" +
                     "------------------------------------------\n" +
                     "(This is the same as TTLB)\n" +
                     "The time, in milliseconds, between the start of user's request to the browser and the " +
                     "completion of the corresponding response received (downloaded) by the browser.\n" +
                     "\n" +
                     "(responseEnd - navigationStart)"
    },
    "DomInteractive":       {
      "type":        "time", "display": "DOM Interactive", "chart": true, "chartColor": "rgba(255,80,80,0.75)",
      "description": "DOM Interactive-Ready\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the start of user's request to the browser and the " +
                     "requested page ready for user interaction (while the same page might not be completely " +
                     "loaded).\n" +
                     "\n" +
                     "(domInteractive - navigationStart)"
    },
    "PageCompleteTime":     {
      "type":        "time", "display": "Page Complete", "chart": true, "chartColor": "rgba(255,160,80,0.75)",
      "description": "Page Complete Time\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the start of user's request to the browser and the " +
                     "requested page being completely loaded, parsed and all sub-resources loaded.\n" +
                     "\n" +
                     "(domComplete - navigationStart)"
    },
    // brown, ruby, R, O, Y, G, B, I, V, teal, gray, lightgray, pink,
    // rgba(255,254,128,0.75)
    // rgba(255,0,255,0.5)
    "Latency":              {
      "type":        "time", "display": "Network Latency", "chart": true, "chartColor": "rgba(225,225,60,0.75)",
      "description": "Cache, DNS, TCP and Request\n" +
                     "------------------------------------------\n" +
                     "The time incurred, in millisecond by the browser loading requested data from its cache, or the " +
                     "time between the browser issuing the request and the corresponding response first received " +
                     "from the server.\n" +
                     "\n" +
                     "(responseStart - fetchStart)"
    },
    "NetworkOverhead":      {
      "type":        "time", "display": "Network Overhead", "chart": true, "chartColor": "rgba(195,195,30,0.75)",
      "description": "\n" +
                     "DNS and TCP\n" +
                     "------------------------------------------\n" +
                     "The time incurred, in milliseconds, to complete DNS lookup and open TCP connection by the " +
                     "browser.\n" +
                     "\n" +
                     "(connectEnd - domainLookupStart)"
    },
    "FirstResponseTime":    {
      "type":        "time", "display": "First Response", "chart": true, "chartColor": "rgba(60,235,60,0.75)",
      "description": "First Response Time\n" +
                     "------------------------------------------\n" +
                     "The time, in millisecond, to receive initial response since the request was made.\n" +
                     "\n" +
                     "(requestStart - responseStart)"
    },
    "ContentDownload":      {
      "type":        "time", "display": "Content Download", "chart": true, "chartColor": "rgba(80,150,255,0.75)",
      "description": "Content Downloaded\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the browser receiving the first and the last byte of the " +
                     "corresponding response.\n" +
                     "\n" +
                     "(responseEnd - responseStart)"
    },
    "DomContentLoaded": {
      "type":        "time", "display": "DCL", "chart": true, "chartColor": "rgba(80,250,255,0.75)",
      "description": "DOM Content Loaded\n" +
                     "---------------------------------------\n" +
                     "The time, in milliseconds, between receiving the last byte of the response (which " +
                     "subsequently start the parsing to the document thereof) and the complete construction of the " +
                     "parsed DOM and CSSOM objects.\n" +
                     "\n" +
                     "(domComplete - domLoading)"
    },
    "FirstInteractive":     {
      "type":        "time", "display": "First Interactive", "chart": true, "chartColor": "rgba(185,80,225,0.75)",
      "description": "Time to First Interactive\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, to parse the DOM objects.\n" +
                     "\n" +
                     "(domInteractive - domLoading)"
    },
    "PageReady":            {
      "type":        "time", "display": "Page Ready", "chart": true, "chartColor": "rgba(125,125,245,0.75)",
      "description": "Time to Page Ready\n" +
                     "------------------------------------------\n" +
                     "The time, in milliseconds, between the DOM objects being parsed and the corresponding page " +
                     "completely loaded (i.e. DOM and CSSOM construction complete).\n" +
                     "\n" +
                     "(domComplete - domInteractive)"
    },
    "OnLoad":               {
      "type":        "time", "display": "On Load", "chart": true, "chartColor": "rgba(125,125,125,0.75)",
      "description": "On Load Event\n" +
                     "------------------------------------------\n" +
                     "The time, in millisecond, taken to executed all the JavaScript load events after the " +
                     "corresponding page is completely loaded.\n" +
                     "\n" +
                     "(loadEventEnd - loadEventStart)"
    },
    "FirstPaint":           {
      "type":        "render", "display": "First Paint", "chart": true, "chartColor": "rgba(205,205,205,0.75)",
      "description": "First Paint\n" +
                     "------------------------------------------\n" +
                     "The first time when an UI rendering was detected while loading the current page"
    },
    "FirstContentfulPaint": {
      "type":        "render", "display": "FCP", "chart": true, "chartColor": "rgba(235,180,180,0.75)",
      "description": "First Contentful Paint\n" +
                     "------------------------------------------\n" +
                     "The first time when some content was rendering while loading the current page"
    },
    "RequestCount":         {
      "type":        "transfer", "display": "Request Count", "chart": true, "chartColor": "rgba(60,60,60,0.75)",
      "description": "Request Count\n" +
                     "------------------------------------------\n" +
                     "The number of resources downloaded to complete this page load"
    },
    "CacheResources":       {
      "type":        "transfer", "display": "Cached Resources", "chart": true, "chartColor": "#ccc",
      "description": "Cache Resources\n" +
                     "------------------------------------------\n" +
                     "The list of referenced resources that are cached by the browser"
    },
    "Fetched":              {
      "type":        "transfer", "display": "Fetched Resources", "chart": true, "chartColor": "#999",
      "description": "Fetched Resources\n" +
                     "------------------------------------------\n" +
                     "The list of referenced resources downloaded by the browser"
    },
    "BytesDownloaded":      {
      "type":        "transfer", "display": "Downloaded Bytes", "chart": true, "chartColor": "#667",
      "description": "Bytes Downloaded\n" +
                     "------------------------------------------\n" +
                     "The total number of bytes downloaded to load this page"
    },
    "CompressionRatio":     {
      "type":        "transfer", "display": "Compression Ratio", "chart": true, "chartColor": "#444",
      "description": "Compression Ratio\n" +
                     "------------------------------------------\n" +
                     "The compression ratio of data downloaded to load this page"
    }
  };

  let metadata = METADATA;
  let chart    = null;

  function metaByType(/*String*/type) {
    let meta = {};
    Object.keys(metadata).forEach(function (key) {
      if (type === metadata[key].type) { meta[key] = metadata[key]; }
    });
    return meta;
  }

  function formatDescription(/*String*/description) { return !description ? '' : description.replace('"', '&quot;'); }

  function addHeader(/*Array*/headers) {
    let html = '';
    Object.keys(metadata).forEach(key => {
      if (headers.includes(key)) {
        let keyMeta = metadata[key];
        html += '<th class="label type-' + keyMeta.type + ' type-' + key + '"' +
                ' tooltip="' + formatDescription(keyMeta.description) + '">' + keyMeta.display + '</th>';
      }
    });
    return html;
  }

  function addChartSelect(/*Array*/headers) {
    let html           = '';
    let numOfNonCharts = 0;
    Object.keys(metadata).forEach(key => {
      if (headers.includes(key)) {
        let keyMeta = metadata[key];
        if (keyMeta.chart) {
          html += '<th' +
                  ' class="chart-select type-' + keyMeta.type + ' type-' + key + '"' +
                  ' data-metric="' + key + '"' +
                  ' data-selected="false"' +
                  ' data-color="' + keyMeta.chartColor + '">' +
                  '<i class="fas fa-chart-bar off"></i>' +
                  '</th>';
        } else {
          numOfNonCharts++;
        }
      }
    });

    return '<th class="chart-no-select type-test chart-select-all" colspan="' + numOfNonCharts + '">' +
           '<i class="fa fa-check-double chart-select-all" all-selected="false" title="click to select all metrics"></i>' +
           '</th>' +
           html;
  }

  function formatMetric(/*Object*/data, /*String*/type) {
    if (!data || !type) { return ''; }

    if (type === 'test') {
      let text = data;
      // array treatment
      if (data.push && data.pop && data.length) { text = data.reduce((a, b) => a + '<br/>' + b); }
      return text.toString().replace('>>', '&raquo;');
    }

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

    // build grid header (default: show ALL rows)
    let html = '<table class="data-table metrics display" data-page-length="-1"' +
               ' data-script="' + scriptName + '" data-scenario="' + scenarioName + '"><thead>' +
               '<tr><th class="chart-no-select type-activity"></th>' + addChartSelect(headers) + '</tr>' +
               '<tr><th class="label type-activity">Activity</th>' + addHeader(headers) + '</tr>';
    html += '</thead><tbody>';

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
    let container   = '<div id="' + containerId + '" class="metrics-container canHide">' +
                      '<div class="result-controls container-toolbar">' +
                      '<i class="fas fa-chart-bar" id="chart-toggle"' +
                      ' onclick="browserMetrics.showChart(this, \'' + containerId + '\')"' +
                      ' title="toggle chart" data-script="' + scriptName + '" data-scenario="' + scenarioName + '">' +
                      '<span>Metrics Chart</span>' +
                      '</i>' +
                      '</div>' +
                      '</div>';
    $('#app').append(banner + container);
    $('#' + containerId).append(html);
    $('#' + containerId + ' .data-table').dataTable({
      "order":      [[1, "asc"]],
      dom:          '<"top"f l i p>rt',
      lengthMenu:   [[10, 25, 50, -1], [10, 25, 50, "All"]],
      autoWidth: false,
      "columnDefs": [
        {"targets": 1, "width": "15px"}
      ]
    });
  }

  this.showChart = function (/*HTMLElement*/ icon, /*String*/containerId) {
    if (!icon) { return; }

    let checkedMetrics = jQuery('#' + containerId + ' .metrics th.chart-select[data-selected=true]');
    if (!checkedMetrics || checkedMetrics.length < 1) {
      w2alert('Please select one or more metrics (click on label) in order to render visualization', 'ERROR');
      return;
    }

    let scriptName   = jQuery(icon).attr('data-script');
    let scenarioName = jQuery(icon).attr('data-scenario');

    let metricsData = metrics.scripts.find(script => script.name === scriptName)
                             .scenarios.find(scenario => scenario.name === scenarioName).activities;

    let dataLabels = [];
    metricsData.forEach(activity => activity.steps.forEach(step => dataLabels.push('[#' + step.row + '] ' + step.command)));

    let datasets = [];
    checkedMetrics.each(function (index, item) {
      let metricName = item.getAttribute("data-metric");
      let meta       = metadata[metricName];
      let metrics    = {
        data:            [],
        label:           meta.display,
        borderColor:     meta.chartColor,
        backgroundColor: meta.chartColor.substring(0, meta.chartColor.lastIndexOf(',')) + ',0.1)',
        hoverBackgroundColor: meta.chartColor.substring(0, meta.chartColor.lastIndexOf(',')) + ',1)',
        hoverBorderWidth: 5,
        borderWidth:     2,
        tension:         0.3,
        fill:            true,
        radius:          3,
        pointStyle:      "hitRadius"
      };
      metricsData.forEach(activity => activity.steps.forEach(step => metrics.data.push(step[metricName])));
      datasets.push(metrics);
    });

    destroyChart();

    chart = new Chart(document.getElementById('metrics_chart').getContext('2d'), {
      type:    'line',
      data:    {labels: dataLabels, datasets: datasets},
      options: {
        responsive:                  true,
        responsiveAnimationDuration: 200,
        aspectRatio:                 1.3,
        layout:                      {
          padding: {left: 5, right: 5, top: 5, bottom: 5}
        }
      }
    });

    $('#chart_popup').w2popup({
      title:     scriptName + ' / ' + scenarioName,
      width:     Math.max(800, Math.round(window.innerWidth * 0.7)),
      height:    Math.max(629, Math.round(window.innerWidth * 0.7 / 1.25)),
      overflow:  'hidden',
      speed:     '0.3',
      opacity:   '0.25',
      modal:     false,
      style:     'background:#fff',
      showClose: true,
      showMax:   true,
      onClose:   function (event) { destroyChart(); },
      onHide:    function (event) { destroyChart(); }
    });
  };

  function destroyChart() {
    Chart.helpers.each(Chart.instances, function (instance) { instance.destroy(); });
    if (chart !== null) {
      chart.destroy();
      chart = null;
    }
  }

  function toggleMetricInclusion(/*Object*/ display) {
    let selected = display.attr('data-selected');
    if (selected && selected === 'true') {
      excludeMetric(display);
    } else {
      includeMetric(display);
    }
  }

  function includeMetric(/*Object*/ display) {
    display.attr('data-selected', 'true');
    let backgroundColor = display.attr('data-color');
    display.attr('style', 'background:linear-gradient(180deg, ' + backgroundColor + ' -2px, ' +
                          'transparent 10px, ' + backgroundColor + ' 20px)');
  }

  function excludeMetric(/*Object*/ display) {
    display.attr('data-selected', 'false');
    display.attr('style', '');
  }

  this.renderMetrics = function () {
    metrics.scripts.forEach(function (script) {
      script.scenarios.forEach(function (scenario) { renderMetricsGrid(script.name, scenario.name); });
    });

    jQuery('.metrics th.chart-select-all i.chart-select-all').on('click', function (e) {
      let allSelected = $(this).attr('all-selected') === 'true';

      // find current parent id
      let containerId = $(this).closest('.metrics-container').attr('id');
      jQuery('#' + containerId + ' .metrics th.chart-select').each(function (index, item) {
        if (allSelected) { excludeMetric(jQuery(item)); } else { includeMetric(jQuery(item)); }
      });

      $(this).attr('all-selected', allSelected ? 'false' : 'true');
      e.stopImmediatePropagation();
      e.stopPropagation();
    });

    jQuery('.metrics th.chart-select').on('click', function (e) {
      toggleMetricInclusion(jQuery(this));
      e.stopImmediatePropagation();
      e.stopPropagation();
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
            '</div>';

    $('#app').append(html);
  };

  (function () {
    // initialization
  }.call(this));
};
