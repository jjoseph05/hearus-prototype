//= require_tree .
$(document).ready(function(){
	$('#toggle').click(function(event){
		event.preventDefault();
	$(this).next().toggleClass('visible')
	});
});


