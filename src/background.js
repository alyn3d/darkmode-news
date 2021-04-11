function darkModePage() {
  document.body.style.backgroundColor = '#121212';
  var bodyElements = document.querySelectorAll("html, .lx-c-session-body--sticky, .nw-p-default, .gs-c-media-indicator, .content, .content-main, .content-right, #layout-body, .nav-collapse, .main, .webLinContainer-0-2-121, .TopStories, .Body, .crd, .n-content-layout[data-layout-name=card], .package--basic.package__nav--end, .n-content-body, .o-header__drawer-menu-list, .o-teaser--hero, .o-header__container, .o-teaser__content, div#navContainer, .news, div#bodyMover, div.imgTeaserM.below.white, div.teaserContentWrap, div#bodyContent, .teaserContentWrap, nav, #orb-header, .light-grey-bg, .messages--container, .article-header--metadata-title, .lead-story-most-read, .home-stripe, .homepage--sponsor-content, .home-section, .header-navbar-link, .nw-c-slice-heading__title, .nw-c-slice-heading__action-text, .gs-c-promo-body, footer, header, .product, .news-tips, .media__content, .feature__title, .block-link, .subnav, .column2, #rcs-mainContentTop, #rcs-mainContentBottom, .fc-item, section, .section, .bg, .widget-blog, .widget, .bg-gradient, .bg-white, .container-white");
  var j;
  for (j = 0; j < bodyElements.length; j++) {
    bodyElements[j].style.background = "none";
    bodyElements[j].style.setProperty("background-color", "#121212", "important");
  }
  var elements = document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, a, span, .fc-item__header, .fc-item__standfirst, .book-review-homepage--summary, .tb-megamenu, .dropdown-menu, .ecl-paragraph");
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].style.color = "#FFFFFF";
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: darkModePage
  });
});
