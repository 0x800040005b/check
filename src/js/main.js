document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('#header-burger'),
        menu__close = document.querySelector('#menu_close'),
        overlay = document.querySelector('.overlay'),
        headerMenu = document.querySelector('.header-menu'),
        body = document.querySelector('body'),
        menuContainer = document.querySelector('#header-menu'),
        button_order = document.querySelector('.header__button'),
        modal_form = document.querySelector('.popup-form'),
        modal_close = document.querySelector('.popup-close');
    if(button_order != null){
        button_order.addEventListener('hover',function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

        });
        button_order.addEventListener('click',function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            if(modal_form != null){
                modal_form.classList.toggle('active');
            }


        });
    }
    if(modal_close != null){
        modal_close.addEventListener('click', function(){
            if(modal_form != null){
                modal_form.classList.toggle('active');
            }

        });
    }
    if(menuContainer != null) {
        menuContainer.addEventListener('click', clickMenu);


        if (burger != null) {
            if (overlay != null && headerMenu != null && menu__close != null)
                burger.addEventListener('click', openAndCloseMenu);
        }

        if (menu__close != null) {
            menu__close.addEventListener('click', openAndCloseMenu);
        }
    }
    function openAndCloseMenu() {
        overlay.classList.toggle('active');
        headerMenu.classList.toggle('active');
        menu__close.classList.toggle('active');
        body.classList.toggle('lock');
    }

    function clickMenu(event) {
        let link = event.target;
        removeHoverMenu(link);
        if(screen.width <= 1220){
            openAndCloseMenu();

        }
    }

    function removeHoverMenu(link) {
        console.log('tap')
        link.addEventListener('hover', function (eventMenu) {
            eventMenu.preventDefault();
            eventMenu.stopImmediatePropagation();
        });


    }
});
