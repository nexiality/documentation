"use strict";

let DEFAULT_MACRO_LOCATION = 'artifact/script';

let HINT_COPY_MACRO          = 'Copy macro to clipboard';
let INSTRUCTION_PASTE_MACRO  = 'This macro is copied to clipboard.<br/>' +
                               'To paste this macro to your script, first place<br/>' +
                               'the cursor on the <code>Cmd Type</code> column (Column C) <br/>' +
                               'of the target test step and then press <br/>' +
                               '<code>CTRL-V</code> (Windows) or <code>COMMAND-V</code> (Mac).';
let HINT_COPY_SCRIPT         = 'Copy generated script for execution';
let INSTRUCTION_EXEC_SCRIPT  = 'Either update the above information, or copy the generated script below into a ' +
                               'command console to execute the changes. When the script execution has completed, ' +
                               'refresh this page to load the latest project information.';
let INSTRUCTION_PASTE_SCRIPT = 'The generated script is copied to clipboard.<br/>' +
                               'You may paste it to a command console (or <br/>' +
                               'terminal) to execute it.';
let REGEX_COMMAND            = /(.+)\.(.+\(.+\))/g;
let REGEX_WIN_PATH           = /^[A-Za-z]:\\(.+)/g;
let REGEX_CRYPT              = /^crypt:.+/g;

let showHideOption = {duration: 50};
let docWindow      = null;

let isWindowsPlatform = window.navigator.appVersion.indexOf('Window') !== -1;
let batchExt          = isWindowsPlatform ? '.cmd' : '.sh';
let nl                = isWindowsPlatform ? '\r\n' : '\n';
let batchStartsWith   = isWindowsPlatform ? '' : './';

// refactor objects
let macroRefactor = {
  config:    {
    fields:             [
      {prop: "file", label: "file", param: "-f", disabled: true},
      {prop: "sheet", label: "sheet", param: "-s", disabled: true},
      {prop: "name", label: "name", param: "-m", disabled: false, autofocus: true},
    ],
    batch:              "nexial-macro-update",
    convertToParams:    function (/*Object*/proposal) {
      return '-f &quot;' + proposal.current.file + '&quot; ' +
             '-s &quot;' + proposal.current.sheet + '&quot; ' +
             '-m &quot;' + proposal.current.name + '=' + proposal.proposed.name + '&quot; ';
    },
    createBatchCommand: function (/*Array*/proposals) {
      if (!proposals || proposals.length < 1) { return ''; }
      let common = batchStartsWith + this.batch + batchExt + ' -t ' + deriveProjectHome() + ' ';

      let script = '';
      proposals.forEach(proposal => script += common + this.convertToParams(proposal) + nl);
      return script;
    }
  },
  current:   null,
  proposals: []
};

let dataRefactor = {
  config:    {
    fields:             [
      {prop: "variable", label: "data variable", param: "-d", disabled: false, autofocus: true}
    ],
    batch:              "nexial-variable-update",
    convertToParams:    function (/*Object*/proposal) {
      return proposal.current.variable + '=' + proposal.proposed.variable + ';';
    },
    createBatchCommand: function (/*Array*/proposals) {
      if (!proposals || proposals.length < 1) { return ''; }
      let script = batchStartsWith + this.batch + batchExt + ' -t ' + deriveProjectHome() + ' -d "';
      proposals.forEach(proposal => script += this.convertToParams(proposal));
      return script + '"' + nl;
    }
  },
  current:   null,
  proposals: []
};

let projectInspector = {
  name:              null,
  nexialHome:        null,
  customNexialHome:  null,
  scanProjectHome:   null,
  customProjectHome: null,
  macro:             macroRefactor,
  data:              dataRefactor
};

/*----- Initial Content Generation -----*/
function loadProjectJson(/*Function*/callback) {
  let params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });

  let jsonLocation = params.json;
  if (!jsonLocation) { return; }

  $.getJSON(jsonLocation, function (json) { callback(json); });
}

function displayProject(/*Object*/json) {
  let projectName                  = json.name;
  projectInspector.name            = projectName;
  projectInspector.scanProjectHome = json.scanProjectHome;
  projectInspector.nexialHome      = json.nexialHome;

  let scanTime = new Date(json.scanTime);
  $('.title').html('Project :: ' + projectName + '<br/>' +
                   '<span class="scanTime">last updated: ' + scanTime + '</span>');
  if (json.advices && json.advices.length > 0) {
    let adviceText = '';
    json.advices.forEach(advice => { adviceText += advice + '<br/>'; });
    $('#project-advice').html(adviceText).show(showHideOption);
  } else {
    $('#project-advice').remove();
  }
}

