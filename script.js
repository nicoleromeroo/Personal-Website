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

document.querySelector('.projects-link').addEventListener('click', () => {
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.experience-link').addEventListener('click', () => {
  document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.home-link').addEventListener('click', () => {
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.about-link').addEventListener('click', () => {
  document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
});