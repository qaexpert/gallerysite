function updateLanguage() {
    let languageSelector = document.getElementById("language-selector");
    let selectedLanguage = document.getElementById("selected-language");
    let selectedFlag = languageSelector.options[languageSelector.selectedIndex].getAttribute("data-flag");
    let languageFlag = document.getElementById("language-flag");
    languageFlag.src = selectedFlag;
    if (languageSelector.value === "") {
        selectedLanguage.textContent = "Выбрать язык";
    } else {
        selectedLanguage.textContent = languageSelector.options[languageSelector.selectedIndex].textContent;
        languageSelector.value = "";
    }
}