function postInit() {
}

/*----- Data Variables -----*/
function displayDataVariable(/*Object*/dataVariables) {
  if (!dataVariables) { return; }

  let tbody = $('#data-container .data-table tbody');

  for (let name in dataVariables) {
    let defs = dataVariables[name];

    if (defs && defs.length > 0) {
      let defsTable = '<table class="datavar data-definitions">';
      let advices   = '';

      for (let i = 0; i < defs.length; i++) {
        let def = defs[i];

        let typeClass = '';
        let icon      = '';
        switch (def.type.name) {
          case 'step': {
            icon      = '<i class="far fa-edit"></i>';
            typeClass = 'data-step';
            break;
          }
          case 'commandline': {
            icon      = '<i class="far fa-window-restore"></i>';
            typeClass = 'data-command';
            break;
          }
          case 'project.properties': {
            icon      = '<i class="far fa-file-alt"></i>';
            typeClass = 'data-project';
            break;
          }
          case 'datasheet': {
            icon      = '<i class="far fa-file-excel"></i>';
            typeClass = 'data-datasheet';
            break;
          }
          case '#default': {
            icon      = '<i class="fas fa-table"></i>';
            typeClass = 'data-default';
            break;
          }
        }

        let position = '';
        if (def.dataSheet) { position += '<i class="fas fa-chevron-right"></i>' + def.dataSheet; }
        if (def.position) { position += '<i class="fas fa-chevron-right"></i>' + def.position; }

        let definedAs = '';
        if (def.type.name === 'step' && def.definedAs.match(REGEX_COMMAND)) {
          let type    = def.definedAs.replace(REGEX_COMMAND, '$1');
          let command = def.definedAs.replace(REGEX_COMMAND, '$2');
          definedAs   =
            '<a href="#" onclick="return openCommandDocWindow(\'' + type + '\',\'' + command + '\');">' +
            type + ' &raquo; ' + command + '</a>';
        } else {
          definedAs = def.definedAs.match(REGEX_CRYPT) ? '<span class="crypt">crypt:...</span>' : def.definedAs;
        }

        defsTable += '<tr class="' + typeClass + '">' +
                     '<td class="datavar-label">' +
                     '<a href="' + def.location + '">' + icon + def.location + '</a>' + position +
                     '</td>' +
                     '<td class="datavar-name">' + definedAs + '</td>' +
                     '</tr>';

        if (def.advices && def.advices.length > 0) {
          for (let j = 0; j < def.advices.length; j++) {
            advices += '<div class="advice">' + def.advices[j] + '</div>';
          }
        }
      }

      defsTable += '</table>';

      let dataNameClass = '';
      let nameHTML;
      if (name.startsWith('nexial.') &&
          (!name.startsWith('nexial.scenarioRef.') && !name.startsWith('nexial.scriptRef.'))) {
        nameHTML      = '<a href="#" onclick="return openSysVarDocWindow(\'' + name + '\');">' + name + '</a>';
        dataNameClass = ' data-system';
      } else {
        nameHTML = name;
      }

      nameHTML += toEditDataButton(name);

      tbody.append('<tr class="' + dataNameClass + '">' +
                   '<td class="data-name">' + nameHTML + advices + '</td><td>' + defsTable + '</td>' +
                   '</tr>');
      advices = '';
    }
  }

  $('.data-table').DataTable({
    processing: true,
    select:     true,
    dom:        '<"top"f l i p>rt',
    lengthMenu: [[10, 25, -1], [10, 25, "All"]]
  });

  $('#data-container').show(showHideOption);
  turnOn($('#data-toggle'));
}

function toDataVarRow(/*String*/label,/*String*/content,/*String?*/className) {
  if (!content || content.length < 1) { return ''; }

  return '<tr>' +
         '<td class="datavar-label">' + label + '</td>' +
         '<td class="datavar-name' + (className ? ' ' + className : '') + '">' + content + '</td>' +
         '</tr>';
}

function toggleData(/*HTMLElement*/icon) { toggleShowHide(icon, '#data-container'); }

