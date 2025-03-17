document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('active');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
    
    const menuItems = document.querySelectorAll('.menu-link');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  });