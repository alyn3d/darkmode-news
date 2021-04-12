var toWhite = document.querySelectorAll(".social-icon, .social-link, .tags-list-item:first-child, .nav-social-link, .widget-weather-details");
var i;
for (i = 0; i < toWhite.length; i++) {
  toWhite[i].style.filter = "invert(1)";
};

var adjustPadding = document.querySelector('.footer-network-nav');
adjustPadding.style.setProperty('padding-top', '20px');

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
::selection {
  color: black;
  background: rgba(255,255,255,0.5);
}
`);