function toggleAdvice(/*HTMLElement*/icon) { toggleDataDefs(icon); }

function toggleDataDefs(/*HTMLElement*/icon) {
  if (!icon) { return; }

  if (isCurrentlyOff(icon)) {
    turnOn(icon);
  } else {
    turnOff(icon);
  }

  // gather all on's and off's
  let css = '';
  if (isCurrentlyOff($('#advice-toggle'))) { css += '.data-table .advice { display: none; }\n'; }
  if (isCurrentlyOff($('#sysvar-toggle'))) { css += '.data-table .data-system { display: none; }\n'; }
  if (isCurrentlyOff($('#data-step-toggle'))) { css += '.data-table .data-step { display: none; }\n'; }
  if (isCurrentlyOff($('#data-command-toggle'))) { css += '.data-table .data-command { display: none; }\n'; }
  if (isCurrentlyOff($('#data-project-toggle'))) { css += '.data-table .data-project { display: none; }\n'; }
  if (isCurrentlyOff($('#data-datasheet-toggle'))) { css += '.data-table .data-datasheet { display: none; }\n'; }
  if (isCurrentlyOff($('#data-default-toggle'))) { css += '.data-table .data-default { display: none; }\n'; }
  $('#nexial-project').empty().text(css);
}

function toEditDataButton(/*String*/dataRef) {
  return '<i class="far fa-edit refactor" title="edit" ref="' + dataRef + '" onclick="showDataRefactor(this);"></i>';
}

function showDataRefactor(/*HTMLElement*/icon) {
  if (!icon) { return; }

  let ref = $(icon).attr('ref');
  if (!ref || ref === '' || ref.length < 2) {
    console.log("Invalid data variable referenced: " + ref);
    return;
  }

  dataRefactor.current = {variable: ref};

  w2popup.open({
    title:     'Manage Data Variables',
    body:      '<div class="w2ui-centered refactor-ui datavar-edit" id="refactor-ui">' +
               '<div class="slated">' + displaySlatedChanges("data") + '</div>' +
               '<div class="proposed">' + displayProposedChanges("data") + '</div>' +
               '</div>',
    width:     600,
    height:    450,
    overflow:  'hidden',
    speed:     '0.3',
    opacity:   '0.5',
    showClose: true,
    onOpen:    function () {
      $('input[focus="true"]').focus();
      $('input[focus="true"]:text:visible:first').focus();
    }
  });
}

/*----- Macros -----*/
function displayMacros(/*Array*/macroData) {
  if (!macroData || macroData.length < 1) { return; }

  let container = $('#macro-container');

  for (let i = 0; i < macroData.length; i++) {
    let macro    = macroData[i];
    let macroId  = 'macro-' + macro.file;
    let macroUrl = macro.location + '/' + macro.file;

    let adviceText = '';
    if (macro.advices && macro.advices.length) {
      macro.advices.forEach(advice => { adviceText += advice + '<br/>'; });
    }

    // create HTML
    container.append(
      '<div id="' + macroId + '" class="macro-file-container">' +
      '<div class="macro-file">' +
      '<a target="_nexial_link" href="' + macroUrl + '"><i class="far fa-file-alt"></i>' + macroUrl + '</a>' +
      '</div>' +
      (adviceText !== '' ? '<div class="advice">' + adviceText + '</div>' : '') +
      '<table class="macro-table project-artifact display" data-page-length="10">' +
      '<thead>' +
      '<tr><th class="label">Macro</th><th class="label">Expects</th><th class="label">Produces</th></tr>' +
      '</thead>' +
      '</table>' +
      '</div>');

    // call macro data table
    toMacroDataTable('div[id="' + macroId + '"] .macro-table', macro);
  }

  let clipboard = new ClipboardJS('.copy-macro');
  clipboard.on('success', function (event) {
    $(event.trigger).w2tag({
      html:           INSTRUCTION_PASTE_MACRO,
      hideOnKeyPress: true,
      hideOnBlur:     true,
      hideOnClick:    true
    });

  });

  container.show(showHideOption);
  turnOn($('#macro-toggle'));
}

