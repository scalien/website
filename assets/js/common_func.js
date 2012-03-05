
$(document).ready(function() {
	init_menu();
}); 

var menuSlideUp = function() {
  if($(this).find('.submenu').length > 0) {
    $(this).find('.submenu').slideUp('fast', (function(that) {
      setTimeout(function() {
          $(that).removeClass('hover');
      }, 205);
    })(this));     
  } else {
    $(this).removeClass('hover')
  }
}

var menuSlideDown = function() {
  $(this).addClass('hover');
  if($(this).find('.submenu').length > 0) {
    $(this).parents('.item').addClass('hover');
    $(this).find('.submenu').slideDown('fast');
  }
}

function init_menu()
{
  var config = {    
     over: menuSlideDown,
     timeout: 40, 
     out: menuSlideUp 
  };
	$('nav#mainmenu li.item').hoverIntent(config);
}
