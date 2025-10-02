// Sprawdzanie czy urządzenie jest mobilne
function zadzwon() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = "tel:+48123456789";
    } else {
        alert("Niestety funkcja dzwonienia jest dostępna tylko na urządzenia mobilne.");
    }
}

// Zmiana motywu
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

window.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
        themeToggle.checked = true;
        body.classList.toggle("bodyDark", themeToggle.checked);
        body.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
    }
});

themeToggle.addEventListener('change', function () {
    localStorage.setItem("theme", themeToggle.checked);
    body.classList.toggle("bodyDark", themeToggle.checked);
    body.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
});

// Tłumaczenie strony
function translateTo(lang) {
    var googleSelect = document.querySelector("select.goog-te-combo");
    if (!googleSelect) {
        // jeśli select nie jest jeszcze gotowy, spróbuj ponownie po 200ms
        setTimeout(() => translateTo(lang), 200);
        return;
    }
    googleSelect.value = lang;
    googleSelect.dispatchEvent(new Event("change"));
}
window.addEventListener('load', function () {
    var script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    // automatyczne przetłumaczenie na angielski, jeśli select jest gotowy
    translateTo('en');
});
const languageSelect = document.getElementById('language');
languageSelect.addEventListener('change', function () {
    translateTo(this.value);
});
