$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    //slide-up
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
    });

    // Toggle meny btn
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    // Typing animation home
    let typed = new Typed(".typing", {
        strings: ["Software Engineer.", "Programmer.", "Game Developer.", "3D-artist."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed2 = new Typed(".typing2", {
        strings: ["Software Engineer.", "Programmer.", "Game Developer.", "3D-artist."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // Gallery

    // Toggle meny btn
    $(".filter-button").click(function () {
        const value = $(this).attr('data-filter');
        $(this).addClass("active").siblings().removeClass();
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    $(".carousel").owlCarousel({
        margin: 10,
        loop: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});
