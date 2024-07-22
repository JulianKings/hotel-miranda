const menuIcon = document.querySelector('.header__content__menu');
const menuContainer = document.querySelector('.header__navlist');

menuIcon.addEventListener('click', (event) => alternateMenu(event.target));
menuIcon.addEventListener('blur', (event) => {
    const target = event.target;
 
    if(target.getAttribute('data-open-menu') && target.getAttribute('data-open-menu') === 'open')
    {
        target.src = './assets/menu.png';
        target.setAttribute('data-open-menu', 'closed');
 
        menuContainer.classList.toggle('header__navlist--open', false);
    }
});

function alternateMenu(target)
{
    if(target.getAttribute('data-open-menu') && target.getAttribute('data-open-menu') === 'open')
    {
        target.src = './assets/menu.png';
        target.setAttribute('data-open-menu', 'closed');
        menuContainer.classList.toggle('header__navlist--open', false);
    } else {
        target.src = './assets/cross.png';
        target.setAttribute('data-open-menu', 'open');
        menuContainer.classList.toggle('header__navlist--open', true);
    }
}