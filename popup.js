// Language translations
const translations = {
  en: {
    title: "Site Blocker",
    languageLabel: "Language:",
    loadFromUrlLabel: "Load list from URL",
    addManuallyLabel: "Add sites manually",
    urlLabel: "URL to blocked sites list:",
    manualSitesLabel: "Add sites manually (comma-separated):",
    loadListButton: "Load list",
    addManualSitesButton: "Add sites",
    refreshRulesButton: "Refresh rules",
    currentSitesLabel: "Currently blocked sites:",
    statusLoading: "Loading list...",
    statusLoaded: (count) => `Loaded ${count} sites!`,
    statusError: (error) => `Error: ${error}`,
    statusAdded: (count) => `Added ${count} sites!`,
    statusRulesRefreshed: "Rules updated!",
    statusEmpty: "No blocked sites.",
  },
  pl: {
    title: "Bloker Stron",
    languageLabel: "Język:",
    loadFromUrlLabel: "Pobierz listę z linka",
    addManuallyLabel: "Dodaj strony ręcznie",
    urlLabel: "Link do listy blokowanych stron:",
    manualSitesLabel: "Dodaj strony ręcznie (po przecinku):",
    loadListButton: "Załaduj listę",
    addManualSitesButton: "Dodaj strony",
    refreshRulesButton: "Odśwież reguły",
    currentSitesLabel: "Aktualnie zablokowane strony:",
    statusLoading: "Ładowanie listy...",
    statusLoaded: (count) => `Załadowano ${count} stron!`,
    statusError: (error) => `Błąd: ${error}`,
    statusAdded: (count) => `Dodano ${count} stron!`,
    statusRulesRefreshed: "Reguły zaktualizowane!",
    statusEmpty: "Brak zablokowanych stron.",
  },
  de: {
    title: "Seitenblocker",
    languageLabel: "Sprache:",
    loadFromUrlLabel: "Liste von URL laden",
    addManuallyLabel: "Seiten manuell hinzufügen",
    urlLabel: "URL zur Liste der blockierten Seiten:",
    manualSitesLabel: "Seiten manuell hinzufügen (durch Komma getrennt):",
    loadListButton: "Liste laden",
    addManualSitesButton: "Seiten hinzufügen",
    refreshRulesButton: "Regeln aktualisieren",
    currentSitesLabel: "Aktuell blockierte Seiten:",
    statusLoading: "Liste wird geladen...",
    statusLoaded: (count) => `${count} Seiten geladen!`,
    statusError: (error) => `Fehler: ${error}`,
    statusAdded: (count) => `${count} Seiten hinzugefügt!`,
    statusRulesRefreshed: "Regeln aktualisiert!",
    statusEmpty: "Keine blockierten Seiten.",
  },
  zh: {
    title: "网站屏蔽工具",
    languageLabel: "语言：",
    loadFromUrlLabel: "从网址加载列表",
    addManuallyLabel: "手动添加网站",
    urlLabel: "被屏蔽网站列表的网址：",
    manualSitesLabel: "手动添加网站（用逗号分隔）：",
    loadListButton: "加载列表",
    addManualSitesButton: "添加网站",
    refreshRulesButton: "刷新规则",
    currentSitesLabel: "当前屏蔽的网站：",
    statusLoading: "正在加载列表...",
    statusLoaded: (count) => `已加载 ${count} 个网站！`,
    statusError: (error) => `错误：${error}`,
    statusAdded: (count) => `已添加 ${count} 个网站！`,
    statusRulesRefreshed: "规则已更新！",
    statusEmpty: "没有屏蔽的网站。",
  },
  ru: {
    title: "Блокировщик сайтов",
    languageLabel: "Язык:",
    loadFromUrlLabel: "Загрузить список из ссылки",
    addManuallyLabel: "Добавить сайты вручную",
    urlLabel: "Ссылка на список заблокированных сайтов:",
    manualSitesLabel: "Добавить сайты вручную (через запятую):",
    loadListButton: "Загрузить список",
    addManualSitesButton: "Добавить сайты",
    refreshRulesButton: "Обновить правила",
    currentSitesLabel: "Текущие заблокированные сайты:",
    statusLoading: "Загрузка списка...",
    statusLoaded: (count) => `Загружено ${count} сайтов!`,
    statusError: (error) => `Ошибка: ${error}`,
    statusAdded: (count) => `Добавлено ${count} сайтов!`,
    statusRulesRefreshed: "Правила обновлены!",
    statusEmpty: "Нет заблокированных сайтов.",
  },
  fr: {
    title: "Bloqueur de Sites",
    languageLabel: "Langue :",
    loadFromUrlLabel: "Charger la liste depuis une URL",
    addManuallyLabel: "Ajouter des sites manuellement",
    urlLabel: "URL de la liste des sites bloqués :",
    manualSitesLabel: "Ajouter des sites manuellement (séparés par des virgules) :",
    loadListButton: "Charger la liste",
    addManualSitesButton: "Ajouter des sites",
    refreshRulesButton: "Actualiser les règles",
    currentSitesLabel: "Sites actuellement bloqués :",
    statusLoading: "Chargement de la liste...",
    statusLoaded: (count) => `${count} sites chargés !`,
    statusError: (error) => `Erreur : ${error}`,
    statusAdded: (count) => `${count} sites ajoutés !`,
    statusRulesRefreshed: "Règles mises à jour !",
    statusEmpty: "Aucun site bloqué.",
  },
};

