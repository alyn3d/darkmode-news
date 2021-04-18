//! Supported Websites
let supportedWebsites = ["digi24.ro", "theguardian.com", "reuters.com", "bbc.com", "foreignaffairs.com", "dw.com", "ft.com", "chicagotribune.com", "apnews.com", "europa.eu", "*2lib.org"];

//* Define "Enable" button
let enableDarkMode = document.getElementById("enableDarkMode");

//* Popup Functions
document.addEventListener('DOMContentLoaded', function() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  // If website is supported Set button to "Enabled"
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    
    let onSupportedWebsite = supportedWebsites.map(supportedWebsite => tab.url.includes(supportedWebsite) );
    
    if ( onSupportedWebsite.some( i => i === true ) ) {
      setButtonClicked();
    }
  });
});

//* Click the button
enableDarkMode.addEventListener("click", enableDark);

function enableDark() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  // If website is supported Set button to "Enabled"
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.executeScript(tab.id, {
      file: 'run.js'
    });
    setButtonClicked();
  });
  
};

function setButtonClicked () {
  enableDarkMode.textContent = "Enabled";
  enableDarkMode.style.backgroundColor = "#357a38";
  enableDarkMode.style.color = "#ffffff";
  enableDarkMode.disabled = true;
}