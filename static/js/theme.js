(() => {
    const savedTheme = localStorage.getItem("civic-vote-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = savedTheme || preferredTheme;

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector("[data-theme-toggle]");
        const icon = document.querySelector("[data-theme-icon]");

        const applyTheme = (nextTheme) => {
            document.body.dataset.bsTheme = nextTheme;
            toggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`);
            icon.className = `bi ${nextTheme === "dark" ? "bi-sun" : "bi-moon-stars"}`;
            localStorage.setItem("civic-vote-theme", nextTheme);
        };

        applyTheme(theme);
        toggle.addEventListener("click", () => {
            applyTheme(document.body.dataset.bsTheme === "dark" ? "light" : "dark");
        });
    });
})();