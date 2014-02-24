function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
};

function moveRandom(obj) {
    /* get container position and size
     * -- access method : cPos.top and cPos.left */
    var cPos = $('#contents').offset();
    var cHeight = $('#contents').height();
    var cWidth = $('#contents').width();
    
    // get box padding (assume all padding have same value)
    var pad = parseInt($('#contents').css('padding-top').replace('px', ''));
    
    // get movable box size
    var bHeight = obj.height();
    var bWidth = obj.width();
    
    // set maximum position
    maxY = cPos.top + cHeight - bHeight - pad;
    maxX = cPos.left + cWidth - bWidth - pad;
    
    // set minimum position
    minY = cPos.top + pad;
    minX = cPos.left + pad;
    
    // set new position            
    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);
    
    obj.animate({top: newY, left: newX}, 5000, function() {
        moveRandom(obj);
    });
};

$(document).ready(function () {
    $('.arti_game1_smallCircle').each(function () {
        moveRandom($(this));
    });
});