function toMacroCommand(/*String*/location, /*String*/file, /*String*/sheet, /*String*/macro) {
  let macroRef = 'base\tmacro(file,sheet,name)\t';
  if (location) {
    let macroSubdir = '';
    if (location !== DEFAULT_MACRO_LOCATION) {
      let subdirIndex = location.indexOf(DEFAULT_MACRO_LOCATION + '/');
      macroSubdir     = subdirIndex !== -1 ?
                        location.substring(subdirIndex + (DEFAULT_MACRO_LOCATION + '/').length) :
                        location;
      if (macroSubdir !== '') { macroSubdir += '/'; }
      macroRef += macroSubdir;
    }
  }
  macroRef += file + '\t' + sheet + '\t' + macro;
  return macroRef;
}

function toMacroDataTable(/*String*/containerId, /*JSONObject*/macroData) {
  if (!containerId || !macroData || !macroData.data) { return; }

  let data          = macroData.data;
  let macroLocation = macroData.location;
  let macroFile     = macroData.file;

  return $(containerId).DataTable({
    processing: true,
    select:     true,
    dom:        '<"top"f l i p>rt',
    lengthMenu: [[10, 25, -1], [10, 25, "All"]],
    colReorder: true,
    data:       data,
    columns:    [
      {
        data: function (row, type, set, meta) {
          let macroRef = toMacroCommand(macroLocation, macroFile, row.sheet, row.macro);
          return '<div class="macro-name">' +
                 row.sheet + ':' + row.macro +
                 toClipboardButton(macroRef, HINT_COPY_MACRO, 'copy-macro') +
                 toEditMacroButton(macroRef) +
                 '</div>' +
                 '<div class="macro-description">' + formatDescription(row.description) + '</div>';
        }
      },
      {
        data: function (row, type, set, meta) {
          if (row.expects && row.expects.length > 0) {
            let html = '';
            for (let i = 0; i < row.expects.length; i++) {
              let expect = row.expects[i];
              if (!expect) { continue; }
              html += '<table class="datavar expects" cellspacing="3">' +
                      toDataVarRow('Data Variable', expect.name) +
                      toDataVarRow('Default', expect.default) +
                      toDataVarRow('Description', formatDescription(expect.description), 'description') +
                      '</table>';
            }
            return html;
          } else {
            return '&nbsp;';
          }
        }
      },
      {
        data: function (row, type, set, meta) {
          if (row.produces && row.produces.length > 0) {
            let html = '';
            for (let i = 0; i < row.produces.length; i++) {
              let produce = row.produces[i];
              if (!produce) { continue; }
              html += '<table class="datavar produces" cellspacing="3">' +
                      toDataVarRow('Data Variable', produce.name) +
                      toDataVarRow('Description', formatDescription(produce.description), 'description') +
                      '</table>';
            }
            return html;
          } else {
            return '&nbsp;';
          }
        }
      }
    ],
    columnDefs: [
      {targets: [1, 2], className: 'dt-body-center'}
    ]
  });
}

function formatDescription(/*String?*/description) {
  return description ? description.replace(/\n/g, "<br/>") : description;
}

function toggleMacro(/*HTMLElement*/icon) { toggleShowHide(icon, '#macro-container'); }

function toEditMacroButton(macroRef) {
  return '<i class="far fa-edit refactor" title="edit" ref="' + macroRef + '" ' +
         'onclick="showMacroRefactor(this);"></i>';
}

function showMacroRefactor(/*HTMLElement*/icon) {
  if (!icon) { return; }

  let ref = $(icon).attr('ref');
  if (!ref || ref === '') { return; }

  let macroRefs = ref.replace(/^(.+)\t(.+)\t(.+)\t(.+)\t(.+)/g, '$3|$4|$5').split('|');
  if (!macroRefs || macroRefs.length !== 3) {
    console.log("Invalid macro reference: " + ref);
    return;
  }

  macroRefactor.current = {file: macroRefs[0], sheet: macroRefs[1], name: macroRefs[2]};

  w2popup.open({
    title:     'Manage Macros',
    body:      '<div class="w2ui-centered refactor-ui" id="refactor-ui">' +
               '<div class="slated">' + displaySlatedChanges("macro") + '</div>' +
               '<div class="proposed">' + displayProposedChanges("macro") + '</div>' +
               '</div>',
    width:     600,
    height:    450,
    overflow:  'hidden',
    speed:     '0.3',
    opacity:   '0.5',
    showClose: true,
    onOpen:    function () {
      $('input[focus="true"]').focus();
      $('input[focus="true"]:text:visible:first').focus();
    }
  });
}

