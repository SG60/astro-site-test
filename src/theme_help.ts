const storageKey = "theme-preference";

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

const setColorPreference = (preference: "dark" | "light") => {
  localStorage.setItem(storageKey, preference);
  if (preference === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export { getColorPreference, setColorPreference };
