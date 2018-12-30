"use strict";

function showSection(/*HTMLElement*/icon) {
    let sectionId = $(icon.parentNode).attr('target');
    if (sectionId) { $('#' + sectionId).show(250); }
}

function hideSection(/*HTMLElement*/icon) {
    let sectionId = $(icon.parentNode).attr('target');
    if (sectionId) { $('#' + sectionId).hide(250); }
}

function showAllSections() {
    $('.showhide').each(function (index, elem) { $('#' + $(elem).attr('target')).show(250); });
}

function hideAllSections() {
    $('.showhide').each(function (index, elem) { $('#' + $(elem).attr('target')).hide(250); });
}

function collapsePassRows() { $('tr.noFailure').css('visibility', 'collapse'); }

function showPassRows() { $('tr.noFailure').css('visibility', 'visible'); }