
$(function() {
	init_menu();
}); 

function init_menu()
{
	$('nav#mainmenu li.item').hover(
		function(){
			$(this).addClass('hover');
      $('.submenu').slideDown();
		},
		function(){
			$(this).removeClass('hover');
      $('.submenu').slideUp('fast');//.fadeOut('fast');
		}
  );
}
