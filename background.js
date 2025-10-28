// background.js
function updateRules() {
  chrome.storage.sync.get(['blockedSites'], (result) => {
    const blockedSites = result.blockedSites || [];

    // Jeśli lista jest pusta, usuń wszystkie reguły i zakończ
    if (blockedSites.length === 0) {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [], // Usuń wszystkie reguły, jeśli lista jest pusta
      });
      return;
    }

    // Usuń stare reguły (jeśli istnieją)
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: blockedSites.map((_, index) => index + 1),
    });

    // Dodaj nowe reguły
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: blockedSites.map((site, index) => ({
        id: index + 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { url: "https://www.google.com" }, // Przekieruj na Google
        },
        condition: {
          urlFilter: site,
          resourceTypes: ["main_frame"], // Blokuj tylko główne ramki (strony)
        },
      })),
    });
  });
}

// Nasłuchuj wiadomości z popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "refreshRules") {
    updateRules();
    sendResponse({ success: true }); // Potwierdź wykonanie
  }
});

// Aktualizuj reguły przy starcie rozszerzenia
updateRules();
