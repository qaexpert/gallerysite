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


function translateText() {
    var text = document.getElementById("text-to-translate").innerHTML;
    var targetLang = document.getElementById("language-selector").value;
    if (targetLang === "") {
        return;
    }
    var url = "/translate?text=" + encodeURIComponent(text) + "&target=" + targetLang;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("text-to-translate").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

document.getElementById("language-selector").addEventListener("change", translateText);
