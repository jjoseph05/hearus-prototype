//= require_tree .
$(document).ready(function(){
  
	$('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
  });
	
	$('#toggle').click(function(event){
		event.preventDefault();
	$(this).next().toggleClass('visible')
	});
});


