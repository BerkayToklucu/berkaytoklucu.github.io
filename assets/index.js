document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
  
    const toggleTheme = () => {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      }
      updateIconVisibility();
    };
  
    const updateIconVisibility = () => {
      const lightIcon = document.querySelector('.theme-icon.light-icon');
      const darkIcon = document.querySelector('.theme-icon.dark-icon');
  
      if (body.classList.contains('dark-theme')) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
      } else {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
      }
    };
  
    updateIconVisibility();
  
    themeToggle.addEventListener('click', toggleTheme);
  
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
  
    const toggleMenu = () => {
      menu.classList.toggle('hidden');
    };
  
    menuToggle.addEventListener('click', toggleMenu);
  });
  