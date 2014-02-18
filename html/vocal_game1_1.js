(function(){
	var words = ['3', '2', '1', 'Start!'],
		i = 0;

	var interv = setInterval(function(){
		$('#game1_1_count').fadeOut(function(){
			$(this).html(words[i=(i+1)%words.length]).fadeIn();
		});
	}, 1200);

	setTimeout(function() {
		clearInterval(interv);
		setTimeout(function() {
			$('#game1_1_count').fadeOut(200);
		}, 1500)
	}, (words.length-1)*1200);
})();