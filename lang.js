// Save & load language preference with localStorage
function setLanguage(lang, contentMap, elementId) {
  localStorage.setItem("preferredLang", lang);
  document.getElementById(elementId).innerHTML = contentMap[lang];
}

function initLanguage(contentMap, elementId) {
  const langSelect = document.getElementById("language");
  const savedLang = localStorage.getItem("preferredLang") || "en";

  // Set dropdown value
  langSelect.value = savedLang;

  // Apply saved language text
  document.getElementById(elementId).innerHTML = contentMap[savedLang];

  // Update on change
  langSelect.addEventListener("change", () => {
    setLanguage(langSelect.value, contentMap, elementId);
  });
}
