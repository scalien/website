
$(function() {
	init_menu();
}); 

function init_menu()
{
	$('nav#mainmenu li.item').hover(
		function(){
			$(this).addClass('hover');
      $(this).find('.submenu').slideDown();
		},
		function(){
      if($(this).find('.submenu').length > 0) {
        $(this).find('.submenu').slideUp('fast', (function(that) {
          setTimeout(function() {$(that).removeClass('hover')}, 200);
        })(this));
      } else {
        $(this).removeClass('hover')
      }
		}
  );
}
