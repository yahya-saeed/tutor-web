document.addEventListener('DOMContentLoaded', ()=> {
    const btnToggle = document.querySelector('.navbar .mobile-menu-toggle');
    const menuItems = document.querySelector('.navbar .mobile-menu-items')

    btnToggle.addEventListener('click', ()=> {
        menuItems.classList.toggle('active')
    })

})

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
  
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });