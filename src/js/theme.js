const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const storie = {
  STORAGE_KEY: 'color-theme',
  FALSE: 'false',
  TRUE: 'true',
};

const refs = {
  getBodyEl: document.querySelector('body'),
  getInputId: document.getElementById('theme-switch-toggle'),
  colorTheme: localStorage.getItem(storie.STORAGE_KEY),
};

refs.getBodyEl.classList.add(theme.LIGHT);

refs.getInputId.addEventListener('change', onChange);

if (refs.colorTheme === storie.TRUE) {
  refs.getBodyEl.classList.add(theme.LIGHT);
}

if (refs.colorTheme === storie.FALSE) {
  refs.getBodyEl.classList.remove(theme.LIGHT);
  refs.getBodyEl.classList.add(theme.DARK);
  refs.getInputId.checked = storie.TRUE;
}

function onChange() {
  refs.getBodyEl.classList.toggle(theme.LIGHT);
  refs.getBodyEl.classList.toggle(theme.DARK);

  return checkTheme();
}

function checkTheme() {
  const isLight = refs.getBodyEl.classList.contains(theme.LIGHT);
  localStorage.setItem(storie.STORAGE_KEY, isLight);
}
