$(function () {
    
    var mixer = mixitup('.directions__list')
    
    $('.dirctions__filter-btn').on('click', function (){
        $('.dirctions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })
    
    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: true,
        speed: 500,
    })
    $('.team__slider-prev').on('click', function (e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        draggable: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
    })
    $('.testimonials__prev').on('click', function (e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__acc-link').on('click', function(e){
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })
    $('.program__acc-link').on('click', function(e){
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
            stopImmediatePropagation()
        }   
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).toggleClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
    })
    
    $('.header__nav-list a, .footer__go-top, .footer__top-list a, .button').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 400,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });

        return false;
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')===false){
            $('.burger').addClass('burger--follow')
        }
        else { 
            $('.burger').removeClass('burger--follow')
        }
    }, 0)
    
    $('.burger, .overlay').on('click', function (e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger__mid').toggleClass('burger__mid-hidden')
        $('.burger__top').toggleClass('burger__top-x')
        $('.burger__bot').toggleClass('burger__bot-x')
        $('body').toggleClass('body__noscroll       ')
    })
})