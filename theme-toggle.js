const THEME_STORAGE_KEY = "paul-mcclure-theme";
const CONTRAST_THEME = "contrast";

function syncThemeButtons(isContrastEnabled) {
    const themeButtons = document.querySelectorAll("[data-theme-toggle]");

    themeButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(isContrastEnabled));

        const stateLabel = button.querySelector(".theme-toggle-state");
        if (stateLabel) {
            stateLabel.textContent = isContrastEnabled ? "On" : "Off";
        }
    });
}

function applyTheme(themeName) {
    const isContrastEnabled = themeName === CONTRAST_THEME;

    if (isContrastEnabled) {
        document.documentElement.setAttribute("data-theme", CONTRAST_THEME);
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    syncThemeButtons(isContrastEnabled);
}

function getSavedTheme() {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
        return null;
    }
}

function saveTheme(themeName) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, themeName);
    } catch (error) {
        return;
    }
}

function toggleTheme() {
    const isContrastEnabled = document.documentElement.getAttribute("data-theme") === CONTRAST_THEME;
    const nextTheme = isContrastEnabled ? "default" : CONTRAST_THEME;

    applyTheme(nextTheme);
    saveTheme(nextTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme === CONTRAST_THEME ? CONTRAST_THEME : "default");

    const themeButtons = document.querySelectorAll("[data-theme-toggle]");
    themeButtons.forEach((button) => {
        button.addEventListener("click", toggleTheme);
    });
});