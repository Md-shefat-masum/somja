/************* Custom Js File *******************************

    Template Name: Portfolio Template
    Author: shefat production
    Version: 1.0
    Copyright 2018
    
*************************************************************/


/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - smooth scroll
02 - scroll js nav bar, comes after scrolling
03 - Skills Progress Bars
04 - Light box js
05 - port-folio part sliding  js
06 - back to top button js
07 - wow activation  js


--------------------------------------------------------------------------------*/


$(function () {

    "use strict";
    // boot strap better nav

    var body = $('body');
    var navbarCollapse = $('.navbar-collapse');
    body.append('<div class="side-menu-overlay"></div>');
    var overlay = $('.side-menu-overlay');
    body.append('<div id="side-menu"></div>');
    var sideMenu = $('#side-menu');
    sideMenu.append('<button class="close"><span aria-hidden="true">×</span></button>')
    var sideMenuCloseBtn = sideMenu.find('.close');
    sideMenu.append('<div class="contents"></div>')
    var sideMenuContents = sideMenu.find('.contents');
    navbarCollapse.on('show.bs.collapse', function (e) {
        e.preventDefault();
        var menuContent = $(this).html();
        sideMenuContents.html(menuContent);
        slideIn()
    });
    sideMenuCloseBtn.on('click', function (e) {
        e.preventDefault();
        slideOut()
    });
    overlay.on('click', function (e) {
        slideOut()
    });
    $(window).resize(function () {
        if (!navbarCollapse.is(":visible") && body.hasClass('side-menu-visible')) {
            sideMenu.show();
            overlay.show()
        } else {
            sideMenu.hide();
            overlay.hide()
        }
    });

    function slideIn() {
        body.addClass('overflow-hidden');
        sideMenu.show();
        setTimeout(function () {
            body.addClass('side-menu-visible');
            overlay.fadeIn()
        }, 50)
    }

    function slideOut() {
        body.removeClass('side-menu-visible');
        overlay.fadeOut();
        setTimeout(function () {
            sideMenu.hide();
            body.removeClass('overflow-hidden')
        }, 400)
    }


    /*-------------------------------------
    wow activation  js
-------------------------------------*/
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();

    //    testimonial slider

    $('.testi').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


});



/*
*
*
*
*


*
*
*/
