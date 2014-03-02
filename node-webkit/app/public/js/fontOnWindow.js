$(document).ready(function() {
    scaleFont();
});
$(window).resize(function() {
    scaleFont();
});


function scaleFont() {
    var viewPortWidth = $(window).width();
    if (viewPortWidth >= 1900) {$('body').attr('class','extraWide');}
    else if (viewPortWidth >= 1400) {$('body').attr('class','wide');}
    else if (viewPortWidth >= 1000) {$('body').attr('class','');}
    else if (viewPortWidth >= 700) {$('body').attr('class','narrow');}
    else {$('body').attr('class','extraNarrow');}
}