/*----- Refactor UI -----*/
function resolveRefactorRepo(/*String*/refactorType) {
  if (!refactorType || !projectInspector[refactorType]) { return null; }

  let refactor = projectInspector[refactorType];
  if (!refactor || !refactor.config || !refactor.current) { return null; }

  return refactor;
}

function displaySlatedChanges(/*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  let config  = refactor.config;
  let current = refactor.current;

  let html = '';
  config.fields.forEach(field => {
    let disabled  = field.disabled ? 'disabled="disabled"' : '';
    let autofocus = field.autofocus ? 'focus="true"' : '';
    html += '<div class="field">' +
            '<label for="' + field.prop + '">' + field.label + ':</label>' +
            '<span class="as-found" name="' + field.prop + '">' + current[field.prop] + '</span>' +
            '<i class="fa fa-angle-double-right divider"></i>' +
            '<input name="' + field.prop + '" type="text" ' + disabled + ' ' + autofocus + ' value="' +
            current[field.prop] + '">' +
            '</div>';
  });

  html += '<button name="proposal-add" value="add" class="proposal-add"' +
          ' onclick="addProposal(this,\'' + refactorType + '\')">' +
          '<i class="fa fa-plus-square control"><span>add</span></i>' +
          '</button>';
  return html;
}

function displayProposedChanges(/*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  let hasProposal = refactor && refactor.proposals && refactor.proposals.length > 0;

  return showRefactorProposalTable(refactor) +
         '<div class="proposal-controls">' + (hasProposal ?

         '<i class="fa fa-terminal control" title="generate script to execute changes"' +
         ' onclick="generateProposalScript(\'' + refactorType + '\')"><span>execute</span></i>' +
         '<i class="fa fa-backspace control" title="remove selected changes"' +
         ' onclick="removeProposals(\'' + refactorType + '\')"><span>clear</span></i>' +
         '<i class="fa fa-trash-alt control" title="remove all changes"' +
         ' onclick="emptyProposals(\'' + refactorType + '\')"><span>clear all</span></i>' :

         '<i class="fa fa-terminal control disabled"><span>execute</span></i>' +
         '<i class="fa fa-backspace control disabled"><span>clear</span></i>' +
         '<i class="fa fa-trash-alt control disabled"><span>clear all</span></i>'

         ) + '</div>';
}

function showRefactorProposalTable(refactor) {
  let html = '';

  if (!refactor || !refactor.config) { return html; }

  let config = refactor.config;

  if (refactor && refactor.proposals) {
    let noProposal = refactor.proposals.length === 0;

    html += '<table class="proposed-table" cellspacing="0">';

    if (noProposal) {
      html += '<tr><td><div class="no-proposal">No changes added</div></td></tr>';
    } else {
      html += '<thead><tr><th>use?</th><th>type</th>';
      config.fields.forEach(field => html += '<th>' + field.label + '</th>');
      html += '</tr></thead><tbody>';

      refactor.proposals.forEach(function (proposal, index) {
        html += '<tr>';
        html += '<td class="include" rowspan="2"><input type="checkbox" name="include" checked="checked"' +
                ' itemref="' + index + '" value="' + config.convertToParams(proposal) + '"></td>';

        html += '<td class="current">CURRENT</td>';
        config.fields.forEach(field => html += '<td class="current">' + proposal.current[field.prop] + '</td>');
        html += '</tr>';

        html += '<tr>';
        html += '<td class="proposed"">PROPOSED</td>';
        config.fields.forEach(
          field => html += '<td class="proposed">' + proposal.proposed[field.prop] + '</td>');
        html += '</tr>';
      });

      html += '</tbody>';
    }

    html += '</table>';
  }

  return html;
}

function redrawProposalTable(/*String*/refactorType) {
  $('#refactor-ui div.proposed').empty().html(displayProposedChanges(refactorType));
}

