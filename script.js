const toggleSwitch = document.getElementById('themeSwitch');

toggleSwitch.addEventListener('change', () => {
  const theme = toggleSwitch.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// Restore saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggleSwitch.checked = savedTheme === 'dark';
}
