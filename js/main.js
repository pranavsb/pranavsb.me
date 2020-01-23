$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $('.main_tab').css('color', 'white');
});


$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        $('.main_tab').css('color', '#d9ddff');
        $('#main_logo').css('color', '#d9ddff');
    } else {
        $('.nav').removeClass('affix');
        $('.main_tab').css('color', 'black');
        $('#main_logo').css('color', 'black');
    }
    });