function addProposal(/*HTMLElement*/icon, /*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  let currentValues  = $('#refactor-ui .field .as-found');
  let proposedValues = $('#refactor-ui .field input');
  if (!currentValues || !proposedValues) { return; }

  let current = {};
  currentValues.each(function (index, element) { current[$(element).attr('name')] = element.innerText; });

  let proposed = {};
  proposedValues.each(function (index, element) { proposed[element.name] = element.value; });

  if (serializeRefactorInstance(current) === serializeRefactorInstance(proposed)) {
    $(icon).w2tag({
      html:           'No change found',
      hideOnKeyPress: true,
      hideOnBlur:     true,
      hideOnClick:    true
    });
    return;
  }

  clearExistingProposal(refactor, current);
  refactor.proposals.push({current: current, proposed: proposed});

  // redraw proposal table
  redrawProposalTable(refactorType);
}

function generateProposalScript(/*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  let config = refactor.config;

  // cd to nexial home
  let script = '';
  if (isWindowsPlatform) { script += "C:" + nl; }
  script += "cd " + deriveNexialHome() + nl;
  script += "cd bin" + nl;

  // run script
  script += config.createBatchCommand(refactor.proposals);

  // re-run project inspector
  script += nl;
  script += batchStartsWith + 'nexial-project-inspector' + batchExt + ' -v -t ' + deriveProjectHome() + nl;
  script += nl;
  script += (isWindowsPlatform ? 'echo.' + nl + 'echo.' + nl : 'echo' + nl + 'echo' + nl);
  script += 'echo &quot;update complete, you can reload the Project Inspector page now&quot;' + nl;
  script += nl;

  displayExecuteUI(refactorType, script);
}

function removeProposals(/*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  let keeps = [];
  $('#refactor-ui .proposed-table td input:checkbox').each(function (index, element) {
    if (!element.checked) { keeps.push(refactor.proposals[$(element).attr('itemref')]); }
  });

  refactor.proposals = [];
  keeps.forEach(keep => refactor.proposals.push(keep));
  redrawProposalTable(refactorType);
}

function emptyProposals(/*String*/refactorType) {
  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  refactor.proposals = [];
  redrawProposalTable(refactorType);
}

function clearExistingProposal(/*Object*/ refactor, /*Object*/current) {
  if (!refactor || !refactor.proposals || !current) { return; }

  let currentContent = serializeRefactorInstance(current);

  let deleteIndex = -1;
  for (let i = 0; i < refactor.proposals.length; i++) {
    let proposal = refactor.proposals[i];
    if (deleteIndex === -1 && proposal && proposal.current) {
      let existingContent = serializeRefactorInstance(proposal.current);
      if (existingContent === currentContent) { deleteIndex = i; }
    }
  }

  if (deleteIndex !== -1) { refactor.proposals.splice(deleteIndex, 1); }
}

function displayExecuteUI(/*String*/refactorType,/*String*/script) {
  // display
  w2popup.open({
    title:     'Execute Changes',
    body:      '<div class="w2ui-centered execute-ui" id="execute-ui">' +
               '<div class="config">' + displayProjectConfig(refactorType) + '</div>' +
               '<div class="script">' + displayScript(script) + '</div>' +
               '</div>',
    width:     600,
    height:    450,
    modal:     false,
    overflow:  'hidden',
    speed:     '0.3',
    opacity:   '0.5',
    showClose: true,
    onOpen:    function () {
      let clipboard = new ClipboardJS('.copy-script');
      clipboard.on('success', function (event) {
        $(event.trigger).w2tag({
          html:           INSTRUCTION_PASTE_SCRIPT,
          hideOnKeyPress: true,
          hideOnBlur:     true,
          hideOnClick:    true
        });
      });
    }
  });
}

function displayProjectConfig(/*String*/refactorType) {
  return '<div class="field">' +
         '<label for="nexial-home">NEXIAL HOME:</label>' +
         '<input name="nexial-home" type="text" value="' + deriveNexialHome() + '"' +
         ' refactorType="' + refactorType + '" onchange="updateGenScript()">' +
         '</div>' +
         '<div class="field">' +
         '<label for="project-home">PROJECT HOME:</label>' +
         '<input name="project-home" type="text" value="' + deriveProjectHome() + '"' +
         ' refactorType="' + refactorType + '" onchange="updateGenScript()">' +
         '</div>';
}

function displayScript(script) {
  return '<div class="instruction">' +
         '<i class="fas fa-info-circle"></i>' +
         '<div class="instruction-text">' + INSTRUCTION_EXEC_SCRIPT + '</div>' +
         toClipboardButton(script, HINT_COPY_SCRIPT, 'copy-script') +
         '</div>' +
         '<textarea id="gen-script" class="gen-script">' + script + '</textarea>';
}

