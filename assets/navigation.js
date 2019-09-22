"use strict";

function adjustPosition() { if (document.location.href.indexOf('#') !== -1) { window.scrollBy(0, -200); } }

function toggleTabContent(tabLink) {
  tabLink.parent().find('.tab-content').toggle(250, function () {
    if (tabLink.hasClass('tabs-collapsed')) {
      tabLink.removeClass('tabs-collapsed');
    } else {
      tabLink.addClass('tabs-collapsed');
    }
  });
}

function scrollToHash(/*String*/hash) {
  location.hash = "#_";
  location.hash = hash;
  window.scrollBy(0, -200);
}

function scrollToTop() {
  location.hash = "";
  window.scrollTo(0, 0);
}

function scrollToOperation(/*HTMLElement*/select) {
  if (!select || !select.selectedIndex) { return; }

  var selected = select.options[select.selectedIndex];
  if (!selected) { return; }

  var hash = selected.getAttribute('hash');
  if (!hash) { return; }

  scrollToHash(hash);
}

function scrollToTab(/*String*/tabId,/*String*/hash) {
  scrollToHash(hash);
  jQuery('#' + tabId).click();
}

function newOperationSelect() {
  var operationsSelect = '<select class="operations" onchange="scrollToOperation(this);"><option>Operations</option>';
  jQuery('#operations ~ h4, #available-functions ~ h4').each(function (index, item) {
    operationsSelect += '<option hash="#' + jQuery(item).attr('id') + '">' + jQuery(item).text() + '</option>';
  });
  operationsSelect += '</select>';
  jQuery('div.breadcrumb').append(operationsSelect);
}

jQuery(document).ready(function () {
  jQuery('.tabs .tab-links').on('click', function (e) {
    toggleTabContent(jQuery(this));

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  });

  jQuery('.tabs .tab-links a').on('click', function (e) {
    let li      = jQuery(this).parent('li');
    let tabLink = li.parent();

    if (li.hasClass('active')) {
      toggleTabContent(tabLink);
    } else {
      if (jQuery(tabLink).hasClass('tabs-collapsed')) { toggleTabContent(tabLink); }
    }

    let currentAttrValue = jQuery(this).attr('href');
    jQuery('.tabs ' + currentAttrValue).slideDown(250).siblings().slideUp(250);
    li.addClass('active').siblings().removeClass('active');

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  });

  /*
   <div class="pageLinks">
   <div class="pageLink" onclick="scrollToHash('available-expressions')">What is Nexial Expression?</div>
   </div>
   */
  var html = '<div class="backToTop" onclick="scrollToTop()">&nbsp;</div>';
  var sections = jQuery('h3:not(.pageTitle)');
  if (sections && sections.length > 0) {
    html += '<div class="pageLinks">';
    sections.each(function(index,elem) {
      html += '<div class="pageLink" onclick="scrollToHash(\'' + elem.getAttribute('id') + '\')">' + $(elem).text() + '</div>';
    });
    html += '</div>';
  }

  jQuery('h3.pageTitle').after(html);
});
