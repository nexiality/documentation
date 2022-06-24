'use strict';

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

let toggleOptions = { duration: 100, easing: 'linear' };

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
		$('.showhide').each(function(index, elem) { $('#' + $(elem).attr('target')).show(toggleOptions); });
		showHideStepDetailSection();
		turnOn(icon, 'fas fa-expand');
	} else {
		$('.showhide').each(function(index, elem) { $('#' + $(elem).attr('target')).hide(toggleOptions); });
		turnOff(icon, 'fas fa-compress');
	}
}

function copyToClipboard(data) {
	let $temp = $('<input>');
	$('body').append($temp);
	$temp.val(data).select();
	document.execCommand('copy');
	$temp.remove();
}

function scrollToElement(/*String*/selector) {
	let scrollTime = 800;
	let target = $(selector);
	if (target) {
		$([document.documentElement, document.body]).animate({ scrollTop: target.offset().top }, scrollTime);
		setTimeout(function() {
			target.fadeOut(100).fadeIn(scrollTime / 2)
						.fadeOut(100).fadeIn(scrollTime / 2);
		}, scrollTime);
	}
}

function viewLog(selector) {
	let showTime = 800;
	let hideButton = $('#hideLog');
	$(selector).show(showTime, function() {
		hideButton.attr('target', selector);
		hideButton.show();
	});
}

function hideLog() {
	let hideTime = 800;
	let hideButton = $('#hideLog');
	let logId = hideButton.attr('target');
	if (logId) {
		$(logId).hide(hideTime, function() {
			hideButton.attr('target', '');
			hideButton.hide();
		});
	} else {
		hideButton.hide();
	}
}

function toggleReturnCodeGroup(/*HTMLElement*/button) {
	let elem = $(button);
	elem.toggleClass('is-active');
	let isElementActive = (elem[0].classList.value.toLowerCase().indexOf('is-active') > -1);
	let elementList = $('.' + elem[0].textContent.toLowerCase());
	elementList.text(
		function(index, text) {
			if (isElementActive) {
				$(elementList[index]).addClass('is-active');
				document.getElementById('selected-' + elem[0].textContent.toLowerCase()).value = '';
			} else {
				$(elementList[index]).removeClass('is-active');
				document.getElementById('selected-' + elem[0].textContent.toLowerCase()).value = 'All';
			}
		},
	);
	const method = methodSelector();
	const returnValue = returnSelector();
	matches(method.selector, returnValue.selector);
}

function methodSelector() {
	let method = { selector: '', value: '' };
	$('.wsDetail-filter-method > .wsDetail-filter-button:not(\'.is-active\')').text(
		function(index, text) {
			method.selector += ',.wsMethod-' + text;
			method.value += text + ',';
		},
	);
	return method;
}

function returnSelector() {
	let returnValue = { selector: '', value: '' };
	$('.wsDetail-filter-returnCode > .wsDetail-filter-button:not(\'.is-active\')').text(
		function(index, text) {
			returnValue.selector += text.endsWith('xx') ?
															',[class*="returnCode-' + text.substring(0, 1) + '"]' :
															',.returnCode-' + text;
			returnValue.value += text + ',';
		},
	);
	return returnValue;
}

function matches(method, returnValue) {
	let matches = $(method.substr(1)).has(returnValue.substr(1));
	setTimeout(function() { matches.slideDown(250); }, 50);
	$('.wsDetail').slideUp(20);
}

function selectAll(/*HTMLElement*/button) {
	let elem = $(button);
	let methodSelector = '';
	let returnSelector = '';
	$('.wsDetail-filter-method > .wsDetail-filter-button')
		.text(function(index, text) { methodSelector += ',.wsMethod-' + text; });
	$('.wsDetail-filter-returnCode > .wsDetail-filter-button').text(
		function(index, text) {
			returnSelector += text.endsWith('xx') ?
												',[class*="returnCode-' + text.substring(0, 1) + '"]' :
												',.returnCode-' + text;
		});
	matches(methodSelector, returnSelector);
	let dropDownButtons = document.getElementsByClassName('dropbtn');
	for (let dropDownButton = 0; dropDownButton < dropDownButtons.length; dropDownButton++) {
		if (dropDownButtons[dropDownButton].classList.value) {
			dropDownButtons[dropDownButton].classList.remove('is-active');
			let filterButtons = document.getElementsByClassName('wsDetail-filter-button');
			for (let filterButton = 0; filterButton < filterButtons.length; filterButton++) {
				filterButtons[filterButton].classList.remove('is-active');
			}
		}
	}
	document.getElementById('methodName').value = 'All';
	document.getElementById('selected-2xx').value = 'All';
	document.getElementById('selected-3xx').value = 'All';
	document.getElementById('selected-4xx').value = 'All';
	document.getElementById('selected-5xx').value = 'All';
}

function clearAll() {
	let methodSelector = '';
	let returnSelector = '';
	let dropDownButtons = document.getElementsByClassName('dropbtn');
	for (let dropDownButton = 0; dropDownButton < dropDownButtons.length; dropDownButton++) {
		if (dropDownButtons[dropDownButton].classList.value) {
			dropDownButtons[dropDownButton].classList.add('is-active');
			let filterButtons = document.getElementsByClassName('wsDetail-filter-button');
			for (let filterButton = 0; filterButton < filterButtons.length; filterButton++) {
				filterButtons[filterButton].classList.add('is-active');
			}
		}
	}
	matches(methodSelector, returnSelector);
	document.getElementById('methodName').value = '';
	document.getElementById('selected-2xx').value = '';
	document.getElementById('selected-3xx').value = '';
	document.getElementById('selected-4xx').value = '';
	document.getElementById('selected-5xx').value = '';
}

