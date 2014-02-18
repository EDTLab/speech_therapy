function randomFromTo(from, to){
	return Math.floor(Math.random() * (to - from + 1) + from);
}

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
	
	obj.animate({
		top: newY,
		left: newX
		}, 5000, function() {
  moveRandom(obj);
	});
}
$('.arti_game1_smallCircle').each(function() {
moveRandom($(this));
});

// 수정 사항
// 원이 중앙에서 시작하도록.
// 큰 원 중심에서 작은 원 중심으로 항상 선을 이어줌
// 가능하면 큰 원 뒤에는 작은 원이 배치되지 않도록