const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const toggle = document.getElementById("theme-toggle");
const preference = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => document.documentElement.dataset.theme
  ? document.documentElement.dataset.theme === "dark"
  : preference.matches;
function updateThemeLabel() {
  if (!toggle) return;
  toggle.textContent = isDark() ? "Hell" : "Dunkel";
  toggle.setAttribute("aria-label", isDark() ? "Helle Darstellung aktivieren" : "Dunkle Darstellung aktivieren");
}
if (toggle) toggle.addEventListener("click", () => {
  document.documentElement.dataset.theme = isDark() ? "light" : "dark";
  updateThemeLabel();
});
preference.addEventListener("change", updateThemeLabel);
updateThemeLabel();
// Theme override lasts only for this page. No cookie, storage or network request.
