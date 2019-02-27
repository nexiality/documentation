"use strict";

let DEFAULT_MACRO_LOCATION = 'artifact/script';
let HINT_CLIPBOARD         = 'Copy macro to clipboard';
let showHideOption         = {duration: 50};
let docWindow              = null;

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
        $('#project-advice').html(adviceText).show(showHideOption);
    } else {
        $('#project-advice').remove();
    }
}

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

                defsTable += '<tr class="' + typeClass + '">' +
                             '<td class="datavar-label">' +
                             '<a href="' + def.location + '">' + icon + def.location + '</a>' +
                             '&nbsp;&nbsp;' + (def.dataSheet || '') +
                             '&nbsp;&nbsp;' + (def.position || '') +
                             '</td>' +
                             '<td class="datavar-name">' + def.definedAs + '</td>' +
                             '</tr>';

                if (def.advices && def.advices.length > 0) {
                    for (let j = 0; j < def.advices.length; j++) {
                        advices += '<div class="advice">' + def.advices[j] + '</div>';
                    }
                }
            }

            defsTable += '</table>';
            let nameHTML = name.startsWith('nexial.') ?
                           '<a href="#" onclick="return openDocWindow(\'' + name + '\');">' + name + '</a>' : name;
            tbody.append('<tr><td class="data-name">' + nameHTML + advices + '</td><td>' + defsTable + '</td></tr>');
            advices = '';
        }
    }

    $('.data-table').DataTable({
        processing: true,
        select:     true,
        dom:        '<"top"f l i p>rt',
        lengthMenu: [[10, 25, -1], [10, 25, "All"]],
        colReorder: true,
        columnDefs: [
            {targets: [0], orderData: [1, 0]},
            {targets: [1], orderData: [1, 0]}
        ]
    });

    $('#data-container').show(showHideOption);
    turnOn($('#data-toggle'));
}

function openDocWindow(/*String*/varname) {
    if (docWindow !== null && !docWindow.closed) {
        docWindow.close();
        docWindow = null;
    }

    docWindow = window.open('https://nexiality.github.io/documentation/systemvars/index#' + varname, '_nexial');
    return false;
}

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

    container.show(showHideOption);
    turnOn($('#macro-toggle'));
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
    return '<button class="btn btn-clipboard" title="' + HINT_CLIPBOARD + '" data-clipboard-text="' + macroRef + '">' +
           '<i aria-hidden="true" class="far fa-clipboard"></i>' +
           '</button>';
}

function formatDescription(/*String?*/description) {
    return description ? description.replace(/\n/g, "<br/>") : description;
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
                    return '<div class="macro-name">' +
                           row.sheet + ':' + row.macro +
                           toClipboardButton(toMacroCommand(macroLocation, macroFile, row.sheet, row.macro)) +
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

function toDataVarRow(/*String*/label,/*String*/content,/*String?*/className) {
    if (!content || content.length < 1) { return ''; }

    return '<tr>' +
           '<td class="datavar-label">' + label + '</td>' +
           '<td class="datavar-name' + (className ? ' ' + className : '') + '">' + content + '</td>' +
           '</tr>';
}

function toggleMacro(/*HTMLElement*/icon) { toggleShowHide(icon, '#macro-container'); }

function toggleData(/*HTMLElement*/icon) { toggleShowHide(icon, '#data-container'); }

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

function toggleAdvice(/*HTMLElement*/icon, /*String*/target) { toggleDataDefs(icon, target + ' .advice'); }

function toggleDataDefs(/*HTMLElement*/icon, /*String*/target) {
    if (!icon || !target) { return; }

    if (isCurrentlyOff(icon)) {
        $(target).show(showHideOption);
        turnOn(icon);
    } else {
        $(target).hide(showHideOption);
        turnOff(icon);
    }
}