function toggleWsDisplay(/*HTMLElement*/button) {
	let arr = [];
	let elem = $(button);
	elem.toggleClass('is-active');
	const method = methodSelector();
	const returnValue = returnSelector();
	matches(method.selector, returnValue.selector);
	let value = '';
	for (let i = 0; i < elem[0].classList.length; i++) {
		if (elem[0].classList[i].indexOf('xx') > -1) {
			value = elem[0].classList[i];
			if (elem[0].classList.value.toLowerCase().indexOf('is-active') > -1) {
				document.getElementsByClassName('dropbtn-' + elem[0].classList[i])[0].classList.add('is-active');
			}
		}
		if (elem[0].classList[i] == 'method-' + elem[0].innerText) {
			value = 'method-dropBTN';
		}
	}

	let dropLength = document.getElementsByClassName(value).length;
	for (let i = 0; i < dropLength; i++) {
		if (document.getElementsByClassName(value)[i].classList.value.toLowerCase().indexOf('is-active') <= -1) {
			arr.push(document.getElementsByClassName(value)[i].innerText);
		}
	}

	if (value.indexOf('method') < 0 && dropLength == arr.length &&
			document.getElementsByClassName('dropbtn-' + value).length == 1) {
		document.getElementsByClassName('dropbtn-' + value)[0].classList.remove('is-active');
		document.getElementById('selected-' + value).value = 'All';
	} else if (value.indexOf('method') < 0) {
		document.getElementById('selected-' + value).value = arr.toString();
	} else {
		for (let j = 0; j < 5; j++) {
			if (document.getElementsByClassName('method')[j].classList.value.toLowerCase().indexOf('is-active') <= -1) {
				arr.push(document.getElementsByClassName('method')[j].innerText);
			}
		}
		let methodFilter = document.getElementsByClassName('dropbtn-method');
		if (getSelectedMethodList().length == 0) {
		    methodFilter[0].classList.remove('is-active');
			document.getElementById('methodName').value = 'All';
		} else {
		    methodFilter[0].classList.add('is-active');
		  	document.getElementById('methodName').value = getUnselectedMethodList().toString();
		}

	}
}

function getSelectedMethodList() {
  var selectedMethodArr = [];
  $('.wsDetail-filter-method > .method-dropBTN.is-active').text(
  		function(index, text) {
  		  selectedMethodArr.push(text);
  		},
  	);
  	return selectedMethodArr;
}

function getUnselectedMethodList() {
  var unselectedMethodArr = [];
  $('.wsDetail-filter-method > .method-dropBTN:not(\'.is-active\')').text(
  		function(index, text) {
  		  unselectedMethodArr.push(text);
  		},
  	);
  	return unselectedMethodArr;
}

function isNexShowing(ref) {
	const isShowing = $(ref).attr('nex-showing');
	return isShowing && isShowing == 'true';
}

function setNexShowing(elem, show) { elem.attr('nex-showing', show ? 'true' : 'false'); }

function setShowError(elem, show) { elem.attr('showingError', show ? 'true' : 'false'); }

function dimHighlightIcon(ref, classToHighlight, classToDim) {
	const isShowing = isNexShowing(ref);
	let elem = $(ref);
	if (isShowing) {
		elem.removeClass(classToHighlight);
		elem.addClass(classToDim);
	} else {
		elem.removeClass(classToDim);
		elem.addClass(classToHighlight);
	}
	setNexShowing(elem, !isShowing);
}

function toggleStepErrors(ref) {
	const isShowing = isNexShowing(ref);
	dimHighlightIcon(ref, 'execution-error-icon-highlight', 'execution-error-icon');
	const target = $(ref.parentNode.parentNode.parentNode.parentNode).next();
	const error = target.find('td > table > tbody > tr[is-step-error]');
	for (let i = 0; i < error.length; i++) {
		let elem = $(error[i]);
		const isError = (elem.attr('is-step-error') || 'false') === 'true';
		setShowError(elem, !isError);
	}
	refreshList(target);
}

function toggleStepFiles(ref) {
	const isShowing = isNexShowing(ref);
	dimHighlightIcon(ref, 'execution-screenshot-icon-highlight', 'execution-error-icon');
	const target = $(ref.parentNode.parentNode.parentNode.parentNode).next();
	const links = target.find('td > table > tbody > tr > td > a');
	if (isShowing) {
		for (let i = 0; i < links.length; i++) {
			const row = $(links[i].parentNode.parentNode);
			$(row).attr('showingFile', 'false');
		}
	} else {
		for (let i = 0; i < links.length; i++) {
			const row = $(links[i].parentNode.parentNode);
			$(row).attr('showingFile', 'true');
		}
	}
	refreshList(target);
}

function refreshList(target) {
	const rows = target.find('td > table > tbody > tr');
	let isAnyVisible = false;
	for (let i = 0; i < rows.length; i++) {
		const isShowingFile = $(rows[i]).attr('showingFile');
		const isShowingError = $(rows[i]).attr('showingError');
		if ((isShowingFile && isShowingFile == 'true') || (isShowingError && isShowingError == 'true')) {
			$(rows[i]).show(250);
			isAnyVisible = true;
		} else {
			$(rows[i]).hide(250);
		}
	}

	if (isAnyVisible === true) {
		target.show(250);
	} else {
		target.hide(250);
	}
}
