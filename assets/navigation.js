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

jQuery(document).ready(function () {
  jQuery('.tabs .tab-links').on('click', function (e) {
    toggleTabContent(jQuery(this));

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  });

  jQuery('.tabs .tab-links a').on('click', function (e) {
    let li = jQuery(this).parent('li');
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
});
