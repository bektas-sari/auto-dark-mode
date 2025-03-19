// Check if dark mode is enabled for the current site
chrome.storage.sync.get(["darkModeEnabled", "excludedSites"], (data) => {
    const darkModeEnabled = data.darkModeEnabled || false;
    const excludedSites = data.excludedSites || [];
  
    // Get the current URL
    const currentUrl = window.location.hostname;
  
    // Apply dark mode if enabled and the site is not excluded
    if (darkModeEnabled && !excludedSites.includes(currentUrl)) {
      document.body.classList.add("dark-mode");
    }
  });