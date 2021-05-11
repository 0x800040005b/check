document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('#header-burger'),
        menu__close = document.querySelector('#menu_close'),
        overlay = document.querySelector('.overlay'),
        headerMenu = document.querySelector('.header-menu'),
        body = document.querySelector('body'),
        menuContainer = document.querySelector('#header-menu'),
        button_order = document.querySelector('.header__button');
    if(button_order != null){
        button_order.addEventListener('hover',function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

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
