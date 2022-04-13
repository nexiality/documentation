/*
 * Copyright 2012-2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

'use strict';

const defaultFont = 'Trebuchet MS, Arial, Helvetica, sans-serif';
Chart.defaults.font = {
  family:    defaultFont,
  size:      14,
  fontColor: 'rgba(50,50,50,0.15)',
};

Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(50,50,50,0.9)';
Chart.defaults.plugins.tooltip.titleColor = '#fff';
Chart.defaults.plugins.tooltip.titleFont = {
  family: defaultFont,
};
Chart.defaults.plugins.tooltip.bodyFont = {
  family: defaultFont,
  size:   14,
};
Chart.defaults.plugins.tooltip.bodyColor = 'rgba(255,255,255,0.8)';
Chart.defaults.plugins.tooltip.bodySpacing = 0;
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.boxPadding = 5;


let ExecutionChart = function (summary) {
  const levelExecution = 'EXECUTION';
  const levelScript = 'SCRIPT';
  const levelScenario = 'SCENARIO';
  const dataSetJSON = {
    'passPercentage': {
      'label':           'pass %',
      'backgroundColor': '#aff',
      'borderColor':     '#09f',
      'borderWidth':     2,
      'tension':         0.3,
      'fill':            false,
      'radius':          4,
      'pointStyle':      'rectRounded',
      'yAxisID':         'y-axis-1',
      'type':            'line',
    },
    'fail':           {
      'label':           'fail',
      'borderColor':     'rgba(100,10,10,1)',
      'backgroundColor': 'rgba(200,0,0,0.60)',
      'borderWidth':     1,
      'tension':         0.3,
      'fill':            true,
      'yAxisID':         'y-axis-1',
    },
    'pass':           {
      'label':           'pass',
      'borderColor':     'rgba(10,100,10,0.5)',
      'backgroundColor': 'rgba(30,204,30,0.35)',
      'borderWidth':     1,
      'tension':         0.3,
      'fill':            true,
      'yAxisID':         'y-axis-1',
    },
    'total':          {
      'label':           'total',
      'borderColor':     'rgba(0,0,0,0.8)',
      'backgroundColor': 'rgba(128,128,0)',
      'borderWidth':     1,
      'tension':         0.3,
      'fill':            false,
      'yAxisID':         'y-axis-1',
    },
    'duration':       {
      'label':            'duration (min)',
      'borderColor':      'rgba(225,30,225,1)',
      'backgroundColor':  'rgba(180,30,180,1)',
      'borderWidth':      2,
      'spanGaps':         false,
      'tension':          0.1,
      'borderDash':       [2, 2],
      'pointBorderWidth': 1,
      'pointRadius':      4,
      'pointStyle':       'rectRounded',
      'fill':             false,
      'yAxisID':          'y-axis-2',
      'type':             'line',
    },
    'skipped': {
       'label':           'skipped',
       'borderColor':     'rgba(0,0,0,0.5)',
       'backgroundColor': 'rgba(230,230,230)',
       'borderWidth':     1,
       'tension':         0.3,
       'fill':            true,
       'yAxisID':         'y-axis-1',
    },
  };

  let trace = [];
  let current = summary;
  let executionLevel = levelExecution;
  let heading = summary.name;
  let subTitle = executionLevel;
  let chartDetails = getChartDetails();

  this.initializeChart = function () {
    hideNavigationButtons();
    document.getElementById('resultsChart').onclick = drillDown;
    document.getElementById('resetResultsChart').onclick = resetChart;
    document.getElementById('rollUpResultsChart').onclick = rollUp;
  };

  function getChartDetails() {
    return new Chart(document.getElementById('resultsChart'), {
      type:    'bar',
      data:    getChartData(summary, ['']),
      options: getOptions(summary),
    });
  }

  function getChartData(obj, labels) {
    return {
      labels:   labels,
      datasets: [
        {...dataSetJSON.passPercentage, data: [(obj.passCount / summary.totalSteps) * 100]},
        {...dataSetJSON.fail, data: [obj.failCount]},
        {...dataSetJSON.pass, data: [obj.passCount]},
        {...dataSetJSON.total, data: [obj.totalSteps]},
        {...dataSetJSON.duration, data: [getDuration(obj.endTime, obj.startTime)]},
        {...dataSetJSON.skipped, data: [obj.skippedCount]}
      ],
    };
  }

  function getDuration(startTime, endTime) {
    return (new Date(startTime).getTime() - new Date(endTime).getTime()) / 60000;
  }

  function drillDown(click) {
    let points = chartDetails.getElementsAtEventForMode(click, 'nearest', {intersect: true}, true);
    if (points.length) {
      if (current.executionLevel === levelScenario) { return; }

      if (executionLevel !== levelExecution) {
        let currentIndex = points[0].index;
        current = current.nestedExecutions[currentIndex];
        executionLevel = current.nestedExecutions[0].executionLevel;
        trace.push(currentIndex);
      } else {
        executionLevel = levelScript;
      }

      heading = getHeading(trace);
      updateChart();
      showNavigationButtons();
    }
  }

  function updateChart() {
    let labels = [];
    let datasets = [];
    let chartData = {};

    let passCountData = [];
    let failCountData = [];
    let totalData = [];
    let percentageData = [];
    let durationData = [];
    let skippedCountData = [];

    for (let execution in current.nestedExecutions) {
      let currentExecution = current.nestedExecutions[execution];
      labels.push(currentExecution.name);

      percentageData.push((currentExecution.passCount / currentExecution.totalSteps) * 100);
      failCountData.push(currentExecution.failCount);
      passCountData.push(currentExecution.passCount);
      totalData.push(currentExecution.totalSteps);
      skippedCountData.push(currentExecution.skippedCount);
      durationData.push(getDuration(currentExecution.endTime, currentExecution.startTime));
    }

    datasets.push({...dataSetJSON.passPercentage, data: percentageData});
    datasets.push({...dataSetJSON.fail, data: failCountData});
    datasets.push({...dataSetJSON.pass, data: passCountData});
    datasets.push({...dataSetJSON.total, data: totalData});
    datasets.push({...dataSetJSON.skipped, data: skippedCountData});
    datasets.push({...dataSetJSON.duration, data: durationData});

    chartData.labels = labels;
    chartData.datasets = datasets;

    let config = {
      data:    {
        labels:   chartData.labels,
        datasets: chartData.datasets,
      },
      options: getOptions(current),
    };

    chartDetails.data = config.data;
    chartDetails.options = config.options;
    chartDetails.update();
  }

  function getHeading(trace) {
    if (trace.length > 0) {
      let headings = [summary.name];
      let executionElements = summary;

      for (let i = 0; i < trace.length; i++) {
        executionElements = executionElements.nestedExecutions[trace[i]];
        headings.push(executionElements.name);
      }
      return headings.join(' - ');
    }
    executionLevel = levelScript;
    return summary.name;
  }

  function hideNavigationButtons() {
    document.getElementById('chartInstruction').style.display = 'initial';
    document.getElementById('rollUpResultsChart').style.display = 'none';
    document.getElementById('resetResultsChart').style.display = 'none';
  }

  function showNavigationButtons() {
    document.getElementById('chartInstruction').style.display = 'none';
    document.getElementById('resetResultsChart').style.display = 'initial';
    document.getElementById('rollUpResultsChart').style.display = 'initial';
  }

  function resetChart() {
    executionLevel = levelExecution;
    heading = summary.name;
    current = summary;
    chartDetails.data = getChartData(current, ['']);
    chartDetails.options = getOptions(current);
    chartDetails.update();
    trace = [];
    hideNavigationButtons();
  }

  function rollUp() {
    if (trace.length < 0) {
      alert('Invalid operation.');
      return;
    }

    if (trace.length < 1) {
      executionLevel = levelExecution;
      resetChart();
      return;
    }

    current = summary;
    for (let i = 0; i < trace.length - 1; i++) {
      current = current.nestedExecutions[trace[i]];
      executionLevel = current.nestedExecutions[0].executionLevel;
    }

    trace.pop();
    heading = getHeading(trace);
    updateChart();
    showNavigationButtons();
  }

  function getOptions(obj) {
    return {
      scales:      {
        x:          {
          ticks: {
            stepSize:    1,
            beginAtZero: true,
            font:        {
              size:   14,
              weight: 'bold',
              color:  'rgba(50,50,50,0.75)',
            },
          },
        },
        'y-axis-1': {
          ticks: {
            stepSize:    5,
            beginAtZero: true,
            font:        {
              size: 12,
            },
            color:       'rgba(80,80,80,0.65)',
          },
          title: {
            display: true,
            text:    'steps / %',
            font:    {
              size:   16,
              weight: 'bold',
              color:  'rgba(50,50,50,0.75)',
            },
          },
        },
        'y-axis-2': {
          type:     'linear',
          display:  true,
          position: 'right',
          title:    {
            display: true,
            text:    'duration (min)',
            font:    {
              size:   16,
              weight: 'bold',
              color:  'rgba(50,50,50,0.75)',
            },
          },
          ticks:    {
            stepSize:    0.25,
            beginAtZero: true,
            font:        {
              size: 12,
            },
            color: 'rgba(80,80,80,0.65)',
          },
          grid:     {
            drawOnChartArea: false,
          },
        },
      },
      responsive:  true,
      interaction: {
        intersect: false,
      },
      plugins:     {
        tooltip: {
          mode:     'index',
          position: 'nearest',
        },
        title:   {
          display: true,
          text:    heading,
          font:    {
            size:   18,
            weight: 'bold',
            color:  'rgba(50,50,50,0.95)',
          }
        },
        subtitle: {
          display: true,
          text: executionLevel,
          position: 'bottom',
          align: 'center',
          font: {
            size:   20,
            weight: 'bold',
            color:  'rgba(50,50,50,0.95)',
          }
        },
        legend:  {
          display:  true,
          position: 'top',
          labels:   {
            boxWidth:      10,
            padding:       25,
            usePointStyle: true,
          },
        },
      },
    };
  }
};
