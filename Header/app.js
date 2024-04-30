document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('.header_nav');
    var burger = document.querySelector('.burger');

    if (window.innerWidth <= 768) {
        nav.style.visibility = 'hidden';
    }

    burger.addEventListener('click', function() {
        if (nav.style.visibility === 'hidden' || nav.style.visibility === '') {
            nav.style.visibility = 'visible';
        } else {
            nav.style.visibility = 'hidden';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 769) {
            nav.style.visibility = 'visible';
        } else {
            nav.style.visibility = 'hidden';
        }
    });
});