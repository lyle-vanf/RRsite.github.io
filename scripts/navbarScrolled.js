$(window).scroll(function() {
    $(document.getElementsByClassName('nav')).toggleClass('scrolled', $(this).scrollTop() > 50);
    $(document.getElementsByClassName('dropdown-recolor')).toggleClass('scrolled', $(this).scrollTop() > 50);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});