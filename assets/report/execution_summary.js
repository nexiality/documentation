"use strict";

function showSection(/*HTMLElement*/icon) {
  let sectionId = $(icon.parentNode).attr('target');
  if (sectionId) { $('#' + sectionId).show(250); }
}

function hideSection(/*HTMLElement*/icon) {
  let sectionId = $(icon.parentNode).attr('target');
  if (sectionId) { $('#' + sectionId).hide(250); }
}

/**
 * off=true means currently not showing '...' only
 * @param target
 * @returns {boolean}
 */
function isCurrentlyOff(/*HTMLElement|String*/target) {
  let elem = (typeof target) === 'string' ? $('#' + target) : $(target);
  return elem && elem.attr('class') && elem.attr('class').indexOf('off') > -1;
}

function turnOn(/*HTMLElement*/icon, /*String?*/classes) {
  $(icon).attr('class', (classes || 'fas fa-toggle-on') + ' on');
  return $(icon);
}

function turnOff(/*HTMLElement*/icon, /*String?*/classes) {
  $(icon).attr('class', (classes || 'fas fa-toggle-off') + ' off');
  return $(icon);
}

let toggleOptions = {duration: 100, easing: 'linear'};

function toggleShowHide(icon, selectors) {
  if (!icon || !selectors) { return; }
  if (isCurrentlyOff(icon)) {
    $(selectors).show(toggleOptions);
    turnOn(icon);
  } else {
    $(selectors).hide(toggleOptions);
    turnOff(icon);
  }
}

function showStepDetailSections() {
  $('.iteration').show(toggleOptions);
  $('.exec-summary .showhide').show(toggleOptions);
}

function showHideStepDetailSection() {
  if (isCurrentlyOff('iteration-toggle') || isCurrentlyOff('scenario-toggle') || isCurrentlyOff('activity-toggle')) {
    turnOff($('#all-toggle')[0], 'fas fa-check-circle');
  }

  if (isCurrentlyOff('iteration-toggle') && isCurrentlyOff('scenario-toggle') && isCurrentlyOff('activity-toggle')) {
    $('.iteration').hide(toggleOptions);
    $('.exec-summary .showhide').hide(toggleOptions);
  }

  if (isCurrentlyOff('script-toggle')) { $('.exec-summary .showhide').hide(toggleOptions); }
}

function toggleScript(/*HTMLElement*/icon) {
  toggleShowHide(icon, '.plan-step-summary, .exec-summary .showhide');
  showHideStepDetailSection();
  if (isCurrentlyOff('script-toggle')) {
    $('.exec-summary-header').hide(toggleOptions);
  } else {
    $('.exec-summary-header').show(toggleOptions);
  }
}

function toggleIteration(/*HTMLElement*/icon) {
  showStepDetailSections();
  toggleShowHide(icon, '.iter');
  showHideStepDetailSection();
}

function toggleScenario(/*HTMLElement*/icon) {
  showStepDetailSections();
  toggleShowHide(icon, '.scenario');
  showHideStepDetailSection();
}

function toggleActivity(/*HTMLElement*/icon) {
  showStepDetailSections();
  toggleShowHide(icon, '.activity');
  showHideStepDetailSection();
}

function toggleRefs(/*HTMLElement*/icon) { toggleShowHide(icon, '.value-scriptRef, .value-scenarioRef'); }

function toggleTimings(/*HTMLElement*/icon) { toggleShowHide(icon, '.exectime'); }

function togglePassFail(/*HTMLElement*/icon) { toggleShowHide(icon, '.passfail'); }

function collapsePassRows(/*HTMLElement*/icon) {
  $('tr.noFailure').css('visibility', 'collapse');

  // hide the entirety of steps that pass 100%
  $('.planStep:has(.plan-step-summary tr.noFailure)').hide(toggleOptions);

  turnOn($('#failure-toggle')[0], 'fas fa-exclamation-circle');
  turnOff($('#all-toggle')[0], 'fas fa-check-circle');
}

function showPassRows(/*HTMLElement*/icon) {
  $('tr.noFailure').css('visibility', 'visible');

  // hide the entirety of steps that pass 100%
  $('.planStep:has(.plan-step-summary tr.noFailure)').show(toggleOptions);

  turnOff($('#script-toggle')[0]).trigger('click');
  turnOff($('#iteration-toggle')[0]).trigger('click');
  turnOff($('#scenario-toggle')[0]).trigger('click');
  turnOff($('#activity-toggle')[0]).trigger('click');

  turnOff($('#failure-toggle')[0], 'fas fa-exclamation-circle');
  turnOn($('#all-toggle')[0], 'fas fa-check-circle');
  turnOn($('#collapse-toggle'), 'fas fa-expand');
}

