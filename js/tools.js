$(document).ready(function() {

    $('.main-examples-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: false,
        dots: true
    });

    $('.main-examples-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.main-examples-menu ul li.active').removeClass('active');
            curLi.addClass('active');

            var curIndex = $('.main-examples-menu ul li').index(curLi);
            $('.main-examples-group.active').removeClass('active');
            $('.main-examples-group').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

});