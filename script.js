document.addEventListener('DOMContentLoaded', ()=> {
    const btnToggle = document.querySelector('.navbar .mobile-menu-toggle');
    const menuItems = document.querySelector('.navbar .mobile-menu-items')

    btnToggle.addEventListener('click', ()=> {
        menuItems.classList.toggle('active')
    })

})