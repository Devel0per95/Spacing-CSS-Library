/*
    *Sliding Menu (2019)
    --! MIT License !--
    -- Made By Khaled Mneimneh --
    Github Link https://github.com/Devel0per95/Useful-CSS-Library

    =======================
    Required Libraries:
    =======================
    - JQuery
    - Bootstrap
    - fontawesome
    =======================
*/

// Variables
const $slidingMenu = $(".sliding-menu")
const $open = $(".trigger_open .open")
const $close = $(".sliding-menu .trigger_close .close")

// Functions

// Open
const openHandler = () => {
    $open.on('click', () => {
        $slidingMenu.removeClass('animated slideOutUp').fadeOut(1);
        $slidingMenu.addClass('animated fadeIn');
    });
};

// Close
const closeHandler = () => {
    $close.on('click', () => {
        $slidingMenu.removeClass('animated fadeIn').fadeOut(1);
        $slidingMenu.addClass('animated slideOutUp').fadeOut(1000);
    });
};

// Function Calling
openHandler();
closeHandler();