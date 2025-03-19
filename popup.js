// Toggle dark mode
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    chrome.storage.sync.get(["darkModeEnabled"], (data) => {
      const darkModeEnabled = !data.darkModeEnabled;
      chrome.storage.sync.set({ darkModeEnabled }, () => {
        updateButtonText(darkModeEnabled);
        chrome.tabs.reload(); // Reload the current tab to apply changes
      });
    });
  });
  
  // Add site to excluded list
  document.getElementById("addSite").addEventListener("click", () => {
    const siteInput = document.getElementById("siteInput");
    const siteUrl = siteInput.value.trim();
  
    if (siteUrl) {
      chrome.storage.sync.get(["excludedSites"], (data) => {
        const excludedSites = data.excludedSites || [];
        if (!excludedSites.includes(siteUrl)) {
          excludedSites.push(siteUrl);
          chrome.storage.sync.set({ excludedSites }, () => {
            updateSiteList(excludedSites);
            siteInput.value = ""; // Clear input field
          });
        }
      });
    }
  });
  
  // Update the button text based on dark mode status
  function updateButtonText(darkModeEnabled) {
    const button = document.getElementById("toggleDarkMode");
    button.textContent = darkModeEnabled ? "Disable Dark Mode" : "Enable Dark Mode";
  }
  
  // Update the excluded sites list
  function updateSiteList(excludedSites) {
    const siteList = document.getElementById("siteList");
    siteList.innerHTML = excludedSites.map(site => `<li>${site}</li>`).join("");
  }
  
  // Initialize popup
  chrome.storage.sync.get(["darkModeEnabled", "excludedSites"], (data) => {
    updateButtonText(data.darkModeEnabled || false);
    updateSiteList(data.excludedSites || []);
  });