function toggleExpansion(/*HTMLElement*/icon) {
  if (isCurrentlyOff(icon)) {
    $('.showhide').each(function (index, elem) { $('#' + $(elem).attr('target')).show(toggleOptions); });
    showHideStepDetailSection();
    turnOn(icon, 'fas fa-expand');
  } else {
    $('.showhide').each(function (index, elem) { $('#' + $(elem).attr('target')).hide(toggleOptions); });
    turnOff(icon, 'fas fa-compress');
  }
}

function copyToClipboard(data) {
  let $temp = $("<input>");
  $("body").append($temp);
  $temp.val(data).select();
  document.execCommand("copy");
  $temp.remove();
}

function scrollToElement(/*String*/selector) {
  let scrollTime = 800;
  let target = $(selector);
  if (target) {
    $([document.documentElement, document.body]).animate({scrollTop: target.offset().top}, scrollTime);
    setTimeout(function () {
      target.fadeOut(100).fadeIn(scrollTime / 2)
            .fadeOut(100).fadeIn(scrollTime / 2);
    }, scrollTime);
  }
}

function viewLog(selector) {
  let showTime = 800;
  let hideButton = $('#hideLog');
  $(selector).show(showTime, function () {
    hideButton.attr('target', selector);
    hideButton.show();
  });
}

function hideLog() {
  let hideTime = 800;
  let hideButton = $('#hideLog');
  let logId = hideButton.attr('target');
  if (logId) {
    $(logId).hide(hideTime, function () {
      hideButton.attr('target', '');
      hideButton.hide();
    });
  } else {
    hideButton.hide();
  }
}

function toggleWsDisplay(/*HTMLElement*/button) {
  let elem = $(button);
  elem.toggleClass('is-active');

  let methodSelector = "";
  $(".wsDetail-filter-method > .wsDetail-filter-button:not('.is-active')").text(
    function (index, text) { methodSelector += ',.wsMethod-' + text; }
  );

  let returnSelector = "";
  $(".wsDetail-filter-returnCode > .wsDetail-filter-button:not('.is-active')").text(
    function (index, text) {
      returnSelector += text.endsWith('xx') ?
                        ',[class*="returnCode-' + text.substring(0, 1) + '"]' :
                        ',.returnCode-' + text;
    }
  );

  let matches = $(methodSelector.substr(1)).has(returnSelector.substr(1));
  setTimeout(function () { matches.slideDown(250); }, 50);
  $('.wsDetail').slideUp(20);
}

function dimHighlightIcon(ref, classToHighlight, classToDim){
  const isShowing = $(ref).attr('nex-showing');
  if(isShowing && isShowing == "true"){
    $(ref).removeClass(classToHighlight);
    $(ref).addClass(classToDim);
    $(ref).attr('nex-showing', "false");
  } else {
    $(ref).removeClass(classToDim);
    $(ref).addClass(classToHighlight);
    $(ref).attr('nex-showing', "true");
  }
}

function toggleStepErrors(ref){
  const isShowing = $(ref).attr('nex-showing');
  dimHighlightIcon(ref, "execution-error-icon-highlight", "execution-error-icon");
  const target = $(ref.parentNode.parentNode.parentNode.parentNode).next();
  const error = target.find("td > table > tbody > tr[is-step-error]");
  for(let i = 0; i < error.length; i++) {
    const isError = $(error[i]).attr('is-step-error')
    if (isError && isError == "true") {
      if(isShowing && isShowing == "true") {
        $(error[i]).attr("showingError","false");
      } else {
         $(error[i]).attr("showingError","true");
      }
    }
  }
  refreshList(target);
}

function toggleStepFiles(ref){
  const isShowing = $(ref).attr('nex-showing');
  dimHighlightIcon(ref, "execution-screenshot-icon-highlight", "execution-error-icon");
  const target = $(ref.parentNode.parentNode.parentNode.parentNode).next();
  const links = target.find("td > table > tbody > tr > td > a")
  if(isShowing && isShowing == "true"){
  for(let i = 0; i < links.length; i++){
    const row = $(links[i].parentNode.parentNode);
      $(row).attr("showingFile","false");
    }
  } else {
    for(let i = 0; i < links.length; i++){
      const row = $(links[i].parentNode.parentNode);
        $(row).attr("showingFile","true");
    }
  }
  refreshList(target);
}

function refreshList(target){
  const rows = target.find("td > table > tbody > tr");
  let isAnyVisible = false;
  for(let i = 0; i < rows.length; i++){
    const isShowingFile = $(rows[i]).attr("showingFile");
    const isShowingError = $(rows[i]).attr("showingError");
    if( (isShowingFile && isShowingFile == "true") || (isShowingError && isShowingError == "true" ) ) {
      $(rows[i]).show(250);
      isAnyVisible = true;
    } else {
        $(rows[i]).hide(250);
    }
  }
  if(isAnyVisible == true){
    target.show(250);
  } else {
    target.hide(250);
  }
}