function updateGenScript() {
  if (!event) { return; }

  let changeElement = event.target;
  if (!changeElement) { return; }

  let refactorType = $(changeElement).attr('refactorType');
  if (!refactorType) { return; }

  let refactor = resolveRefactorRepo(refactorType);
  if (!refactor) { return; }

  // 1. retrieve old value
  let currentValue = $(changeElement).attr('value');

  // 2. retrieve new value
  let newValue = changeElement.value;

  // 3. convert new value to platform specific
  // 3.1 update refactor repo
  let name = changeElement.name;
  if (name === 'nexial-home') {
    newValue                          = convertForPlatform(newValue);
    projectInspector.customNexialHome = newValue;
  }

  if (name === 'project-home') {
    newValue                           = convertForPlatform(newValue);
    projectInspector.customProjectHome = newValue;
  }

  // 4. search/replace textarea
  $('#gen-script').val($('#gen-script').val().replace(new RegExp(currentValue, 'g'), newValue));
  $('.copy-script').attr('data-clipboard-text', $('#gen-script').val());

  // 5. update changeElement
  $(changeElement).val(newValue);
  $(changeElement).attr('value', newValue);
}

/*----- Utilities -----*/
function openSysVarDocWindow(/*String*/varname) {
  if (docWindow !== null && !docWindow.closed) {
    docWindow.close();
    docWindow = null;
  }

  docWindow = window.open('https://nexiality.github.io/documentation/systemvars/index#' + varname, '_nexial');
  return false;
}

function openCommandDocWindow(/*String*/type,/*String*/command) {
  if (docWindow !== null && !docWindow.closed) {
    docWindow.close();
    docWindow = null;
  }

  docWindow = window.open('https://nexiality.github.io/documentation/commands/' + type + '/' + command, '_nexial');
  return false;
}

function showHowTo(/*String*/elementId) {
  if (!elementId) { return; }

  let howto = $(elementId);
  if (!howto) { return; }

  let title = howto.attr('title');
  howto.w2popup({title: title, style: 'padding:0;overflow:hidden', width: 450, height: 300, showClose: false});
}

function toClipboardButton(/*String?*/cbText, /*String?*/title, /*String?*/classes, /*String?*/sourceId) {
  let html = '<button class="btn btn-clipboard' + (classes ? ' ' + classes : '') + '" title="' + title + '"';
  if (cbText) { html += ' data-clipboard-text="' + cbText.replace(/"/g, '&quot;') + '"'; }
  if (sourceId) { html += ' data-clipboard-target="' + sourceId + '"'; }
  html += '><i aria-hidden="true" class="far fa-clipboard"></i></button>';
  return html;
}

function serializeRefactorInstance(/*Object*/refactorInstance) {
  let content = '';
  for (let prop in refactorInstance) { content += prop + '=' + refactorInstance[prop] + ';'; }
  return content;
}

function toggleCategoryExpansion(/*HTMLElement*/icon) {
  toggleExpansion(icon);
  if (isCurrentlyOff(icon)) {
    turnOff($('#macro-toggle'));
    turnOff($('#data-toggle'));
  } else {
    turnOn($('#macro-toggle'));
    turnOn($('#data-toggle'));
  }
}

function convertForPlatform(homeDirectory) {
  return isWindowsPlatform ? convertForWindows(homeDirectory) : convertForNIX(homeDirectory);
}

function deriveNexialHome() {
  return convertForPlatform(projectInspector.customNexialHome || projectInspector.nexialHome);
}

function deriveProjectHome() {
  return convertForPlatform(projectInspector.customProjectHome || projectInspector.scanProjectHome);
}

function convertForNIX(projectHome) {
  if (!projectHome) { return ''; }

  let path = (
    projectHome.match(REGEX_WIN_PATH) ? projectHome.replace(REGEX_WIN_PATH, '/$1') : projectHome
  ).replace(/\\/g, '/').replace(/\/\//g, '/');
  return path.startsWith('/') || path.startsWith('~/') ? path : '~/' + path;
}

function convertForWindows(projectHome) {
  if (!projectHome) { return ''; }
  return ((projectHome.match(REGEX_WIN_PATH)) ?
          projectHome :
          "C:\\projects\\" + projectHome.replace(/.+\/projects\/(.+)/g, "$1")
  ).replace(/\//g, '\\').replace(/\/\//g, '/');
}

