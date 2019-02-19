"use strict";

let DEFAULT_MACRO_LOCATION = 'artifact/script';
let HINT_CLIPBOARD         = 'Copy macro to clipboard';
let MACRO_INSTRUCTION      = '<i class="fas fa-chalkboard-teacher"></i> Click on a copy icon ' +
                             '<i class="far fa-clipboard"></i> to copy the corresponding macro. After copy, ' +
                             'paste (Ctrl-V or Command-V) into the \'cmd type\' column (Column C) of the target ' +
                             'step. Note that the reference to the macro file (Param 1) might not be correct, ' +
                             'especially if it is referenced by another project. Please verify macro file location ' +
                             'after pasting it to the test script.';

function loadProjectJson(/*Function*/callback) {
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });

    let jsonLocation = params.json;
    if (!jsonLocation) { return; }

    $.getJSON(jsonLocation, function (json) { callback(json); });
}

function displayProject(/*Object*/json) {
    let projectName = json.name;
    let scanTime    = new Date(json.scanTime);
    $('.title').html('Project :: ' + projectName + '<br/>' +
                     '<span class="scanTime">last updated: ' + scanTime + '</span>');
    if (json.advices && json.advices.length > 0) {
        let adviceText = '';
        json.advices.forEach(advice => { adviceText += advice + '<br/>'; });
        $('#project-advice').html(adviceText);
    }
}

function displayMacros(/*Array*/macroData) {
    if (!macroData || macroData.length < 1) { return; }

    $('#macro-container').append('<div class="instruction">' + MACRO_INSTRUCTION + '</div>');

    for (let i = 0; i < macroData.length; i++) {
        let macro    = macroData[i];
        let macroId  = 'macro-' + macro.file;
        let macroUrl = macro.location + '/' + macro.file;

        let adviceText = '';
        if (macro.advices && macro.advices.length) {
            macro.advices.forEach(advice => { adviceText += advice + '<br/>'; });
        }

        // create HTML
        $('#macro-container').append(
            '<div id="' + macroId + '" class="macro-file-container">' +
            '<div class="macro-file">' +
            '<a target="_nexial_link" href="' + macroUrl + '"><i class="far fa-file-alt"></i>' + macroUrl + '</a>' +
            '</div>' +
            (adviceText !== '' ? '<div class="advice">' + adviceText + '</div>' : '') +
            '<table class="project-artifact macro-table display" data-page-length="10">' +
            '<thead>' +
            '<tr><th class="label">Macro</th><th class="label">Expects</th><th class="label">Produces</th></tr>' +
            '</thead>' +
            '</table>' +
            '</div>');

        // call macro data table
        toMacroDataTable('div[id="' + macroId + '"] .macro-table', macro);
    }
}

function postInit() {
    new ClipboardJS('.btn-clipboard');
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

function toClipboardButton(macroRef) {
    return '<button' +
           ' class="btn btn-clipboard"' +
           ' title="' + HINT_CLIPBOARD + '"' +
           ' data-clipboard-text="' + macroRef + '">' +
           '<i aria-hidden="true" class="far fa-clipboard"></i>' +
           '</button>';
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
        data:       data,
        columns:    [
            {
                data: function (row, type, set, meta) {
                    let macroCmd = toMacroCommand(macroLocation, macroFile, row.sheet, row.macro);

                    return '<div class="macro-name">' +
                           row.sheet + ':' + row.macro +
                           toClipboardButton(macroCmd) +
                           '</div>' +
                           '<div class="macro-description">' + row.description + '</div>';
                }
            },
            {
                data: function (row, type, set, meta) {
                    if (row.expects && row.expects.length > 0) {
                        let html = '';
                        for (let i = 0; i < row.expects.length; i++) {
                            let expectedData = row.expects[i];
                            if (!expectedData) { continue; }
                            html += '<table class="datavar expects" cellspacing="3">' +
                                    toDataVarRow('Data Variable', expectedData.name) +
                                    toDataVarRow('Default', expectedData.default) +
                                    toDataVarRow('Description', expectedData.description, 'description') +
                                    '</table>';
                        }
                        return html;
                    } else {
                        return '<NONE>';
                    }
                }
            },
            {
                data: function (row, type, set, meta) {
                    if (row.produces && row.produces.length > 0) {
                        let html = '';
                        for (let i = 0; i < row.produces.length; i++) {
                            let producedData = row.produces[i];
                            if (!producedData) { continue; }
                            html += '<table class="datavar produces" cellspacing="3">' +
                                    toDataVarRow('Data Variable', producedData.name) +
                                    toDataVarRow('Description', producedData.description, 'description') +
                                    '</table>';
                        }
                        return html;
                    } else {
                        return '<NONE>';
                    }
                }
            }
        ],
        columnDefs: [
            {
                targets:   [1, 2],
                className: 'dt-body-center'
            }
        ]
    });
}

function toDataVarRow(/*String*/label,/*String*/content,/*String?*/className) {
    if (!content || content.length < 1) { return ''; }

    return '<tr>' +
           '<td class="datavar-label">' + label + '</td>' +
           '<td class="datavar-name' + (className ? ' ' + className : '') + '">' + content + '</td>' +
           '</tr>';
}

function toggleMacro(/*HTMLElement*/icon) { toggleShowHide(icon, '#macro-container'); }

function toggleCategoryExpansion(/*HTMLElement*/icon) {
    toggleExpansion(icon);
    if (isCurrentlyOff(icon)) {
        turnOff($('#macro-toggle'));
    } else {
        turnOn($('#macro-toggle'));
    }
}