// Set language from storage or default to English
function setLanguage(lang) {
  const langData = translations[lang] || translations.en;
  for (const [id, text] of Object.entries(langData)) {
    const element = document.getElementById(id);
    if (element) {
      if (typeof text === 'function') {
        // Handle dynamic text (e.g., statusLoaded)
        continue;
      }
      element.textContent = text;
    }
  }
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['language'], (result) => {
    const lang = result.language || 'en';
    document.getElementById('languageSelect').value = lang;
    setLanguage(lang);
  });

  // Update language on select change
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    const lang = e.target.value;
    chrome.storage.sync.set({ language: lang });
    setLanguage(lang);
  });

  // Rest of your existing popup.js code...
  const statusEl = document.getElementById('status');
  const currentSitesEl = document.getElementById('currentSites');
  const urlGroup = document.getElementById('urlGroup');
  const manualGroup = document.getElementById('manualGroup');
  const sourceRadios = document.querySelectorAll('input[name="source"]');

  // Toggle between URL and manual input
  sourceRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'url') {
        urlGroup.style.display = 'flex';
        manualGroup.style.display = 'none';
      } else {
        urlGroup.style.display = 'none';
        manualGroup.style.display = 'flex';
      }
    });
  });

  // Load and display current sites
  function loadCurrentSites() {
    chrome.storage.sync.get(['blockedSites'], (result) => {
      const sites = result.blockedSites || [];
      if (sites.length === 0) {
        currentSitesEl.textContent = translations[document.getElementById('languageSelect').value]?.statusEmpty || translations.en.statusEmpty;
        currentSitesEl.classList.add('empty');
      } else {
        currentSitesEl.innerHTML = sites.map(site => `<div>${site}</div>`).join('');
        currentSitesEl.classList.remove('empty');
      }
    });
  }

  // Load list from URL
  document.getElementById('loadList').addEventListener('click', () => {
    const url = document.getElementById('listUrl').value;
    const lang = document.getElementById('languageSelect').value;
    statusEl.textContent = translations[lang]?.statusLoading || translations.en.statusLoading;

    fetch(url)
      .then(response => response.json())
      .then(sites => {
        chrome.storage.sync.set({ blockedSites: sites }, () => {
          statusEl.textContent = translations[lang]?.statusLoaded(sites.length) || translations.en.statusLoaded(sites.length);
          loadCurrentSites();
        });
      })
      .catch(error => {
        statusEl.textContent = translations[lang]?.statusError(error.message) || translations.en.statusError(error.message);
      });
  });

  // Add sites manually
  document.getElementById('addManualSites').addEventListener('click', () => {
    const manualSitesInput = document.getElementById('manualSites').value.trim();
    const lang = document.getElementById('languageSelect').value;

    if (!manualSitesInput) {
      statusEl.textContent = translations[lang]?.statusError("Please enter sites to block!") || translations.en.statusError("Please enter sites to block!");
      return;
    }

    const manualSites = manualSitesInput
      .split(',')
      .map(site => site.trim())
      .filter(site => site.length > 0)
      .map(site => `*://*.${site}/*`);

    chrome.storage.sync.set({ blockedSites: manualSites }, () => {
      statusEl.textContent = translations[lang]?.statusAdded(manualSites.length) || translations.en.statusAdded(manualSites.length);
      loadCurrentSites();
    });
  });

  // Refresh rules
  document.getElementById('refreshRules').addEventListener('click', () => {
    const lang = document.getElementById('languageSelect').value;
    chrome.runtime.sendMessage({ action: "refreshRules" }, () => {
      statusEl.textContent = translations[lang]?.statusRulesRefreshed || translations.en.statusRulesRefreshed;
    });
  });

  // Load current sites on startup
  loadCurrentSites();
});
