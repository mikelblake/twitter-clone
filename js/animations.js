$(document).ready(function() { 

$('#tweet-controls').hide();

$('#tweet-content textarea').click(function(){
	$('#tweet-controls').show();
	$(this).height($(this).height() * 2);
})

$('.tweet-compose').keyup(function(){
	var maxCount = 140;
	var count = maxCount - $('.tweet-compose').val().length;
	$('#char-count').html(count);
	if (count <= 10) {
		$('#char-count').css("color", "#d40d12");
	}

	if(count <= 0 ) {
		 $('.button').prop('disabled', true);
	}
})

// If backspace -- still red


// From stackoverflow
// maxCharacters = 140;

// $('#char-count').text(maxCharacters);

// $('textarea').bind('keyup keydown', function() {
//     var count = $('#char-count');
//     var characters = $(this).val().length;
//    	count.text(maxCharacters - characters);
// });

$('.tweet-compose button').click(function(){
	
})

});
