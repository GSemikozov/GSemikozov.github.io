/*========= vanilla box activate ===========*/
$(document).ready(function() {
    $('a.vanilla').vanillabox();
    $('a.vanilla2').vanillabox();
});

/*=========== transition anchor ============*/
$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});